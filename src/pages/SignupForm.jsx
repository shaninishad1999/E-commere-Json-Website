import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

const SignupForm = ({ onToggleMode, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onSubmit(formData);
  };

  return (
    <>
    <div>

  
    <form onSubmit={handleSubmit}>
      <div className="mb-4 ">
        <label className="block mb-2 flex items-center">
          <User className="mr-2 text-gray-500" size={20} />
          <span>Username</span>
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Choose a username"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
          required
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-2 flex items-center">
          <Mail className="mr-2 text-gray-500" size={20} />
          <span>Email</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
          required
        />
      </div>
      
      <div className="mb-4 relative">
        <label className="block mb-2 flex items-center">
          <Lock className="mr-2 text-gray-500" size={20} />
          <span>Password</span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Create a password"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
          required
          minLength={8}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-10 text-gray-500"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      
      <div className="mb-4 relative">
        <label className="block mb-2 flex items-center">
          <Lock className="mr-2 text-gray-500" size={20} />
          <span>Confirm Password</span>
        </label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm your password"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
          required
          minLength={8}
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-2 top-10 text-gray-500"
        >
          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      
      <button type="submit" className="w-100 btn btn-outline-success">
      Submit
      </button>
      
      <div className="text-center mt-4">
        <p className="text-sm">
          Already have an account? 
          <button 
            type="button"
            onClick={onToggleMode}
            className="ml-2 text-success hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </form>
    </div>
    </>
  );
};

export default SignupForm;