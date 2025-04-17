import { FaFileDownload } from "react-icons/fa";

const CtaSection = () => {
  return (
    <div className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Transform Your Educational Experience?
        </h2>
        <p className="mt-4 text-xl text-black">
          Join hundreds of institutions already benefiting from AI-powered
          learning.
        </p>

        <div className="mt-10">
          <form className="sm:flex">
            <div className="min-w-0 flex-1">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="block w-full px-5 py-3 text-base rounded-md text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-primary"
              />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full py-3 px-5 rounded-md shadow bg-white text-primary font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-primary transition duration-300"
              >
                Book a Demo
              </button>
            </div>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition duration-300">
              Get Your Free AI Education Toolkit
            </button>
            <button className="text-black px-6 py-3 border text-base font-medium rounded-md border-white hover:bg-blue-700 hover:text-white transition duration-300 flex items-center group">
              <FaFileDownload className="w-6 h-6 text-blue-500 mr-2 group-hover:text-white" />
              <span className="group-hover:text-white">
                Download Whitepaper
              </span>
            </button>
          </div>

          <p className="mt-8 text-sm text-black">
            By providing your email, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
