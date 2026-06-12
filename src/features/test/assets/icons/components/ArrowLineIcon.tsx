type IconProps = {
  className?: string;
};

export function ArrowLineIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 10.707L11 5.70703L6 0.707031M11 5.70703H0"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}
