import React from 'react';

import Dropdown from '@/Components/Dropdown';

const DropdownButton = ({
  trigger,
  buttonClass,
  content,
  contentClass,
  disabled,
}) => {
  return (
    <Dropdown className={buttonClass}>
      <Dropdown.Trigger disabled={disabled}>{trigger}</Dropdown.Trigger>

      {!disabled && (
        <Dropdown.Content className={contentClass}>{content}</Dropdown.Content>
      )}
    </Dropdown>
  );
};

export default DropdownButton;
