import './NavBars.less';

import { t } from 'i18next';
import React from 'react';

import logoImage from '@/../../public/favicon.png';
import { MANAGER_PROFILES, PROFILE } from '@/Constants/profiles';
import { getCurrentUser, isUserAdmin, isUserManager } from '@/utils/user';

import DropMenu from './DropMenu/DropMenu';
import ManagerMenu from './ManagerMenu/ManagerMenu';
import NavLink from './NavLink';
import UnauthenticatedMenu from './UnauthenticatedMenu/UnauthenticatedMenu';

const NavBars = () => {
  const currentUser = getCurrentUser();

  return (
    <div className='nav-bars'>
      <div className='side'>
        <NavLink href='/'>
          <img src={logoImage} alt='Logo' />
          {t('menu.home')}
        </NavLink>

        {isUserManager(currentUser) &&
          MANAGER_PROFILES.includes(currentUser.profileInUse) && (
            <NavLink href='/'>{t('menu.myApartments')}</NavLink>
          )}
      </div>

      <div className='side'>
        {currentUser ? (
          <>
            {isUserManager(currentUser) &&
              MANAGER_PROFILES.includes(currentUser.profileInUse) && (
                <ManagerMenu />
              )}

            {isUserAdmin(currentUser) &&
              currentUser.profileInUse == PROFILE.ADMIN && (
                <NavLink href={route('users.admin')}>
                  {t('menu.admin.managers')}
                </NavLink>
              )}

            <DropMenu />
          </>
        ) : (
          <UnauthenticatedMenu />
        )}
      </div>
    </div>
  );
};

export default NavBars;
