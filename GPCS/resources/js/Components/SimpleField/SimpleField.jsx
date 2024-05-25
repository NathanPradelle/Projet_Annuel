import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

import './SimpleField.less';

const SimpleField = ({
  id,
  className,
  type,
  value,
  name,
  onChange,
  errorMessage,
  placeholder,
}) => {
  return (
    <div className={className}>
      <InputLabel htmlFor={id} value={name} />

      <TextInput
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      <InputError message={errorMessage} />
    </div>
  );
};

export default SimpleField;
