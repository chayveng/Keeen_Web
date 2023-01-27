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

const PaymentTable = ({
  headers,
  items,
  width,
  isClickRow,
  linkList,
  vertical,
  openshow,
}) => {
  const classes = useStyles();

 

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
                  items.map((cell, i) => {
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
   
      }
    </Card>
  );
};

PaymentTable.propTypes = {
  className: PropTypes.string,
  headers: PropTypes.array.isRequired,
  onPageChange: PropTypes.func.isRequired
};

PaymentTable.defaultProps = {
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

export default PaymentTable;
