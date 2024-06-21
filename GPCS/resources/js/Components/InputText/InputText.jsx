import clsx from 'clsx';
import { useEffect, useRef } from 'react';

const InputText = (
  { id, type = 'text', className, isFocused, disabled, ...props },
  ref
) => {
  const input = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      input?.current?.focus();
    }
  }, []);

  return (
    <input
      id={id}
      name={id}
      type={type}
      className={clsx(
        'border-1-grey focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ',
        disabled ? 'text-grey bg-transparent' : 'bg-white',
        className
      )}
      {...props}
    />
  );
};

export default InputText;
