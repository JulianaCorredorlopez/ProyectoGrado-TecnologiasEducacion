function IconBase({ children, className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const Icons = {
  Sparkles: (props) => (
    <IconBase {...props}>
      <path d="M12 3l1.4 4.4L18 9l-4.6 1.6L12 15l-1.4-4.4L6 9l4.6-1.6L12 3z" />
      <path d="M19 14l.7 2.1L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-.9L19 14z" />
    </IconBase>
  ),

  Scan: (props) => (
    <IconBase {...props}>
      <path d="M4 8V5a1 1 0 011-1h3" />
      <path d="M16 4h3a1 1 0 011 1v3" />
      <path d="M20 16v3a1 1 0 01-1 1h-3" />
      <path d="M8 20H5a1 1 0 01-1-1v-3" />
      <path d="M7 12h10" />
      <path d="M9 9h6M9 15h6" />
    </IconBase>
  ),

  Brain: (props) => (
    <IconBase {...props}>
      <path d="M9 4a3 3 0 00-3 3v1a3 3 0 000 6v1a3 3 0 003 3" />
      <path d="M15 4a3 3 0 013 3v1a3 3 0 010 6v1a3 3 0 01-3 3" />
      <path d="M9 4v14M15 4v14" />
    </IconBase>
  ),

  Cpu: (props) => (
    <IconBase {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
      <rect x="10" y="10" width="4" height="4" rx="1" />
    </IconBase>
  ),

  Gamepad: (props) => (
    <IconBase {...props}>
      <path d="M7 10h10a4 4 0 014 4v2a3 3 0 01-5.2 2L14 16h-4l-1.8 2A3 3 0 013 16v-2a4 4 0 014-4z" />
      <path d="M8 13v3M6.5 14.5h3" />
      <path d="M16 14h.01M18 16h.01" />
    </IconBase>
  ),

  Users: (props) => (
    <IconBase {...props}>
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.8" />
    </IconBase>
  ),

  School: (props) => (
    <IconBase {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V9l7-4 7 4v12" />
      <path d="M9 21v-6h6v6" />
    </IconBase>
  ),

  Layers: (props) => (
    <IconBase {...props}>
      <path d="M12 2l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </IconBase>
  ),

  Play: (props) => (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8l6 4-6 4V8z" />
    </IconBase>
  ),

  Qr: (props) => (
    <IconBase {...props}>
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
      <path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" />
    </IconBase>
  ),

  Chevron: (props) => (
    <IconBase {...props}>
      <path d="M9 18l6-6-6-6" />
    </IconBase>
  ),
};