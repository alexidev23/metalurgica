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
    <header className="fixed md:sticky top-0 z-50 w-full flex justify-center bg-[#02182B] backdrop-blur supports-[backdrop-filter]:bg-[#02182B]/60">
      <div className="container flex h-16 items-center justify-between pr-6">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/icono-talller.svg" alt="Logo" width={120} height={120} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6 lg:gap-4">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#sobrenosotros" className="text-sm font-medium transition-colors hover:text-primary">
            Sobre Nosotros
          </Link>
          <Link href="#servicios" className="text-sm font-medium transition-colors hover:text-primary">
            Servicios
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/contacto">Solicitar Presupuesto</Link>
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
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#sobrenosotros"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link
                href="#servicios"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Button asChild className="mt-4">
                <Link href="/contacto" onClick={() => setIsOpen(false)}>
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