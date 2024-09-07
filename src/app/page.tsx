import ContactForm from "@/components/MainSections/Contact/ContactForm";
import ContactSection from "@/components/MainSections/Contact/ContactSection";
import FirstSection from "@/components/MainSections/FirstSection";
import ServicesSection from "@/components/MainSections/ServicesSection";
export default function Home() {
  return (
    
    <main className="flex flex-col min-h-screen max-w-screen overflow-hidden bg-transparent ">

    <FirstSection/>

    <ServicesSection/>


    <section className="flex-1 py-12 md:py-24 lg:py-32 flex items-center justify-center bg-transparent ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8 sm:text-4xl md:text-5xl">
          Nuestros Proyectos
        </h2>
        <div className="flex w-full">
          {/* PROYECT CARDS ARRAY */}
        </div>
      </div>
    </section>
    <section className="flex-1 py-12 md:py-24 lg:py-32 flex items-center justify-center rounded-xl bg-primario-light/30  backdrop-blur-[3px] mb-10">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8 sm:text-4xl md:text-5xl">
          ¡Comienza Hoy y Ve la Diferencia!
        </h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          <ContactForm/>
          <ContactSection/>
        </div>
      </div>
    </section>
  </main>
  
  );
}
