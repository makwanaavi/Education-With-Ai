const countries = [
  { name: "India", schools: 85 },
  { name: "Canada", schools: 32 },
  { name: "United Kingdom", schools: 45 },
  { name: "Australia", schools: 28 },
  { name: "Germany", schools: 19 },
  { name: "Japan", schools: 15 },
  { name: "Singapore", schools: 12 },
  { name: "Brazil", schools: 8 },
  { name: "South Africa", schools: 6 },
  { name: "United States", schools: 10 },
];

const GlobalReach = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Global Reach, Local Impact
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Trusted by educators and learners around the world
          </p>
        </div>

        {/* Stats and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div>
            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <p className="text-5xl font-bold text-primary mb-2">200+</p>
              <p className="text-xl text-gray-700">Schools Worldwide</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-5xl font-bold text-primary mb-2">10</p>
              <p className="text-xl text-gray-700">
                Countries Across 4 Continents
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <img
              src="/world-map.png"
              alt="World map showing school locations"
              className="w-full h-auto"
            />

            {/* Pulsing location markers (adjust as needed) */}
            <div className="absolute top-[20%] left-[25%] w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-[25%] left-[20%] w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-[30%] left-[22%] w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-[15%] left-[45%] w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-[20%] left-[50%] w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-[50%] left-[75%] w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-[55%] left-[80%] w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-[65%] left-[50%] w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-[70%] left-[45%] w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-[75%] left-[85%] w-4 h-4 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Country List */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Our Global Community
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center"
              >
                <p className="font-bold text-gray-900">{country.name}</p>
                <p className="text-primary">{country.schools} schools</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-12">
          © {new Date().getFullYear()} makwanaavi. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default GlobalReach;
