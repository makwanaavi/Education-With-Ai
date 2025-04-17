import { FaBrain, FaClock, FaRobot, FaCheckCircle, FaFlask, FaBookOpen } from 'react-icons/fa';

const features = [
  {
    icon: <FaBrain className="w-8 h-8 text-primary" />,
    title: "Personalized Learning Paths",
    description: "AI tailors content by student behavior, adapting to individual learning styles and pace.",
  },
  {
    icon: <FaClock className="w-8 h-8 text-secondary" />,
    title: "Real-Time Performance Tracking",
    description: "Instant insights for teachers and students with actionable analytics.",
  },
  {
    icon: <FaRobot className="w-8 h-8 text-purple-500" />,
    title: "AI-Powered Tutors",
    description: "24/7 support for solving doubts with contextual understanding.",
  },
  {
    icon: <FaCheckCircle className="w-8 h-8 text-green-500" />,
    title: "Automated Grading & Feedback",
    description: "Save time on repetitive tasks with instant, accurate assessments.",
  },
  {
    icon: <FaFlask className="w-8 h-8 text-yellow-500" />,
    title: "Adaptive Assessments",
    description: "Dynamic quizzes that adjust difficulty based on student performance.",
  },
  {
    icon: <FaBookOpen className="w-8 h-8 text-blue-500" />,
    title: "Smart Content Suggestions",
    description: "Recommendations based on student learning style and progress.",
  },
];

const FeaturesSection = () => {
  return (
    <>
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            AI-Powered Features That Transform Learning
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Harness the power of artificial intelligence to create exceptional educational experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FeaturesSection;