"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from 'framer-motion'

function FirstSection() {
  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
  const MOBILE_SENSITIVITY = 2.5; //SENSIBILIDAD PARA EL SENSOR DEL CELU 🗿

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const [isMobile, setIsMobile] = useState(false);
  const [sensorAvailable, setSensorAvailable] = useState(true);

  const transform = useMotionTemplate`perspective(1000px)  rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const handleOrientation = (event: DeviceOrientationEvent) => {
        const { beta, gamma } = event;
        if (beta !== null && gamma !== null) {
          // Alta sensibilidad para móviles
          const xRotation = Math.min(Math.max(((beta - 45) * MOBILE_SENSITIVITY * (ROTATION_RANGE / 90)), -ROTATION_RANGE), ROTATION_RANGE);
          const yRotation = Math.min(Math.max((gamma * MOBILE_SENSITIVITY * (ROTATION_RANGE / 90)), -ROTATION_RANGE), ROTATION_RANGE);
          x.set(xRotation);
          y.set(yRotation);
        }
      };

      const requestOrientationPermission = () => {
        if (typeof DeviceOrientationEvent !== 'undefined' && typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
          (DeviceOrientationEvent as any).requestPermission()
            .then((permissionState: string) => {
              if (permissionState === 'granted') {
                window.addEventListener('deviceorientation', handleOrientation);
                setSensorAvailable(true);
              } else {
                setSensorAvailable(false);
              }
            })
            .catch((error: any) => {
              console.error('Error requesting device orientation permission:', error);
              setSensorAvailable(false);
            });
        } else {
          window.addEventListener('deviceorientation', handleOrientation);
          setSensorAvailable(true);
        }
      };

      window.addEventListener('deviceorientation', handleOrientation);

      setTimeout(() => {
        if (!sensorAvailable) {
          requestOrientationPermission();
        }
      }, 500);

      return () => window.removeEventListener('deviceorientation', handleOrientation);
    }
  }, [isMobile, x, y, sensorAvailable]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ROTATION_RANGE - (mouseY / height) * ROTATION_RANGE - HALF_ROTATION_RANGE;
    const rY = (mouseX / width) * ROTATION_RANGE - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <section className="flex mt-10 sm:mt-20 justify-center items-center" >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out"
        }}
        className="container relative text-center w-fit sm:px-10 py-[3rem] z-0 rounded-xl bg-leaves bg-fixed bg-purple-100/10 backdrop-blur-[5px] mx-5 border-terciary-lighter/30 border-[1.8px]">

        <div
          className='w-full h-full  z-[2]'>
          <h1 
         style={{
          transform: "translateZ(500px)",
          transformStyle: "preserve-3d",
          textShadow: "0 0 10px rgba(255,255,255,0.3)"
        }}
          className={" font-[800] text-[2.5rem] transform-style-preserve-3d  text-white sm:text-4xl text-balance md:text-5xl lg:text-6xl mb-[1rem]"}>
            Llevá tu Negocio al Siguiente Nivel
          </h1>
          <h2 
          style={{
            transform: "translateZ(100px)",
            transformStyle: "preserve-3d",
            textShadow: "0 0 10px rgba(255,255,255,0.3)"
          }}
          className={" font-[500] text-white text-xl  max-w-lg mx-auto md:text-2xl px-2 text-center text-balance hyphens-auto "}>
            Páginas web y software empresarial
          </h2>
          <h3
           style={{
            transform: "translateZ(100px)",
            transformStyle: "preserve-3d",
            textShadow: "0 0 10px rgba(255,255,255,0.3)"
          }}
          className={" font-[500] text-white text-xl  max-w-lg mx-auto md:text-2xl px-2 text-center text-balance hyphens-auto mb-[2rem]"}>
            para impulsar tu empresa.
          </h3>
          <button 
          style={{
            transformStyle: "preserve-3d",
            textShadow: "0 0 10px rgba(255,255,255,0.3)",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
          className={" font-[800] bg-seconday-light   py-2 px-4 lg:mt-10 rounded-lg text-[1.5rem] sm:text-3xl hover:scale-110 hover:transition-all hover:shadow-lg hover:shadow-gray-600/50 transition-all ease-out"}>
            ¡Hacé tu consulta!
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default FirstSection



/* return (
  <section className="py-12  md:py-24 lg:py-32 flex items-center justify-center bg-transparent" >
    <div className="container relative text-center w-fit sm:px-10 py-[3rem] z-[1] rounded-xl bg-leaves bg-fixed bg-purple-100/10 backdrop-blur-[5px] mx-5">
      <h1 className={" font-[800] text-[2.5rem]   text-white sm:text-4xl text-balance md:text-5xl lg:text-6xl mb-[1rem]"}>
        Llevá tu Negocio al Siguiente Nivel
      </h1>
      <p className={" font-[500] text-white text-xl  max-w-lg mx-auto md:text-2xl px-2 text-center text-balance hyphens-auto "}>
        Páginas web y software empresarial
      </p>
      <p className={" font-[500] text-white text-xl  max-w-lg mx-auto md:text-2xl px-2 text-center text-balance hyphens-auto mb-[2rem]"}>
        para impulsar tu empresa.
      </p>
      <button className={" font-[800] bg-seconday-light   py-2 px-4 lg:mt-10 rounded-lg text-[1.5rem] sm:text-3xl hover:scale-110 hover:transition-all hover:shadow-lg hover:shadow-gray-600/50 transition-all ease-out"}>
        ¡Hacé tu consulta!
      </button>
    </div>
  </section>
) */