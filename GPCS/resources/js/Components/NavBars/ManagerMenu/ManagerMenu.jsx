import { t } from 'i18next';
import React from 'react';

import NavLink from '@/Components/NavBars/NavLink';

const ManagerMenu = () => {
  return (
    <>
      <NavLink href={route('tag.index')}>{t('menu.admin.tags')}</NavLink>

      <hr />

      <NavLink href={route('users')}>{t('menu.admin.users')}</NavLink>
    </>
  );
};

export default ManagerMenu;
