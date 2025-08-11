import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ContactSpark = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    let lastScroll = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const section = document.getElementById('contact-spark');
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const windowHeight = window.innerHeight;

          // Smoother scroll progress calculation
          const scrollProgress = Math.max(0, Math.min(1, 
            (scrollPosition - (sectionTop - windowHeight * 0.8)) / (sectionHeight + windowHeight * 0.8)
          ));

          // Smoother scale transition
          const scale = 1 + (scrollProgress * 0.15); // Reduced max scale for subtler effect

          image.animate(
            {
              transform: `scale(${scale})`
            },
            {
              duration: 300, // Increased duration for smoother transition
              fill: 'forwards',
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)' // Smoother easing curve
            }
          );

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contact-spark" className="py-36 relative overflow-hidden bg-gray-800 text-white flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          src="https://www.diyphotography.net/wp-content/uploads/2017/03/1489365609705.jpg" 
          alt="Background Model" 
          className="w-full h-full object-cover opacity-50 animate-parallax"
        />
      </div>
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">CONTACT SPARK – BEST MODELING AGENCY IN LAHORE, KARACHI AND ISLAMABAD NOW!</h2>
          <Link to="/apply" className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300">
            Apply for Modeling Now!
          </Link>
        </div>
      </div>
    </section>
  );
};

// CSS for parallax animation
const styles = `
  @keyframes parallax {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }

  .animate-parallax {
    animation: parallax 6s ease-in-out infinite;
    transform-origin: center center;
    will-change: transform; /* Optimize for smoother animations */
  }

  #contact-spark:hover .animate-parallax {
    animation-play-state: paused;
  }

  #contact-spark {
    transform-style: preserve-3d;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default ContactSpark;
