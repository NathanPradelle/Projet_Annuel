

import logoImage from '@/../../public/favicon.png';
import React from 'react';
import { Link } from '@inertiajs/react';
import { t } from 'i18next';

import './NavBars.less';

const NavBars = () => {
  return (
    <div className="navBars">
      <div className="flex">
        <Link
            href={route('password.request')}
            className="navLink"
        >
          <img
            src={logoImage}
            alt="Logo"
          />
          {t('menu.home')}
        </Link>
      </div>
      <div className="flex">
          <Link
            href={route('password.request')}
            className="navLink"
          >
            {t('menu.unauthenticated.login')}
          </Link>
          <div></div> {/* There is something else to do the seperation thing */}
          <Link
            href={route('password.request')}
            className="navLink"
          >
            {t('menu.unauthenticated.signIn')}
          </Link>
      </div>
    </div>
  );
};

export default NavBars;
