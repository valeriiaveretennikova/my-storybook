import { useId, type InputHTMLAttributes, type ReactNode } from 'react';

export type InputState = 'default' | 'active' | 'disabled' | 'error';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled'> {
  label?: string;
  icon?: ReactNode;
  helpText?: string;
  errorText?: string;
  state?: InputState;
}

function ErrorIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 4.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="11" r="0.75" fill="currentColor" />
    </svg>
  );
}

const STATE_CLASSES: Record<InputState, string> = {
  default:
    'bg-[var(--color-background-neutral-primary)] border-[length:var(--border-width-050)] border-[var(--color-border-neutral-primary)]',
  active:
    'bg-[var(--color-background-neutral-primary)] border-[length:var(--border-width-100)] border-[var(--color-border-accent-primary)]',
  disabled:
    'bg-[var(--color-background-neutral-tertiary)] border-[length:var(--border-width-050)] border-[var(--color-border-neutral-secondary)]',
  error:
    'bg-[var(--color-background-error-primary)] border-[length:var(--border-width-100)] border-[var(--color-border-error-primary)]',
};

export function Input({
  label,
  icon,
  helpText,
  errorText,
  state = 'default',
  id,
  className = '',
  ...rest
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const isDisabled = state === 'disabled';
  const isError = state === 'error';

  const textColorClass = isDisabled
    ? 'text-[color:var(--color-text-neutral-tertiary)]'
    : 'text-[color:var(--color-text-neutral-primary)]';
  const placeholderColorClass = isDisabled
    ? 'placeholder:text-[color:var(--color-text-neutral-tertiary)]'
    : 'placeholder:text-[color:var(--color-text-neutral-secondary)]';

  const containerClasses = [
    'flex items-center gap-[var(--spacing-200)] w-full',
    'rounded-[var(--radius-200)] border-solid p-[var(--spacing-300)] transition-colors',
    STATE_CLASSES[state],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="flex flex-col gap-[var(--spacing-150)] w-full">
      {label && (
        <label
          htmlFor={inputId}
          className={`w-full font-[family-name:var(--font-family-body)] font-[var(--font-weight-regular)] text-[length:var(--font-size-small)] leading-[var(--line-height-small)] ${textColorClass}`}
        >
          {label}
        </label>
      )}
      <div className={containerClasses}>
        {icon && (
          <span className={`size-5 inline-flex shrink-0 ${textColorClass}`} aria-hidden="true">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          disabled={isDisabled}
          className={`min-w-0 flex-1 bg-transparent font-[family-name:var(--font-family-body)] font-[var(--font-weight-regular)] text-[length:var(--font-size-medium)] leading-[var(--line-height-medium)] focus:outline-none disabled:cursor-not-allowed ${textColorClass} ${placeholderColorClass}`}
          {...rest}
        />
      </div>
      {isError
        ? errorText && (
            <div className="flex items-center gap-[var(--spacing-100)] w-full">
              <span className="size-4 inline-flex shrink-0 text-[color:var(--color-text-error-primary)]" aria-hidden="true">
                <ErrorIcon />
              </span>
              <p className="flex-1 font-[family-name:var(--font-family-body)] font-[var(--font-weight-regular)] text-[length:var(--font-size-label)] leading-[var(--line-height-label)] text-[color:var(--color-text-error-primary)]">
                {errorText}
              </p>
            </div>
          )
        : helpText && (
            <p className="w-full font-[family-name:var(--font-family-body)] font-[var(--font-weight-regular)] text-[length:var(--font-size-label)] leading-[var(--line-height-label)] text-[color:var(--color-text-neutral-secondary)]">
              {helpText}
            </p>
          )}
    </div>
  );
}

export default Input;
