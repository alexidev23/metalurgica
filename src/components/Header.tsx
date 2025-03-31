"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#02182B] backdrop-blur supports-[backdrop-filter]:bg-[#02182B]/60">
      <div className="container flex h-16 px-4 md:px-0 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image src="/icono-talller.svg" alt="Logo" width={100} height={100} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6 lg:gap-10">
          <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
            Servicios
          </Link>
          <Link href="#products" className="text-sm font-medium transition-colors hover:text-primary">
            Productos
          </Link>
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            Nosotros
          </Link>
          <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
            Proyectos
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contacto
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button asChild>
            <Link href="#quote">Solicitar Presupuesto</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden bg-[#02182B]">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px] bg-[#02182B]">
            <div className="flex flex-col gap-6 px-2 py-6">
              <Link
                href="#services"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#products"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Productos
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Button asChild className="mt-4">
                <Link href="#quote" onClick={() => setIsOpen(false)}>
                  Solicitar Presupuesto
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header;