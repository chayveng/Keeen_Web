import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Test from '../../Test.js'
import {
  Typography,
  TableCell,
  CardContent,
  Paper,
  TableHead,
  Table,
  TableRow,
  TableContainer,
  TableBody,
  Grid,
  TextField,
  Box,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import PerfectScrollbar from 'react-perfect-scrollbar';
const useStyles = makeStyles({

  BtnSecon: {
   
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    // padding: '9px 48px',
    border: '1px solid',
    lineHeight: 1.5,
    background: '#FFFFFF',
    borderColor: '#028E4E',
    borderRadius: 10,
    color: '#028E4E',
    width:180,
marginTop: 3,
padding: '4px '
  },

  root: {},
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  select: {
    cursor: 'pointer',
    '&:hover': {
      background: '#D3D3D3'
    },
    textDecoration: 'none'
  },
  table: {
    minWidth: 150,
    width: 180
  },
  cardTable:{
  },
  tableContainer: {
    width: '100%'
  },
});

function createData(count, biller_id, bank, account, pay, status, sum) {
  return { count, biller_id, bank, account, pay, status, sum };
}

const rows = [
  createData(
    '1',
    'รุ่งเรืองกิจ',
    '0105563090158',
    'สมชาย ใจดี',
    '087-5678-210',
    'chalerm7k@gmail.com',
    '20'
  ),
  createData(
    '2',
    'รุ่งเรืองกิจ',
    '0105563090158',
    'สมชาย ใจดี',
    '087-5678-210',
    'chalerm7k@gmail.com',
    '20'
  ),
  createData(
    '3',
    'รุ่งเรืองกิจ',
    '0105563090158',
    'สมชาย ใจดี',
    '087-5678-210',
    'chalerm7k@gmail.com',
    '20'
  ),
  createData(
    '4',
    'รุ่งเรืองกิจ',
    '0105563090158',
    'สมชาย ใจดี',
    '087-5678-210',
    'chalerm7k@gmail.com',
    '20'
  ),
  createData(
    '5',
    'รุ่งเรืองกิจ',
    '0105563090158',
    'สมชาย ใจดี',
    '087-5678-210',
    'chalerm7k@gmail.com',
    '20'
  )
];

export default function ShopList() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [showData, setShowData] = useState(false);

  const clickRow = () => {
    setShowData(true);
  };
  return (
    <>

<Card className={classes.root} style={{ marginBottom: '15px' }}>
        <CardContent>
          {' '}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={9}>
              <Typography variant="h2" className={classes.pb}>
              รายชื่อร้านค้า{' '}
              </Typography>
              <Box mt={2} />
              <TextField
                fullWidth
                name="Keyword"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" padding="0">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="ค้นหาตำแหน่งของร้าน"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Grid item xs={6} sm={12} >
                {' '}
                <Link style={{ textDecoration: 'none' }} to="/addshop">
                <ButtonPramary
                    label="เพิ่มร้านค้า"
                    fullWidth
                    size="small"
        
                  />
                </Link>
              </Grid>
              <Box mt={1} />

              <Grid item xs={6} sm={12} >
                <Button className={classes.BtnSecon}>
                import
                </Button>
              {/* <ButtonSecondary
                    label="import"
                    fullWidth
                    size="small"
     
                  /> */}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>


      {/* Table ย่อไม่ได้ติด layout เเก้อย่างไง ?*/}
      <Card fullWidth className={classes.cardTable}>
     
        <PerfectScrollbar className={classes.tableContainer}>
          <Table style={{ minWidth: '100%',overflowX:'auto' }} className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#014426' }}>#</TableCell>
                <TableCell style={{ color: '#014426' }}>ชื่อร้านค้า</TableCell>
                <TableCell style={{ color: '#014426' }}>ชื่อร้านค้า</TableCell>
                <TableCell style={{ color: '#014426' }}>
                  ชื่อผู้ติดต่อ
                </TableCell>
                <TableCell style={{ color: '#014426'}}>เบอร์โทร</TableCell>
                <TableCell style={{ color: '#014426' }}>E-mail</TableCell>
                <TableCell style={{ color: '#014426' }}>จำนวนสาขา</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  onClick={clickRow}
                  key={row.name}
                  className={classes.select}
                  component={Link}
                  to={`/datalist/branchlist`}
                >
                  <TableCell component="th" scope="row">
                    {row.count}
                  </TableCell>
                  <TableCell>{row.biller_id}</TableCell>
                  <TableCell>{row.bank}</TableCell>
                  <TableCell>{row.account}</TableCell>
                  <TableCell>{row.pay}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.sum}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </PerfectScrollbar>
      
      </Card>
    </>
  );
}
