import React, { useState } from 'react';
import LoginForm from '../pages/LoginForm';
import SignupForm from '../pages/SignupForm';

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (loginData) => {
    // Implement login logic
    console.log('Login Data:', loginData);
    // Add authentication API call here
  };

  const handleSignup = (signupData) => {
    // Implement signup logic
    console.log('Signup Data:', signupData);
    // Add signup API call here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 mt-16">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        {isLogin ? (
          <LoginForm 
            onToggleMode={toggleAuthMode} 
            onSubmit={handleLogin}
          />
        ) : (
          <SignupForm 
            onToggleMode={toggleAuthMode} 
            onSubmit={handleSignup}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;