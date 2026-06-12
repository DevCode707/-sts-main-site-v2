type IconProps = {
  className?: string;
};

export function HomeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2743 3.22313C10.5804 3.40263 10.7685 3.7309 10.7685 4.08575V9.78343C10.7685 10.3357 10.3208 10.7834 9.76849 10.7834H8.1921C7.63981 10.7834 7.1921 10.3357 7.1921 9.78343V7.04603C7.1921 6.49375 6.74438 6.04603 6.1921 6.04603H5.80784C5.25555 6.04603 4.80784 6.49375 4.80784 7.04603V9.78343C4.80784 10.3357 4.36012 10.7834 3.80784 10.7834H2.23145C1.67916 10.7834 1.23145 10.3357 1.23145 9.78343V4.08575C1.23145 3.7309 1.41949 3.40263 1.72559 3.22313L5.49411 1.0132C5.80648 0.830021 6.19346 0.83002 6.50582 1.0132L10.2743 3.22313Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
