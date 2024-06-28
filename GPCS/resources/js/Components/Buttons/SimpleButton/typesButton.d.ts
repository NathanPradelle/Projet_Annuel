export type ButtonColor = 'beige' | 'other';

export interface ButtonProps {
  color: ButtonColor | null;
  className?: string | null;
  disabled?: boolean | null;
  loading?: boolean | null;
  to?: string | null;
}
