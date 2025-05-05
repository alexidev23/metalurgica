import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Servicios from "@/components/Servicios";
import SobreNosotros from "@/components/SobreNosotros";

export default function Home() {
  return (
    <div>
      <div className="h-[35rem] md:h-[42rem] xl:h-screen w-full relative">
        <Header />
        <img src="/taller-frente.webp" alt="Taller" className="w-full h-full" />
        <div className="absolute top-48 bg-[#66a8daa8] w-full py-4 px-3.5 md:px-28 space-y-2">
          <h1 className="text-[#021531] font-bold text-3xl md:text-6xl w-36">METALURGICA ESCOBAR</h1>
          <p className="text-gray-50 w-full md:w-[600px] text-sm md:text-lg">Nos especializamos en mecanizados generales, fresados, torneados, mortajado, fabricación de engranajes y piezas especiales. Ofrecemos soluciones de alta precisión y calidad para la industria.</p>
        </div>
      </div>
      <SobreNosotros />
      <Servicios />
      <Footer />
    </div>
  );
}
