"use client"

import {Infobox} from "@/components/molecules/infobox";
import {Button} from "@/components/atoms";
import {useState} from "react";
import {Modal, ModalAction, ModalCancel, ModalContent, ModalFooter, ModalHeader, ModalTitle, ModalTrigger} from "@/components/organisms";
import {Input} from "@/components/atoms/input/input";
import {Textarea} from "@/components/atoms/textarea";

export default function Page() {
  const [open, setOpen] = useState<boolean>(true)

  return(
    <div className="p-3 flex flex-col max-w-200 gap-3">
      <h1>Dashboard</h1>
      <Button label="Open infobox" onClick={() => setOpen(!open)} />
      <Infobox variant="green" title="Tittel på en infobox" description="Beskrivelse av en infobox" open={open} />

      <Input placeholder="Søk på hele siden..." />

      <Textarea  placeholder="Skriv en beskrivelse for prosjektet" />


      <Modal>
        <ModalTrigger>
          <Button label="Open infobox" />
        </ModalTrigger>
        <ModalContent size="lg" className="flex flex-col gap-3">
          <ModalHeader>
            <ModalTitle>Are you absolutely sure?</ModalTitle>
          </ModalHeader>
            <Infobox variant="green" title="Tittel på en infobox" description="Beskrivelse av en infobox" />

          <ModalFooter>
            <ModalCancel>Cancel</ModalCancel>
            <ModalAction>Continue</ModalAction>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/*
       <Modal title="" description="" open={open} showFooter >
        Content
       </Modal>
      */}
    </div>
  )
}
