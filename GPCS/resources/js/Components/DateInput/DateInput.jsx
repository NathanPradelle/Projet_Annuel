import clsx from 'clsx';
import { useEffect, useRef } from 'react';

const DateInput = (
  { type = 'date', className, isFocused, disabled, ...props },
  ref
) => {
  const input = ref ? ref : useRef();

  return (
    <input
      {...props}
      type={type}
      className={clsx(
        'border-1-grey focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm',
        disabled ? 'text-grey bg-transparent' : 'bg-white',
        className
      )}
      disabled={disabled}
    />
  );
};

export default DateInput;
