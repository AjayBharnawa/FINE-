const Footer = () => {
  return (
    <footer className="w-full bg-[#0a1a3a] text-white px-8 py-12">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-widest text-cyan-300">
            FINE
          </h1>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Foundation for Innovation and Entrepreneurship is a student-driven
            initiative focused on innovation, technology, and real-world impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-cyan-300 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-cyan-300 cursor-pointer transition">
              About
            </li>
            <li className="hover:text-cyan-300 cursor-pointer transition">
              Domains
            </li>
            <li className="hover:text-cyan-300 cursor-pointer transition">
              Join Us
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-300 text-sm">📍 Government Engineering College, Ajmer</p>
          <p className="text-gray-300 text-sm mt-2">📧 fine@college.edu</p>
          <p className="text-gray-300 text-sm mt-2">📞 +91 XXXXX XXXXX</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FINE. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
