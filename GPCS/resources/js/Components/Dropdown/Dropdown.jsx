import './Dropdown.less';

import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { createContext, Fragment, useContext, useState } from 'react';

const DropDownContext = createContext();

const Dropdown = ({ className, children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };

  return (
    <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
      <div className={clsx('dropdown', className)}>{children}</div>
    </DropDownContext.Provider>
  );
};

const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);

  return (
    <>
      <div onClick={toggleOpen}>{children}</div>

      {/* open && <div onClick={() => setOpen(false)}></div> close when you click eslewhere, to fix*/}
    </>
  );
};

const Content = ({ className, children }) => {
  const { open, setOpen } = useContext(DropDownContext);

  return (
    <>
      <Transition
        as={Fragment}
        show={open}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <div
          className={clsx('dropdownContent', className)}
          onClick={() => setOpen(false)}
        >
          {children}
        </div>
      </Transition>
    </>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;

export default Dropdown;
