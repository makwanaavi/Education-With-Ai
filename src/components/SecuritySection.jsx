const securityFeatures = [
    {
      title: "Data Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard protocols."
    },
    {
      title: "GDPR Compliance",
      description: "Fully compliant with EU General Data Protection Regulation requirements."
    },
    {
      title: "COPPA Certified",
      description: "Meets all Children's Online Privacy Protection Act standards for under-13 users."
    },
    {
      title: "FERPA Ready",
      description: "Designed to comply with Family Educational Rights and Privacy Act regulations."
    },
    {
      title: "Regular Audits",
      description: "Third-party security audits conducted biannually to ensure compliance."
    },
    {
      title: "Role-Based Access",
      description: "Granular permissions control who can access and modify student data."
    }
  ];
  
  const SecuritySection = () => {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Built with Privacy & Safety in Mind
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
              We meet the highest standards for data security and educational compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <img src="gdpr-certified.png" alt="GDPR Certified" className="h-16" />
            <img src="coppa-compliant.png" alt="COPPA Compliant" className="h-16" />
            <img src="ferpa-ready.png" alt="FERPA Ready" className="h-16" />
            <img src="soc2.png" alt="SOC 2 Type II" className="h-16" />
          </div>
        </div>
      </div>
    );
  };
  
  export default SecuritySection;