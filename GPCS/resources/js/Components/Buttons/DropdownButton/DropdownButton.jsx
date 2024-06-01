import React from 'react';

import Dropdown from '@/Components/Dropdown';

const DropdownButton = ({ trigger, buttonClass, content, contentClass }) => {
  return (
    <Dropdown className={buttonClass}>
      <Dropdown.Trigger>{trigger}</Dropdown.Trigger>

      <Dropdown.Content className={contentClass}>{content}</Dropdown.Content>
    </Dropdown>
  );
};

export default DropdownButton;
