
const stats = [
    { id: 1, name: 'Faster Grading', value: '70%', description: 'Teachers save time with automated grading' },
    { id: 2, name: 'Student Engagement', value: '25%', description: 'Increase in participation and completion rates' },
    { id: 3, name: 'Test Score Improvement', value: '18%', description: 'Average boost in assessment results' },
    { id: 4, name: 'Teacher Satisfaction', value: '92%', description: 'Of educators report reduced workload stress' },
  ];
  
  const ResultsSection = () => {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Proven Results & Impact
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-black mx-auto">
              Data-driven outcomes that make a real difference in education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-gray-50 p-8 text-black rounded-xl text-center hover:bg-blue-600 hover:text-white transition duration-300">
                <p className="text-5xl font-extrabold mb-2">{stat.value}</p>
                <h3 className="text-xl font-bold mb-2">{stat.name}</h3>
                <p className="text-black-100">{stat.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Case Study: Lincoln High School</h3>
              <p className="text-black mb-6">
                After implementing our platform, Lincoln High saw dramatic improvements across all key metrics within the first academic year.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Reduced grading time by 65%, allowing teachers to focus on instruction</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Identified 28% more at-risk students for early intervention</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-black">Achieved 22% higher standardized test scores district-wide</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
  <p className="text-center text-gray-600 text-base">
    Performance improvements over 12 months
  </p>
</div>

          </div>
        </div>
      </div>
    );
  };
  
  export default ResultsSection;