import type { ChangeEvent, ReactNode } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export type CardState = 'default' | 'active' | 'error';

export interface CardProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  inputValue?: string;
  onInputValueChange?: (value: string) => void;
  errorText?: string;
  cancelLabel?: string;
  confirmLabel?: string;
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
  state?: CardState;
  className?: string;
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Card({
  icon,
  title,
  description,
  inputLabel,
  inputPlaceholder,
  inputValue,
  onInputValueChange,
  errorText,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  onClose,
  onCancel,
  onConfirm,
  state = 'default',
  className = '',
}: CardProps) {
  const isError = state === 'error';

  const classes = [
    'flex flex-col gap-[var(--spacing-600)] items-start w-[520px] max-w-[100vw] box-border',
    'bg-[var(--color-background-neutral-primary)] rounded-[var(--radius-2xl)] p-[var(--spacing-800)] shadow-[var(--shadow-xl)]',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputValueChange?.(event.target.value);
  };

  return (
    <div className={classes}>
      <div className="flex flex-col gap-[var(--spacing-400)] items-start w-full">
        <div className="flex flex-col gap-[var(--spacing-300)] items-start w-full">
          <div className="flex items-start justify-between w-full">
            {icon && (
              <span className="size-12 inline-flex shrink-0" aria-hidden="true">
                {icon}
              </span>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="size-6 inline-flex shrink-0 cursor-pointer items-center justify-center text-[color:var(--color-text-neutral-tertiary)]"
            >
              <CloseIcon />
            </button>
          </div>
          {(title || description) && (
            <div className="flex flex-col gap-[var(--spacing-100)] items-start w-full">
              {title && (
                <p className="w-full font-[family-name:var(--font-family-headings)] font-[var(--font-weight-semi-bold)] font-semibold text-[length:var(--font-size-heading-3)] leading-[var(--line-height-heading-3)] text-[color:var(--color-text-neutral-secondary)]">
                  {title}
                </p>
              )}
              {description && (
                <p className="w-full font-[family-name:var(--font-family-body)] font-[var(--font-weight-regular)] text-[length:var(--font-size-medium)] leading-[var(--line-height-medium)] text-[color:var(--color-text-neutral-primary)]">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
        <Input
          label={inputLabel}
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={handleInputChange}
          state={state}
          errorText={errorText}
        />
      </div>
      <div className="flex gap-[var(--spacing-400)] items-center w-full">
        <Button variant="secondary" size="lg" className="flex-1" onClick={onCancel}>
          {cancelLabel}
        </Button>
        <Button variant="primary" size="lg" className="flex-1" disabled={isError} onClick={onConfirm}>
          {confirmLabel}
        </Button>
      </div>
    </div>
  );
}

export default Card;
