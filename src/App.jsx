import { useState, useEffect, useRef } from 'react';
import { getFavicons, downloadFavicon } from './favicons';
import Header from './components/Header';
import SectionLabel from './components/SectionLabel';
import LoadingView from './components/LoadingView';
import ErrorView from './components/ErrorView';
import SiteCard from './components/SiteCard';
import FaviconRow from './components/FaviconRow';
import EmptyState from './components/EmptyState';
import Footer from './components/Footer';

const App = () => {
  const [favicons, setFavicons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [site, setSite] = useState({ hostname: '', origin: '' });
  const [copiedUrl, setCopiedUrl] = useState(null);
  const [actionError, setActionError] = useState(null);
  const actionErrorTimer = useRef();
  const copiedTimer = useRef();

  useEffect(() => {
    getFavicons()
      .then(({ hostname, origin, favicons }) => {
        setSite({ hostname, origin });
        setFavicons(favicons);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const showActionError = (text) => {
    setActionError(text);
    clearTimeout(actionErrorTimer.current);
    actionErrorTimer.current = setTimeout(() => setActionError(null), 2500);
  };

  const handleDownload = (favicon) => {
    downloadFavicon(favicon).catch((err) => showActionError(`Download failed: ${err.message}`));
  };

  const handleCopy = async (favicon) => {
    try {
      await navigator.clipboard.writeText(favicon.url);
      setCopiedUrl(favicon.url);
      clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopiedUrl(null), 1500);
    } catch (err) {
      showActionError(`Failed to copy URL: ${err.message}`);
    }
  };

  const handleDownloadAll = () => {
    favicons.forEach(handleDownload);
  };

  const siteFaviconUrl = favicons[favicons.length - 1]?.url;

  return (
    <div className="w-[400px] max-h-[600px] flex flex-col bg-[#FAFAF9] text-[#111] font-sans overflow-hidden">
      {loading ? (
        <LoadingView />
      ) : error ? (
        <ErrorView error={error} />
      ) : (
        <>
          <Header badge={`${favicons.length} found`} />
          <SiteCard site={site} faviconUrl={siteFaviconUrl} />
          <SectionLabel />

          <div className="max-h-[336px] overflow-y-auto mx-[18px] mb-3 flex flex-col gap-2">
            {favicons.length > 0 ? (
              favicons.map((favicon) => (
                <FaviconRow
                  key={favicon.url}
                  favicon={favicon}
                  copied={copiedUrl === favicon.url}
                  onCopy={() => handleCopy(favicon)}
                  onDownload={() => handleDownload(favicon)}
                />
              ))
            ) : (
              <EmptyState />
            )}
          </div>

          <Footer error={actionError} count={favicons.length} onDownloadAll={handleDownloadAll} />
        </>
      )}
    </div>
  );
};

export default App;
