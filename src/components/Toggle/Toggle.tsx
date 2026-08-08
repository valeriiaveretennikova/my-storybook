import type { ButtonHTMLAttributes } from 'react';

/**
 * Storybook-only escape hatch: forces the hover/focus look without a real
 * pointer/keyboard interaction, so the state can be documented as its own story.
 */
export type ToggleForcedVisualState = 'hover' | 'focus';

export interface ToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'onClick' | 'type'> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  forceVisualState?: ToggleForcedVisualState;
}

const FOCUS_RING =
  'shadow-[0_0_0_var(--spacing-050)_var(--color-background-neutral-primary),0_0_0_var(--spacing-100)_var(--color-border-focus)]';
// Tailwind's JIT scanner needs the full "variant:class" token literally in source —
// concatenating the prefix at runtime would not be picked up by the scanner.
const FOCUS_VISIBLE_RING =
  'focus-visible:shadow-[0_0_0_var(--spacing-050)_var(--color-background-neutral-primary),0_0_0_var(--spacing-100)_var(--color-border-focus)]';

export function Toggle({
  checked,
  onCheckedChange,
  disabled = false,
  forceVisualState,
  className = '',
  ...rest
}: ToggleProps) {
  const trackColorClass = disabled
    ? checked
      ? 'bg-[var(--color-background-accent-disable)]'
      : 'bg-[var(--color-background-neutral-disable)]'
    : checked
      ? 'bg-[var(--color-background-accent-primary)] hover:bg-[var(--color-background-accent-primary-hover)]'
      : 'bg-[var(--color-background-neutral-inverse)] hover:bg-[var(--color-background-neutral-inverse-hover)]';

  const thumbColorClass = disabled
    ? 'bg-[var(--color-icon-neutral-disable)]'
    : 'bg-[var(--color-icon-neutral-inverse)]';

  const trackClasses = [
    'relative inline-flex h-6 w-10 shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out',
    'outline-none',
    FOCUS_VISIBLE_RING,
    disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    trackColorClass,
    forceVisualState === 'focus' && FOCUS_RING,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const thumbClasses = [
    'inline-block size-5 shrink-0 rounded-full transition-transform duration-200 ease-in-out',
    checked ? 'translate-x-4' : 'translate-x-0',
    thumbColorClass,
  ].join(' ');

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={trackClasses}
      {...rest}
    >
      <span className={thumbClasses} />
    </button>
  );
}

export default Toggle;
