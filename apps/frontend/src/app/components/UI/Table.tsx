import clsx from 'clsx';
import { ReactNode, FC } from 'react';
import { AiFillDelete, AiFillEdit, AiOutlineCaretRight } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';

interface TableProps {
  columns: {
    accessor: string;
    Header: string;
    render?: (row: any) => ReactNode;
  }[];
  data: any[];
  onEditClick: (row: any) => void;
  onDeleteClick: (row: any) => void;
}

const Table: FC<TableProps> = ({
  columns,
  data,
  onEditClick,
  onDeleteClick,
}) => {
  const idColumnIndex = columns.findIndex((column) => column.accessor === 'id');
  const visibleColumns = columns.filter((_, index) => index !== idColumnIndex);

  const columnsWithActions = [...visibleColumns];

  return (
    <table className="w-full table-auto overflow-hidden rounded-md ">
      <thead>
        <tr className="bg-c-2 sticky top-0">
          <th className=" p-2 pl-1 text-white">#</th>
          {columnsWithActions.map((column) => (
            <th
              key={column.accessor}
              className=" p-2 pl-2 text-left text-white"
            >
              {column.Header}
            </th>
          ))}
          <th className="p-4 text-white">Actions</th>
        </tr>
      </thead>
      <tbody className=" [&>*:nth-child(odd)]:bg-gray-200 [&>*:nth-child(even)]:bg-gray-300">
        {data.map((row, index) => (
          <tr className="" key={index}>
            <td className="text-center">
              <button>
                <AiOutlineCaretRight className="m-auto" />
              </button>
            </td>
            {columnsWithActions.map((column) => (
              <td key={column.accessor} className="p-2 pl-2 text-left">
                {column.render ? column.render(row) : row[column.accessor]}
              </td>
            ))}
            <td className="w-16 text-center">
              <div className="group relative  flex  items-center justify-center rounded text-white">
                <BiDotsVerticalRounded size={20} />
                <div className="invisible absolute z-10 flex w-14 rounded bg-gray-200 leading-tight shadow-lg duration-200 ease-in-out group-hover:visible">
                  <button
                    className="border-r-2 border-r-gray-300 p-1"
                    onClick={() => onEditClick(row)}
                  >
                    <AiFillEdit size={20} className="fill-green-600" />
                  </button>

                  <button className="p-1" onClick={() => onDeleteClick(row)}>
                    <AiFillDelete size={20} className="fill-red-600" />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
