import Navbar from './Components/shared/Navbar';
import Footer from './Components/shared/Footer';
import HeroSection from './Components/HeroSection';
import TechSection from './Components/TechSection/tech';

const fetchTech = async () => {
  const res = await fetch('/Tech.json');
  const data = await res.json();
  return data;
};

const techPromise = fetchTech();

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Container with proper horizontal padding and max-width */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 py-8 md:py-12 space-y-12">
        <HeroSection />
        <TechSection techPromise={techPromise} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;