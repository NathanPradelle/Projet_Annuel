import React from 'react';

import DropdownButton from '@/Components/Buttons/DropdownButton';
import { getCurrentUser } from '@/utils/user';

import NavLink from '../NavLink';

const DropMenu = () => {
  const currentUser = getCurrentUser();

  return (
    <DropdownButton
      trigger={
        <button type='button' className='navLink'>
          {currentUser.name}

          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      }
      buttonClass='navLink'
      content={
        <>
          <NavLink href={route('profile.edit')}>Profile</NavLink>
          <NavLink href={route('logout')} method='post'>
            Log Out
          </NavLink>
        </>
      }
      contentClass='dropMenu'
    />
  );
};

export default DropMenu;
