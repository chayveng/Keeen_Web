import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from "react-router-dom";
import { getEmployeeAll } from '../api/keeen/employee';
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
import ButtonEdit from 'src/components/keen/ButtonEdit';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import ButtonAddPer from 'src/components/keen/ButtonAddPer';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getEmployeeByID } from '../api/keeen/employee';
import AppPagination from 'src/components/keen/AppPagination/AppPagination';
const useStyles = makeStyles({
  root: {
    borderRadius: 0
    // padding:0
  },
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
    // cursor: 'pointer',
    // '&:hover': {
    //   background: '#D3D3D3'
    // },
    textDecoration: 'none'
  },
  table: {
    minWidth: 350
  },
  cardTable: {}
});

export default function ShopList() {
  const classes = useStyles();
  let params = useParams();
let history = useHistory();
  const [showData, setShowData] = useState(false);
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [numPage,setNumPage] = useState()
  const [totalCount,setTotalCount] = useState()
  useEffect(() => {
    setUserList([]);
    getData()
  }, [page]);
  const clickRow = () => {
    setShowData(true);
  };
  const getData = ()=>{
   
    if(search.length!=0){
      getEmployeeAll(`Keyword=${search}&Page=${page}&PageSize=${pageSize}&request=Id`)
      .then(res => {
        console.log(res.data.items);
    
        setUserList(res.data.items);
        setTotalCount(res.data.totalCount)
        setNumPage(res.data.totalPages)
        setPageSize(res.data.pageSize)
      })
      .catch(error => {
        console.log(error);
      });
    }else{
      getEmployeeAll(`Keyword=T&Page=${page}&PageSize=${pageSize}&request=all`)
      .then(res => {
        console.log(res.data);
        // let employees = res.data.items
        // employees.sort((a, b) => {
        //   let fa = a.firstName.toLowerCase(),
        //       fb = b.firstName.toLowerCase();
      
        //   if (fa < fb) {
        //       return -1;
        //   }
        //   if (fa > fb) {
        //       return 1;
        //   }
        //   return 0;
        // })
        setUserList(res.data.items);
        setTotalCount(res.data.totalCount)
         setNumPage(res.data.totalPages)
         setPageSize(res.data.pageSize)
        
      })
      .catch(error => {
        console.log(error);
      });
    }

    
  }
  const toData = ()=>{
    history.push("/detaileperson/");
  }
  const handleSearch = () => {
    console.log(search);
    getEmployeeAll(`Keyword=${search}&Page=1&PageSize=${pageSize}&request=Id`)
    .then(res => {
      console.log(res.data.items);
      let employees = res.data.items
      employees.sort((a, b) => {
        let fa = a.firstName.toLowerCase(),
            fb = b.firstName.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
      })
      setPage(1)
      setTotalCount(res.data.totalCount)
      setUserList(employees);
     
      setNumPage(res.data.totalPages)
      setPageSize(res.data.pageSize)
    })
    .catch(error => {
      console.log(error);
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();

    handleSearch()

  }
  return (
    <div style={{ margin: 10 }}>
      <Card className={classes.root} style={{ marginBottom: '15px', padding: '10px' }}>
      <form onSubmit={onFormSubmit}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid container xs={12} sm={12} md={12}>
              <Grid container xs={6} sm={10} md={10}>
                <Typography variant="h2" className={classes.pb}>
                  รายชื่อพนักงาน{' '}
                </Typography>
              </Grid>
              <Grid container xs={6} sm={2} md={2}>
                <Link style={{ textDecoration: 'none' }} to="/addPer">
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
                  placeholder="ค้นหาด้วย รหัสพนักงาน หรือ ชื่อพนักงาน"
                  variant="outlined"
                />
              </Grid>
              <Box ml={2} />

              <Grid xs={2} sm={3} md={3} style={{ marginTop: 20 }}>
                <ButtonPramary
                  //onClick={() => handleSearch()}
                  label="ค้นหา"
                  fullWidth
                  type="submit"
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        </form>
      </Card>
      {/* Table ย่อไม่ได้ติด layout เเก้อย่างไง ?*/}
      <Grid item container xs={12}>
        <TableContainer component={Paper}>
          {/* <PerfectScrollbar className={classes.tableContainer}> */}
            <Table style={{ minWidth: '1000px' || '100%' }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: '#014426' }}>#</TableCell>
                  <TableCell style={{ color: '#014426' }}>
                    รหัสพนักงาน
                  </TableCell>
                  <TableCell style={{ color: '#014426' }}>
                    ชื่อพนักงาน
                  </TableCell>
                  <TableCell style={{ color: '#014426' }}>ตำแหน่ง</TableCell>
                  <TableCell style={{ color: '#014426' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userList
                // .slice(page * 10 - 10, page * 10)
                .map((val, index) => (
                  <>
                    <TableRow
                      onClick={clickRow}
                      key={val.employeeId}
                      className={classes.select}
                      //   component={Link}
                      //   to={`/datalist/branchlist`}
                    >
                      <TableCell  width="5%" component="th" scope="row">
                      {index + 1 + (page * 10 - 10)}
                      </TableCell>
                      <TableCell  width="10%">{val.employeeId}</TableCell>
                      <TableCell width="25%">
                        {val.firstName} {val.lastName}
                      </TableCell>
                      <TableCell>{val.position}</TableCell>

                      <TableCell style={{ textAlign: 'end' }}>
                        <ButtonEdit
                          size="small"
                          label="ดู/แก้ไข"
                          href={'/detaileperson/' + val.employeeId}
                          // onClick={()=>toData()}
                        />
                      </TableCell>
                    </TableRow>
                  </>
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
            รายการ {page * 10 - 9} - {page * 10} จาก {totalCount} รายการ
          </Typography>
        </Grid>
        <Grid item>
          {/* <AppPagination
            setPage={setPage}
            totalPage={Math.ceil(userList.length / 10)}
          /> */}
           <AppPagination setPage={setPage} totalPage={numPage} />
        </Grid>
      </Grid>
    </div>
  );
}
