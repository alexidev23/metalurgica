function Servicios () {
  const trabajos= [
    {
      nombre: 'Torneria',
      descripcion: 'Descripción del servicio 1.',
      img: '/maquinas/torno-1.jpg',
    },
    {
      nombre: 'Mortajadora',
      descripcion: 'Descripción del servicio 2.',
      img: '/maquinas/mortajadora-1.jpg',
    },
    {
      nombre: 'Fresadora',
      descripcion: 'Descripción del servicio 3.',
      img: '/maquinas/fresa-1.jpg',     
    },
    {
      nombre: 'Servicio 4',
      descripcion: 'Descripción del servicio 4.',
      img: '/taller-frente.jpg',
    },
    {
      nombre: 'Servicio 5',
      descripcion: 'Descripción del servicio 5.',
      img: '/taller-frente.jpg',
    },
    {
      nombre: 'Servicio 6',
      descripcion: 'Descripción del servicio 6.',
      img: '/taller-frente.jpg',
    },
  ]

  return (
    <div className="flex flex-col items-center py-20 bg-[#02182B] text-white">            
      <h2 className="font-bold text-4xl uppercase">Servicios</h2>
      <div className="xl:w-[1100px] flex flex-col justify-center items-center md:flex-row md:flex-wrap mt-10 gap-4">
        {trabajos.map((trabajos) => (
          <div className="flex flex-col items-center px-4 xl:px-0 w-[340px] xl:w-[500px]">
            <img src={trabajos.img} alt={trabajos.nombre} className="w-full h-[200px] xl:w-[500px] xl:h-[250px]" />
            <h3 className="font-bold text-2xl mt-4">{trabajos.nombre}</h3>
            {/* <p className="text-gray-700">{trabajos.descripcion}</p>  */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicios;