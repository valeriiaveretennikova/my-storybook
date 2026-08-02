import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant = 'primary' | 'secondary';

/**
 * Storybook-only escape hatch: forces the hover look without a real pointer
 * interaction, so the state can be documented as its own story.
 */
export type ButtonForcedVisualState = 'hover';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  forceVisualState?: ButtonForcedVisualState;
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'gap-[var(--spacing-100)] px-[var(--spacing-400)] py-[var(--spacing-200)] text-[length:var(--font-size-small)] leading-[var(--line-height-small)]',
  md: 'gap-[var(--spacing-100)] px-[var(--spacing-600)] py-[var(--spacing-300)] text-[length:var(--font-size-medium)] leading-[var(--line-height-medium)]',
  lg: 'gap-[var(--spacing-100)] px-[var(--spacing-800)] py-[var(--spacing-400)] text-[length:var(--font-size-medium)] leading-[var(--line-height-medium)]',
};

const VARIANT_CLASSES: Record<
  ButtonVariant,
  { base: string; interactive: string; forcedState: string; disabled: string }
> = {
  primary: {
    base: 'bg-[var(--color-background-accent-primary)] text-[color:var(--color-text-neutral-inverse)]',
    interactive: 'hover:bg-[var(--color-background-accent-primary-hover)]',
    forcedState: 'bg-[var(--color-background-accent-primary-hover)]',
    disabled: 'bg-[var(--color-background-neutral-tertiary)] text-[color:var(--color-text-neutral-tertiary)]',
  },
  secondary: {
    base: 'border border-[var(--color-border-accent-secondary)] bg-[var(--color-background-neutral-secondary)] text-[color:var(--color-text-neutral-secondary)]',
    interactive:
      'hover:border-[var(--color-border-neutral-secondary)] hover:bg-[var(--color-background-neutral-secondary-hover)]',
    forcedState: 'border-[var(--color-border-neutral-secondary)] bg-[var(--color-background-neutral-secondary-hover)]',
    disabled: 'border-[var(--color-border-neutral-secondary)] bg-transparent text-[color:var(--color-text-neutral-tertiary)]',
  },
};

export function Button({
  children,
  variant = 'primary',
  size = 'lg',
  disabled = false,
  forceVisualState,
  className = '',
  ...rest
}: ButtonProps) {
  const variantClasses = VARIANT_CLASSES[variant];

  const classes = [
    'inline-flex items-center justify-center whitespace-nowrap',
    'rounded-[var(--radius-200)] font-[family-name:var(--font-family-body)] font-semibold transition-colors',
    variantClasses.base,
    !disabled && `cursor-pointer ${variantClasses.interactive}`,
    forceVisualState && variantClasses.forcedState,
    disabled && `cursor-not-allowed ${variantClasses.disabled}`,
    SIZE_CLASSES[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" disabled={disabled} className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
