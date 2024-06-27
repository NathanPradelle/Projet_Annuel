import { useMemo } from 'react';

const Table = ({ columns, data }) => {
  const cols = useMemo(() => columns, []);
  return (
    <div className='flex overflow-x-scroll'>
      <table className='flex-1 bg-white shadow-md rounded'>
        <thead>
          <tr>
            {cols.map((col) => (
              <th
                key={col?.field}
                className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                {col?.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {data.map((element) => (
            <tr key={element.key}>
              {cols.map((col) => (
                <td key={col?.field} className='px-6 py-4 whitespace-nowrap'>
                  {col?.renderCell(element)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
