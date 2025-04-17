import { useState } from 'react';
import { Tab } from '@headlessui/react';

const DashboardPreview = () => {
  const [categories] = useState({
    Overview: [
      {
        id: 1,
        title: 'Class Performance Heatmap',
        description: 'Visual representation of student performance across subjects',
        stats: '85% Avg. Class Score',
      },
      {
        id: 2,
        title: 'Engagement Metrics',
        description: 'Time spent, participation rates, and activity levels',
        stats: '72% Avg. Engagement',
      },
    ],
    Analytics: [
      {
        id: 1,
        title: 'Learning Progress',
        description: 'Individual student trajectories and growth over time',
        stats: '+18% Avg. Improvement',
      },
      {
        id: 2,
        title: 'Skill Mastery',
        description: 'Breakdown of competencies by subject area',
        stats: '63% Mastery Achieved',
      },
    ],
    Alerts: [
      {
        id: 1,
        title: 'Intervention Needed',
        description: 'Students showing signs of struggle in specific areas',
        stats: '3 Students Flagged',
      },
      {
        id: 2,
        title: 'Exceptional Performance',
        description: 'Students excelling beyond expectations',
        stats: '5 Students Recognized',
      },
    ],
  });

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Live Dashboard Preview
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Real-time insights to drive better learning outcomes
          </p>
        </div>
        
        <div className="w-full px-2 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 max-w-md mx-auto">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
                    ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
                    ${selected
                      ? 'bg-white shadow'
                      : 'text-blue hover:border-blue-500 hover:bg-white hover:text-blue-700 hover:shadow-lg transition duration-300'
                    }`
                  }
                >
                  {category} 
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-8">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={`rounded-xl bg-white p-6 shadow-xl border border-gray-200`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts.map((post) => (
                      <div
                        key={post.id}
                        className="relative rounded-md p-6 border border-gray-100 hover:border-primary transition duration-300"
                      >
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          {post.title}
                        </h3>
                        <div className="mt-2 text-gray-600">
                          <p>{post.description}</p>
                          <div className="mt-4 p-3 bg-blue-50 rounded-lg inline-block">
                            <span className="font-bold text-primary">{post.stats}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">Student Progress Heatmap</h3>
                        <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                          <option>Last 7 Days</option>
                          <option>Last 30 Days</option>
                          <option>This Term</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-5 gap-2">
                        {/* Mock heatmap cells */}
                        {Array.from({ length: 35 }).map((_, i) => (
                          <div 
                            key={i}
                            className={`h-8 rounded-sm ${i % 7 === 0 ? 'bg-green-500' : i % 5 === 0 ? 'bg-yellow-500' : 'bg-gray-200'}`}
                            title={`Day ${i+1}: ${i % 7 === 0 ? 'High' : i % 5 === 0 ? 'Medium' : 'Low'} activity`}
                          ></div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-4 text-sm text-gray-600">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;