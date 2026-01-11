import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Science Tech",
    image:
      "https://images.unsplash.com/photo-1534759846116-5799c33ce22a",
    path: "/science-tech",
  },
  {
    title: "Agriculture Tech",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    path: "/agriculture-tech",
  },
  {
    title: "Health Tech",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    path: "/health-tech",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigate(slides[current].path);
  };

  return (
    <section className="w-full h-[calc(100vh-80px)] relative overflow-hidden">
      
      {/* Background Image */}
      <img
        src={slides[current].image}
        alt={slides[current].title}
        onClick={handleClick}
        className="w-full h-full object-cover cursor-pointer transition-all duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Domain Name (Left Bottom) */}
      <div
        onClick={handleClick}
        className="absolute bottom-10 left-10 text-white cursor-pointer"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide hover:text-cyan-300 transition">
          {slides[current].title}
        </h1>
        <p className="mt-2 text-sm uppercase tracking-widest opacity-80">
          Click to explore
        </p>
      </div>

    </section>
  );
};

export default Hero;
