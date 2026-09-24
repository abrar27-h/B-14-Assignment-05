import logoText from '../../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoText} 
                alt="DevStack Logo" 
                className="h-5 object-contain" 
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center space-x-4 text-sm font-medium text-gray-700 pt-2">
              <a href="#github" className="hover:text-black">GitHub</a>
              <a href="#twitter" className="hover:text-black">Twitter</a>
              <a href="#linkedin" className="hover:text-black">LinkedIn</a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#home" className="hover:text-black">Home</a></li>
              <li><a href="#technologies" className="hover:text-black">Technologies</a></li>
              <li><a href="#projects" className="hover:text-black">Projects</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-black">About</a></li>
              <li><a href="#contact" className="hover:text-black">Contact</a></li>
              <li><a href="#careers" className="hover:text-black">Careers</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#privacy" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-black">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider & Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-black">Privacy</a>
            <a href="#terms" className="hover:text-black">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;