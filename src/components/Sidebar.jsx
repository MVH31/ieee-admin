import React from 'react';
import ieeeLogo from '../assets/ieee.svg';
import sairamLogo from '../assets/logo.gif';

const Sidebar = ({ activePage, onPageChange, onLogout, isOpen, onToggle }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-grey bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`bg-white fixed lg:static inset-y-0 left-0 z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="w-64 h-screen flex flex-col">
          {/* Top Logo */}
          <div className="p-4 lg:p-6">
            <div className="flex justify-center items-center">
              <img src={ieeeLogo} alt="IEEE Logo" className="h-20 justify-center items-center" />
            </div>
            {/* Mobile close button */}
            <button 
              onClick={onToggle}
              className="lg:hidden absolute top-4 right-4 text-gray-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 512 512">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Buttons */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    onPageChange('events');
                    if (window.innerWidth < 1024) onToggle();
                  }}
                  className={`w-30 text-left px-4 py-3 rounded-full transition-colors ${
                    activePage === 'events'
                      ? 'bg-primary text-hovered font-bold border-1'
                      : 'text-gray-300 hover:bg-primary hover:text-hovered'
                  }`}
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onPageChange('mentors');
                    if (window.innerWidth < 1024) onToggle();
                  }}
                  className={`w-30 text-left px-4 py-3 rounded-full transition-colors ${
                    activePage === 'mentors'
                      ? 'bg-primary text-hovered font-bold border-1'
                      : 'text-gray-300 hover:bg-primary hover:text-hovered'
                  }`}
                >
                  Mentors
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onPageChange('projects');
                    if (window.innerWidth < 1024) onToggle();
                  }}
                  className={`w-30 text-left px-4 py-3 rounded-full transition-colors ${
                    activePage === 'projects'
                      ? 'bg-primary text-hovered font-bold border-1'
                      : 'text-gray-300 hover:bg-primary hover:text-hovered'
                  }`}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={onLogout}
                  className="w-30 text-error hover:bg-red-600 hover:text-white text-left px-4 py-3 rounded-full transition-colors"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
          
          {/* Bottom Logo */}
          <div className="p-4 lg:p-6">
            <img src={sairamLogo} alt="Sairam Logo" className="h-20 justify-center items-center" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;