import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

function PlaceholderIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 13l4-4 3 3 4-5 3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label rendered above the field.',
    },
    placeholder: {
      control: 'text',
      description: 'Native placeholder text shown inside the field.',
    },
    icon: {
      control: false,
      description: 'Optional leading icon rendered inside the field.',
    },
    helpText: {
      control: 'text',
      description: 'Help text rendered below the field. Hidden when `state` is `error`.',
    },
    errorText: {
      control: 'text',
      description: 'Error message shown below the field when `state` is `error`.',
    },
    state: {
      control: 'radio',
      options: ['default', 'active', 'disabled', 'error'],
      description: 'Visual state from the Figma component.',
    },
  },
  args: {
    label: 'Input label',
    placeholder: 'Placeholder text',
    icon: <PlaceholderIcon />,
    helpText: 'Help text',
    errorText: 'Error text',
    state: 'default',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: { state: 'active' },
};

export const Disabled: Story = {
  args: { state: 'disabled' },
};

export const ErrorState: Story = {
  name: 'Error',
  args: { state: 'error' },
};
