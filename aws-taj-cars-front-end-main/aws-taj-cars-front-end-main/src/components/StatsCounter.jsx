import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function StatsCounter() {
  const [years, setYears] = useState(0);
  const [cars, setCars] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [fadeIn, setFadeIn] = useState(false); // fade control

  useEffect(() => {
    if (inView) {
      setFadeIn(true); // start fade when in view

      const yearsInterval = setInterval(() => {
        setYears((prev) => (prev < 10 ? prev + 1 : 10));
      }, 80);

      const carsInterval = setInterval(() => {
        setCars((prev) => (prev < 500 ? prev + 10 : 500));
      }, 15);

      const clientsInterval = setInterval(() => {
        setClients((prev) => (prev < 100 ? prev + 2 : 100));
      }, 20);

      return () => {
        clearInterval(yearsInterval);
        clearInterval(carsInterval);
        clearInterval(clientsInterval);
      };
    }
  }, [inView]);

  return (
    <div ref={ref} className="bg-gray-800 text-white mx-4 rounded-lg py-8 md:py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-4">

        {/* Each Stat Block */}
        <div className="flex flex-col items-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700/50 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <span className="text-4xl mb-2">🏆</span>
          <h3 className={`text-3xl md:text-4xl font-bold transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            {years}+
          </h3>
          <p className="text-sm md:text-lg mt-2">Years of Experience</p>
        </div>

        <div className="flex flex-col items-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700/50 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <span className="text-4xl mb-2">🚗</span>
          <h3 className={`text-3xl md:text-4xl font-bold transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            {cars}+
          </h3>
          <p className="text-sm md:text-lg mt-2">Cars Exported</p>
        </div>

        <div className="flex flex-col items-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700/50 hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <span className="text-4xl mb-2">😊</span>
          <h3 className={`text-3xl md:text-4xl font-bold transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            {clients}+
          </h3>
          <p className="text-sm md:text-lg mt-2">Happy Clients Worldwide</p>
        </div>

      </div>
    </div>
  );
}

export default StatsCounter;
