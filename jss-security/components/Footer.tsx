import { Instagram } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center py-4 bg-blue-950">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 "
        href="https://www.instagram.com/jss.securitysystemsltd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram
          width={32}
          height={32}
        />
      </a>
    </footer>
  );
}