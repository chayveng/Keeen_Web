import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonAddPer from 'src/components/keen/ButtonAddPer';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Dialogsuc from 'src/components/keen/Dialogsuc';
import moment from 'moment';
import axios from "axios";
import {
  Typography,
  Grid,
  TextField,
  Box,
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
import { getCustomerByID } from '../../api/keeen/customer';
import { getEmployeeAll, getEmployeeByID } from '../../api/keeen/employee';
import {
  deleteJobSearch,
  getNextJobID,
  postJob,
  updateJob
} from '../../api/keeen/job';
import { useFormik } from 'formik';
import * as yup from 'yup';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
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

const productName = ['สมชาย ใจดี', 'สมชาย ใจดี', 'สมชาย ใจดี'];
const LotNo = ['item1', 'item2', 'item3'];

export default function JobAdd(props) {
  const classes = useStyles();
  const history = useHistory();
  const bull = <span className={classes.bullet}>•</span>;
  const [shopList, setShopList] = useState(initialList);
  const [showData, setShowData] = useState(false);
  const [value, setValue] = useState();
  const [valueLotNo, setValueLotNo] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [valueID, setValueID] = useState();
  const [dateNow, setDateNow] = useState(new Date().toString());
  const [delateValue, setDeleteValue] = useState();
  const [createJobID, setCreateJobID] = useState();
  const [nextJobID, setNextJobID] = useState();
  const [datePickOpen, setDatePickOpen] = useState(false);
  const [customer, setCustomer] = useState({
    jobId: '',
    customerName: '',
    createTime: '',
    branch: '',
    address: '',
    province: '',
    telephoneNumber: '',
    email: '',
    contactPerson: '',
    use: ''
  });
  const [dateCreate, setDateCreate] = useState({
    year: '',
    month: '',
    day: '',
    hr: '',
    min: '',
    sec: ''
  });
  const [employee, setEmployee] = useState([]);
  const [jobDetailData, setJobDetailData] = useState({
    jobId: '',
    createTime: '',
    customerId: '',
    customerName: '',
    CreateBy: '',
    employeeId: '',
    employeeName: '',
    jobDate: '',
    status: 0,
    customerInfo: {
      address: '',
      telephoneNumber: '',
      branch: '',
      email: ''
    },
    liquidDispenser: {
      status: 0,
      Barcode: '',
      productName: '',
      productLotno: '',
      SerialNo: '',
      image: '',
      machineBefore1: 0,
      machineAfter1: 0,
      machineBefore21: 0,
      machineAfter21: 0,
      machineBefore22: 0,
      machineAfter22: 0,
      machineBefore3: 0,
      machineAfter3: 0,
      machineBefore4: 0,
      machineAfter4: 0,
      machineBefore5: 0,
      machineAfter5: 0,
      machineBefore6: 0,
      machineAfter6: 0,
      machineBefore7: 0,
      machineAfter7: 0,
      machineBefore8: 0,
      machineAfter8: 0,
      description: '',
      Barcode2: '',
      ProductKeeenName: '',
      ProductKeeenLotNo: '',
      product1: 0,
      image1: '',
      product2: 0,
      product3: 0,
      product4: 0,
      description2: '',
      signatureCustomer: '',
      signatureEmployee: ''
    },
    proSink: {
      status: 0,
      barcode: '',
      productName: '',
      serialNo: '',
      image: '',
      machineBefore1: 0,
      machineAfter1: 0,
      machineBefore2: 0,
      machineAfter2: 0,
      imageBefore1: '',
      imageAfter1: '',
      machineBefore3: 0,
      machineAfter3: 0,
      machineBefore4: 0,
      machineAfter4: 0,
      headOne: false,
      headOneBefore31: 0,
      headOneAfter31: 0,
      headOneBefore32: 0,
      headOneAfter32: 0,
      headOneBefore331: 0,
      headOneAfter331: 0,
      headOneBefore332: 0,
      headOneAfter332: 0,
      headOneBefore333: 0,
      headOneAfter333: 0,
      headOneBefore34: 0,
      headOneAfter34: 0,
      headOneBefore35: 0,
      headOneAfter35: 0,
      headOneBarcode2: '',
      headOneProductKeeenName: '',
      headOneProductKeeenLotNo: '',
      headOne41: 0,
      headOneimage2: '',
      headOne42: 0,
      headOne43: 0,
      headOne44: 0,
      headOneBefore51: 0,
      headOneAfter51: 0,
      headOneBefore521: 0,
      headOneAfter521: 0,
      headOneBefore522: 0,
      headOneAfter522: 0,
      headOneBefore531: 0,
      headOneAfter531: 0,
      headOneBefore532: 0,
      headOneAfter532: 0,
      headOneBefore533: 0,
      headOneAfter533: 0,
      headOneDescription2: '',
      headTwo: false,
      headTwoBefore31: 0,
      headTwoAfter31: 0,
      headTwoBefore32: 0,
      headTwoAfter32: 0,
      headTwoBefore331: 0,
      headTwoAfter331: 0,
      headTwoBefore332: 0,
      headTwoAfter332: 0,
      headTwoBefore333: 0,
      headTwoAfter333: 0,
      headTwoBefore34: 0,
      headTwoAfter34: 0,
      headTwoBefore35: 0,
      headTwoAfter35: 0,
      headTwoBarcode2: '',
      headTwoProductKeeenName: '',
      headTwoProductKeeenLotNo: '',
      headTwo41: 0,
      headTwoimage2: '',
      headTwo42: 0,
      headTwo43: 0,
      headTwo44: 0,
      headTwoBefore51: 0,
      headTwoAfter51: 0,
      headTwoBefore521: 0,
      headTwoAfter521: 0,
      headTwoBefore522: 0,
      headTwoAfter522: 0,
      headTwoBefore531: 0,
      headTwoAfter531: 0,
      headTwoBefore532: 0,
      headTwoAfter532: 0,
      headTwoBefore533: 0,
      headTwoAfter533: 0,
      headTwoDescription2: '',
      signatureCustomer: '',
      signatureEmployee: ''
    },
    proMax: {
      status: 0,
      barcode: '',
      productName: '',
      serialNo: '',
      image: '',
      machineBefore1: 0,
      machineAfter1: 0,
      machineBefore2: 0,
      machineAfter2: 0,
      imageBefore1: '',
      imageAfter1: '',
      machineBefore3: 0,
      machineAfter3: 0,
      machineBefore4: 0,
      machineAfter4: 0,
      headOne: false,
      headOneBefore31: 0,
      headOneAfter31: 0,
      headOneBefore32: 0,
      headOneAfter32: 0,
      headOneBefore331: 0,
      headOneAfter331: 0,
      headOneBefore332: 0,
      headOneAfter332: 0,
      headOneBefore333: 0,
      headOneAfter333: 0,
      headOneBefore34: 0,
      headOneAfter34: 0,
      headOneBefore35: 0,
      headOneAfter35: 0,
      headOneBefore36: 0,
      headOneAfter36: 0,
      headOneBarcode2: '',
      headOneProductKeeenName: '',
      headOneProductKeeenLotNo: '',
      headOne41: 0,
      headOneimage2: '',
      headOne42: 0,
      headOne43: 0,
      headOne44: 0,
      headOneBefore51: 0,
      headOneAfter51: 0,
      headOneBefore521: 0,
      headOneAfter521: 0,
      headOneBefore522: 0,
      headOneAfter522: 0,
      headOneBefore531: 0,
      headOneAfter531: 0,
      headOneBefore532: 0,
      headOneAfter532: 0,
      headOneBefore533: 0,
      headOneAfter533: 0,
      headOneDescription2: '',
      headTwo: false,
      headTwoBefore31: 0,
      headTwoAfter31: 0,
      headTwoBefore32: 0,
      headTwoAfter32: 0,
      headTwoBefore331: 0,
      headTwoAfter331: 0,
      headTwoBefore332: 0,
      headTwoAfter332: 0,
      headTwoBefore333: 0,
      headTwoAfter333: 0,
      headTwoBefore34: 0,
      headTwoAfter34: 0,
      headTwoBefore35: 0,
      headTwoAfter35: 0,
      headTwoBefore36: 0,
      headTwoAfter36: 0,
      headTwoBarcode2: '',
      headTwoProductKeeenName: '',
      headTwoProductKeeenLotNo: '',
      headTwo41: 0,
      headTwoimage2: '',
      headTwo42: 0,
      headTwo43: 0,
      headTwo44: 0,
      headTwoBefore51: 0,
      headTwoAfter51: 0,
      headTwoBefore521: 0,
      headTwoAfter521: 0,
      headTwoBefore522: 0,
      headTwoAfter522: 0,
      headTwoBefore531: 0,
      headTwoAfter531: 0,
      headTwoBefore532: 0,
      headTwoAfter532: 0,
      headTwoBefore533: 0,
      headTwoAfter533: 0,
      headTwoDescription2: '',
      headThree: false,
      headThreeBefore31: 0,
      headThreeAfter31: 0,
      headThreeBefore32: 0,
      headThreeAfter32: 0,
      headThreeBefore331: 0,
      headThreeAfter331: 0,
      headThreeBefore332: 0,
      headThreeAfter332: 0,
      headThreeBefore333: 0,
      headThreeAfter333: 0,
      headThreeBefore34: 0,
      headThreeAfter34: 0,
      headThreeBefore35: 0,
      headThreeAfter35: 0,
      headThreeBefore36: 0,
      headThreeAfter36: 0,
      headThreeBarcode2: '',
      headThreeProductKeeenName: '',
      headThreeProductKeeenLotNo: '',
      headThree41: 0,
      headThreeimage2: '',
      headThree42: 0,
      headThree43: 0,
      headThree44: 0,
      headThreeBefore51: 0,
      headThreeAfter51: 0,
      headThreeBefore521: 0,
      headThreeAfter521: 0,
      headThreeBefore522: 0,
      headThreeAfter522: 0,
      headThreeBefore531: 0,
      headThreeAfter531: 0,
      headThreeBefore532: 0,
      headThreeAfter532: 0,
      headThreeBefore533: 0,
      headThreeAfter533: 0,
      headThreeDescription2: '',
      headFour: false,
      headFourBefore31: 0,
      headFourAfter31: 0,
      headFourBefore32: 0,
      headFourAfter32: 0,
      headFourBefore331: 0,
      headFourAfter331: 0,
      headFourBefore332: 0,
      headFourAfter332: 0,
      headFourBefore333: 0,
      headFourAfter333: 0,
      headFourBefore34: 0,
      headFourAfter34: 0,
      headFourBefore35: 0,
      headFourAfter35: 0,
      headFourBefore36: 0,
      headFourAfter36: 0,
      headFourBarcode2: '',
      headFourProductKeeenName: '',
      headFourProductKeeenLotNo: '',
      headFour41: 0,
      headFourimage2: '',
      headFour42: 0,
      headFour43: 0,
      headFour44: 0,
      headFourBefore51: 0,
      headFourAfter51: 0,
      headFourBefore521: 0,
      headFourAfter521: 0,
      headFourBefore522: 0,
      headFourAfter522: 0,
      headFourBefore531: 0,
      headFourAfter531: 0,
      headFourBefore532: 0,
      headFourAfter532: 0,
      headFourBefore533: 0,
      headFourAfter533: 0,
      headFourDescription2: '',
      signatureCustomer: '',
      signatureEmployee: ''
    },
    hydroMaster: {
      status: 0,
      Barcode: '',
      productName: '',
      productLotno: '',
      SerialNo: '',
      image: '',
      machineBefore1: 0,
      machineAfter1: 0,
      machineBefore2: 0,
      machineAfter2: 0,
      imageBefore1: '',
      imageAfter1: '',
      machineBefore3: 0,
      machineAfter3: 0,
      machineBefore4: 0,
      machineAfter4: 0,
      machineBefore5: 0,
      machineAfter5: 0,
      machineBefore6: 0,
      machineAfter6: 0,
      machineBefore71: 0,
      machineAfter71: 0,
      machineBefore72: 0,
      machineAfter72: 0,
      machineBefore73: 0,
      machineAfter73: 0,
      machineBefore8: 0,
      machineAfter8: 0,
      machineBefore9: 0,
      machineAfter9: 0,
      description: '',
      Barcode2: '',
      ProductKeeenName: '',
      ProductKeeenLotNo: '',
      product1: 0,
      image2: '',
      product2: 0,
      product3: 0,
      product4: 0,
      technicalBefore1: 0,
      technicalAfter1: 0,
      technicalBefore21: 0,
      technicalAfter21: 0,
      technicalBefore22: 0,
      technicalAfter22: 0,
      technicalBefore31: 0,
      technicalAfter31: 0,
      technicalBefore32: 0,
      technicalAfter32: 0,
      technicalBefore33: 0,
      technicalAfter33: 0,
      description2: '',
      signatureCustomer: '',
      signatureEmployee: ''
    }
  });
  const setPickerStatus = status => {
    setDatePickOpen(status);
  };
  const yesterday = new Date(Date.now() - 86400000);
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
      customerID: valueID,
      date: jobDetailData.jobDate,
      employee: jobDetailData.employeeName
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: values => {
      handleDialog();
      console.log(values);
    }
  });

  const [dateStart, setDateStart] = useState(jobDetailData.jobDate);
  const clickRow = () => {
    setShowData(true);
  };
  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleChangeLotNo = event => {
    setValueLotNo(event.target.value);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    const path = '/joblist';
    history.push(path);
  };
  const handleDialog = () => {
    console.log(jobDetailData);
    // const host_url = "https://localhost:7029";
    // axios.get(host_url + "/Hello");
    // axios.post(host_url + "/api/v1/Test/", jobDetailData);

    postJob(jobDetailData)
      .then(res => {
        console.log('save PostJobData');
        setOpenDialog(true);
      })
      .catch(error => {
        console.log(error);
      });

    // // ***********************************************
    // updateJob(jobDetailData)
    //   .then(res => {
    //     //console.log('save');
    //     setOpenDialog(true);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // // ***********************************************
  };
  const handleSearch = data => {
    const result = data.toUpperCase();
    setValueID(result);
    getCustomerByID(result)
      .then(res => {
        console.log(res.data.result.data);

        setCustomer(res.data.result.data);
        setJobDetailData(prevState => ({
          ...prevState,
          customerId: res.data.result.data.customerId,
          customerName: res.data.result.data.customerName,
          customerInfo: {
            address: res.data.result.data.address,
            telephoneNumber: res.data.result.data.telephoneNumber,
            email: res.data.result.data.email,
            branch: res.data.result.data.branch
          }
        }));
      })
      .catch(error => {
        console.log(error);
        setCustomer(prevState => ({
          ...prevState,
          jobId: '',
          customerName: '',
          createTime: '',
          branch: '',
          address: '',
          province: '',
          telephoneNumber: '',
          email: '',
          contactPerson: '',
          use: ''
        }));
        setJobDetailData(prevState => ({
          ...prevState,
          customerId: '',
          customerName: '',
          customerInfo: {
            address: '',
            telephoneNumber: '',
            email: '',
            branch: ''
          }
        }));
      });
  };
  const handleJobData = data => {
    // console.log(formik.values);
    const time = data.toLocaleString();
    const newTime = handleDate(time);
    console.log(data.toString());
    console.log(splitDate(newTime, 4, 2));
    setDateStart(new Date(data));
    setJobDetailData(prevState => ({
      ...prevState,

      jobDate: newTime
    }));
  };
  const handleEmployeeWork = data => {
    const employee = data;
    const name = employee.split(' ');

    getEmployeeByID(name[0]).then(res => {
      const data = res.data.data.employeeId;
      setJobDetailData(prevState => ({
        ...prevState,

        employeeId: data
      }));
    });
    setJobDetailData(prevState => ({
      ...prevState,

      employeeName: employee
    }));
  };
  const genNewDate = () => {
    handleDateCreate1(dateNow);
    console.log(dateNow);
    setJobDetailData(prevState => ({
      ...prevState,
      status: 1,
      createTime: dateNow,
      CreateBy: 'user'
    }));
  };
  useEffect(() => {
    getNextJobID()
      .then(res => {
        console.log(res.data);
        setNextJobID(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    // // ***********************************************
    // postJob(jobDetailData)
    //   .then(res => {
    //     console.log(res.data.data.jobId);
    //     setJobDetailData(prevState => ({
    //       ...prevState,
    //       jobId: res.data.data.jobId
    //     }));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // // ***********************************************
  }, []);
  useEffect(() => {
    genNewDate();
    // postNewJob();

  }, []);

  const postNewJob = () => {
    console.log(jobDetailData);
    // ***********************************************
    // postJob(jobDetailData)
    // .then(res => {
    //   console.log(res.data);
    //  // // ***********************************************
    //   // setJobDetailData(prevState => ({
    //   //   ...prevState,
    //   //   jobId: res.data.jobId
    //   // }));
    //  // // ***********************************************
    // })
    // .catch(error => {
    //   console.log(error);
    // });
    // ***********************************************
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

  const handleDateCreate = str => {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hr = ('0' + date.getHours()).slice(-2),
      min = ('0' + date.getMinutes()).slice(-2),
      ss = ('0' + date.getSeconds()).slice(-2);
    // switch (mnth) {
    //   case '01':
    //     mnth = 'ม.ค.';
    //     break;
    //   case '02':
    //     mnth = 'ก.พ.';
    //     break;
    //   case '03':
    //     mnth = 'มี.ค.';
    //     break;
    //   case '04':
    //     mnth = 'เม.ย.';
    //     break;
    //   case '05':
    //     mnth = 'พ.ค.';
    //     break;
    //   case '06':
    //     mnth = 'มิ.ย.';

    //     break;
    //   case '07':
    //     mnth = 'ก.ค.';
    //     break;
    //   case '08':
    //     mnth = 'ส.ค.';
    //     break;
    //   case '09':
    //     mnth = 'ก.ย.';
    //     break;
    //   case '10':
    //     mnth = 'ต.ค.';
    //     break;
    //   case '11':
    //     mnth = 'พ.ย.';
    //     break;
    //   case '12':
    //     mnth = 'ธ.ค.';
    //     break;
    //   default:
    //     break;
    // }

    return (
      'วันที่ ' +
      day +
      ' ' +
      mnth +
      ' ' +
      date.getFullYear() +
      ' เวลา ' +
      hr +
      ':' +
      min +
      ':' +
      ss +
      ' น.'
    );
  };
  const handleCheckOne = event => {
    // console.log(event.target.checked);
    if (event.target.checked) {
      setJobDetailData(prevState => ({
        ...prevState,
        liquidDispenser: {
          ...prevState.liquidDispenser,
          status: 1
        }
      }));
    } else {
      setJobDetailData(prevState => ({
        ...prevState,
        liquidDispenser: {
          ...prevState.liquidDispenser,
          status: 0
        }
      }));
    }
  };
  const handleCheckTwo = event => {
    // console.log(event.target.checked);
    if (event.target.checked) {
      setJobDetailData(prevState => ({
        ...prevState,
        proSink: {
          ...prevState.proSink,
          status: 1
        }
      }));
    } else {
      setJobDetailData(prevState => ({
        ...prevState,
        proSink: {
          ...prevState.proSink,
          status: 0
        }
      }));
    }
  };
  const handleCheckThree = event => {
    // console.log(event.target.checked);
    if (event.target.checked) {
      setJobDetailData(prevState => ({
        ...prevState,
        proMax: {
          ...prevState.proMax,
          status: 1
        }
      }));
    } else {
      setJobDetailData(prevState => ({
        ...prevState,
        proMax: {
          ...prevState.proMax,
          status: 0
        }
      }));
    }
  };
  const handleCheckFour = event => {
    //console.log(event.target.checked);
    if (event.target.checked) {
      setJobDetailData(prevState => ({
        ...prevState,
        hydroMaster: {
          ...prevState.hydroMaster,
          status: 1
        }
      }));
    } else {
      setJobDetailData(prevState => ({
        ...prevState,
        hydroMaster: {
          ...prevState.hydroMaster,
          status: 0
        }
      }));
    }
  };
  const handleDateCreate1 = str => {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hr = ('0' + date.getHours()).slice(-2),
      min = ('0' + date.getMinutes()).slice(-2),
      ss = ('0' + date.getSeconds()).slice(-2);

    setDateCreate({
      year: date.getFullYear(),
      month: mnth,
      day: day,
      hr: hr,
      min: min,
      sec: ss
    });
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
  const splitDate = (str, i1, i2) => {
    const result = [str.slice(0, i1), str.slice(i1)];
    const day = [result[1].slice(0, i2), result[1].slice(i2)];
    return result[0] + ' ' + day[0] + ' ' + day[1];
  };
  const deleteSumJob = str => {
    deleteJobSearch(str).then(res => {
      console.log('delete');
    });
  };
  const CancelJob = str => {
    const path = '/joblist';
    history.push(path);
    // deleteJobSearch(jobDetailData.jobId).then(res => {
    //   console.log('delete-last');
    //   const path = '/joblist';
    //   history.push(path);
    // });
  };
  const valueDeleteChange = e => {
    setDeleteValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div style={{ margin: 10 }}>
      <form onSubmit={formik.handleSubmit}>
        <Card
          className={classes.root}
          style={{ marginBottom: '15px', borderRadius: 0 }}
        >
          {/* <CardContent> */}{' '}
          <Grid container spacing={2}>
            <Grid container item xs={12} sm={12} md={8}>
              <ArrowBackIosIcon className={classes.kk} onClick={CancelJob} />
              <Typography variant="h2">เพิ่มใบงาน (New Job Order)</Typography>
            </Grid>
          </Grid>
          {/* </CardContent> */}
        </Card>

        <Card
          className={classes.root}
          style={{ marginBottom: '15px', textAlign: 'right' }}
        >
          {/* <CardContent> */}{' '}
          <Typography variant="subtitle2">เลขที่ใบงาน {nextJobID}</Typography>{' '}
          <Typography variant="subtitle2">
            {handleDateCreate(dateNow)}
          </Typography>
          {/* </CardContent> */}
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
          {/* <CardContent> */}
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
                  inputProps={{ maxLength: 5 }}
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

          {/* </CardContent> */}
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
          {/* <CardContent> */}{' '}
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    //checked={props.checkOne}
                    onChange={handleCheckOne}
                    // disabled={props.disabled}
                    name="gilad"
                  />
                }
                label="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={props.checkTwo}
                    onChange={handleCheckTwo}
                    name="jason"
                  />
                }
                label="ตรวจเช็ค: ProSink"
              />
               <FormControlLabel
                control={
                  <Checkbox
                   
                    onChange={handleCheckThree}
                    name="jason"
                  />
                }
                label="ตรวจเช็ค: ProMAX"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={props.checkThree}
                    onChange={handleCheckFour}
                    name="antoine"
                  />
                }
                label="ตรวจเช็ค: Hydro Master"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    
                    name="jason"
                    disabled
                  />
                }
                label="N/A"
              />
            </FormGroup>
          </FormControl>
          <Typography variant="h4">จำนวนงานที่ต้องทำทั้งหมด</Typography>
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
                onClick={() => setPickerStatus(true)}
                onClose={() => setPickerStatus(false)}
                open={datePickOpen}
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
                <Typography variant="h3">เจ้าหน้าที่ผู้เข้าตรวจเช็ค</Typography>
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
                  onClick={CancelJob}
                />
              </Grid>
              <Box ml={2} />
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
          {/* </CardContent> */}
        </Card>
      </form>
    </div>
  );
}
