type Props = { className?: string };

export function ArrowIcon({ className }: Props) {
    return (
        <svg
            className={className} // для поворота стрелки
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}
