import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';

import InputLabel from '@/Components/InputLabel';

import DropdownButton from '../Buttons/DropdownButton';

const InputList = ({ id, setValue, label, options, onChange, styles }) => {
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    setSelectedOption(options?.find((option) => !!option?.selected)?.label);
  }, [options]);

  const onClickChange = useCallback(
    (selected) => {
      setSelectedOption(selected.label);
      setValue(selected.value);
      onChange && onChange(selected);
    },
    [setValue]
  );

  return (
    <DropdownButton
      trigger={
        <>
          <InputLabel htmlFor={id} value={label} className={styles?.label} />
          <button id={id}>{selectedOption}</button>
        </>
      }
      content={options.map((option) => (
        <button
          key={option?.value}
          value={option?.value}
          onClick={() => onClickChange(option)}
          className={clsx('p-0_5', styles?.option)}
        >
          {option?.label}
        </button>
      ))}
    />
  );
};

export default InputList;
