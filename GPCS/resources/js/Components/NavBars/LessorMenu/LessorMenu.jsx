import { t } from 'i18next';
import React from 'react';

import NavLink from '@/Components/NavBars/NavLink';

const LessorMenu = () => {
  return (
    <>
      <NavLink href='/'>{t('menu.myApartments')}</NavLink>
    </>
  );
};

export default LessorMenu;
