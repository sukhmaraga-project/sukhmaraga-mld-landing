const paths: Record<string, React.ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  check: <path d="M5 12.5l4.2 4.2L19 7" />,
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  play: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M10 9.5v5l4.5-2.5L10 9.5z" />
    </>
  ),
  hands: (
    <>
      <path d="M7 11V6.5a1.5 1.5 0 013 0V11" />
      <path d="M10 10V5a1.5 1.5 0 013 0v5" />
      <path d="M13 10V6.5a1.5 1.5 0 013 0V13c0 4-2.5 7-6.5 7S4 17.5 4 14l-.5-2.5a1.5 1.5 0 012.8-1L7 12" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.5L7 21l5-2.5 5 2.5-1.5-7.5" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  steps: <path d="M4 18h5v-4h5v-4h6" />,
  focus: (
    <>
      <path d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  spark: <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path d="M10 9.5v5l4.5-2.5L10 9.5z" />
    </>
  ),
  tiktok: <path d="M14 3v11.5a3.5 3.5 0 11-3.5-3.5M14 3c.5 2.5 2.3 4.2 5 4.5" />,
  facebook: <path d="M14.5 8H13a1.5 1.5 0 00-1.5 1.5V21M9 13h6M14.5 3.5h-1.5a4 4 0 00-4 4" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3.5 6l8.5 7 8.5-7" />
    </>
  ),
  chat: <path d="M4 18.5l1.3-3.6A7.5 7.5 0 1112 19.5a7.6 7.6 0 01-3.6-.9L4 18.5z" />,
  pin: (
    <>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0113 0c0 5-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
};

export function Icon({ name, className = "h-5 w-5" }: { name: keyof typeof paths | string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
