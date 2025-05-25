
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-4 px-6">
      <div className="flex justify-center space-x-4 text-sm text-gray-400">
        <a 
          href="#" 
          className="hover:text-gray-300 transition-colors underline"
        >
          privacy policy
        </a>
        <span>|</span>
        <a 
          href="#" 
          className="hover:text-gray-300 transition-colors underline"
        >
          terms of service
        </a>
        <span>|</span>
        <a 
          href="#" 
          className="hover:text-gray-300 transition-colors underline"
        >
          fees
        </a>
        <span>|</span>
        <a 
          href="#" 
          className="hover:text-gray-300 transition-colors underline"
        >
          tech updates
        </a>
      </div>
    </footer>
  );
};

export default Footer;
