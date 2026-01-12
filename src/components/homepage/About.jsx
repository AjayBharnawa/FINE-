const About = () => {
  return (
    <section className="w-full bg-[#0a1a3a] flex items-center justify-center px-6 py-20">
      
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl p-10 md:p-14 text-center">
        
        <h1
          className="text-3xl md:text-6xl font-extrabold tracking-widest
          bg-gradient-to-r from-[#0a1a3a] to-cyan-500 bg-clip-text text-transparent"
        >
          FINE
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-[#0a1a3a]">
          Foundation for Innovation and Entrepreneurship
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

      </div>

    </section>
  );
};

export default About;
