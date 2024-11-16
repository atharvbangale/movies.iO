import React from 'react';
import Navbar from './Componants/Navbar';  
import Sidebar from './Componants/Sidebar';  
import Dashboard from './Componants/Dashboard';  

const Main = () => {
  return (
    <div className="flex h-screen">
      <Sidebar /> 
      <div className="flex-1 flex flex-col">
        <Navbar /> 
        <Dashboard /> 
      </div>
    </div>
  );
}

export default Main;
