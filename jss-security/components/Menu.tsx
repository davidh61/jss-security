// This can now be a Server Component (no "use client" needed)
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo-white.png';
import Burger from '../public/burger.svg';

interface MenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Menu({ isMenuOpen, toggleMenu }: MenuProps) {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">

        <div className="text-xl font-bold pl-4 md:pl-0">
            <a href="/" className="hover:text-gray-300">
            <Image
                src={Logo}
                alt="Logo"
                height={50}  
            />
            </a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Open Menu"
        >
            {/* <Image
                src={Burger}
                alt="Logo"
                height={50}  
            /> */}
        </button>

        {/* Menu Options */}
        <nav className={`md:block block`}>
            <Link href="/about" className="hover:text-gray-300 h-5 mx-3">
                About
            </Link>
            <Link href="/services" className="hover:text-gray-300 h-5 mx-3">
                Services
            </Link>
            <Link href="/contact" className="hover:text-gray-300 h-5 mx-3">
                Contact
            </Link>
        </nav>
      </div>
    </header>
  );
}