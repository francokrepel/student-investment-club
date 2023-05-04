import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import sic_logo from '../public/sic_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white py-6">
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-0">
        <Link className="flex items-center" href="/">
          <Image className="w-28 h-28 md:hidden" src={sic_logo} alt="" height={150} />
          <span className="text-2xl font-bold hidden md:block">Student Investment Club</span>
        </Link>
        <div className="relative md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
          <ul className={`flex flex-col items-start absolute top-full right-0 mt-4 bg-black text-white rounded-md shadow-lg p-4 space-y-4 ${isMenuOpen ? '' : 'hidden'} md:flex md:space-y-0 md:space-x-6 md:p-0 md:bg-transparent md:shadow-none md:relative md:top-auto md:left-auto md:flex-row`}>
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
        </div>
        <ul className="hidden md:flex items-center space-x-6">
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