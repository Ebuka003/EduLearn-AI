import React from 'react';
import ProgressStats from '../components/ProgressStats';
import RecommendedCourses from '../components/RecommendedCourses';
import LearningPath from '../components/LearningPath';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <ProgressStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecommendedCourses />
        </div>
        <div className="lg:col-span-1">
          <LearningPath />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;