import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label content.',
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Visual style variant from the Figma component.',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant from the Figma component (sm 32px / md 44px / lg 52px).',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state — non-interactive, muted tokens.',
    },
    forceVisualState: {
      control: 'radio',
      options: [undefined, 'hover'],
      description: 'Storybook-only: forces the hover look for static documentation.',
      table: { category: 'Storybook only' },
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'lg',
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  args: { forceVisualState: 'hover' },
  parameters: {
    docs: { description: { story: 'Simulated `:hover` background (forced, since docs render statically).' } },
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Medium: Story = {
  args: { size: 'md' },
};

export const SecondaryDefault: Story = {
  name: 'Secondary',
  args: { variant: 'secondary' },
};

export const SecondaryHover: Story = {
  args: { variant: 'secondary', forceVisualState: 'hover' },
  parameters: {
    docs: { description: { story: 'Simulated `:hover` background/border (forced, since docs render statically).' } },
  },
};

export const SecondaryDisabled: Story = {
  args: { variant: 'secondary', disabled: true },
};

export const SecondarySmall: Story = {
  args: { variant: 'secondary', size: 'sm' },
};

export const SecondaryMedium: Story = {
  args: { variant: 'secondary', size: 'md' },
};
