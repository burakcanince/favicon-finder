import { CopyIcon, CheckIcon, DownloadIcon } from '../icons';

const iconButtonClass = 'w-10 h-10 rounded-[10px] border border-[#ECEBE8] bg-white text-[#4A4945] flex items-center justify-center cursor-pointer transition-colors hover:bg-[#F1F0ED] hover:border-[#DAD8D3] hover:text-[#111]';

const FaviconRow = ({ favicon, copied, onCopy, onDownload }) => (
  <div className="flex items-center gap-3 p-2.5 bg-white border border-[#ECEBE8] rounded-[14px] transition-[border-color,box-shadow] hover:border-[#DAD8D3] hover:shadow-[0_4px_14px_rgba(17,17,17,.06)]">
    <div className="w-14 h-14 rounded-[10px] shrink-0 bg-white border border-[#ECEBE8] flex items-center justify-center overflow-hidden">
      <img
        className="max-w-10 max-h-10 object-contain"
        src={favicon.url}
        alt={`Favicon ${favicon.width}x${favicon.height}`}
      />
    </div>
    <div className="flex flex-col gap-1.5 grow min-w-0">
      <span className="font-mono text-sm font-semibold">{favicon.width} × {favicon.height}</span>
      <div className="flex items-center gap-1.5 min-w-0">
        <span className="text-[10px] font-semibold tracking-[0.04em] text-indigo-800 bg-[#EEF0FF] px-[7px] py-[3px] rounded-md shrink-0">
          {favicon.format}
        </span>
        <span className="text-[11px] text-[#6B6A66] truncate" title={favicon.url}>{favicon.source}</span>
      </div>
    </div>
    <div className="flex gap-1.5 shrink-0">
      <button type="button" className={iconButtonClass} aria-label="Copy icon URL" onClick={onCopy}>
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
      <button type="button" className={iconButtonClass} aria-label="Download icon" onClick={onDownload}>
        <DownloadIcon />
      </button>
    </div>
  </div>
);

export default FaviconRow;
