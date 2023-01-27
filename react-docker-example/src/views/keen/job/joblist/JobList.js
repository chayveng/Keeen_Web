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
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  getJobAll,
  getJobSearch,
  getJobAllPageList
} from '../../api/keeen/job';
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
  },
  pb: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  tableContainer: {
    width: '100%'
  }
});

const pagePer = [3, 5, 10];
export default function JobList() {
  const classes = useStyles();
  const history = useHistory();
  const bull = <span className={classes.bullet}>•</span>;

  const [showData, setShowData] = useState(false);
  const [jobListData, setJobListData] = useState([]);
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);
  const [page3, setPage3] = useState(1);
  const [page4, setPage4] = useState(1);
  const [page5, setPage5] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeNav1, setActiveNav1] = useState(true);
  const [activeNav2, setActiveNav2] = useState(false);
  const [activeNav3, setActiveNav3] = useState(false);
  const [activeNav4, setActiveNav4] = useState(false);
  const [activeNav5, setActiveNav5] = useState(false);
  const [total1, setTotal1] = useState();
  const [total2, setTotal2] = useState();
  const [total3, setTotal3] = useState();
  const [total4, setTotal4] = useState();
  const [total5, setTotal5] = useState();
  const [numPage, setNumPage] = useState();
  const [numPage2, setNumPage2] = useState();
  const [numPage3, setNumPage3] = useState();
  const [numPage4, setNumPage4] = useState();
  const [numPage5, setNumPage5] = useState();
  const handleNav1 = () => {
    setActiveNav1(true);
    setActiveNav2(false);
    setActiveNav3(false);
    setActiveNav4(false);
    setActiveNav5(false);
    getJobAllPageList(`Keyword=JO&Page=${page}&PageSize=${pageSize}&stat=1`)
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
  const handleNav2 = () => {
    setActiveNav1(false);
    setActiveNav2(true);
    setActiveNav3(false);
    setActiveNav4(false);
    setActiveNav5(false);
    getJobAllPageList(`Keyword=JO&Page=${page2}&PageSize=${pageSize}&stat=2`)
      .then(res => {
        // console.log(res.data);
        setJobListData(res.data.items);
        handleDateTime(res.data.items.jobDate);
        setNumPage2(res.data.totalPages);
        setPageSize(res.data.pageSize);
        setTotalCount(res.data.totalCount);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleNav3 = () => {
    setActiveNav1(false);
    setActiveNav2(false);
    setActiveNav3(true);
    setActiveNav4(false);
    setActiveNav5(false);
    getJobAllPageList(`Keyword=JO&Page=${page3}&PageSize=${pageSize}&stat=3`)
      .then(res => {
        // console.log(res.data);
        setJobListData(res.data.items);
        handleDateTime(res.data.items.jobDate);
        setNumPage3(res.data.totalPages);
        setPageSize(res.data.pageSize);
        setTotalCount(res.data.totalCount);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleNav4 = () => {
    setActiveNav1(false);
    setActiveNav2(false);
    setActiveNav3(false);
    setActiveNav4(true);
    setActiveNav5(false);
    getJobAllPageList(`Keyword=JO&Page=${page4}&PageSize=${pageSize}&stat=4`)
      .then(res => {
        // console.log(res.data);
        setJobListData(res.data.items);
        handleDateTime(res.data.items.jobDate);
        setNumPage4(res.data.totalPages);
        setPageSize(res.data.pageSize);
        setTotalCount(res.data.totalCount);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleNav5 = () => {
    console.log("Nav5 stat5");
    setActiveNav1(false);
    setActiveNav2(false);
    setActiveNav3(false);
    setActiveNav4(false);
    setActiveNav5(true);
    // getJobAllPageList(`Page=${page5}&PageSize=${pageSize}&stat=5`)
    getJobAllPageList(`Keyword=JO&Page=${page5}&PageSize=${pageSize}&stat=5`)
      .then(res => {
        console.log(res.data);
        setJobListData(res.data.items);
        handleDateTime(res.data.items.jobDate);
        setNumPage5(res.data.totalPages);
        setPageSize(res.data.pageSize);
        setTotalCount(res.data.totalCount);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const [search, setSearch] = useState('');
  const [jobNum, setJobNum] = useState(0);
  const [totalCount, setTotalCount] = useState();
  const [dateDetail, setDateDetail] = useState({
    year: '',
    month: '',
    day: '',
    hr: '',
    min: ''
  });
  const clickRow = () => {
    setShowData(true);
  };
  const handlePageSize = e => {
    setPageSize(e.target.value);
  };
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
  const getData = () => {
   
    getJobAllPageList(
      `Keyword=JO&Page=${page}&PageSize=${pageSize}&stat=1`
    ).then(res => {
      setTotal1(res.data.totalCount);
    });
    getJobAllPageList(
      `Keyword=JO&Page=${page2}&PageSize=${pageSize}&stat=2`
    ).then(res => {
      setTotal2(res.data.totalCount);
    });
    getJobAllPageList(
      `Keyword=JO&Page=${page3}&PageSize=${pageSize}&stat=3`
    ).then(res => {
      setTotal3(res.data.totalCount);
    });
    getJobAllPageList(
      `Keyword=JO&Page=${page4}&PageSize=${pageSize}&stat=4`
    ).then(res => {
      setTotal4(res.data.totalCount);
    });
    getJobAllPageList(
      `Keyword=JO&Page=${page5}&PageSize=${pageSize}&stat=5`
    ).then(res => {
      setTotal5(res.data.totalCount);
    });

    let p 
    console.log(activeNav1);
    if(activeNav1==true) {
      p = page
      console.log('p1');
    }
    else if(activeNav2==true) {
      p = page2
      console.log('p2');
    }
    else if(activeNav3==true) {
      p = page3
      console.log('p3');
    }
    else if(activeNav4==true) {
      p = page4
      console.log('p4');
    }
    else if(activeNav5==true){
      p = page
      console.log('p5');
    }
    if (search.length != 0) {
      getJobAllPageList(
        `Keyword=${search}&Page=${page5}&PageSize=${pageSize}&stat=5`
      )
        .then(res => {
          console.log(res.data.items);
          setTotalCount(res.data.totalCount);
          setJobListData(res.data.items);
          handleDateTime(res.data.items.jobDate);
          setNumPage5(res.data.totalPages);
          setPageSize(res.data.pageSize);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      getJobAllPageList(`Keyword=JO&Page=${p}&PageSize=${pageSize}&stat=1`)
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
    }
  };
  useEffect(() => {
    setJobListData([]);
    console.log('page = ' + page);
    getData();
  }, [page]);
  useEffect(() => {
    setJobListData([]);
    console.log('page2 = ' + page2);
    getData();
  }, [page2]);
  useEffect(() => {
    setJobListData([]);
    console.log('page3 = ' + page3);
    getData();
  }, [page3]);
  useEffect(() => {
    setJobListData([]);
    console.log('page4 = ' + page4);
    getData();
  }, [page4]);
  useEffect(() => {
    setJobListData([]);
    console.log('page5 = ' + page5);
    getData();
  }, [page5]);
  const splitDate = (str, i1, i2) => {
    const result = [str.slice(0, i1), str.slice(i1)];
    const day = [result[1].slice(0, i2), result[1].slice(i2)];
    return day[1] + '/' + day[0] + '/' + result[0];
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

  const handleSearch = () => {
    setActiveNav1(false);
    setActiveNav2(false);
    setActiveNav3(false);
    setActiveNav4(false);
    setActiveNav5(true);
    setJobListData([]);
    console.log(search);
    getJobAllPageList(`Keyword=${search}&Page=1&PageSize=${pageSize}&stat=5`)
      .then(res => {
        console.log(res.data.items);
        setPage(1);
        setTotalCount(res.data.totalCount);
        setJobListData(res.data.items);
        handleDateTime(res.data.items.jobDate);
        setNumPage5(res.data.totalPages);
        setPageSize(res.data.pageSize);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const onFormSubmit = e => {
    e.preventDefault();
    handleSearch();
  };
  return (
    <div style={{ margin: 10 }}>
      <Card className={classes.root} style={{ marginBottom: '15px' }} fullWidth>
        <form onSubmit={onFormSubmit}>
          <CardContent>
            {' '}
            <Grid item xs={12} md={12}>
              <Grid item xs={12}>
                <Typography variant="h2">รายการตรวจเช็ค </Typography>
              </Grid>
              <Box mt={2} />
              <Grid container sm={12}>
                <Grid xs={12} sm={12} md={8} style={{ marginTop: 10 }}>
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
                    placeholder="ค้นหาด้วยเลขที่ใบงาน หรือ ชื่อร้านค้า"
                    variant="outlined"
                  />
                </Grid>
                <Box mt={2} />

                <Grid container xs={12} sm={6} md={4} justifyContent="flex-end">
                  <Grid
                    xs={6}
                    sm={6}
                    md={5}
                    container
                    justifyContent="center"
                    style={{ marginTop: 10 }}
                  >
                    <ButtonPramary
                      label="ค้นหา"
                      fullWidth
                      size="small"
                      type="submit"
                      // onClick={() => handleSearch()}
                    />
                  </Grid>
                  <Grid
                    xs={6}
                    sm={6}
                    md={7}
                    container
                    justifyContent="center"
                    style={{ marginTop: 10 }}
                  >
                    <ButtonSecondary
                      label="ค้นหาแบบละเอียด"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Card>

      <Box mb={2} />
      <Grid item container xs={12} sm={12} md={12}>
        <Grid item container xs={8} sm={8} md={10}>
          <Box ml={1} />
          <Typography
            variant="h4"
            style={{ marginTop: 'auto', marginBottom: 'auto' }}
          >
            {' '}
            รายการตรวจเช็ค{' '}
          </Typography>
        </Grid>
        <Grid item container xs={4} sm={4} md={2}>
          {/* <Link style={{ textDecoration: 'none' }} to="/joblist/jobadd"> */}
          <ButtonAddPer label="เพิ่มใบงาน" fullWidth href="/joblist/jobadd" />
          {/* </Link> */}
        </Grid>
        <Grid container>
          {activeNav1 ? (
            <Button
              style={{ borderBottom: '4px solid #3AA775', borderRadius: 0 }}
              onClick={handleNav1}
            >
              ตารางการทำงาน ({total1})
            </Button>
          ) : (
            <Button
              style={{ borderBottom: '4px solid #F5F5F5', borderRadius: 0 }}
              onClick={handleNav1}
            >
              <Typography variant="h4" style={{ color: '#687178' }}>
                ตารางการทำงาน ({total1})
              </Typography>
            </Button>
          )}

          <Box ml={1} />
          {activeNav2 ? (
            <Button
              style={{ borderBottom: '4px solid #3AA775', borderRadius: 0 }}
              onClick={handleNav2}
            >
              ทำเสร็จแล้ว ({total2})
            </Button>
          ) : (
            <Button
              style={{ borderBottom: '4px solid #F5F5F5', borderRadius: 0 }}
              onClick={handleNav2}
            >
              <Typography variant="h4" style={{ color: '#687178' }}>
                ทำเสร็จแล้ว ({total2})
              </Typography>
            </Button>
          )}

          <Box ml={1} />
          {activeNav3 ? (
            <Button
              style={{ borderBottom: '4px solid #3AA775', borderRadius: 0 }}
              onClick={handleNav3}
            >
              ทำแล้วบางส่วน ({total3})
            </Button>
          ) : (
            <Button
              style={{ borderBottom: '4px solid #F5F5F5', borderRadius: 0 }}
              onClick={handleNav3}
            >
              <Typography variant="h4" style={{ color: '#687178' }}>
                ทำแล้วบางส่วน ({total3})
              </Typography>
            </Button>
          )}

          <Box ml={1} />
          {activeNav4 ? (
            <Button
              style={{ borderBottom: '4px solid #3AA775', borderRadius: 0 }}
              onClick={handleNav4}
            >
              ยกเลิก ({total4})
            </Button>
          ) : (
            <Button
              style={{ borderBottom: '4px solid #F5F5F5', borderRadius: 0 }}
              onClick={handleNav4}
            >
              <Typography variant="h4" style={{ color: '#687178' }}>
                ยกเลิก ({total4})
              </Typography>
            </Button>
          )}

          <Box ml={1} />
          {activeNav5 ? (
            <Button
              style={{ borderBottom: '4px solid #3AA775', borderRadius: 0 }}
              onClick={handleNav5}
            >
              ทั้งหมด ({total5})
            </Button>
          ) : (
            <Button
              style={{ borderBottom: '4px solid #F5F5F5', borderRadius: 0 }}
              onClick={handleNav5}
            >
              <Typography variant="h4" style={{ color: '#687178' }}>
                ทั้งหมด ({total5})
              </Typography>
            </Button>
          )}

          <Box ml={1} />
        </Grid>
      </Grid>
      <Box mb={2} />

      <Grid item container xs={12}>
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
                <TableRow
                  key={row.index}
                  className={classes.select}
                  onClick={clickRow}
                >
                  <TableCell component="th" scope="row">
                    {index + 1 + page * 10 - 10}
                  </TableCell>

                  <TableCell>{splitDate(row.jobDate, 4, 2)}</TableCell>
                  <TableCell>{row.customerName}</TableCell>
                  <TableCell>{row.customerInfo.branch}</TableCell>
                  <TableCell>{row.customerInfo.telephoneNumber}</TableCell>
                  <TableCell style={{ textAlign: 'center', color: '#D44848' }}>
                    {sumJobNum(index)}
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
          {/* <TextField
                            fullWidth
                            className="px-2 my-2"
                            variant="outlined"
                            name="position"
                            id="position"
                            select
                            SelectProps={{
                              native: true,
                              className: classes.selectCon,
                              MenuProps: {
                                className: { paper: classes.menuPaper }
                              }
                            }}
                            value={pageSize}
                            onChange={handlePageSize}
                            placeholder="กรุณากรอกข้อมูล"   
                            size="small"
                          >
                            
                            {pagePer.map((sell, index) => {
                              return <option value={sell}>{sell}</option>;
                            })}
                          </TextField> */}
        </Grid>
        <Grid item>

          {activeNav1 ? (
            <AppPagination setPage={setPage} totalPage={numPage} />
          ) : null}
          {activeNav2 ? (
            <AppPagination setPage={setPage2} totalPage={numPage2} />
          ) : null}
          {activeNav3 ? (
            <AppPagination setPage={setPage3} totalPage={numPage3} />
          ) : null}
          {activeNav4 ? (
            <AppPagination setPage={setPage4} totalPage={numPage4} />
          ) : null}
          {activeNav5 ? (
            <AppPagination setPage={setPage5} totalPage={numPage5} />
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
}
