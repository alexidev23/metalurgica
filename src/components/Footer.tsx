import { Mail, Mapa, Telefono } from "./Iconos/iconos";

function Footer () {
  return (
    <footer className="bg-gray-800 text-white pt-4 pb-12 text-center flex flex-col xl:flex-row justify-around gap-8 relative">
      {/* <p>© 2023 My Website. All rights reserved.</p> */}
      <div className="w-full xl:w-[700px] px-6 xl:px-0">
        <h4 className="font-bold text-3xl text-center">Informacion de contacto</h4>
        <div className="flex flex-col md:flex-row  items-center justify-center gap-2 my-2.5">
          <article className="flex items-center justify-center gap-1.5">
            <Telefono color="white" width={20} height={20} />
            <h6 className="text-md" >+54 0351-8806943</h6>
          </article>
          <article className="flex items-center justify-center gap-1.5">
            <Mail color="white" width={20} height={20} />
            <h6 className="text-md" >pescobarmetalurgica@gmail.com</h6>
          </article>
        </div>
        <div className="border-4 border-white w-full"></div>
        <div className="flex gap-1.5 flex-wrap">
          <span>Torneria</span>|<span>Fresados</span>|<span>Mortajadora</span>|<span>Creadora</span>|<span>Rectificadora</span>|<span>Cerrucho</span>|<span>Cerrucho</span>
        </div>
        <p className="absolute bottom-3 text-xs">© 2025 by <a href="https://github.com/alexidev23" target="_blank" rel="noopener noreferrer">alexidev23</a></p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <Mapa color="white" width={20} height={20} />
          <h6 className="font-semibold text-md" >Candido Galvan 655, Cordoba, Argentina</h6>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.4345154552802!2d-64.16656482534773!3d-31.374580394229906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329830eaf6c985%3A0x1e66dab1580c2cea!2sCandido%20Galvan%20655%2C%20X5012%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1743715077118!5m2!1ses!2sar" width="350" height="160" loading="lazy" className="rounded-xl" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
    </footer>
  )
}

export default Footer;