import React from 'react';
import Link from "next/link";
import Image from 'next/image';
const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-2">
                <Image src="/svg/icon.svg" alt="Mail icon" width={28} height={28} className="mr-2" />
                <span>Asterbizz</span>
              </div>
            <p className="text-sm text-purple-200 text-center md:text-left">
              Soluciones de software y diseño web innovadoras
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link href="#" className="hover:text-purple-300 transition-colors">Desarrollo de Software</Link></li>
              <li><Link href="#" className="hover:text-purple-300 transition-colors">Diseño Web</Link></li>
              <li><Link href="#" className="hover:text-purple-300 transition-colors">Aplicaciones Móviles</Link></li>
              <li><Link href="#" className="hover:text-purple-300 transition-colors">Consultoría IT</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="hover:text-purple-300 transition-colors">
              <Image src="/svg/square_linkedin_icon.svg" alt="link" width={28} height={28} className="mr-2" />
                <span className="sr-only">Sitio Web</span>
              </Link>
              <Link href="#" className="hover:text-purple-300 transition-colors">
                
              <Image src="/svg/nubes.svg" alt="link" width={28} height={28} className="mr-2" />
                <span className="sr-only">Servicios en la Nube</span>
              </Link>
              <Link href="#" className="hover:text-purple-300 transition-colors">
                <Image src="/svg/mobils.svg" alt="link" width={28} height={28} className="mr-2" />
                <span className="sr-only">Aplicaciones Móviles</span>
              </Link>
              <Link href="#" className="hover:text-purple-300 transition-colors">
              <Image src="/svg/gmail.svg" alt="link" width={28} height={28} className="mr-2" />
                <span className="sr-only">Correo</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-600 mt-8 pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Asterbizz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
