import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, name); 

    
    props.onRegister(); 

   
    navigate('/main');
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 min-h-screen py-20 flex items-center justify-center">
      <div className="auth-form-container max-w-sm mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              type="text" 
              placeholder="Your Name" 
              id="name" 
              name="name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mt-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder="youremail@gmail.com" 
              id="email" 
              name="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mt-2"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input 
              value={pass} 
              onChange={(e) => setPass(e.target.value)} 
              type="password" 
              placeholder="********" 
              id="password" 
              name="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mt-2"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 rounded-lg hover:from-purple-600 hover:to-pink-500 transition duration-300"
          >
            Register
          </button>
        </form>
        <button 
          className="link-btn mt-4 text-white bg-transparent border border-white text-center w-full py-2 rounded-lg hover:bg-white hover:text-pink-500 hover:border-pink-500 transition duration-300"
          onClick={() => navigate('/login')} 
        >
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
};