import { Link } from '@inertiajs/react';
import clsx from 'clsx';

const NavLink = ({ href, className, children, ...props }) => {
  const isCurrentPage = window.location.href == href;

  return (
    <Link
      className={clsx(
        'nav-link',
        className,
        isCurrentPage && 'border-b-2 border-indigo-400 focus:border-indigo-700 '
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
