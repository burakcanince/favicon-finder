import { ExternalLinkIcon } from '../icons';

const SiteCard = ({ site, faviconUrl }) => (
  <div className="mx-[18px] p-3 bg-white border border-[#ECEBE8] rounded-[14px] flex items-center gap-3">
    <div className="w-9 h-9 rounded-[10px] shrink-0 bg-white border border-[#ECEBE8] flex items-center justify-center overflow-hidden">
      {faviconUrl
        ? <img src={faviconUrl} alt={`${site.hostname} favicon`} className="w-6 h-6 object-contain" />
        : <span className="text-[15px] font-semibold uppercase">{site.hostname.charAt(0)}</span>}
    </div>
    <div className="flex flex-col gap-0.5 min-w-0 grow">
      <span className="text-sm font-semibold truncate">{site.hostname}</span>
      <span className="text-[11px] text-[#6B6A66] font-mono truncate">{site.origin}/</span>
    </div>
    <a
      href={site.origin}
      target="_blank"
      rel="noreferrer"
      aria-label="Open website"
      className="w-9 h-9 rounded-[10px] border border-[#ECEBE8] flex items-center justify-center text-[#6B6A66] shrink-0 transition-colors hover:bg-[#F1F0ED] hover:text-[#111]"
    >
      <ExternalLinkIcon />
    </a>
  </div>
);

export default SiteCard;
