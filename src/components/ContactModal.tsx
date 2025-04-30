// components/ContactModal.tsx
'use client'

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactModal({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-lg bg-blue-950">
        <DialogHeader>
          <DialogTitle>Solicitar Cotizacion</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <Input type="text" placeholder="Nombre de la empresa" required/>
          <Input type="text" placeholder="Asunto" required />
          <Input type="tel" placeholder="Teléfono" required />
          <Textarea placeholder="Mensaje" rows={4} required />
          <Input type="file" accept=".pdf,.jpg,.png,.jpeg" />
          <Button type="submit" className="w-full">Enviar</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
