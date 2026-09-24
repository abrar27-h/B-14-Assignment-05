import bannerImage from '../assets/banner-stack.png';

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Build Your Ideal <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          
          <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="text-white text-sm font-medium px-6 py-3 rounded-lg shadow bg-brand-gradient transition-all hover:opacity-90">
              Explore Technologies
            </button>
            <button className="text-gray-700 text-sm font-medium px-6 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img 
            src={bannerImage} 
            alt="Development Stack Illustration" 
            className="w-full max-w-md lg:max-w-lg object-contain" 
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;