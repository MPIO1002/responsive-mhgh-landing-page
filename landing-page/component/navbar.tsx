import React from 'react';
import Image from 'next/image';
import MobileMenu from './mobile-menu';

const Navbar = () => {
  const menuItems = [
    { name: 'TRANG CHỦ', icon: 'fas fa-home', href: '#' },
    { name: 'ĐIỀU KHOẢN', icon: 'fas fa-file-contract', href: '#' },
    { name: 'CỘNG ĐỒNG', icon: 'fas fa-users', href: '#' },
    { name: 'HỖ TRỢ', icon: 'fas fa-headset', href: '#' },
  ];

  return (
    <nav className="relative bg-gradient-to-r from-[#3f0c01] via-[#631405] to-[#3f0c01]">
      {/* Navbar Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Logo - Positioned to extend beyond navbar height */}
          <div className="flex-shrink-0 relative z-20">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={80}
              className="h-12 md:h-15 xl:h-30 w-auto relative top-0 md:top-0 xl:top-10 left-0 md:left-0 xl:left-20"
              priority
            />
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-baseline space-x-3 lg:space-x-6 xl:space-x-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white px-2 lg:px-3 py-2 text-xs md:text-sm lg:text-base xl:text-lg font-medium transition-colors duration-200 flex items-center space-x-1 lg:space-x-2 whitespace-nowrap"
                >
                  <i className={`${item.icon} text-xs md:text-sm text-gray-100`}></i>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Component (Client-side) */}
          <MobileMenu menuItems={menuItems} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;