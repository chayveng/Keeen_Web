import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getJobSearch, getJobAllPageList } from '../../api/keeen/job';
import AppPagination from 'src/components/keen/AppPagination/AppPagination';
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

import ButtonEdit from 'src/components/keen/ButtonEdit';

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
  },
  pb: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  tableContainer: {
    width: '100%'
  }
});
function Job3() {
  const classes = useStyles();
  const [jobListData, setJobListData] = useState([]);
  const [numPage, setNumPage] = useState();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState();
  const [search, setSearch] = useState('');
  const handleDateTime = str => {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hours = ('0' + date.getHours()).slice(-2),
      minutes = ('0' + date.getMinutes()).slice(-2);
    switch (mnth) {
      case '01':
        mnth = 'ม.ค.';
        break;
      case '02':
        mnth = 'ก.พ.';
        break;
      case '03':
        mnth = 'มี.ค.';
        break;
      case '04':
        mnth = 'เม.ย.';
        break;
      case '05':
        mnth = 'พ.ค.';
        break;
      case '06':
        mnth = 'มิ.ย.';
        break;
      case '07':
        mnth = 'ก.ค.';
        break;
      case '08':
        mnth = 'ส.ค.';
        break;
      case '09':
        mnth = 'ก.ย.';
        break;
      case '10':
        mnth = 'ต.ค.';
        break;
      case '11':
        mnth = 'พ.ย.';
        break;
      case '12':
        mnth = 'ธ.ค.';
        break;
      default:
        break;
    }
    return day + ' ' + mnth + ' ' + (date.getFullYear() + 543);
  };
  const sumJobNum = index => {
    let sum = 0;
    if (
      jobListData[index].liquidDispenser.status == 1 ||
      jobListData[index].liquidDispenser.status == 2
    ) {
      sum = sum + 1;
    } else if (jobListData[index].liquidDispenser.status == 0) {
      sum = sum + 0;
    }

    // -------------------------------
    if (
      jobListData[index].proSinkProMax.status == 1 ||
      jobListData[index].proSinkProMax.status == 2
    ) {
      sum = sum + 1;
    } else if (jobListData[index].proSinkProMax.status == 0) {
      sum = sum + 0;
    }

    //   // -------------------------------
    if (
      jobListData[index].hydroMaster.status == 1 ||
      jobListData[index].hydroMaster.status == 2
    ) {
      sum = sum + 1;
    } else if (jobListData[index].hydroMaster.status == 0) {
      sum = sum + 0;
    }

    return sum;
  };
  const splitDate = (str, i1, i2) => {
    const result = [str.slice(0, i1), str.slice(i1)];
    const day = [result[1].slice(0, i2), result[1].slice(i2)];
    return day[1] + '/' + day[0] + '/' + result[0];
  };
  useEffect(() => {
    setJobListData([]);
    console.log('page = ' + page);
    getData();
  }, [page]);

  const getData = () => {
    
      getJobAllPageList(`Keyword=JO&Page=${page}&PageSize=${pageSize}&stat=3`)
        .then(res => {
          // console.log(res.data);
          setJobListData(res.data.items);
          handleDateTime(res.data.items.jobDate);
          setNumPage(res.data.totalPages);
          setPageSize(res.data.pageSize);
          setTotalCount(res.data.totalCount);
        })
        .catch(error => {
          console.log(error);
        });
    
  };
  return (
    <div>
      <Grid container item xs={12}>
        <TableContainer component={Paper}>
          {/* <PerfectScrollbar className={classes.tableContainer}> */}
          <Table style={{ minWidth: '1000px' || '100%' }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#014426' }}>#</TableCell>

                <TableCell style={{ color: '#014426' }}>
                  วันที่นัดหมาย
                </TableCell>
                <TableCell style={{ color: '#014426' }}>ชื่อร้านค้า</TableCell>
                <TableCell style={{ color: '#014426' }}>สาขา</TableCell>
                <TableCell style={{ color: '#014426' }}>โทรศัพท์</TableCell>
                <TableCell style={{ color: '#014426' }}>
                  จำนวนงานที่ต้องทำ
                </TableCell>
                <TableCell style={{ color: '#014426' }}>เลขที่ใบงาน</TableCell>
                <TableCell style={{ color: '#014426' }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobListData.map((row, index) => (
                <TableRow key={index} className={classes.select}>
                  <TableCell component="th" scope="row">
                    {index + 1 + page * 10 - 10}
                  </TableCell>

                  <TableCell>{splitDate(row.jobDate, 4, 2)}</TableCell>
                  <TableCell>{row.customerName}</TableCell>
                  <TableCell>{row.customerInfo.branch}</TableCell>
                  <TableCell>{row.customerInfo.telephoneNumber}</TableCell>
                  <TableCell style={{ textAlign: 'center', color: '#D44848' }}>
                    {row.jobTotal}
                  </TableCell>
                  <TableCell>{row.jobId}</TableCell>
                  <TableCell style={{ textAlign: 'right' }}>
                    <ButtonEdit
                      size="small"
                      label="ดู/แก้ไข"
                      href={'/joblist/jobdetail/' + row.jobId}
                    />
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
            รายการ {page * 10 - 9} - {page * 10} จาก {totalCount} รายการ
          </Typography>
        </Grid>
        <AppPagination setPage={setPage} totalPage={numPage} />
      </Grid>
    </div>
  );
}

export default Job3;
