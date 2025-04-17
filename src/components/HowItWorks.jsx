const steps = [
  {
    title: "Data Input",
    description:
      "The system collects student interactions, assessments, and engagement metrics.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "AI Processing",
    description:
      "Our algorithms analyze patterns and identify learning needs and opportunities.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    title: "Insight Generation",
    description:
      "Actionable recommendations are created for students and educators.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Learning Success",
    description: "Students achieve better outcomes with personalized support.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How Our AI Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            A simple yet powerful approach to personalized learning
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-0.5 bg-gray-200 mt-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-4 rounded-full shadow-lg border border-gray-100 mb-4 z-10">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-1/2 h-0.5 bg-primary">
                    <div className="absolute right-0 -mt-1 w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <p className="text-center text-gray-600 text-lg">
              Input (student data) → AI Engine → Actionable Insights → Success
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
