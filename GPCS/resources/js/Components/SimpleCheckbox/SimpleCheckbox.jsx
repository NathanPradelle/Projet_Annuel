import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';

import Checkbox from '../Checkbox';

const SimpleCheckbox = ({
  id,
  className,
  value,
  label,
  onChange,
  errorMessage,
}) => {
  return (
    <div className={className}>
      <InputLabel htmlFor={id} value={label} />

      <Checkbox id={id} checked={value} onChange={onChange} />

      <InputError message={errorMessage} />
    </div>
  );
};

export default SimpleCheckbox;
