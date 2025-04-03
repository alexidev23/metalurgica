function Servicios () {
  const trabajos= [
    {
      id: 1,
      nombre: 'Torno',
      descripcion: 'Descripción del servicio 1.',
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
          <div key={trabajos.id} className="flex flex-col items-center xl:px-0 w-[340px] xl:w-[500px] relative rounded-md overflow-hidden">
            <img src={trabajos.img} alt={trabajos.nombre} className="w-full h-[200px] xl:w-[500px] xl:h-[250px]" />
            <div className="absolute bg-gray-600/55 h-full w-full text-end flex justify-end items-end">
              <h3 className="font-bold text-2xl mt-4 bg-blue-300/45 w-full p-4">{trabajos.nombre}</h3>
            </div>
            {/* <p className="text-gray-700">{trabajos.descripcion}</p>  */}
          </div>
        ))}
        <div className="w-[340px] xl:w-[500px]">
          boton
        </div>
      </div>
    </div>
  )
}

export default Servicios;