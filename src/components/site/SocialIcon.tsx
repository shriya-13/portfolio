import { Github, Mail } from "lucide-react";

/** Small brand marks for social links. */
export function SocialIcon({ label, className }: { label: string; className?: string }) {
  if (label.startsWith("LinkedIn")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.16-.02-2.64-1.61-2.64-1.61 0-1.86 1.26-1.86 2.56v4.92h-4v-11Z" />
      </svg>
    );
  }
  if (label.startsWith("X")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.57l11.1 14.43Z" />
      </svg>
    );
  }
  if (label.startsWith("GitHub")) return <Github className={className} aria-hidden />;
  return <Mail className={className} aria-hidden />;
}
