"use client"

import {Infobox} from "@/components/molecules/infobox";
import {Button} from "@/components/atoms";
import {useState} from "react";

export default function Page() {
  const [open, setOpen] = useState<boolean>(true)

  return(
    <div className="p-3 flex flex-col max-w-55 gap-3">
      <h1>Dashboard</h1>
      <Button label="Open infobox" onClick={() => setOpen(!open)} />
      <Infobox variant="green" title="Tittel på en infobox" description="Beskrivelse av en infobox" open={open} />
    </div>
  )
}
