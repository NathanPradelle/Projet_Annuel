import clsx from 'clsx';
import { useEffect, useRef } from 'react';

const TextInput = ({ type = 'text', className, isFocused, ...props }, ref) => {
  const input = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      input?.current?.focus();
    }
  }, []);

  return (
    <input
      {...props}
      type={type}
      className={clsx(
        'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ',
        className
      )}
    />
  );
};

export default TextInput;
