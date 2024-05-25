import React, { useState } from 'react';

import Dropdown from '@/Components/Dropdown';

const DropdownButton = ({ trigger, buttonClass, content, contentClass }) => {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <>
      <Dropdown className={buttonClass}>
        <Dropdown.Trigger>{trigger}</Dropdown.Trigger>

        <Dropdown.Content className={contentClass}>{content}</Dropdown.Content>
      </Dropdown>

      <div>
        <button
          onClick={() =>
            setShowingNavigationDropdown((previousState) => !previousState)
          }
        >
          <svg stroke='currentColor' fill='none' viewBox='0 0 24 24'>
            <path
              className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
            <path
              className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default DropdownButton;
