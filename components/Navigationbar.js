// components/NavigationBar.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navigationbar() {
  return (
    <div className="flex items-center justify-between w-full text-lg font-medium leading-9 text-center text-orange-50 max-w-[1476px] px-5 max-md:flex-wrap max-md:max-w-full">
        {/* Link to Home with LevelUp logo */}
        <Link href="/">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf21546417b806aeeeffda361a7d8c77a4d16b2dc3eae8f7059a2c37953764d7?"
            className="cursor-pointer shrink-0 my-auto max-w-full aspect-[4.76] w-[156px]"
            alt="LevelUp Logo"
          />
        </Link>

        {/* Centered navigation options */}
        <div className="flex-grow flex justify-center gap-5">
          <Link href="/challenges">
            <div className="cursor-pointer px-3 py-1 text-black">
              Challenges
            </div>
          </Link>
          <Link href="/content">
            <div className="cursor-pointer px-3 py-1 text-black">Content</div>
          </Link>
          <Link href="/podcast">
            <div className="cursor-pointer px-3 py-1 text-black">Podcast</div>
          </Link>
        </div>

        {/* Connect Wallet Button */}
        <Link href="/wallet">
          <div className="cursor-pointer justify-center px-3 py-1 bg-red-400 rounded-md">
            Connect Wallet
          </div>
        </Link>
      </div>
  );
}

export default Navigationbar;
