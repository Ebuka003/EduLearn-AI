import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const LearningPath = () => {
  const modules = [
    { title: 'Introduction to AI', completed: true, score: 95 },
    { title: 'Machine Learning Basics', completed: true, score: 88 },
    { title: 'Neural Networks', completed: false, progress: 60 },
    { title: 'Deep Learning', completed: false, locked: true },
    { title: 'AI Applications', completed: false, locked: true },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Your Learning Path</h2>
      <div className="space-y-4">
        {modules.map((module, index) => (
          <div key={index} className={`flex items-center gap-4 p-4 rounded-lg ${module.locked ? 'opacity-50' : 'hover:bg-gray-50'}`}>
            {module.completed ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <Circle className="w-6 h-6 text-gray-400" />
            )}
            <div className="flex-1">
              <h3 className="font-medium">{module.title}</h3>
              {module.completed && (
                <span className="text-sm text-green-600">Completed - Score: {module.score}%</span>
              )}
              {!module.completed && !module.locked && (
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;