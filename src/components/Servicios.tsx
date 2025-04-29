import { CardServicios } from "./Servicios/CardServicios";


function Servicios () {
  const trabajos= [
    {
      id: 1,
      nombre: 'Torno',
      descripcion: 'Diámetro máximo de giro sobre bancada: ~400 mm - Longitud máxima entre puntos: ~1000 mm - Velocidades del husillo: 8 a 12 rangos, de 30 a 2000 rpm - Potencia del motor principal: ~5.5 kW (7.5 HP) - Tipo de roscas: Métricas, Whitworth, modulares y DP',
      img: '/maquinas/torno-1.jpg',
    },
    {
      id: 2,
      nombre: 'Mortajadora',
      descripcion: 'Descripción del servicio 2.',
      img: '/maquinas/mortajadora.jpg',
    },
    {
      id: 3,
      nombre: 'Fresadora',
      descripcion: 'Descripción del servicio 3.',
      img: '/maquinas/fresa-1.jpg',     
    },
    {
      id: 4,
      nombre: 'Creadora',
      descripcion: 'Descripción del servicio 4.',
      img: '/maquinas/creadora.jpg',
    },
    {
      id: 5,
      nombre: 'Rectificadora',
      descripcion: 'Descripción del servicio 5.',
      img: '/maquinas/pulidora-2.jpg',
    },
    {
      id: 6,
      nombre: 'Cerrucho',
      descripcion: 'Descripción del servicio 6.',
      img: '/maquinas/pulidora.jpg',
    },
    {
      id: 7,
      nombre: 'Cerrucho',
      descripcion: 'Descripción del servicio 6.',
      img: '/maquinas/cerrucho.jpg',
    }
  ]

  return (
    <div id="servicios" className="flex flex-col items-center py-20 bg-[#02182B] text-white">            
      <h2 className="font-bold text-4xl uppercase">Servicios</h2>
      <div className="xl:w-[1100px] flex flex-col justify-center md:flex-row md:flex-wrap mt-10 gap-4">
        {trabajos.map((trabajos) => (
          <CardServicios 
            key={trabajos.id} trabajos={trabajos}
          />
        ))}
      </div>
      <div className="w-[340px] xl:w-[500px] flex justify-center items-center my-10">
        <button className='border px-16 py-2.5 rounded-4xl bg-white text-black font-semibold text-lg cursor-pointer transition-all duration-200 hover:bg-gray-300 hover:text-gray-800'>Solicitar Cotizacion</button>
      </div>
    </div>
  )
}

export default Servicios;