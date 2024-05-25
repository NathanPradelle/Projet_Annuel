import clsx from 'clsx';
import React from 'react';
import { Link } from '@inertiajs/react';

import './SimpleButton.less';

/**
 * @param {import('./typesButton').ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>} param0
 */
const SimpleButton = ({
  color = 'beige',
  className,
  children,
  disabled,
  loading,
  to,
  target,
  tag,
  ...props
}) => {
  const childrenRender = Array.isArray(children) ? (
    children.map((c) => (typeof c === 'string' ? <span key={c}>{c}</span> : c))
  ) : typeof children === 'string' ? (
    <span>{children}</span>
  ) : (
    children
  );

  const Tag = tag || 'button';

  const button = (
    <Tag
      className={clsx('gpcs-button', className, {
        disabled: disabled || loading,
        [color]: color,
        loading,
      })}
      {...props}
      type={props.type || 'button'}
      disabled={disabled || loading}
    >
      {loading && <CircularProgress size={20} className='absolute' />}
      {childrenRender}
    </Tag>
  );

  if (to) {
    return (
      <Link
        to={to}
        target={target}
        className='redirection-button-link'
        {...props}
      >
        {button}
      </Link>
    );
  }

  return button;
};

export default SimpleButton;
