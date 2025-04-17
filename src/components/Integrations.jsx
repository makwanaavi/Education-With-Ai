const integrations = [
    { name: 'Google Classroom', logo: 'google-classroom.png' },
    { name: 'Moodle', logo: 'moodle.png' },
    { name: 'Canvas', logo: 'canvas.png' },
    { name: 'Blackboard', logo: 'Blackboard.png' },
    { name: 'Zoom', logo: 'Zoom.png' },
    { name: 'Microsoft Teams', logo: 'teams.png' },
  ];
  
  const Integrations = () => {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Seamless Integration with Your Ecosystem
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Connects with your existing LMS and platforms for a unified experience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition duration-300"
              >
                <img 
                  src={integration.logo} 
                  alt={integration.name} 
                  className="h-12 w-auto object-contain"
                />
                <p className="mt-4 text-sm font-medium text-gray-700">{integration.name}</p>
              </div>
            ))}
          </div>
{/*           
          <div className="mt-16 text-center">
            <button className="px-6 py-3 border border-transparent text-white font-medium rounded-md  bg-blue-700 hover:bg-blue-800 transition duration-300">
              View All Integrations
            </button>
          </div> */}
        </div>
      </div>
    );
  };
  
  export default Integrations;