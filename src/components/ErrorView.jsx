import Header from './Header';
import { LockIcon, AlertIcon } from '../icons';

const ErrorView = ({ error }) => (
  <>
    <Header />
    <div className="flex flex-col items-center justify-center text-center px-9 py-12 gap-4">
      <div className="w-14 h-14 rounded-2xl bg-white border border-[#ECEBE8] flex items-center justify-center shadow-[0_6px_18px_rgba(17,17,17,.05)]">
        {error.restricted ? <LockIcon /> : <AlertIcon />}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold tracking-[-0.01em]">
          {error.restricted ? 'This page can’t be scanned' : 'Something went wrong'}
        </h1>
        <p className="text-[13px] leading-[1.55] text-[#5B5A56]">
          {error.restricted
            ? 'Chrome doesn’t allow extensions on this page. Open any website and click the extension again.'
            : error.message}
        </p>
      </div>
      {error.pageUrl && (
        <span className="font-mono text-xs text-amber-800 bg-amber-100 px-2.5 py-[5px] rounded-lg">{error.pageUrl}</span>
      )}
    </div>
  </>
);

export default ErrorView;
