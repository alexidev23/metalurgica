"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TrabajoProps {
  id: string | number
  img: string
  nombre: string
  descripcion: string
}

export function CardServicios({ trabajos }: { trabajos: TrabajoProps }) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden rounded-md p-0 border-0 w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px] xl:max-w-[500px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsHovering(!isHovering)}
    >
      <CardContent className="p-0 relative">
        <div className="relative w-full h-[200px] sm:h-[220px] md:h-[230px] xl:h-[250px]">
          <Image
            src={trabajos.img || "/placeholder.svg"}
            alt={trabajos.nombre}
            fill
            className={cn("object-cover transition-transform duration-300", isHovering ? "scale-105" : "")}
          />
        </div>

        <div className="absolute inset-0 bg-gray-600/55 flex flex-col justify-end">
          {/* Contenedor para el título y la descripción con transición */}
          <div className="flex flex-col w-full overflow-hidden">
            {/* Título que se desplaza hacia arriba en hover */}
            <h3
              className={cn(
                "font-bold text-xl sm:text-2xl text-white bg-blue-300/45 w-full p-3 sm:p-4 text-end transition-transform duration-300",
                isHovering ? "-translate-y-full opacity-0" : "translate-y-0",
              )}
            >
              {trabajos.nombre}
            </h3>

            {/* Descripción que aparece en hover */}
            <div
              className={cn(
                "absolute bottom-0 left-0 right-0 bg-gray-800/80 p-3 sm:p-4 text-white transform transition-all duration-300",
                isHovering ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
              )}
            >
              <h3 className="font-bold text-xl sm:text-2xl mb-2">{trabajos.nombre}</h3>
              <p className="text-sm sm:text-base">{trabajos.descripcion}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}