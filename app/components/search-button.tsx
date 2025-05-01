"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import SearchDialog from "./search-dialog"

export default function SearchButton() {
  const [isOpen, setIsOpen] = useState(false)

  // Adicionar manipulador de tecla para abrir a pesquisa com Ctrl+K ou Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="w-full justify-between text-muted-foreground sm:w-64 lg:w-80"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center">
          <Search className="mr-2 size-4" />
          <span>Buscar...</span>
        </div>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <SearchDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  )
}
