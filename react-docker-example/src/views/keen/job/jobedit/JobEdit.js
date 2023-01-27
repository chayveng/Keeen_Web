import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonAddPer from 'src/components/keen/ButtonAddPer';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import ButtonEdit from 'src/components/keen/ButtonEdit';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Dialogsuc from 'src/components/keen/Dialogsuc';
import { getEmployeeAll } from '../../api/keeen/employee';
import { updateJob } from '../../api/keeen/job';
import { getCustomerByID } from '../../api/keeen/customer';
import moment from 'moment';
const useStyles = makeStyles(theme => ({
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
  cardPad: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),

    borderRadius: 0
  },
  disableText: {
    backgroundColor: '#E9E9E9',
    borderColor: '#687178'
  },
  defaultText: {
    backgroundColor: '#FFFFFF',
    borderColor: '#687178'
  },
  kk: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

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
const productName = ['product1', 'product2', 'product3'];
const LotNo = ['สมชาย ใจดี', 'สมชาย ใจดี', 'สมชาย ใจดี'];
export default function JobEdit(props) {
  const jobDetailData = props.jobDetailData;
  const classes = useStyles();
  const history = useHistory();
  const bull = <span className={classes.bullet}>•</span>;

  const [showData, setShowData] = useState(false);
  const [value, setValue] = useState();
  const [valueLotNo, setValueLotNo] = useState(LotNo[0]);
  const [dateStart, setDateStart] = useState(props.jobDetailData.jobDate);
  const [openDialog, setOpenDialog] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [dateNow, setDateNow] = useState(new Date());
  const [dayTest, setDayTest] = useState({
    year: '',
    month: '',
    day: '',
    hr: '',
    min: ''
  });
  const [customer, setCustomer] = useState({
    address: '',
    branch: '',
    contactPerson: '',
    customerId: '',
    customerName: '',
    email: '',

    province: '',
    telephoneNumber: '',

    use: ''
  });

  const today = moment().format('YYYY-MM-DD');
  const validationSchema = yup.object({
    customerID: yup
      .string('Enter your name')
      .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
    date: yup
      .date()
      .min(today, 'กรุณาเลือกวันที่ให้ถูกต้อง')
      .typeError('กรุณากรอกข้อมูลให้ถูกต้อง')
      // .max(new Date())
      .required('กรุณาเลือกวันที่'),

    employee: yup.string('Enter your name').required('กรุณาเลือกพนักงาน')
  });
  const formik = useFormik({
    initialValues: {
      customerID: props.jobDetailData.customerId,
      date: props.jobDetailData.jobDate,
      employee: props.jobDetailData.employeeName
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: values => {
      handleDialog();
      console.log(values);
    }
  });

  const clickRow = () => {
    setShowData(true);
  };
  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleEmployeeWork = data => {
    const employee = data;
    props.setJobDetailData(prevState => ({
      ...prevState,

      employeeName: employee
    }));
  };

  const handleDateChangeStart = date => {
    const time = date.toLocaleString();
    const newTime = handleDate(time);
    console.log(typeof date.toString());
    console.log(date.toString());
    console.log(typeof dateNow.toString());
    console.log(dateNow.toString());

    setDateStart(new Date(date));
    props.setJobDetailData(prevState => ({
      ...prevState,

      jobDate: newTime
    }));
  };
  const handleDate = str => {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hr = ('0' + date.getHours()).slice(-2),
      min = ('0' + date.getMinutes()).slice(-2),
      ss = ('0' + date.getSeconds()).slice(-2);

    return date.getFullYear() + mnth + day;
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
    setDayTest({
      year: date.getFullYear(),
      month: mnth,
      day: day,
      hr: hours,
      min: minutes
    });
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    history.go(0);
  };
  const handleDialog = () => {
    console.log(props.jobDetailData);
    updateJob(props.jobDetailData)
      .then(res => {
        setOpenDialog(true);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getEmployeeAll(`Keyword=ช่าง&Page=1&PageSize=100&request=Id`)
      .then(res => {
        //console.log(res.data);
        setEmployee(res.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    getCustomerByID(props.jobDetailData.customerId)
      .then(res => {
        console.log(res.data.result.data);

        setCustomer(res.data.result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const splitDate = (str, i1, i2) => {
    const result = [str.slice(0, i1), str.slice(i1)];
    const day = [result[1].slice(0, i2), result[1].slice(i2)];
    return result[0] + ' ' + day[0] + ' ' + day[1];
  };
  const handleSearch = e => {
    const data = e;
    props.setJobDetailData(prevState => ({
      ...prevState,
      customerId: data
    }));

    getCustomerByID(data)
      .then(res => {
        console.log(res.data.result.data);

        setCustomer(res.data.result.data);
        props.setJobDetailData(prevState => ({
          ...prevState,
          customerId: res.data.result.data.customerId,
          customerName: res.data.result.data.customerName,
          customerInfo: {
            address: res.data.result.data.address,
            telephoneNumber: res.data.result.data.telephoneNumber,
            branch: res.data.result.data.branch,
            email: res.data.result.data.email
          }
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleJobData = data => {
    // console.log(formik.values);
    const time = data.toLocaleString();
    const newTime = handleDate(time);
    console.log(data.toString());
    console.log(splitDate(newTime, 4, 2));
    setDateStart(new Date(data));
    props.setJobDetailData(prevState => ({
      ...prevState,

      jobDate: newTime
    }));
  };
  return (
    <div style={{ margin: 10 }}>
      <form onSubmit={formik.handleSubmit}>
        <Card className={classes.root} style={{ marginBottom: '15px' }}>
          <CardContent>
            {' '}
            <Grid container spacing={2}>
              <Grid container item xs={12} sm={12} md={8}>
                <ArrowBackIosIcon
                  className={classes.kk}
                  onClick={props.handleEdit}
                />
                <Typography variant="h2">รายการตรวจเช็ค</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card
          className={classes.root}
          style={{ marginBottom: '15px', textAlign: 'right' }}
        >
          <CardContent>
            {' '}
            <Typography variant="subtitle2">
              เลขที่ใบงาน {jobDetailData.jobId}
            </Typography>{' '}
            <Typography variant="subtitle2">
              วันที่ 12 ธ.ค. 2564 16:00:54
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.cardPad}>
          <Grid item>
            <Typography variant="h3">ข้อมูล</Typography>
          </Grid>
        </Card>
        <Card
          className={classes.root}
          style={{ marginBottom: '15px', borderRadius: 0 }}
        >
          <CardContent>
            {/* <button onClick={testDate}>date</button>
        <button onClick={() => console.log(jobDetailData)}>log</button> */}
            <Grid container item xs={12} sm={12} md={12} spacing={1}>
              <Grid container item xs={12} sm={12} md={6} spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <Grid container>
                    <Typography variant="subtitle2">รหัสร้านค้า</Typography>
                    <Box ml={1} />
                    <Typography style={{ color: '#D44848' }}> * </Typography>
                  </Grid>
                  <Box mt={2} />
                  <TextField
                    fullWidth
                    id="customerID"
                    name="customerID"
                    variant="outlined"
                    className={classes.defaultText}
                    // onChange={handleSearch}
                    onChange={e => {
                      handleSearch(e.target.value);
                      formik.handleChange(e);
                    }}
                    placeholder="กรุณากรอกข้อมูล"
                    color="secondary"
                    size="small"
                    value={formik.values.customerID}
                    error={
                      formik.touched.customerID &&
                      Boolean(formik.errors.customerID)
                    }
                    helperText={
                      formik.touched.customerID && formik.errors.customerID
                    }
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} md={6} spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <Grid container>
                    <Typography variant="subtitle2">ชื่อร้านค้า</Typography>
                  </Grid>
                  <Box mt={2} />
                  <TextField
                    fullWidth
                    id="customerID"
                    name="customerID"
                    variant="outlined"
                    className={classes.disableText}
                    value={customer.customerName}
                    disabled
                    placeholder="กรุณากรอกข้อมูล"
                    color="secondary"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} md={6} spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <Box mt={2} />
                  <Grid container>
                    <Typography variant="subtitle2">สาขา</Typography>
                  </Grid>
                  <Box mt={2} />

                  <TextField
                    className={classes.disableText}
                    fullWidth
                    id="customerID"
                    name="customerID"
                    variant="outlined"
                    disabled
                    // onChange={formik.handleChange}
                    value={customer.branch}
                    placeholder="กรุณากรอกข้อมูล"
                    color="secondary"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} md={6} spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <Box mt={2} />
                  <Grid container>
                    <Typography variant="subtitle2">ที่อยู่</Typography>
                  </Grid>
                  <Box mt={2} />

                  <TextField
                    className={classes.disableText}
                    fullWidth
                    id="customerID"
                    name="customerID"
                    variant="outlined"
                    disabled
                    // onChange={formik.handleChange}
                    value={customer.address}
                    placeholder="กรุณากรอกข้อมูล"
                    color="secondary"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} md={6} spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <Box mt={2} />
                  <Grid container>
                    <Typography variant="subtitle2">โทรศัพท์</Typography>
                  </Grid>
                  <Box mt={2} />
                  <TextField
                    className={classes.disableText}
                    disabled
                    fullWidth
                    id="customerID"
                    name="customerID"
                    variant="outlined"
                    value={customer.telephoneNumber}
                    placeholder="กรุณากรอกข้อมูล"
                    color="secondary"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} md={6} spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <Box mt={2} />
                  <Grid container>
                    <Typography variant="subtitle2">อีเมล</Typography>
                  </Grid>
                  <Box mt={2} />
                  <TextField
                    className={classes.disableText}
                    fullWidth
                    id="customerID"
                    name="customerID"
                    variant="outlined"
                    disabled
                    value={customer.email}
                    placeholder="กรุณากรอกข้อมูล"
                    color="secondary"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Box mt={2} />
          </CardContent>
        </Card>
        <Card className={classes.cardPad}>
          <Grid item>
            <Typography variant="h3">งานที่ต้องทำ</Typography>
          </Grid>
        </Card>
        <Card
          className={classes.root}
          style={{ marginBottom: '15px', borderRadius: 0 }}
        >
          <CardContent>
            {' '}
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                {(() => {
                  switch (jobDetailData.liquidDispenser.status) {
                    case 0:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={props.handleCheckOne}
                                name="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
                              />
                            }
                            label="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
                          />
                        </>
                      );
                    case 1:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={props.checkOne}
                                onChange={props.handleCheckOne}
                                name="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
                              />
                            }
                            label="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
                          />
                        </>
                      );
                    case 2:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked
                                onChange={props.handleCheckOne}
                                disabled
                                name="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
                              />
                            }
                            label="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
                          />
                        </>
                      );
                    default:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={props.handleCheckOne}
                                disabled
                                name="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
                              />
                            }
                            label="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
                          />
                        </>
                      );
                  }
                })()}
                {(() => {
                  switch (jobDetailData.proSink.status) {
                    case 0:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={props.handleCheckTwo}
                                name="ตรวจเช็ค: ProSink"
                              />
                            }
                            label="ตรวจเช็ค: ProSink"
                          />
                        </>
                      );
                    case 1:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={props.checkTwo}
                                onChange={props.handleCheckTwo}
                                name="ตรวจเช็ค: ProSink"
                              />
                            }
                            label="ตรวจเช็ค: ProSink"
                          />
                        </>
                      );
                    case 2:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={props.checkTwo}
                                disabled
                                onChange={props.handleCheckTwo}
                                name="ตรวจเช็ค: ProSink"
                              />
                            }
                            label="ตรวจเช็ค: ProSink"
                          />
                        </>
                      );
                    default:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={props.handleCheckTwo}
                                disabled
                                name="ตรวจเช็ค: ProSink"
                              />
                            }
                            label="ตรวจเช็ค: ProSink"
                          />
                        </>
                      );
                  }
                })()}
                {(() => {
                  switch (jobDetailData.proMax.status) {
                    case 0:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                              onChange={props.handleCheckThree}
                                name="ตรวจเช็ค: ProMAX"
                              />
                            }
                            label="ตรวจเช็ค: ProMAX"
                          />
                        </>
                      );
                    case 1:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={props.checkThree}
                                onChange={props.handleCheckThree}
                                name="ตรวจเช็ค: ProMAX"
                              />
                            }
                            label="ตรวจเช็ค: ProMAX"
                          />
                        </>
                      );
                    case 2:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={props.checkThree}
                                disabled
                                onChange={props.handleCheckThree}
                                name="ตรวจเช็ค: ProMAX"
                              />
                            }
                            label="ตรวจเช็ค: ProMAX"
                          />
                        </>
                      );
                    default:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={props.handleCheckThree}
                                disabled
                                name="ตรวจเช็ค: ProMAX"
                              />
                            }
                            label="ตรวจเช็ค: ProMAX"
                          />
                        </>
                      );
                  }
                })()}
                {(() => {
                  switch (jobDetailData.hydroMaster.status) {
                    case 0:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                              onChange={props.handleCheckFour}
                                name="ตรวจเช็ค: Hydro Master"
                              />
                            }
                            label="ตรวจเช็ค: Hydro Master"
                          />
                        </>
                      );
                    case 1:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={props.checkFour}
                                onChange={props.handleCheckFour}
                                name="ตรวจเช็ค: Hydro Master"
                              />
                            }
                            label="ตรวจเช็ค: Hydro Master"
                          />
                        </>
                      );
                    case 2:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked
                                onChange={props.handleCheckFour}
                                name="ตรวจเช็ค: Hydro Master"
                                disabled
                              />
                            }
                            label="ตรวจเช็ค: Hydro Master"
                          />
                        </>
                      );
                    default:
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                disabled
                                onChange={props.handleCheckFour}
                                name="ตรวจเช็ค: Hydro Master"
                              />
                            }
                            label="ตรวจเช็ค: Hydro Master"
                          />
                        </>
                      );
                  }
                })()}

                <FormControlLabel
                  control={
                    <Checkbox
                     
                      disabled
                      name="N/A"
                    />
                  }
                  label="N/A"
                />
              </FormGroup>
            </FormControl>
            <Typography variant="h4">จำนวนงานที่ต้องทำทั้งหมด</Typography>
            <Box mt={2} />
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Box mt={2} />

                <Grid container>
                  <Typography variant="h3">วันที่เข้าตรวจเช็ค</Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mt={1} />

                <KeyboardDatePicker
                  placeholder="กรุณาเลือก"
                  margin="none"
                  id="date_of_birth"
                  name="date-picker-dialog"
                  format="DD/MM/yyyy"
                  inputVariant="outlined"
                  InputAdornmentProps={{ position: 'start' }}
                  onChange={date => {
                    handleJobData(date);

                    formik.setFieldValue(
                      'date',
                      moment(date).format('YYYY-MM-DD')
                    );
                  }}
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                  value={formik.values.date}
                  error={formik.touched.date && Boolean(formik.errors.date)}
                  helperText={formik.touched.date && formik.errors.date}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box mt={2} />
                <Grid container>
                  <Typography variant="h3">
                    เจ้าหน้าที่ผู้เข้าตรวจเช็ค
                  </Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mt={1} />
                <TextField
                  fullWidth
                  className="px-2 my-2"
                  variant="outlined"
                  name="customerSell"
                  id="customerSell"
                  select
                  SelectProps={{
                    native: true,
                    className: classes.selectCon,
                    MenuProps: {
                      className: { paper: classes.menuPaper }
                    }
                  }}
                  //value={jobDetailData.employeeName}
                  //onChange={handleEmployeeWork}
                  onChange={e => {
                    handleEmployeeWork(e.target.value);
                    formik.handleChange(e);
                  }}
                  placeholder="กรุณากรอกข้อมูล"
                  size="small"
                  value={formik.values.employee}
                  error={
                    formik.touched.employee && Boolean(formik.errors.employee)
                  }
                  helperText={formik.touched.employee && formik.errors.employee}
                >
                  <option value={1}>กรุณาเลือกข้อมูล</option>
                  {employee.map((sell, index) => {
                    if (sell.position == 'ช่าง' && sell.use == true) {
                      return (
                        <option
                          key={index}
                          value={sell.firstName + ' ' + sell.lastName}
                        >
                          {sell.firstName + ' ' + sell.lastName}
                        </option>
                      );
                    }
                  })}
                </TextField>
              </Grid>
              <Box mt={2} />
              <Grid item xs={6} sm={3} md={2}>
                <Box mt={2} />
                <Typography variant="h3">ใบงานนี้จัดทำโดย</Typography>
              </Grid>
              <Grid item xs={6} sm={9} md={10}>
                <Box mt={2} />

                <Typography variant="subtitle2">user</Typography>
              </Grid>
              <Dialogsuc
                title={'บันทึกข้อมูลสำเร็จ'}
                open={openDialog}
                onClose={handleCloseDialog}
              />
            </Grid>
            <Box mt={4} style={{ textAlign: 'center' }} fullWidth>
              <Grid container justifyContent="center" xs={12} sm={12} md={12}>
                <Grid xs={5} sm={5} md={2} style={{ textAlign: 'end' }}>
                  <ButtonSecondary
                    label="ยกเลิก"
                    size="small"
                    //onClick={handleCancelEdit}
                    href="/joblist"
                  />
                </Grid>
                <Box ml={2} />
                {/* <button onClick={()=>console.log(props.jobDetailData)}>log</button> */}
                <Grid xs={5} sm={5} md={2} style={{ textAlign: 'start' }}>
                  <ButtonPramary
                    label="บันทึก"
                    fullWidth
                    size="small"
                    type="submit"
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
