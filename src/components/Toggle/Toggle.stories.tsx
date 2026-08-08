import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle, type ToggleProps } from './Toggle';

function ControlledToggle(args: ToggleProps) {
  const [checked, setChecked] = useState(args.checked);
  return <Toggle {...args} checked={checked} onCheckedChange={setChecked} />;
}

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Position from the Figma component: Off (false) / On (true).',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state — non-interactive, muted tokens. Takes priority over any other state.',
    },
    onCheckedChange: { table: { disable: true } },
    forceVisualState: {
      control: 'radio',
      options: [undefined, 'hover', 'focus'],
      description: 'Storybook-only: forces the hover/focus look for static documentation.',
      table: { category: 'Storybook only' },
    },
  },
  args: {
    checked: false,
    disabled: false,
  },
  render: ControlledToggle,
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {};

export const On: Story = {
  args: { checked: true },
};

export const OffHover: Story = {
  name: 'Off / Hover',
  args: { forceVisualState: 'hover' },
  parameters: {
    docs: { description: { story: 'Simulated `:hover` background (forced, since docs render statically).' } },
  },
};

export const OnHover: Story = {
  name: 'On / Hover',
  args: { checked: true, forceVisualState: 'hover' },
  parameters: {
    docs: { description: { story: 'Simulated `:hover` background (forced, since docs render statically).' } },
  },
};

export const OffFocus: Story = {
  name: 'Off / Focus',
  args: { forceVisualState: 'focus' },
  parameters: {
    docs: { description: { story: 'Simulated `:focus-visible` ring (forced, since docs render statically).' } },
  },
};

export const OnFocus: Story = {
  name: 'On / Focus',
  args: { checked: true, forceVisualState: 'focus' },
  parameters: {
    docs: { description: { story: 'Simulated `:focus-visible` ring (forced, since docs render statically).' } },
  },
};

export const OffDisabled: Story = {
  name: 'Off / Disabled',
  args: { disabled: true },
};

export const OnDisabled: Story = {
  name: 'On / Disabled',
  args: { checked: true, disabled: true },
};
