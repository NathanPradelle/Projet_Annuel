import { t } from 'i18next';

import SimpleButton from '@/Components/Buttons/SimpleButton';
import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import useColumns from './useColumns';

const TagsPage = ({ tags }) => {
  const columns = useColumns();

  return (
    <AuthenticatedLayout
      headTitle='Tags'
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          {t('tag.manage')}
        </h2>
      }
    >
      <div className='flex justify-end'>
        <SimpleButton to={route('tag.create')}>{t('tag.create')}</SimpleButton>
      </div>

      <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
        <Table
          columns={columns}
          data={tags?.data}
          placeholder={t('tag.noTags')}
        />
      </div>
    </AuthenticatedLayout>
  );
};

export default TagsPage;
