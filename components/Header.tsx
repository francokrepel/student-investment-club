import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import sic_logo from '../public/sic_logo.png';

const Header = () => {
  return (
    <header className="bg-black text-white py-6">
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-0">
        <Link className="flex items-center"href="/">
            <Image className="w-28 h-28 md:hidden" src={sic_logo} alt="" height={150} />
            <span className="text-2xl font-bold hidden md:block">Student Investment Club</span>
        </Link>
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/executive-board">
              Executive Board
            </Link>
          </li>
          <li>
            <Link href="/presentations">
              Presentations
            </Link>
          </li>
          <li>
            <Link href="/hall-of-fame">
              Hall of Fame
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
