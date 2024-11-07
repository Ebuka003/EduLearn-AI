import React from 'react';
import { MessageSquare, Users } from 'lucide-react';

const Community = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Discussion Forums</h2>
        <div className="space-y-4">
          {/* Forum posts will be populated here */}
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Study Groups</h3>
          <div className="flex items-center justify-center h-48">
            <Users className="w-12 h-12 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Direct Messages</h3>
          <div className="flex items-center justify-center h-48">
            <MessageSquare className="w-12 h-12 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;