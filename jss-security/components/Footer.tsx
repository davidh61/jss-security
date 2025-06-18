import Image from 'next/image';
import Instagram from '../public/instagram-white-icon.svg';


export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center py-4">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.instagram.com/jss.securitysystemsltd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src={Instagram}
          alt="Instagram logo"
          width={32}
          height={32}
        />
      </a>

    </footer>
  );
}