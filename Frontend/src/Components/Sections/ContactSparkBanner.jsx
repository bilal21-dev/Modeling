import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ContactSparkBanner = () => {
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
          const section = document.getElementById('contact-spark-banner');
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const windowHeight = window.innerHeight;

          const scrollProgress = Math.max(0, Math.min(1, 
            (scrollPosition - (sectionTop - windowHeight * 0.8)) / (sectionHeight + windowHeight * 0.8)
          ));

          const translateY = scrollProgress * -50; // Parallax effect

          image.animate(
            {
              transform: `translateY(${translateY}px)`
            },
            {
              duration: 400,
              fill: 'forwards',
              easing: 'ease-out'
            }
          );

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contact-spark-banner" className="relative overflow-hidden bg-gray-900 text-white py-24">
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          src="https://shotkit.com/wp-content/uploads/2021/02/fashion-poses-jonaorle-4814633.jpg" 
          alt="Background Model" 
          className="w-full h-full object-cover opacity-50 animate-parallax"
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          READY FOR YOUR AUDITION FOR JOINING BEST MODELING AGENCY IN ISLAMABAD, KARACHI AND LAHORE?
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white drop-shadow-md max-w-3xl mx-auto">
          As a leading casting agency we believe that true beauty comes from within and that every single being has an important place in the modeling and talent industries. At Spark, our professionals enjoy a more personalized atmosphere. We offer hands-on coaching and guidance to assist in modeling auditions, casting and acting roles. Our success is driven by the success of our talented models and actors.
        </p>
        <p className="text-xl md:text-2xl mb-6 font-semibold text-white drop-shadow-md">
          Learn more about joining our roster of amazing MODELS and TALENT today!
        </p>
        <Link to="/apply"className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg md:text-xl hover:bg-blue-800 transition duration-300">
          Apply for Modeling Now!
        </Link>
      </div>
    </section>
  );
};

// CSS for parallax animation
const styles = `
  @keyframes parallax {
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
  }

  .animate-parallax {
    animation: parallax 8s ease-in-out infinite;
    transform-origin: center center;
    will-change: transform;
  }

  #contact-spark-banner:hover .animate-parallax {
    animation-play-state: paused;
  }

  #contact-spark-banner {
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  @media (max-width: 768px) {
    #contact-spark-banner .text-5xl { font-size: 3xl; }
    #contact-spark-banner .text-xl { font-size: lg; }
    .animate-parallax { animation-duration: 10s; }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default ContactSparkBanner;