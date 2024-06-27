import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

import DangerButton from '@/Components/Buttons/DangerButton';
import SecondaryButton from '@/Components/Buttons/SecondaryButton';
import DateInput from '@/Components/DateInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';

const BanUserForm = ({ userId, className = '' }) => {
  const [confirmingUserBan, setConfirmingUserBan] = useState(false);
  const {
    data,
    setData,
    get,
    post,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    user_id: userId,
    date_start: '',
    date_end: '',
    raison: '',
  });

  const confirmUserBan = () => {
    setConfirmingUserBan(true);
  };

  const banUser = (e) => {
    e.preventDefault();

    get(`/user/${userId}/ban`, {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onFinish: () => reset(),
    });
  };

  const closeModal = () => {
    setConfirmingUserBan(false);

    reset();
  };
  return (
    <section className={`space-y-6 ${className}`}>
      <DangerButton onClick={confirmUserBan}>Bannir</DangerButton>

      <Modal show={confirmingUserBan} onClose={closeModal}>
        <form onSubmit={banUser} className='p-6'>
          <div className='mt-6'>
            <InputLabel htmlFor='date_start' value='Start Date' />
            <DateInput
              id='start'
              name='start'
              value={data.date_start}
              onChange={(e) => setData({ ...data, date_start: e.target.value })}
              isFocused
            />
            <InputError message={errors.date_start} className='mt-2' />
          </div>
          <div className='mt-6'>
            <InputLabel htmlFor='date_end' value='End Date' />
            <DateInput
              id='end'
              name='end'
              value={data.date_end}
              onChange={(e) => setData({ ...data, date_end: e.target.value })}
              isFocused
            />
            <InputError message={errors.date_end} className='mt-2' />
          </div>
          <div className='mt-6'>
            <InputLabel htmlFor='raison' value='Raison' />
            <TextInput
              id='raison'
              name='raison'
              value={data.raison}
              onChange={(e) => setData('raison', e.target.value)}
              isFocused
              placeholder='raison'
            ></TextInput>
            <InputError></InputError>
          </div>

          <div className='mt-6 flex justify-end'>
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

            <DangerButton className='ms-3' disabled={processing}>
              Bannir {userId}
            </DangerButton>
          </div>
        </form>
      </Modal>
    </section>
  );
};

export default BanUserForm;
