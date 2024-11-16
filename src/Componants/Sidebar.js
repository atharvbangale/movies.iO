/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Sidebar() {
  const [query, setQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true); 
  const [isDarkMode, setIsDarkMode] = useState(true); 
  const [searchHistory, setSearchHistory] = useState([]); 
  const navigate = useNavigate(); 

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && query && !searchHistory.includes(query)) {
      setSearchHistory([query, ...searchHistory]);
      setQuery(''); 
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {

    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
  
      <div
        className={`w-64 p-4 border-r border-black transition-all ${sidebarOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
      >
        <div className="p-1 h-16 w-16 -mx-10 -my-10 flex justify-start bg-red-600 rounded-full"></div>
        <div className="p-1 h-20 w-3 flex justify-end bg-red-600 rounded-full"></div>

        <div className="flex justify-center mb-6 my-10">
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            onKeyDown={handleSearchSubmit} 
            className="px-4 py-2 my-3 w-full max-w-xs text-black border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search..."
          />
        </div>

        <div className="py-4">
          <button className="flex items-center gap-1 -my-9 bg-red-500 hover:bg-white hover:text-black hover:border-separate border-2 border-gray-300 hover:border-black text-white font-bold py-2 px-10 rounded border-separate">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l1.5 1.5L6.75 10.5l4.5 4.5L18 10.5l1.5 1.5L21.75 12l-1.5-1.5L19.5 10.5l-4.5-4.5L6.75 10.5l-1.5-1.5L2.25 12z"
              />
            </svg>
            Home
          </button>
        </div>

        <div className="h-px bg-black" />

        <ul className="space-y-3 py-4 flex justify-center">
          <li>
            <a href="#" className="block text-lg hover:text-gray-300 transition duration-300">
              History
            </a>
         
            <ul className="space-y-2 mt-2 flex-grow overflow-hidden max-h-48">
              {searchHistory.length > 0 ? (
                searchHistory.map((item, index) => (
                  <li key={index} className="text-gray-400 text-sm">
                    {item}
                  </li>
                ))
              ) : (
                <li className="text-gray-500 text-sm">No history yet</li>
              )}
            </ul>
          </li>
        </ul>

        <div className="h-px bg-black" />

      
        <div className="flex flex-col justify-between mt-4 space-y-4">
      
          <button
            onClick={toggleDarkMode}
            className={`w-full rounded text-center py-1 px-3 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} hover:bg-gray-300 rounded`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

      
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded transition-opacity opacity-90 hover:opacity-100 duration-300 ease-in-out"
          >
            Logout
          </button>

        
          <div className="flex items-center space-x-4 py-1 -my-56 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-r hover:from-white hover:to-gray-200 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <button className="flex items-center space-x-4">
              <img
                src="https://th.bing.com/th/id/OIP.dFyryKdJiDF2jyFurWwr2AHaED?rs=1&pid=ImgDetMain"
                alt="Profile Logo"
                className="w-6 h-4 rounded-full object-cover transition-all duration-300 ease-in-out transform hover:rotate-12"
              />
              <span className="text-lg font-medium tracking-wide">Guest</span>
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={toggleSidebar}
        className="lg:hidden p-4 bg-blue-600 text-white fixed top-4 left-4 z-50 rounded-full"
      >
        ☰
      </button>
    </div>
  );
}

export default Sidebar;
