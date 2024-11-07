import React from 'react';
import { Trophy, Clock, Target } from 'lucide-react';

const ProgressStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-100 rounded-lg shrink-0">
            <Trophy className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Course Progress</p>
            <p className="text-2xl font-semibold">67%</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-lg shrink-0">
            <Clock className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Study Time</p>
            <p className="text-2xl font-semibold">12.5 hrs</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-purple-100 rounded-lg shrink-0">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Goals Completed</p>
            <p className="text-2xl font-semibold">8/12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressStats;