import ContactModal from "./ContactModal";
import { CardServicios } from "./Servicios/CardServicios";


function Servicios () {
  const trabajos= [
    {
      id: 1,
      nombre: 'Torno',
      descripcion: 'Distancia entre puntas: 3000mm - Max. toneable s/bancada: 500mm - Max. torneable s/carro: 300mm - Max. torneable s/escote: 710mm - Cono del husillo: MTN°6 - Diametro del pasaje husillo: 82/105mm - Velocidad del husillo: 9-1600rpm - Diametro manga contrapunta: 75mm - Cono de la contrapunta: MTN°5 - Potencia del motor: 10/15 Opc HP.',
      img: '/maquinas/torno-1.webp',
    },
    {
      id: 2,
      nombre: 'Torno',
      descripcion: 'Distancia entre puntas: 2000mm - Torneable s/bancada: 660mm - Torneable s/carro: 440mm - Torneable s/escote: 870mm - Diametro pasaje husillo: 82/105mm - Velocidades husillo: 6-1120rpm - Rango avances longitudinales: 0,063-6,43mm/rev. - Rango avances transversales: 0,027-2,73mm/rev - Pasos de rocas: metricas(1-224mm), pulgadas(28-1/8tpi.), modulo(0,5-112mm), diametral Pitch(56-1/4DP) - Potencia del motor: 10/15hp',
      img: '/maquinas/torno-2.webp',
    },
    {
      id: 3,
      nombre: 'Amortajadora',
      descripcion: 'Longitud del amortajado: 320mm - Diametro de la mesa: 630mm - Inclinacion del cabezal: 0-8° - Recorrido long. Mesa: 630mm - Recorrido trans. mesa: 560mm - Ajuste vertical del torpedo: 315mm - Golpes por minuto: (4)20/80 - Potencia del motor: 5,5hp.',
      img: '/maquinas/mortajadora.webp',
    },
    {
      id: 4,
      nombre: 'Fresadora',
      descripcion: 'Medidas de la mesa: 360x1370mm - Recorrido longitudinal(x): 1000mm - Recorrido transversal(y): 500mm - Recorrido vertical(z): 470mm - Recorrido del husillo: 150mm - Veloc. Husillo(variable): 70-3600rpm - Cono del husillo: ISO40 - Potencia del motor: 5hp.',
      img: '/maquinas/fresa.webp',     
    },
    {
      id: 5,
      nombre: 'Fresadora',
      descripcion: 'Dimensiones de la mesa: 1150x300mm - Recorrido longitudinal: 690mm - Recorrido vertical: 400mm - Recorrido transversal de la mesa: 235mm - Cono husillo principal: ISO40 - Veloc. husillo principal: 30/1600rpm - Potencia del motor: 7hp. ',
      img: '/maquinas/fresa-1.webp',     
    },
    {
      id: 6,
      nombre: 'Creadora',
      descripcion: 'Max. modulo: 10mm - Max. recorrido vertical: 320mm - Diametro de la mesa: 660mm - Diametro agureo de la mesa: 80mm - Cono del husillo: Morse N° 5 - Rango avances axiales: 0,32-3,15(11)mm/min - Potencia total instalada: 10hp.',
      img: '/maquinas/creadora.webp',
    },
    {
      id: 7,
      nombre: 'Rectificadora',
      descripcion: '',
      img: '/maquinas/pulidora-2.webp',
    },
    {
      id: 8,
      nombre: 'Rectificadora Tangencial',
      descripcion: 'Dimensiones de la mesa: 800x400mm - Recorrido long. aut. mesa: 930mm - Recorrido trans. aut. cabezal: 450mm - Recorrido vertical rapido: 300mm/min - Velocidades husillo: 1450rpm - Potencia: 11hp ',
      img: '/maquinas/pulidora.webp',
    },
    {
      id: 9,
      nombre: 'Serrucho',
      descripcion: '',
      img: '/maquinas/cerrucho.webp',
    }
  ]

  return (
    <div id="servicios" className="flex flex-col items-center py-20 bg-[#02182B] text-white">            
      <h2 className="font-bold text-4xl uppercase">Servicios</h2>
      <div className="w-full xl:w-[1100px] flex flex-col justify-center items-center md:flex-row md:flex-wrap mt-10 gap-4">
        {trabajos.map((trabajos) => (
          <CardServicios 
            key={trabajos.id} trabajos={trabajos}
          />
        ))}
      </div>
      <div className="w-[340px] xl:w-[500px] flex justify-center items-center my-10">
        <ContactModal trigger={<button className='border px-16 py-2.5 rounded-4xl bg-white text-black font-semibold text-lg cursor-pointer transition-all duration-200 hover:bg-gray-300 hover:text-gray-800'>Solicitar Cotizacion</button>} />
      </div> 
    </div>
  )
}

export default Servicios;
