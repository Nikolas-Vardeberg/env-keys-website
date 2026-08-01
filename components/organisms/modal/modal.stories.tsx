import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Modal,
  ModalAction,
  ModalCancel,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "./modal";
import {Button} from "@/components/atoms";

const meta = {
  title: "Organisms/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger>
        <Button label="Open modal" />
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Are you sure?</ModalTitle>
          <ModalDescription>
            This action cannot be undone. This will permanently delete the item
            from our servers.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalCancel>Cancel</ModalCancel>
          <ModalAction>Continue</ModalAction>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};
