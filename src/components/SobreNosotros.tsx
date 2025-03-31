function SobreNosotros () {
  return (
    <div className="flex flex-col items-center py-36 bg-[#02182B]">
      <h2 className="font-bold text-4xl uppercase">Sobre Nosotros</h2>
      <div className="flex flex-col md:flex-row xl:px-28 mt-14 md:mt-20 gap-10 w-full ">
        <p className="text-xl text-white px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel neque id felis ultricies imperdiet. Donec in orci vel justo consectetur lobortis.
        </p>
        <div className="w-full h-full md:h-[200px] md:w-[900px] md:pr-8 xl:h-[350px] xl:w-[900px]">
          <img src="/taller-frente.jpg" alt="" width={150} height={50} className="h-full w-full" />
        </div>
      </div>
    </div>
  )
}

export default SobreNosotros;