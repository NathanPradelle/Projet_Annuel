import { t } from 'i18next';
import React from 'react';

import NavLink from '@/Components/NavBars/NavLink';

const UnauthenticatedMenu = () => {
  return (
    <>
      <NavLink href={route('login')}>{t('menu.unauthenticated.login')}</NavLink>

      <hr />

      <NavLink href={route('register')}>
        {t('menu.unauthenticated.signIn')}
      </NavLink>
    </>
  );
};

export default UnauthenticatedMenu;
