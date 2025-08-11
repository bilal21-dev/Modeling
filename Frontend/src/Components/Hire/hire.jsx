import React, { useEffect, useState } from 'react';

const Hire = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div
      className="relative bg-[url('https://i2.pickpik.com/photos/951/160/868/forest-girl-model-nature-9541512744ac56e5342b79d0db7fbf13.jpg')] bg-cover bg-center min-h-[580px] flex flex-col justify-between text-white"
      style={{ paddingTop: navHeight + 20 }} // adds a little extra space
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 mt-32 sm:mt-32 text-center">
        <h1 className="text-6xl sm:text-7xl font-extrabold px-4">Hire Model for Photoshoot</h1>
      </div>

    </div>
  );
};

export default Hire;
