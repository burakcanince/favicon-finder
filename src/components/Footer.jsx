import { DownloadIcon } from '../icons';

const Footer = ({ error, count, onDownloadAll }) => {
  if (count <= 1 && !error) return null;

  return (
    <footer className="px-[18px] pt-3 pb-4 bg-white border-t border-[#ECEBE8] flex flex-col gap-2">
      {error && (
        <div className="text-xs text-center font-medium text-red-700">{error}</div>
      )}
      {count > 1 && (
        <button
          type="button"
          onClick={onDownloadAll}
          className="h-[46px] rounded-xl bg-[#111] text-white text-sm font-semibold flex items-center justify-center gap-2.5 cursor-pointer transition-colors hover:bg-[#2A2A2E]"
        >
          <DownloadIcon />
          Download all
          <span className="text-xs font-medium bg-white/15 px-2 py-0.5 rounded-full">{count}</span>
        </button>
      )}
    </footer>
  );
};

export default Footer;
