import React from 'react';
import { BarChart, LineChart, Calendar } from 'lucide-react';

const Progress = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Weekly Progress</h3>
          <div className="flex items-center justify-center h-48">
            <BarChart className="w-12 h-12 text-gray-400" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Learning Streak</h3>
          <div className="flex items-center justify-center h-48">
            <LineChart className="w-12 h-12 text-gray-400" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Study Calendar</h3>
          <div className="flex items-center justify-center h-48">
            <Calendar className="w-12 h-12 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;