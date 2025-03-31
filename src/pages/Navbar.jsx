import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineHome, AiOutlineRead } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const location = useLocation();

  const icons = {
    '/': AiOutlineHome,
    '/blog': AiOutlineRead,
    '/about': CgProfile
  };

  const handleNavigation = (path, e) => {
    setClickPosition({
      x: e.clientX,
      y: e.clientY
    });
    setIsTransitioning(true);
    setActiveIcon(path);
  };

  const IconComponent = activeIcon ? icons[activeIcon] : null;

  return (
    <>
      <nav className="w-full relative h-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#686f7c] via-[#b6c2db] z-0 to-gray-100 h-full"></div>
        <div className="max-w-4xl mx-auto relative z-50">
          <ul className="flex justify-center items-center space-x-16 py-3">
            {Object.entries(icons).map(([path, Icon]) => (
              <li key={path}>
                <button 
                  onClick={(e) => handleNavigation(path, e)}
                  className="flex flex-col items-center group relative"
                >
                  <motion.div
                    className="p-2.5 rounded-full border-2 border-gray-200 bg-white group-hover:border-gray-300 group-hover:bg-gray-100"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-9 h-9 text-gray-600 group-hover:text-gray-800" />
                  </motion.div>
                  <span className="mt-1 text-sm font-medium text-gray-600 group-hover:text-gray-800">
                    {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <AnimatePresence mode='wait'>
        {isTransitioning && IconComponent && (
          <motion.div
            key="overlay"
            initial={{
              clipPath: `circle(0% at ${clickPosition.x}px ${clickPosition.y}px)`,
              backgroundColor: 'rgba(240, 240, 240, 1)'
            }}
            animate={{
              clipPath: `circle(150% at ${clickPosition.x}px ${clickPosition.y}px)`,
              transition: { duration: 0.4, ease: [0.22, 0.5, 0.36, 0.5] }
            }}
            exit={{
              clipPath: `circle(0% at ${clickPosition.x}px ${clickPosition.y}px)`,
              transition: { duration: 0.3, ease: [0.22, 0.3, 0.2, 0.5] }
            }}
            className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center"
            onAnimationComplete={(definition) => {
              if (definition === `circle(150% at ${clickPosition.x}px ${clickPosition.y}px)`) {
                // Expand animation complete, trigger retract
                setIsTransitioning(false);
              } else {
                // Retract animation complete, navigate
                navigate(activeIcon);
                setActiveIcon(null);
              }
            }}
          >
            <motion.div
              className="absolute text-gray-600"
              style={{
                left: clickPosition.x - 24,
                top: clickPosition.y - 24
              }}
              initial={{
                scale: 1,
                opacity: 1
              }}
              animate={{
                scale: 3,
                opacity: 0,
                transition: { 
                  duration: 0.5,
                  ease: [0.22, 0.2, 0.36, 0.5]
                }
              }}
              exit={{
                scale: 0,
                opacity: 0,
                transition: { duration: 0.5 }
              }}
            >
              <IconComponent className="w-12 h-12" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;