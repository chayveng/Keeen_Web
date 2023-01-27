import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#687178',
      backgroundColor: '#FFFFFF'
    },
    '&  .MuiPaginationItem-page.Mui-selected': {
      backgroundColor: '#3AA775',
      color: '#FFFFFF',
    }
  }
}));

const AppPagination = ({ setPage, totalPage }) => {
  const classes = useStyles();

  const handlePage = (e, page) => {
    setPage(page);
    console.log(page);
    window.scroll(0, 0);
  };
  return (
    <div >
      <Pagination
        classes={{ ul: classes.ul }}
        onChange={handlePage}
        count={totalPage}
        variant="outlined"
        shape="rounded"
        siblingCount={0} 
        showFirstButton 
        showLastButton 
      />
    </div>
  );
};

export default AppPagination;
