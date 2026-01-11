const domains = [
  {
    name: "Science Tech",
    image: "https://cdn-icons-png.flaticon.com/512/2942/2942789.png",
  },
  {
    name: "Agriculture Tech",
    image: "https://cdn-icons-png.flaticon.com/512/2909/2909767.png",
  },
  {
    name: "Health Tech",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
  },
];

const Domain = () => {
  return (
<section className="w-full bg-[#0a1a3a] flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center
            hover:scale-105 transition duration-300"
          >
            <img
              src={domain.image}
              alt={domain.name}
              className="w-24 h-24 mb-6"
            />

            <h2 className="text-2xl font-bold text-[#0a1a3a] mb-4">
              {domain.name}
            </h2>

            <button
              className="mt-auto bg-[#0a1a3a] text-white px-6 py-3 rounded-lg
              font-semibold hover:bg-cyan-400 transition"
            >
              Join Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Domain;
