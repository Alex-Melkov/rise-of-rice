import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type PaginationProps = {
  onChangePage: (page: number) => void;
  countRolls: number;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ onChangePage, countRolls, itemsPerPage }) => {
  return (
    <ReactPaginate
      className={styles.paginate}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={itemsPerPage}
      pageCount={Math.ceil(countRolls / itemsPerPage)}
    />
  );
}

export default Pagination;
