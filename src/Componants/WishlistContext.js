import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(['Inception', 'Avatar', 'The Dark Knight']);

  const addToWishlist = (movieTitle) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.includes(movieTitle)) {
        return [...prevWishlist, movieTitle];
      }
      return prevWishlist; 
    });
  };

  const removeFromWishlist = (index) => {
    setWishlist((prevWishlist) => prevWishlist.filter((_, i) => i !== index));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
