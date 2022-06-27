import React from 'react';
import { Logo } from './Logo';

function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-900">
      <Logo />
    </header>
  );
}

export default Header;
