import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Our students showed a 35% improvement in test scores within just 3 months of using this platform. The personalized learning paths made all the difference.",
    name: "Dr. Sarah Johnson",
    role: "Principal, Springfield High School",
    avatar: "sarah-johnson.png",
  },
  {
    quote: "The AI-powered tutors have been a game-changer for our after-school program. Students get instant help whenever they need it, and our staff can focus on higher-level guidance.",
    name: "Michael Chen",
    role: "Director, Bright Minds Tutoring",
    avatar: "michael-chen.png",
  },
  {
    quote: "As a student, I love how the platform adapts to my learning style. It's like having a personal tutor who knows exactly what I need to work on next.",
    name: "Emma Rodriguez",
    role: "Student, Grade 11",
    avatar: "emma-rodriguez.png",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Community Says
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Hear from educators, administrators, and students who are experiencing the transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-6 text-primary">
                <FaQuoteLeft className="w-8 h-8" />
              </div>
              <p className="text-lg text-gray-700 mb-8">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img 
                    className="h-12 w-12 rounded-full object-cover" 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-base text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          
          <p className="mt-6 text-lg text-gray-600">
            Trusted by 200+ educational institutions worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;