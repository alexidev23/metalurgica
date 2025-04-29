function SobreNosotros () {
  return (
    <div id="sobrenosotros" className="flex flex-col items-center py-36 bg-[#02182B]">
      <h2 className="font-bold text-4xl uppercase">Sobre Nosotros</h2>
      <div className="flex flex-col md:flex-row items-center xl:px-28 mt-14 md:mt-20 gap-10 w-full">
        <div>
          <p className="text-md text-white px-8 w-[700px]">
            En Metalúrgica Escobar, la pasión por el metal corre por nuestras venas. Somos una empresa familiar con más de 20 años de experiencia, donde cada pieza que fabricamos cuenta una historia de esfuerzo, precisión y orgullo por el trabajo bien hecho.
          </p>
          <p className="text-md text-white px-8 w-[700px] mt-1.5">
          Desde nuestro taller en Barrio Residencial América, Córdoba, damos vida a engranajes, rectificados, piezas especiales, mortajados y mucho más, con una combinación única de tecnología, artesanía y dedicación total.
          </p>
          <p className="text-md text-white px-8 w-[700px] mt-1.5">
            ¿Por qué elegirnos?
          </p>
          <p className="text-md text-white px-8 w-[700px] mt-1.5">
            Porque acá no sos un número. Te escuchamos, te asesoramos y nos comprometemos con tu proyecto como si fuera propio. Apostamos por la calidad real, la respuesta rápida y una atención personalizada que hoy en día es difícil de encontrar.
          </p>
          <p className="text-md text-white px-8 w-[700px] mt-1.5">
            Confianza, experiencia y resultados que se notan.
          </p>
          <p className="text-md text-white px-8 w-[700px] mt-1.5">
            Eso es Metalúrgica Escobar.
          </p>
          <p className="text-md text-white px-8 w-[700px] mt-1.5">
            ¡Consultanos sin compromiso y llevá tu idea al próximo nivel!
          </p>
        </div>

        <div className="w-full h-full">
          <img src="/taller-frente.jpg" alt="" width={150} height={50} className="h-full w-full" />
        </div>
      </div>
    </div>
  )
}

export default SobreNosotros;