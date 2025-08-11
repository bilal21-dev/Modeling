import React from 'react';

// Helper: one tile component with specific image positioning
const Tile = ({ src, x, y, w, h, imgX, imgY, imgW, imgH, className }) => (
  <div
    className={`absolute rounded-lg shadow-lg overflow-hidden ${className}`}
    style={{
      top: y,
      left: x,
      width: w,
      height: h,
    }}
  >
    <div
      className="w-full h-full bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: `-${imgX}px -${imgY}px`,
        backgroundSize: `${imgW}px ${imgH}px`,
      }}
    />
  </div>
);

const HeroSection = ({ modelImage = null }) => {
  const defaultModelImage =
    'https://i.pinimg.com/564x/ca/e4/71/cae471df4fa9995898498a7a69a0fe6b.jpg';
  const img = modelImage || defaultModelImage;

  // Original image dimensions for proper scaling
  const imgW = 400;
  const imgH = 500;

  const Fallback = () => (
    <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
      <div className="w-24 h-32 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
        <span className="text-white text-sm text-center opacity-70">
          Model<br />Image
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-12 md:py-26 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl text-center md:text-left pt-16">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 md:mb-8">
          Spark Modeling<br />
          <span className="text-2xl sm:text-3xl md:text-5xl text-pink-300">
            Top Modeling Agency<br />in Pakistan
          </span>
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl font-light opacity-90">
          Where Dreams Walk the Runway –<br />
          Modeling Reimagined.
        </p>
      </div>

      {/* Right Image Grid */}
      <div className="flex-1 flex justify-center md:justify-end relative mt-8 md:mt-0">
        <div className="relative w-80 h-96">
          {/* Decorative background elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-sm" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500/20 rounded-full blur-sm" />
          <div className="absolute top-1/2 -left-6 w-12 h-12 bg-purple-400/20 rounded-full blur-sm" />
          
          {/* Image tiles with subtle spacing */}
          {img ? (
            <div className="relative w-full h-full">
              {/* Top row */}
              <Tile 
                src={img} 
                x={0} y={0} w={118} h={118} 
                imgX={0} imgY={0} imgW={imgW} imgH={imgH}
                className="z-10 transform hover:scale-105 transition-transform duration-300"
              />
              <Tile 
                src={img} 
                x={122} y={0} w={118} h={118} 
                imgX={120} imgY={0} imgW={imgW} imgH={imgH}
                className="z-10 transform hover:scale-105 transition-transform duration-300"
              />
              <Tile 
                src={img} 
                x={244} y={0} w={76} h={118} 
                imgX={240} imgY={0} imgW={imgW} imgH={imgH}
                className="z-10 transform hover:scale-105 transition-transform duration-300"
              />

              {/* Middle row */}
              <Tile 
                src={img} 
                x={0} y={122} w={76} h={118} 
                imgX={0} imgY={150} imgW={imgW} imgH={imgH}
                className="z-10 transform hover:scale-105 transition-transform duration-300"
              />
              <Tile 
                src={img} 
                x={80} y={122} w={156} h={118} 
                imgX={80} imgY={150} imgW={imgW} imgH={imgH}
                className="z-10 transform hover:scale-105 transition-transform duration-300"
              />
              <Tile 
                src={img} 
                x={240} y={122} w={80} h={118} 
                imgX={240} imgY={150} imgW={imgW} imgH={imgH}
                className="z-10 transform hover:scale-105 transition-transform duration-300"
              />

              {/* Bottom row */}
              <Tile 
                src={img} 
                x={0} y={244} w={96} h={152} 
                imgX={0} imgY={270} imgW={imgW} imgH={imgH}
                className="z-10 transform hover:scale-105 transition-transform duration-300"
              />
              <Tile 
                src={img} 
                x={100} y={244} w={96} h={152} 
                imgX={100} imgY={270} imgW={imgW} imgH={imgH}
                className="z-10 transform hover:scale-105 transition-transform duration-300"
              />
              <Tile 
                src={img} 
                x={200} y={244} w={120} h={152} 
                imgX={200} imgY={270} imgW={imgW} imgH={imgH}
                className="z-10 transform hover:scale-105 transition-transform duration-300"
              />

              {/* Subtle overlay effects for depth */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-black/10 rounded-lg" />
                {/* Individual tile highlights */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/5 to-transparent" />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Fallback />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;