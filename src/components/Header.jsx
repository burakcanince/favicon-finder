const Header = ({ badge }) => (
  <header className="flex items-center justify-between px-[18px] pt-4 pb-3">
    <div className="flex items-center gap-2.5">
      <img src="icons/icon48.png" alt="Website Favicon Finder logo" className="w-[30px] h-[30px]" />
      <div className="flex flex-col">
        <span className="text-[15px] font-semibold tracking-[-0.01em]">Website Favicon Finder</span>
        <span className="text-[11px] text-[#6B6A66]">Scan · Copy · Download</span>
      </div>
    </div>
    {badge && (
      <span className="flex items-center gap-1.5 text-xs font-medium text-indigo-800 bg-[#EEF0FF] px-2.5 py-[5px] rounded-full">
        {badge}
      </span>
    )}
  </header>
);

export default Header;
