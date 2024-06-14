import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';

import InputLabel from '@/Components/InputLabel';

import DropdownButton from '../Buttons/DropdownButton';

const InputListMultiple = ({
  id,
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
    setSelectedOptions(options?.filter((option) => option?.selected));
  }, [options]);

  const onClickChange = useCallback(
    (selected) => {
      if (selectedOptions.find((e) => e.value == selected.value)) {
        setSelectedOptions(
          selectedOptions.filter((e) => e.value != selected.value)
        );
      } else {
        selectedOptions.push(selected);
      }

      setData(id, selectedOptions);
      onChange && onChange(selectedOptions);
    },
    [setData]
  );

  return (
    <>
      <DropdownButton
        disabled={disabled}
        trigger={
          <>
            <InputLabel htmlFor={id} value={label} className={styles?.label} />
            <button id={id} type='button'>
              {placeholder || '-'}
            </button>
          </>
        }
        content={options?.map((option) => (
          <button
            key={option?.value}
            value={option?.value}
            onClick={() => onClickChange(option)}
            className={clsx('p-0_5', styles?.option)}
            type='button'
          >
            {option?.label}
          </button>
        ))}
      />
      {selectedOptions?.map((selecteds) => (
        <div key={selecteds.key}>{selecteds.label}</div>
      ))}
    </>
  );
};

export default InputListMultiple;
