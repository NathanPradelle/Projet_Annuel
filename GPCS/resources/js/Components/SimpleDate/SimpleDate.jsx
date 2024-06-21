import flatpickr from 'flatpickr';
import { useCallback } from 'react';

import InputError from '../InputError';
import InputLabel from '../InputLabel';
import InputText from '../InputText';

const SimpleDate = ({
  id,
  value,
  setData,
  label,
  minDate,
  maxDate,
  onChange,
  errorMessage,
  placeholder,
  disabled,
  required,
}) => {
  // .toISOString()
  const onChangeInput = useCallback(
    (dates) => {
      setData && setData(id, dates[0]);
      onChange && onChange(dates[0]);
    },
    [onChange, setData]
  );

  flatpickr(`#${id}`, {
    dateFormat: 'Y-m-d',
    minDate,
    maxDate,
    onChange: onChangeInput,
    // disable: [
    //   function (date) {
    //     return isInInterval(date, intervalles, fermetures);
    //   },
    // ],
  });

  return (
    <div>
      <InputLabel htmlFor={id} value={label} />

      <InputText
        id={id}
        name={id}
        type='date'
        value={value}
        onChange={onChangeInput}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />

      <InputError message={errorMessage} />
    </div>
  );
};

export default SimpleDate;
