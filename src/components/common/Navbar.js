import React from 'react';
import { LogIn, LogOut, Shield } from 'lucide-react';

function Navbar({ isLoggedIn, navigate, onLogout, name }) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('cv')}>
            <span className="text-2xl font-bold text-slate-800">{name}</span>
          </div>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button onClick={() => navigate('admin')} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Shield size={18} className="mr-2" /> Admin
                </button>
                <button onClick={onLogout} className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">
                  <LogOut size={18} className="mr-2" /> Logout
                </button>
              </>
            ) : (
              <button onClick={() => navigate('login')} className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                <LogIn size={18} className="mr-2" /> Admin Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;