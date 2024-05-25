import NavBars from '@/Components/NavBars/NavBars';

import './GuestLayout.less';

const GuestLayout = ({ children }) => {
  return (
    <div className='guestLayout'>
      <NavBars />

      {children}
    </div>
  );
};

export default GuestLayout;
