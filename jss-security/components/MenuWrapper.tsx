"use client";

import { useState } from 'react';
import Menu from './Menu';

export default function MenuWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(true);
  };

  return <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />;
}