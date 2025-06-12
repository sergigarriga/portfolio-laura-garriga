import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';
import lauraProfile from '../assets/images/laura-profile.jpg';

const About = () => {
  const { t } = useTranslation();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.section 
      id="about" 
      className="py-24 px-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto">
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="relative z-10 flex justify-center md:justify-start"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}>
              <img 
                src={lauraProfile}
                alt="Retrato de la artista Laura Garriga" 
                className="rounded-lg shadow-2xl object-cover w-full max-w-sm aspect-[4/5] border-8 border-cream dark:border-navy-dark" 
              />
            </div>
          </motion.div>

          <div className="md:-ml-16 z-0">
             <motion.div 
                className="bg-white/30 dark:bg-stone/30 backdrop-blur-xl p-8 md:p-12 rounded-lg shadow-lg relative overflow-hidden"
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
             >
                <div className="relative z-10">
                  <AnimatedTitle 
                    text={t('about_title')}
                    className="text-6xl lg:text-7xl mb-6"
                  />
                  <div 
                    className="space-y-4 text-base lg:text-lg text-stone-light dark:text-cream/80"
                    style={{ transform: "translateZ(50px)" }}
                  >
                    <p>{t('about_p1')}</p>
                    <p>{t('about_p2')}</p>
                    <p>{t('about_p3')}</p>
                    <p>{t('about_p4')}</p>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;