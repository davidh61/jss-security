// This can now be a Server Component (no "use client" needed)
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo-white.png';
import { Phone } from 'lucide-react';

interface MenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Menu({ toggleMenu }: MenuProps) {
  return (
    <header className="text-white py-4 bg-blue-950">
      <div className="container mx-auto flex items-center justify-between">

        <div className="text-xl font-bold pl-4 md:pl-0">
            <Link href="/" className="hover:text-gray-300">
              <Image
                  src={Logo}
                  alt="Logo"
                  height={50}  
              />
            </Link>
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
            {/* <Link href="/services" className="hover:text-gray-300 h-5 mx-3">
                Services
            </Link> */}
            <Link href="#contact" className="hover:text-gray-300 h-5 mx-3 pr-10">
                <Phone />
            </Link>
        </nav>
      </div>
    </header>
  );
}