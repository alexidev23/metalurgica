'use client'

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { toast } from "sonner"

export default function ContactModal({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Mensaje enviado correctamente")
        form.reset()
        setOpen(false)
      } else {
        toast.error("No se pudo enviar el mensaje")
      }
    } catch (error) {
      toast.error("Hubo un error al enviar el mensaje")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-lg bg-blue-950">
        <DialogHeader>
          <DialogTitle>Solicitar Cotización</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" type="text" placeholder="Nombre de la empresa" required />
          <Input name="subject" type="text" placeholder="Asunto" required />
          <Input name="phone" type="tel" placeholder="Teléfono" required />
          <Textarea name="message" placeholder="Mensaje" rows={4} required />
          <Input name="file" type="file" accept=".pdf,.jpg,.png,.jpeg" />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
