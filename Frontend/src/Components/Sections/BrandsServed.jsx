import React from 'react';

const BrandsServed = () => {
  const brands = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrhTgmUc80dl4XPHFd2LHGXr1zCrAUNGHEjg&s", alt: "Bahria" },
    { src: "https://i.ytimg.com/vi/ZLA5yQ9sd_g/maxresdefault.jpg", alt: "Dalda" },
    { src: "https://assets.turbologo.com/blog/en/2021/07/26072303/unilever.png", alt: "Unilever" },
    { src: "https://sc-images-prod.s3.eu-central-1.amazonaws.com/logos/343cc765-67ea-4321-a175-3fddcd6ae3a3_logo.png", alt: "Unilever" },
    { src: "https://getlogovector.com/wp-content/uploads/2020/10/careem-logo-vector.png", alt: "Careem" },
  

    // Add more brand images as needed for the loop
  ];

  return (
    <section id="brands-served" className="py-12 bg-white">
      <div className="text-center px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">BRANDS WE HAVE SERVED</h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-4">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Animation style for infinite scroll
const styles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .animate-scroll {
    display: flex;
    width: max-content;
    animation: scroll 15s linear infinite;
  }

  .animate-scroll:hover {
    animation-play-state: paused;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default BrandsServed;