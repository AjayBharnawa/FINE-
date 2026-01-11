const Navbar = () => {
  return (
    <nav className="w-full h-[85px] bg-[#0a1a3a] flex items-center px-15">
      
      <h1
        className="text-3xl md:text-4xl font-extrabold tracking-widest
        bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent
        cursor-pointer"
      >
        FINE
      </h1>

      <div className="ml-auto flex items-center gap-8">
        
        <div className="flex gap-6">
          <a
            href="/"
            className="text-white text-lg font-medium hover:text-cyan-300 transition"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white text-lg font-medium hover:text-cyan-300 transition"
          >
            About
          </a>
          <a
            href="/signin"
            className="text-white text-lg font-medium hover:text-cyan-300 transition"
          >
            Sign In
          </a>
        </div>

        <button
          className="bg-white text-[#0a1a3a] px-6 py-2.5 rounded-lg
          font-semibold hover:bg-cyan-300 transition duration-300"
        >
          Sign Up
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
