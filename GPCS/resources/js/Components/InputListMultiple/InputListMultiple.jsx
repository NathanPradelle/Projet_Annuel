import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';

import InputLabel from '@/Components/InputLabel';

import DropdownButton from '../Buttons/DropdownButton';

const InputListMultiple = ({
  id,
  value,
  setData,
  label,
  placeholder,
  options,
  onChange,
  disabled,
  styles,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    setSelectedOptions(
      options?.filter((option) => value?.find((e) => option?.value === e.id))
    );
  }, [value, options]);

  const onClickChange = useCallback(
    (selected) => {
      let newSelectedOptions = selectedOptions;

      if (selectedOptions.find((e) => e.value == selected.value)) {
        newSelectedOptions = selectedOptions.filter(
          (e) => e.value != selected.value
        );
      } else {
        newSelectedOptions.push(selected);
      }

      setSelectedOptions(newSelectedOptions);
      setData(
        id,
        newSelectedOptions.map((e) => {
          return { id: e.value };
        })
      );
      onChange && onChange(newSelectedOptions);
    },
    [selectedOptions, setSelectedOptions, setData]
  );

  return (
    <>
      <DropdownButton
        disabled={disabled}
        trigger={
          <>
            <InputLabel htmlFor={id} value={label} className={styles?.label} />
            <button
              id={id}
              className={clsx(
                'border-1-black px-1 py-0_5 rounded-lg',
                disabled ? 'text-grey' : 'bg-white'
              )}
              type='button'
            >
              {placeholder || 'Sélection'}
            </button>
            <ul>
              {selectedOptions?.map((selecteds, key) => (
                <li key={key}>{selecteds.label}</li>
              ))}
            </ul>
          </>
        }
        content={options?.map((option, key) => (
          <button
            key={key}
            value={option?.value}
            onClick={() => onClickChange(option)}
            className={clsx('p-0_5', styles?.option)}
            type='button'
          >
            {option?.label}
          </button>
        ))}
      />
    </>
  );
};

export default InputListMultiple;