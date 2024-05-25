import { t } from 'i18next';
import React from 'react';

import NavLink from '@/Components/NavBars/NavLink';

const AuthenticatedMenu = () => {
  return (
    <>
      <NavLink href={route('password.request')}>
        {t('menu.unauthenticated.login')}
      </NavLink>

      <hr />

      <NavLink href={route('password.request')}>
        {t('menu.unauthenticated.signIn')}
      </NavLink>
    </>
  );
};

export default AuthenticatedMenu;
