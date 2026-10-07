const Icon = ({ children, size = 17, strokeWidth = 2, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const CopyIcon = () => (
  <Icon>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
  </Icon>
);

export const CheckIcon = () => (
  <Icon strokeWidth={2.4} className="text-green-700">
    <path d="M20 6 9 17l-5-5" />
  </Icon>
);

export const DownloadIcon = () => (
  <Icon>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </Icon>
);

export const ExternalLinkIcon = () => (
  <Icon size={16}>
    <path d="M14 4h6v6" />
    <path d="M10 14 20 4" />
    <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
  </Icon>
);

export const LockIcon = () => (
  <Icon size={24} className="text-amber-700">
    <rect x="4" y="10" width="16" height="11" rx="2.5" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <path d="M12 14.5v2.5" />
  </Icon>
);

export const AlertIcon = () => (
  <Icon size={24} className="text-red-700">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v5" />
    <path d="M12 16.5v.01" />
  </Icon>
);

export const SpinnerIcon = () => (
  <Icon size={12} strokeWidth={3} className="animate-spin">
    <path d="M21 12a9 9 0 1 1-6.2-8.6" />
  </Icon>
);
