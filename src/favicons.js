const ALLOWED_PROTOCOLS = ['http:', 'https:'];

const getFormat = (url) => {
  const extension = new URL(url).pathname.split('.').pop().toLowerCase();

  if (['ico', 'png', 'jpg', 'jpeg', 'svg', 'gif', 'webp'].includes(extension)) {
    return extension.toUpperCase();
  }

  if (url.includes('image/jpeg') || url.includes('image/jpg')) return 'JPG';
  if (url.includes('image/svg')) return 'SVG';
  if (url.includes('image/gif')) return 'GIF';
  if (url.includes('image/webp')) return 'WEBP';
  if (url.includes('image/x-icon') || url.includes('image/vnd.microsoft.icon')) return 'ICO';
  return 'PNG';
};

const loadFavicon = ({ url, source }) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () =>
      resolve(img.width && img.height
        ? { url, source, width: img.width, height: img.height, format: getFormat(url) }
        : null);
    img.onerror = () => resolve(null);
    img.src = url;
  });

function findFaviconsInPage() {
  return [...document.querySelectorAll('link[rel*="icon"]')]
    .filter((link) => link.href)
    .map((link) => ({ url: link.href, source: link.rel }));
}

export const getFavicons = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.url) {
    throw new Error('No active tab found');
  }

  const tabUrl = new URL(tab.url);
  const restrictedError = Object.assign(new Error('Favicons cannot be read on this page'), {
    restricted: true,
    pageUrl: tabUrl.host ? `${tabUrl.protocol}//${tabUrl.host}` : tabUrl.protocol,
  });

  if (!ALLOWED_PROTOCOLS.includes(tabUrl.protocol)) {
    throw restrictedError;
  }

  let pageFavicons;
  try {
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: findFaviconsInPage,
    });
    pageFavicons = result;
  } catch {
    throw restrictedError;
  }

  const allFavicons = [
    ...pageFavicons,
    { url: `${tabUrl.origin}/favicon.ico`, source: '/favicon.ico' },
  ];
  const unique = [...new Map(allFavicons.map((favicon) => [favicon.url, favicon])).values()];
  const loaded = (await Promise.all(unique.map(loadFavicon))).filter(Boolean);
  loaded.sort((a, b) => a.width * a.height - b.width * b.height);
  return { hostname: tabUrl.hostname, origin: tabUrl.origin, favicons: loaded };
};

export const downloadFavicon = (favicon) =>
  chrome.downloads.download({
    url: favicon.url,
    filename: `${favicon.width}x${favicon.height}.${favicon.format.toLowerCase()}`,
  });
