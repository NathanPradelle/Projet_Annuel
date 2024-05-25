import NavBars from '@/Components/NavBars';

const Authenticated = ({ header, children }) => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <nav className='bg-white border-b border-gray-100'>
        <NavBars />
      </nav>

      {header && (
        <header className='bg-white shadow'>
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
            {header}
          </div>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
};

export default Authenticated;
