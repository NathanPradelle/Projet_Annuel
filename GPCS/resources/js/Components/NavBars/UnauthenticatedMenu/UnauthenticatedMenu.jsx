import { t } from 'i18next';
import React from 'react';

import NavLink from '@/Components/NavBars/NavLink';

const UnauthenticatedMenu = () => {
  return (
    <div className='flex h-inherit'>
      <NavLink href={route('login')}>{t('menu.unauthenticated.login')}</NavLink>

      <hr />

      <NavLink href={route('register')}>
        {t('menu.unauthenticated.signIn')}
      </NavLink>
    </div>
  );
};

export default UnauthenticatedMenu;
