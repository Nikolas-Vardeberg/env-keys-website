"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import {cn} from "@/utils/classes";
import {buttonVariants} from "@/components/atoms/button/button.variants";
import {ComponentProps} from "react";


const Modal = ({...props}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) => {
  return <AlertDialogPrimitive.Root {...props} />
}

const ModalTrigger = ({...props}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) => {
  return (
    <AlertDialogPrimitive.Trigger {...props} />
  )
}

const ModalPortal = ({...props}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) => {
  return (
    <AlertDialogPrimitive.Portal  {...props} />
  )
}

const ModalOverlay = ({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) => {
  return (
    <AlertDialogPrimitive.Overlay
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

type ModalContentProps = ComponentProps<typeof AlertDialogPrimitive.Content> & {
  size?: "sm" | "md" | "lg"
}

const ModalContent = ({ size, className, ...props }: ModalContentProps) => {
  return (
    <ModalPortal>
      <ModalOverlay />
      <AlertDialogPrimitive.Content
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg p-6 shadow-lg duration-200",
          size === "sm" && "sm:max-w-xl",
          size === "md" && "sm:max-w-2xl",
          size === "lg" && "sm:max-w-3xl",
          className
        )}
        {...props}
      />
    </ModalPortal>
  )
}

const ModalHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

const ModalFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

const ModalTitle = ({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Title>) => {
  return (
    <AlertDialogPrimitive.Title
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
}

const ModalDescription = ({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Description>) => {
  return (
    <AlertDialogPrimitive.Description
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

const ModalAction = ({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Action>) => {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}

const ModalCancel = ({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) => {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn("bg-red-300", buttonVariants({ variant: "primary" }), className)}
      {...props}
    />
  )
}

export {
  ModalCancel,
  Modal,
  ModalAction,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
  ModalPortal,
  ModalOverlay
}
