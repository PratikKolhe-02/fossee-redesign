const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tight">FOSSEE</h3>
          <p className="text-sm text-gray-400 mt-1">Free/Libre and Open Source Software for Education</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition">Contact</a>
        </div>
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} FOSSEE Project.
        </div>
      </div>
    </footer>
  );
};

export default Footer;