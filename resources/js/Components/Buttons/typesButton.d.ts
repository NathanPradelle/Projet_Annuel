export type ButtonColor = 'beige' | 'other';

export interface ButtonProps {
  color: ButtonColor;
  className?: string | null;
  disabled?: boolean | null;
  loading?: boolean | null;
  to?: string | null;
  tag: 'button' | 'a';
}
