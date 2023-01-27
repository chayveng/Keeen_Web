import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonAddPer from 'src/components/keen/ButtonAddPer';
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
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import ButtonEdit from 'src/components/keen/ButtonEdit';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getAllCustomer, getCustomerByID } from '../../api/keeen/customer';
import AppPagination from 'src/components/keen/AppPagination/AppPagination';
const useStyles = makeStyles({
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
    //cursor: 'pointer',
    textDecoration: 'none'
    // '&:hover': {
    //   background: '#D3D3D3'
    // }
  },
  btnEdit: {
    border: '1px solid #028E4E',
    color: '#028E4E',
    borderRadius: 8,
    paddingRight: 18,
    paddingLeft: 18
  },
  btnAdd: {
    backgroundColor: '#EEFCF5',

    borderRadius: 15,
    paddingRight: 15,
    paddingLeft: 15
  }
});

const initialList = [
  {
    id: 'O-001.00000',
    shop: 'สมชาย ใจดี',
    name: 'สยามพารากอน',
    number: '087-5678-210',
    email: 'chalerm7k@gmail.com'
  },
  {
    id: 'O-001.00000',
    shop: 'สมชาย ใจดี',
    name: 'สยามพารากอน',
    number: '087-5678-210',
    email: 'chalerm7k@gmail.com'
  },
  {
    id: 'O-001.00000',
    shop: 'สมชาย ใจดี',
    name: 'สยามพารากอน',
    number: '087-5678-210',
    email: 'chalerm7k@gmail.com'
  }
];

export default function CustomerList() {
  const classes = useStyles();
  const history = useHistory();
  const bull = <span className={classes.bullet}>•</span>;
  const [shopList, setShopList] = useState(initialList);
  const [showData, setShowData] = useState(false);
  const [customerList, setCustomerList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [numPage,setNumPage] = useState()
  const [totalCount,setTotalCount] = useState()
  const [search, setSearch] = useState('');
  const fecthData = () => {
    setCustomerList([])
    getData()
  };
  useEffect(() => {
    fecthData();
  }, [page]);


  const getData = ()=>{
   
    if(search.length!=0){
      getAllCustomer(`Keyword=${search}&Page=${page}&PageSize=${pageSize}&request=Id`)
      .then(res => {
        console.log(res.data.items);
        setCustomerList(res.data.items);
        setTotalCount(res.data.totalCount)
        setNumPage(res.data.totalPages)
        setPageSize(res.data.pageSize)
      })
      .catch(error => {
        console.log(error);
      });
    }else{
      getAllCustomer(`Keyword=k&Page=${page}&PageSize=${pageSize}&request=all`)
      .then(res => {
        console.log(res.data);
        setCustomerList(res.data.items);
        setTotalCount(res.data.totalCount)
         setNumPage(res.data.totalPages)
         setPageSize(res.data.pageSize)
      })
      .catch(error => {
        console.log(error);
      });
    }

  
  }
  const handleSearch = () => {
    console.log(search);
    getAllCustomer(`Keyword=${search}&Page=1&PageSize=${pageSize}&request=Id`)
    .then(res => {
      console.log(res.data.items);

setPage(1)
      setCustomerList(res.data.items);
      setTotalCount(res.data.totalCount)
      setNumPage(res.data.totalPages)
      setPageSize(res.data.pageSize)
    })
    .catch(error => {
      console.log(error);
    });
  };
  const clickRow = () => {
    setShowData(true);
  };
  const onFormSubmit = e => {
    e.preventDefault();
    handleSearch()

  }
  return (
    <div style={{ margin: 10 }}>
      <Card
        className={classes.root}
        style={{ marginBottom: '15px', padding: '10px' }}
      >
        <form onSubmit={onFormSubmit}>
        <CardContent>
          {' '}
          <Grid container spacing={2}>
            <Grid container xs={12} sm={12} md={12}>
              <Grid container xs={6} sm={10} md={10}>
                <Typography variant="h2" className={classes.pb}>
                  รายชื่อลูกค้า{' '}
                </Typography>
              </Grid>
              <Grid container xs={6} sm={2} md={2}>
                <Link style={{ textDecoration: 'none' }} to="/addcustomer">
                  <ButtonAddPer label="เพิ่มข้อมูล" fullWidth />
                </Link>
              </Grid>
            </Grid>
            <Grid container xs={12} sm={12} md={12}>
              <Grid xs={7} sm={8} md={8} style={{ marginTop: 20 }}>
                {' '}
                <TextField
                  fullWidth
                  name="Keyword"
                  size="small"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" padding="0">
                        <SvgIcon fontSize="small" color="action">
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="ค้นหาด้วย รหัสลูกค้า, ชื่อลูกค้า หรือ ชื่อสาขา"
                  variant="outlined"
                />
              </Grid>
              <Box ml={2} />

              <Grid xs={2} sm={3} md={3} style={{ marginTop: 20 }}>
                <ButtonPramary
                  label="ค้นหา"
                  fullWidth
                  //onClick={() => handleSearch()}
                  type='submit'
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        </form>
      </Card>
      <Grid item container xs={12}>
        <TableContainer component={Paper}>
          {/* <PerfectScrollbar className={classes.tableContainer}> */}
            <Table style={{ minWidth: '1000px' || '100%' }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: '#014426' }}>#</TableCell>
                  <TableCell style={{ color: '#014426'}}>
                    รหัสลูกค้า
                  </TableCell>
                  <TableCell style={{ color: '#014426' }}>ชื่อลูกค้า</TableCell>
                  <TableCell style={{ color: '#014426' }}>ชื่อสาขา</TableCell>
                  <TableCell style={{ color: '#014426', textAlign: 'center' }}>
                    เบอร์โทร
                  </TableCell>
                  <TableCell style={{ color: '#014426' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customerList
                  // .slice(page * 10 - 10, page * 10)
                  .map((row, index) => (
                    <TableRow
                      key={row.customerId}
                      className={classes.select}
                      onClick={clickRow}
                      // component={Link}
                      // to={`/customerlist/customerdetail`}
                    >
                      <TableCell component="th" scope="row">
                        {/* {index < 3 ? 0: null} */}
                        {index + 1 + (page * 10 - 10)}
                      </TableCell>
                      <TableCell>{row.customerId}</TableCell>
                      <TableCell>{row.customerName}</TableCell>
                      <TableCell>{row.branch}</TableCell>
                      <TableCell>{row.telephoneNumber}</TableCell>
                      <TableCell style={{ textAlign: 'right' }}>
                        <ButtonEdit
                          size="small"
                          label="ดู/แก้ไข"
                          href={
                            '/customerlist/customerdetail/' + row.customerId
                          }
                        />
                        {/* <Button
                      className={classes.btnEdit}
                      component={Link}
                      to={`/customerlist/customerdetail`}
                    >
                      ดู/แก้ไข
                    </Button> */}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          {/* </PerfectScrollbar> */}
        </TableContainer>
      </Grid>
      <Box mt={2} />
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            รายการ {page * 10 - 9} - {page * 10} จาก {totalCount}{' '}
            รายการ
          </Typography>
        </Grid>
        <Grid item>
          {/* <AppPagination setPage={setPage} totalPage={Math.ceil((customerList.length)/10)} /> */}
          <AppPagination setPage={setPage} totalPage={numPage} />
        </Grid>
      </Grid>
    </div>
  );
}
