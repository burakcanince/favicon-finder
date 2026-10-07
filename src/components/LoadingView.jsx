import Header from './Header';
import SectionLabel from './SectionLabel';
import { SpinnerIcon } from '../icons';

const LoadingView = () => (
  <>
    <Header badge={<><SpinnerIcon />Scanning</>} />
    <div className="mx-[18px] p-3 bg-white border border-[#ECEBE8] rounded-[14px] flex items-center gap-3">
      <div className="skeleton w-9 h-9 rounded-[10px] shrink-0" />
      <div className="flex flex-col gap-2 grow">
        <div className="skeleton w-32 h-3 rounded-md" />
        <div className="skeleton w-44 h-2.5 rounded-md" />
      </div>
    </div>
    <SectionLabel />
    <div className="px-[18px] pb-4 flex flex-col gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-3 p-2.5 bg-white border border-[#ECEBE8] rounded-[14px]">
          <div className="skeleton w-14 h-14 rounded-[10px] shrink-0" />
          <div className="flex flex-col gap-2 grow">
            <div className="skeleton w-[88px] h-3 rounded-md" />
            <div className="skeleton w-[140px] h-2.5 rounded-md" />
          </div>
          <div className="skeleton w-[86px] h-10 rounded-[10px] shrink-0" />
        </div>
      ))}
    </div>
  </>
);

export default LoadingView;
