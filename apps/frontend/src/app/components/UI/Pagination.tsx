import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';
import clsx from 'clsx';

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onPageSizeChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="list-reset mb-4 inline-flex items-center">
        <li>
          <select
            name="pageSize"
            title="pageSize"
            value={pageSize}
            className="bg-grey-lighter text-grey-darker mr-2 block h-8 rounded leading-tight"
            onChange={({ currentTarget }) => {
              currentTarget.blur();
              onPageSizeChange(currentTarget.value);
            }}
          >
            <option>3</option>
            <option>5</option>
            <option>7</option>
            <option>10</option>
          </select>
        </li>
        {pages.map((page, i) => (
          <li key={page}>
            <button
              type="button"
              className={clsx(
                'hover:bg-grey-light text-grey-darkest h-8 w-10 font-bold',
                buttonColor(page, currentPage),
                isEdge(i, pages.length)
              )}
              onClick={(event) => {
                event.currentTarget.blur();
                onPageChange(page);
              }}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

function isEdge(i, pagesLength) {
  if (i === pagesLength - 1) return 'rounded';
  return i === 0 ? 'rounded-l' : i === pagesLength - 1 ? 'rounded-r' : '';
}

function buttonColor(page, currentPage) {
  return page === currentPage
    ? 'bg-grey-light shadow-inner'
    : 'bg-grey-lightest';
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
};

export default Pagination;
