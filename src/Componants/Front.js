import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
const Front = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login'); 
  };

  return (
    <div className='bg-red-600 w-screen h-screen'>
      <div className='flex justify-center items-center h-full'>
        <button className='w-80' onClick={handleButtonClick}>

          <h1 className="text-white text-6xl font-bold  animate__animated animate__zoomInDown animate__slow	1s ">Movies.IO</h1>
        </button>
      </div>
    </div>
  );
};

export default Front;
