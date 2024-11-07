import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecommendedCourses = () => {
  const courses = [
    {
      title: 'Advanced Data Structures',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=300&q=80',
      duration: '6 weeks',
      students: 1234,
      rating: 4.8,
      match: 98
    },
    {
      title: 'System Design Fundamentals',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80',
      duration: '8 weeks',
      students: 2156,
      rating: 4.9,
      match: 95
    },
    {
      title: 'Cloud Computing Essentials',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80',
      duration: '10 weeks',
      students: 1876,
      rating: 4.7,
      match: 92
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recommended for You</h2>
        <Link to="/courses" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Link to={`/courses/${index + 1}`} key={index} className="group">
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                {course.match}% Match
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-medium group-hover:text-indigo-600 transition-colors">
                {course.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;