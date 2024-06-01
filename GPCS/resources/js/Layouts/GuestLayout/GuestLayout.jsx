import './GuestLayout.less';

import NavBars from '@/Components/NavBars/NavBars';

const GuestLayout = ({ children }) => {
  return (
    <div className='guestLayout'>
      <NavBars />

      {children}
    </div>
  );
};

export default GuestLayout;
