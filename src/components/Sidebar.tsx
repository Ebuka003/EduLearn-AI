import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Layout, BarChart2, Users, Settings, LogOut, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { icon: Layout, label: 'Dashboard', path: '/' },
    { icon: BookOpen, label: 'My Courses', path: '/courses' },
    { icon: BarChart2, label: 'Progress', path: '/progress' },
    { icon: Users, label: 'Community', path: '/community' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-indigo-900 text-white p-6 transform transition-transform duration-200 ease-in-out z-30 lg:transform-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            <h1 className="text-xl font-bold">EduLearn AI</h1>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-indigo-800 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 w-full rounded-lg transition-colors ${
                      isActive ? 'bg-indigo-800' : 'hover:bg-indigo-800'
                    }`
                  }
                  onClick={() => onClose()}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <button className="flex items-center gap-3 p-3 w-full rounded-lg hover:bg-indigo-800 transition-colors mt-auto absolute bottom-6">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;