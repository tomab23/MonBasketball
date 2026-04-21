export function BasketballIcon({
  className,
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
    >
      {/* cercle */}
      <circle cx="50" cy="50" r="45" />

      {/* lignes basket */}
      <path d="M5 50h90" />
      <path d="M50 5v90" />
      <path d="M20 15c40 20 40 50 0 70" />
      <path d="M80 15c-40 20 -40 50 0 70" />
    </svg>
  )
}