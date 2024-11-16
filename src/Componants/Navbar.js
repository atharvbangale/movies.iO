/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => {
    return (
<nav className="bg-red-700 text-white p-4 rounded-b-full shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
  <div className="container mx-auto flex justify-center items-center">
    <a href="#" aria-label="Navigate to Movies.IO homepage" className="hover:text-gray-200">
      Movies.IO
    </a>
  </div>
</nav>

    
    );
    // eslint-disable-next-line no-unreachable
    return <nav>Navbar</nav>;
};


export default Navbar;
