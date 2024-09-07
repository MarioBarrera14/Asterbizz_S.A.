import React from 'react'
import Image from 'next/image'

function ContactSection() {
  return (
    <div className="bg-secundario-light p-6  shadow-md bg-leaves bg-fixed bg-purple-100/10 backdrop-blur-[5px] rounded-xl border-terciary-lighter/30 border-[3px]">
            <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center mb-2">
                <Image src="/phone.svg" alt="Phone icon" width={24} height={24} className="mr-2" />
                <span>[tu número de teléfono]</span>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/mail.svg" alt="Mail icon" width={24} height={24} className="mr-2" />
                <span>[tu correo electrónico]</span>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/link.svg" alt="Link icon" width={24} height={24} className="mr-2" />
                <span>[tu sitio web]</span>
              </div>
            </div>
          </div>
  )
}

export default ContactSection