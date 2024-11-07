import React from 'react';
import { User, Bell, Shield, Palette } from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm">
      <div className="border-b border-gray-200">
        <nav className="flex overflow-x-auto py-4">
          {['Profile', 'Notifications', 'Privacy', 'Appearance'].map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium ${
                index === 0
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">Sarah Johnson</h2>
              <p className="text-gray-600">sarah.johnson@example.com</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: User, label: 'Edit Profile' },
              { icon: Bell, label: 'Notification Preferences' },
              { icon: Shield, label: 'Privacy Settings' },
              { icon: Palette, label: 'Theme Settings' },
            ].map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-50"
              >
                <item.icon className="w-5 h-5 text-gray-400" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;