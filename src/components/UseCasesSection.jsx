const useCases = [
    {
      title: "K-12 Schools",
      description: "Differentiated instruction made easy with AI that adapts to each student's level.",
      benefits: [
        "Personalized learning at scale",
        "Reduced teacher workload",
        "Early intervention systems"
      ]
    },
    {
      title: "Colleges/Universities",
      description: "Better student engagement and success rates through data-driven insights.",
      benefits: [
        "Predictive analytics for at-risk students",
        "Automated administrative tasks",
        "Scalable personalized learning"
      ]
    },
    {
      title: "Tutoring Centers",
      description: "AI-enhanced support and analytics to maximize learning outcomes.",
      benefits: [
        "24/7 tutoring support",
        "Progress tracking dashboards",
        "Customized practice materials"
      ]
    },
    {
      title: "EdTech Companies",
      description: "Integrate AI into your LMS to provide cutting-edge features.",
      benefits: [
        "API access to our AI engine",
        "White-label solutions",
        "Seamless integration"
      ]
    }
  ];
  
  const UseCasesSection = () => {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Tailored Solutions for Every Educational Need
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Discover how our platform adapts to your specific requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default UseCasesSection;