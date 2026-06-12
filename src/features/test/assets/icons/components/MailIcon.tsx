type IconProps = {
  className?: string;
};

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 17 14"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.833984 3.33334L7.40948 7.71701C7.96932 8.09023 8.69865 8.09023 9.25848 7.71701L15.834 3.33334M2.50065 12.5H14.1673C15.0878 12.5 15.834 11.7538 15.834 10.8333V2.50001C15.834 1.57954 15.0878 0.833344 14.1673 0.833344H2.50065C1.58018 0.833344 0.833984 1.57954 0.833984 2.50001V10.8333C0.833984 11.7538 1.58018 12.5 2.50065 12.5Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
