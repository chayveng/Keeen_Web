import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  Grid,
  Card,
  Typography,
  TextField
} from '@material-ui/core';
import numeral from 'numeral';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0
  },
  tableContainer: {
    width: '100%'
  },
  padding: {
    paddingTop: '10px',
    paddingBottom: '20px'
  },
  groupBtn: {
    padding: '4px 3px 3px 3px'
  },
  btnIcon: {
    padding: '3px',
    color: theme.palette.text.secondary,
    '&:hover': {
      backgroundColor: theme.palette.white,
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: '0 0px'
    }
  },
  btnPagin: {
    padding: '0px 12px',
    color: theme.palette.text.secondary,
    '&:hover': {
      backgroundColor: theme.palette.white,
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: '0 0px'
    }
  },
  btnPaginSelect: {
    backgroundColor: theme.palette.primary.main,
    padding: '0px 12px',
    color: theme.palette.white,
    border: `1px solid ${theme.palette.border.main}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white,
      border: `1px solid ${theme.palette.border.main}`
    },
    '&:disabled': {
      color: theme.palette.white
    }
  },
  select: {
    '& .MuiOutlinedInput-input': {
      padding: '8px 13px',
      fontSize: 14
    },
    '& .MuiSelect-outlined.MuiSelect-outlined': {
      paddingRight: '32px'
    }
  },
  nodata: {
    textAlign: 'center',
    fontFamily: 'Prompt, sans-serif',
    paddingTop:40,
    paddingBottom:40,
    
  }
}));

const CreateTable = ({
  headers,
  items,
  page,
  onPageChange,
  width,
  noPage,
  isClickRow,
  linkList,
  vertical,
  openshow,
  show
}) => {
  const classes = useStyles();
  // console.log('@@@@PaymentTable');
  // console.log(`ITEMS is ${JSON.stringify(items)}`)
  const handleShow = () => {
    // console.log('before ' + show);
     openshow();
    // console.log('after ' + show);
  };

  return (
    <Card className={classes.root}>
      <Grid item container xs={12}>
        <PerfectScrollbar className={classes.tableContainer}>
          <Box mt={1}>
            <Table style={{ minWidth: width || '100%' }}>
              <TableHead>
                <TableRow>
                  {headers.map((h, i) => (
                    <TableCell
                      key={h.name + i}
                      width={h.width || ''}
                      align={h.align || 'left'}
                      style={{
                        fontFamily: 'Prompt, sans-serif',
                        color: '#00336E'
                      }}
                    >
                      {h.name}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {}
                {(items || []).length ? (
                  handleShow(),
                  items.map((cell, i) => {
                    // console.log(`@@@@Cell is ${JSON.stringify(cell)}`);
                    if (isClickRow) {
                      return (
                        <TableRow
                          key={i}
                          style={{ cursor: 'pointer', vertical ,textDecoration: 'none'}}
                          component={RouterLink}
                          to={linkList[i]}
                        >
                          {cell.map((val, index) => {
                            return (
                              <TableCell
                                key={index}
                                style={{ verticalAlign: 'center',color: '#000'
                              }}
                                align={headers[index]?.align || 'left'}
                               
                              >
                                {typeof val === 'function' ? val() : val}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    }
                    return (
                      <TableRow key={i}>
                        {cell.map((val, index) => {
                          return (
                            <TableCell
                              key={index}
                              style={{
                                verticalAlign: 'center',
                                fontFamily: 'Prompt, sans-serif'
                              }}
                              align={headers[index]?.align || 'left'}
                            >
                              {typeof val === 'function' ? val() : val}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })
                ) : (
                  <>
                    <TableRow>
                      <TableCell
                        className={classes.nodata}
                        colSpan={headers.length}
                        // colSpan={12}
                      >
                        <img src="/static/images/merchantadmin/nodata.svg" />

                        <Typography
                          className={classes.nodata}
                          style={{color:"#00336E"}}
                          variant="h1"
                        >
                          ไม่มีรายการ
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Grid>

      {
        // noPage ? (
        //   <Grid
        //     container item
        //     direction="row"
        //     spacing={1}
        //     className={classes.padding}
        //   >
        //     <Grid item>
        //       {
        //         (items || []).length !== 0 && (
        //           <Typography color="textPrimary" variant="body2">
        //             {`
        //               ${numeral(1).format('0,0')}-${numeral((items || []).length).format('0,0')}
        //               รายการ จาก ${numeral((items || []).length).format('0,0')} รายการ
        //             `}
        //           </Typography>
        //         )
        //       }
        //     </Grid>
        //   </Grid>
        // ) :
        //   <Grid
        //     container item
        //     direction="row"
        //     alignItems="center"
        //     justify="center"
        //     spacing={1}
        //     className={classes.padding}
        //   >
        //     <Grid item sm={7} xs={12}>
        //       <Box display="flex" flexGrow={1} alignItems="center" >
        //         {/* <Typography color="textPrimary" variant="body2">ดู</Typography> */}
        //         <Box mr={1.5} />
        //         {/* <TextField
        //           // fullWidth
        //           // name="Status"
        //           // onChange={onChageSearch}
        //           variant="outlined"
        //           select
        //           SelectProps={{ native: true }}
        //           className={classes.select}
        //         >
        //           <option value={10}>10</option>
        //           <option value={25}>{25}</option>
        //           <option value={50}>{50}</option>
        //         </TextField> */}
        //         <Box mr={1.5} />
        //         <Typography color="textPrimary" variant="body2">รายการต่อหน้า</Typography>
        //         <Box mr={2} />
        //         {
        //           page.totalCount !== 0 && (
        //             <Typography color="textPrimary" variant="body2">
        //               {`
        //               ${numeral(((page.currentPage - 1) * page.pageSize) + 1).format('0,0')}-${numeral((page.currentPage * page.pageSize) > page.totalCount ? page.totalCount : (page.currentPage * page.pageSize)).format('0,0')}
        //               รายการ จาก ${numeral(page.totalCount).format('0,0')} รายการ
        //             `}
        //             </Typography>
        //           )
        //         }
        //       </Box>
        //     </Grid>
        //     <Grid justify="flex-end" container item sm={5} xs={12}>
        //       <ToggleButtonGroup
        //         exclusive
        //         onChange={onPageChange}
        //         size="small"
        //         className={classes.groupBtn}
        //         style={{ top: 20 }}
        //       >
        //         <ToggleButton
        //           disabled={!page.hasPrevious}
        //           value={1}
        //           className={classes.btnIcon}
        //         >
        //           <ChevronsLeftIcon />
        //         </ToggleButton>
        //       </ToggleButtonGroup>
        //       <ToggleButtonGroup
        //         exclusive
        //         onChange={onPageChange}
        //         size="small"
        //         className={classes.groupBtn}
        //         style={{ top: 20 }}
        //       >
        //         <ToggleButton
        //           disabled={!page.hasPrevious}
        //           value={page.currentPage - 1 + ''}
        //           className={classes.btnIcon}
        //         >
        //           <ChevronLeftIcon />
        //         </ToggleButton>
        //       </ToggleButtonGroup>
        //       {
        //         page.totalCount !== 0 && (
        //           <ToggleButtonGroup
        //             exclusive
        //             onChange={onPageChange}
        //             className={classes.groupBtn}
        //             size="small"
        //           >
        //             {
        //               page.hasPrevious && (
        //                 <ToggleButton value={page.currentPage - 1 + ''} className={classes.btnPagin}>
        //                   {numeral(page.currentPage - 1).format('0,0')}
        //                 </ToggleButton>
        //               )
        //             }
        //             <ToggleButton value={page.currentPage + ''} disabled className={classes.btnPaginSelect}>
        //               {numeral(page.currentPage).format('0,0')}
        //             </ToggleButton>
        //             {
        //               page.hasNext && (
        //                 <ToggleButton value={page.currentPage + 1 + ''} className={classes.btnPagin} >
        //                   {numeral(page.currentPage + 1).format('0,0')}
        //                 </ToggleButton>
        //               )
        //             }
        //           </ToggleButtonGroup>
        //         )
        //       }
        //       <ToggleButtonGroup
        //         exclusive
        //         onChange={onPageChange}
        //         className={classes.groupBtn}
        //         size="small"
        //       >
        //         <ToggleButton
        //           disabled={!page.hasNext}
        //           value={page.currentPage + 1 + ''}
        //           className={classes.btnIcon}
        //         >
        //           <ChevronRightIcon />
        //         </ToggleButton>
        //       </ToggleButtonGroup>
        //       <ToggleButtonGroup
        //         exclusive
        //         onChange={onPageChange}
        //         className={classes.groupBtn}
        //         size="small"
        //       >
        //         <ToggleButton
        //           disabled={!page.hasNext}
        //           value={page.totalPages}
        //           className={classes.btnIcon}
        //         >
        //           <ChevronsRightIcon />
        //         </ToggleButton>
        //       </ToggleButtonGroup>
        //     </Grid>
        //   </Grid>
      }
    </Card>
  );
};

CreateTable.propTypes = {
  className: PropTypes.string,
  headers: PropTypes.array.isRequired,
  onPageChange: PropTypes.func.isRequired
};

CreateTable.defaultProps = {
  headers: [],
  items: [],
  page: {
    currentPage: 0,
    totalPages: 0,
    pageSize: 0,
    totalCount: 0,
    hasPrevious: true,
    hasNext: true
  }
};

export default CreateTable;
