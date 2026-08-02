import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

function FolderIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="12" width="40" height="28" rx="6" fill="var(--color-background-accent-primary)" />
      <path d="M4 14a6 6 0 0 1 6-6h9l4 5h15a6 6 0 0 1 6 6v2H4v-7Z" fill="var(--color-background-accent-primary-hover)" />
    </svg>
  );
}

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: false,
      description: 'Optional icon rendered top-left of the card.',
    },
    title: {
      control: 'text',
      description: 'Heading text.',
    },
    description: {
      control: 'text',
      description: 'Supporting text rendered below the title.',
    },
    inputLabel: {
      control: 'text',
      description: 'Label for the embedded Input field.',
    },
    inputPlaceholder: {
      control: 'text',
      description: 'Placeholder for the embedded Input field.',
    },
    inputValue: {
      control: 'text',
      description: 'Controlled value for the embedded Input field.',
    },
    onInputValueChange: {
      control: false,
      description: 'Called with the new value when the embedded Input changes.',
    },
    errorText: {
      control: 'text',
      description: 'Error message shown below the field when `state` is `error`.',
    },
    cancelLabel: {
      control: 'text',
      description: 'Label for the secondary (Cancel) button.',
    },
    confirmLabel: {
      control: 'text',
      description: 'Label for the primary (Confirm) button. Disabled when `state` is `error`.',
    },
    onClose: {
      control: false,
      description: 'Called when the close (x) button is clicked.',
    },
    onCancel: {
      control: false,
      description: 'Called when the Cancel button is clicked.',
    },
    onConfirm: {
      control: false,
      description: 'Called when the Confirm button is clicked.',
    },
    state: {
      control: 'radio',
      options: ['default', 'active', 'error'],
      description: 'Visual state from the Figma component.',
    },
  },
  args: {
    icon: <FolderIcon />,
    title: 'Project created',
    description: 'Please enter a name for this project.',
    inputLabel: 'Project name',
    inputPlaceholder: 'e.g. Website design',
    inputValue: '',
    errorText: 'Please enter a project name',
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    state: 'default',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: { state: 'active', inputValue: 'Landing Page design' },
};

export const ErrorState: Story = {
  name: 'Error',
  args: { state: 'error' },
};
