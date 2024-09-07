"use client";

import React, { useCallback, useEffect, useState } from "react"; // Importa los hooks y funciones de React
import dynamic from "next/dynamic"; // Importa la función `dynamic` de Next.js para carga dinámica de componentes
import { Container, Engine, ISourceOptions } from "@tsparticles/engine"; // Importa clases y tipos de tsParticles
import { initParticlesEngine } from "@tsparticles/react"; // Importa la función para inicializar el motor de partículas
import { loadSlim } from "@tsparticles/slim"; // Importa la función para cargar la configuración de partículas
import particleConfig from "@/lib/particle-config"; // Importa la configuración de partículas desde un archivo local

// Cargar el componente Particles de manera dinámica para evitar el renderizado en el servidor
const Particles = dynamic(() => import("@tsparticles/react").then(mod => mod.Particles), {
  ssr: false// Desactiva el renderizado del lado del servidor para este componente
});

const ParticleBackground: React.FC = () => { // Define el componente funcional ParticleBackground
  const [init, setParticlesLoaded] = useState(false); // Estado para rastrear si las partículas están cargadas

  // Inicializar tsParticles una vez que el componente esté montado
  useEffect(() => {
    const initializeParticles = async () => { // Función asíncrona para inicializar tsParticles
      try {
        const engine = await initParticlesEngine(async (engine: Engine) => { // Inicializa el motor de partículas
          await loadSlim(engine); // Carga la configuración de partículas
        });
        setParticlesLoaded(true); // Marca las partículas como cargadas
      } catch (error) {
        console.error("Error initializing tsParticles:", error); // Maneja cualquier error en la inicialización
      }
    };

    initializeParticles(); // Llama a la función para inicializar las partículas
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  // Define la función particlesLoaded con el tipo correcto
  const particlesLoaded = useCallback((container?: Container | undefined) => {
    return Promise.resolve(); // Devuelve una promesa resuelta
  }, []);

  return (
    <div className="absolute inset-0 z-[-1]"> {/* Define un contenedor para el fondo de partículas */}
      {init && ( // Renderiza el componente Particles solo si las partículas están cargadas
        <Particles
          id="tsparticles" // Identificador único para el componente Particles
          options={particleConfig as ISourceOptions} // Configuración de partículas
          particlesLoaded={particlesLoaded} // Función a llamar cuando las partículas se cargan
        />
      )}
    </div>
  );
};

export default ParticleBackground;