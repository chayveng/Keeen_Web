import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TestTalble } from '../api/keeen/employee';
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
  SvgIcon,
  TablePagination,
  
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import ButtonEdit from 'src/components/keen/ButtonEdit';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import ButtonAddPer from 'src/components/keen/ButtonAddPer';
import PerfectScrollbar from 'react-perfect-scrollbar';

const useStyles = makeStyles({
  root: {
borderRadius: 0,
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
    cursor: 'pointer',
    '&:hover': {
      background: '#D3D3D3'
    },
    textDecoration: 'none'
  },
  table: {
    minWidth: 350,
  },
  cardTable:{
    

  },

});


export default function ShopList() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [showData, setShowData] = useState(false);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    TestTalble()
      .then(res => {
        //console.log(res.data);
        setUserList(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const clickRow = () => {
    setShowData(true);
  };
//////////////////////////////

const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, userList.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
 


////////////////////

  return (
    <>
      {' '}
      <Card className={classes.root} style={{ marginBottom: '15px' ,padding:'10px' }}>
        <CardContent>
          {' '}
     
          <Grid container spacing={2}>
            <Grid container xs={12} sm={12}  md={12}>
            <Grid container xs={6} sm={10} md={10}>
              <Typography variant="h2" className={classes.pb}>
                รายชื่อพนักงาน{' '}
              </Typography>
              </Grid>
              <Grid container xs={6} sm={2} md={2}>
              <Link style={{ textDecoration: 'none' }} to="/addPer">
                  <ButtonAddPer label="เพิ่มรายชื่อพนักงาน" fullWidth />
                </Link>
                </Grid>
            
            </Grid>
            <Grid container xs={12} sm={12}  md={12}>
              <Grid  xs={7} sm={8} md={8} style={{marginTop:20}}>
                {' '}
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
                placeholder="ค้นหาด้วย รหัสพนักงาน หรือ ชื่อพนักงาน"
                variant="outlined"
              />
              </Grid>
              <Box ml={2} />

              <Grid xs={2} sm={3} md={3} style={{marginTop:20}}>
                <ButtonPramary label="ค้นหา" fullWidth />
              </Grid>
            </Grid>
          </Grid>
      
        </CardContent>
      </Card>
    

      {/* Table ย่อไม่ได้ติด layout เเก้อย่างไง ?*/}
      <Grid item container xs={12} >
        <TableContainer component={Paper}>
          <PerfectScrollbar className={classes.tableContainer}>
            <Table style={{ minWidth: '1000px' || '100%',  }}>
     
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#014426' }}>#</TableCell>
                <TableCell style={{ color: '#014426' }}>รหัสพนักงาน</TableCell>
                <TableCell style={{ color: '#014426' }}>ชื่อพนักงาน</TableCell>
                <TableCell style={{ color: '#014426' }}>ตำแหน่ง</TableCell>
                <TableCell style={{ color: '#014426' }}></TableCell>
            

              </TableRow>
            </TableHead>
            <TableBody>


            {(rowsPerPage > 0
            ? userList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : userList
          ).map((val,index) => (


            //   {userList.map((val,index) => (
                <TableRow
                  onClick={clickRow}
                  key={val.employeeId}
                  className={classes.select}
                //   component={Link}
                //   to={`/datalist/branchlist`}
                >
                  <TableCell component="th" scope="row">
                    {index+1}
                  </TableCell>
                  <TableCell>{val.employeeId}</TableCell>
                  <TableCell>{val.firstName} {val.lastName}</TableCell>
                  <TableCell>{val.position}</TableCell>
             
                  <TableCell style={{textAlign:'end'}}><ButtonEdit size='small' label='ดู/แก้ไข' href={'/detaileperson/'+val.employeeId}/></TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
            //   count={userList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={ShopList}
            />
          </PerfectScrollbar>
        </TableContainer>
      </Grid>
    
    </>
  );
}
