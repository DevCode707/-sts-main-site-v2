type IconProps = {
  className?: string;
};

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 1L9 5H6.5V9H3.5V5H1L5 1Z" fill="#22C55E" />
    </svg>
  );
}
