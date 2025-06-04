import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Menu, Bell, Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Header: React.FC = () => {
  const {
    user,
    logout
  } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return <header className="bg-white border-b px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button className="md:hidden text-gray-600 focus:outline-none">
            <Menu size={24} />
          </button>
          <div className="relative mx-4 lg:mx-0 hidden md:block">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <Search size={18} className="text-gray-500" />
            </span>
            <input className="form-input w-64 rounded-md pl-10 pr-4 py-2 border border-gray-300 focus:ring-primary-500 focus:border-primary-500" type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="flex items-center">
          <button className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none">
            <Bell size={20} />
          </button>
          <div className="relative ml-3">
            <div>
              <button className="flex items-center max-w-xs text-sm rounded-full focus:outline-none" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  {user?.name.charAt(0)}
                </div>
                <span className="ml-2 font-medium text-gray-700">
                  {user?.name}
                </span>
                <ChevronDown size={16} className="ml-1 text-gray-500" />
              </button>
            </div>
            {dropdownOpen && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                  Settings
                </Link>
                <button onClick={() => {
              setDropdownOpen(false);
              logout();
            }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Logout
                </button>
              </div>}
          </div>
        </div>
      </div>
    </header>;
};