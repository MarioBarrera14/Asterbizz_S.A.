import React from 'react'

function ContactForm() {
  return (
    <div className="bg-secundario-light p-6 shadow-md bg-leaves bg-fixed bg-purple-100/10 backdrop-blur-[5px] rounded-xl border-terciary-lighter/30 border-[3px]">
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Nombre" className="w-full p-2  border-gray-300 rounded-lg bg-white/50 placeholder:text-black/50 border-terciary-lighter/30 border-[3px]" />
              <input type="email" placeholder="Email" className="w-full p-2  border-gray-300 rounded-lg bg-white/50 placeholder:text-black/50 border-terciary-lighter/30 border-[3px]" />
              <textarea placeholder="Mensaje" className="w-full p-2  bg-white/50 placeholder:text-black/50 border-terciary-lighter/30 border-[3px] resize-y rounded-lg" />
              <button type="submit" className="w-full bg-seconday text-white  sm:w-1/3 mx-auto py-2 px-4 rounded-lg">
                Enviar
              </button>
            </form>
          </div>
  )
}

export default ContactForm