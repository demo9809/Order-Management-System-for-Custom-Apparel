import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LayoutDashboard, ShoppingBag, Package, Users, UserCheck, BarChart2, Settings, LogOut } from 'lucide-react';
export const Sidebar: React.FC = () => {
  const {
    user,
    logout
  } = useAuth();
  const navItems = [{
    name: 'Dashboard',
    path: '/dashboard',
    icon: <LayoutDashboard size={20} />
  }, {
    name: 'Orders',
    path: '/orders',
    icon: <ShoppingBag size={20} />
  }, {
    name: 'Inventory',
    path: '/inventory',
    icon: <Package size={20} />
  }, {
    name: 'Customers',
    path: '/customers',
    icon: <Users size={20} />
  }];
  // Manager-only navigation items
  const managerItems = [{
    name: 'Agents',
    path: '/agents',
    icon: <UserCheck size={20} />
  }, {
    name: 'Reports',
    path: '/reports',
    icon: <BarChart2 size={20} />
  }, {
    name: 'Settings',
    path: '/settings',
    icon: <Settings size={20} />
  }];
  const navLinkClasses = ({
    isActive
  }: {
    isActive: boolean;
  }) => `flex items-center px-4 py-3 text-sm ${isActive ? 'bg-primary text-primary-foreground rounded-md' : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-md'}`;
  return <div className="hidden md:flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <h1 className="text-xl font-bold text-primary">CustomThreads</h1>
      </div>
      <div className="flex flex-col justify-between flex-1 overflow-y-auto">
        <nav className="px-2 py-4 space-y-1">
          {navItems.map(item => <NavLink key={item.path} to={item.path} className={navLinkClasses}>
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </NavLink>)}
          {/* Show manager-only items if user is a manager */}
          {user?.role === 'manager' && <>
              <div className="border-t my-2"></div>
              {managerItems.map(item => <NavLink key={item.path} to={item.path} className={navLinkClasses}>
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </NavLink>)}
            </>}
        </nav>
        <div className="p-4">
          <button onClick={logout} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-md">
            <LogOut size={20} />
            <span className="ml-3">Logout</span>
          </button>
        </div>
      </div>
    </div>;
};