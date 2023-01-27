import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonJobsAc from 'src/components/keen/ButtonJobAc';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import ButtonAddPer from 'src/components/keen/ButtonAddPer';

import { Font } from '@react-pdf/renderer';
import FontPrompt from '../../Font/Prompt-Regular.ttf';
import { useParams } from 'react-router-dom';
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
import ButtonJobs from 'src/components/keen/ButtonJob';
import JobEdit from '../jobedit/JobEdit';
import { getJobSearch, updateJob } from '../../api/keeen/job';
import Dialogsuc from 'src/components/keen/Dialogsuc';
import DialogCancelJob from './DialogCancelJob';
const useStyles = makeStyles(theme => ({
  root: { borderRadius: 0 },
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
  btnJobTrue: {
    backgroundColor: '#3AA775',
    border: '1px solid #028E4E',
    color: '#FFFFFF',
    borderRadius: 8,
    width: 180
  },
  btnJobFalse: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #028E4E',
    borderRadius: 8,
    width: 180
  },
  btnJobDisabled: {
    color: '#FFFFFF',
    backgroundColor: '#D3D3D3',
    border: '1px solid #A0ACB7',
    borderRadius: 8,
    width: 180
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

export default function JobDetail() {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();
  const job_ID = params.jobID;
  const bull = <span className={classes.bullet}>•</span>;
  const [shopList, setShopList] = useState(initialList);
  const [showData, setShowData] = useState(false);
  const [edit, setEdit] = useState(true);
  const [checkOne, setCheckOne] = useState(true);
  const [checkTwo, setCheckTwo] = useState(true);
  const [checkThree, setCheckThree] = useState(true);
  const [checkFour, setCheckFour] = useState(true);
  const [disabledOne, setDisabledOne] = useState(true);
  const [dialogCancel, setDialogCnacel] = useState(false);
  const [check1, setCheck1] = useState();
  const [check2, setCheck2] = useState();
  const [check3, setCheck3] = useState();
  const [check4, setCheck4] = useState();
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [dialogCancelSave, setDialogCnacelSave] = useState(false);
  const [dateDetail, setDateDetail] = useState({
    year: '',
    month: '',
    day: '',
    hr: '',
    min: ''
  });
  const [dateCreate, setDateCreate] = useState({
    year: '',
    month: '',
    day: '',
    hr: '',
    min: ''
  });
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
  const [editFix, setEditFix] = useState(false);
  const fecthData = () => {
    getJobSearch(job_ID)
      .then(res => {
        const data = res.data.result.data;
        console.log(res.data.result);
        if (
          (data.liquidDispenser.status == 2 &&
            data.liquidDispenser.signatureCustomer != '' &&
            data.liquidDispenser.signatureEmployee != '' &&
            data.proSink.status == 0 &&
            data.proMax.status == 0 &&
            data.hydroMaster.status == 0) ||
          (data.proSink.status == 2 &&
            data.proSink.signatureCustomer != '' &&
            data.proSink.signatureEmployee != '' &&
            data.liquidDispenser.status == 0 &&
            data.proMax.status == 0 &&
            data.hydroMaster.status == 0) ||
          (data.hydroMaster.status == 2 &&
            data.hydroMaster.signatureCustomer != '' &&
            data.hydroMaster.signatureEmployee != '' &&
            data.liquidDispenser.status == 0 &&
            data.proMax.status == 0 &&
            data.proSink.status == 0) ||

          (data.liquidDispenser.status == 2 &&
            data.liquidDispenser.signatureCustomer != '' &&
            data.liquidDispenser.signatureEmployee != '' &&
            data.proSink.status == 2 &&
            data.proSink.signatureCustomer != '' &&
            data.proSink.signatureEmployee != '' &&
            data.hydroMaster.status == 0) ||
          //----------check 2 step--------------------
          (data.liquidDispenser.status == 2 &&
            data.liquidDispenser.signatureCustomer != '' &&
            data.liquidDispenser.signatureEmployee != '' &&
            data.proSink.status == 2 &&
            data.proSink.signatureCustomer != '' &&
            data.proSink.signatureEmployee != '' &&
            data.hydroMaster.status == 0) ||
          (data.liquidDispenser.status == 2 &&
            data.liquidDispenser.signatureCustomer != '' &&
            data.liquidDispenser.signatureEmployee != '' &&
            data.hydroMaster.status == 2 &&
            data.hydroMaster.signatureCustomer != '' &&
            data.hydroMaster.signatureEmployee != '' &&
            data.proSink.status == 0) ||
          (data.proSink.status == 2 &&
            data.proSink.signatureCustomer != '' &&
            data.proSink.signatureEmployee != '' &&
            data.hydroMaster.status == 2 &&
            data.hydroMaster.signatureCustomer != '' &&
            data.hydroMaster.signatureEmployee != '' &&
            data.liquidDispenser.status == 0) ||
          (data.proSink.status == 2 &&
            data.proSink.signatureCustomer != '' &&
            data.proSink.signatureEmployee != '' &&
            data.hydroMaster.status == 2 &&
            data.hydroMaster.signatureCustomer != '' &&
            data.hydroMaster.signatureEmployee != '' &&
            data.liquidDispenser.status == 2 &&
            data.liquidDispenser.signatureCustomer != '' &&
            data.liquidDispenser.signatureEmployee != '')
        ) {
          console.log('not edit');
          setEditFix(true);
        }
        setJobDetailData(res.data.result.data);
        if (res.data.result.data.liquidDispenser.status == 4) {
          setChecked(true);
        }
        if (res.data.result.data.proSink.status == 4) {
          setChecked2(true);
        }
        if (res.data.result.data.hydroMaster.status == 4) {
          setChecked3(true);
        }
        setCheck1(res.data.result.data.liquidDispenser.status);
        setCheck2(res.data.result.data.proSink.status);
        setCheck3(res.data.result.data.proMax.status);
        setCheck4(res.data.result.data.hydroMaster.status);
        splitDate(res.data.result.data.jobDate, 4, 2);
        handleDateCreate(res.data.result.data.createTime);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    setFont();
    fecthData();
  }, []);

  const setFont = () => {
    Font.register({
      family: 'Prompt',
      src: FontPrompt
    });
  };
  const handleDateTime = str => {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hours = ('0' + date.getHours()).slice(-2),
      minutes = ('0' + date.getMinutes()).slice(-2);

    setDateDetail({
      year: date.getFullYear(),
      month: mnth,
      day: day,
      hr: hours,
      min: minutes
    });
  };
  const handleDateCreate = str => {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hours = ('0' + date.getHours()).slice(-2),
      minutes = ('0' + date.getMinutes()).slice(-2);

    setDateCreate({
      year: date.getFullYear(),
      month: mnth,
      day: day,
      hr: hours,
      min: minutes
    });
  };

  const handleEdit = () => {
    setEdit(!edit);
    console.log(checkFour);
  };
  const handleCheckOne = event => {
    setCheckOne(event.target.checked);
    console.log('liquidDispenser = ' + event.target.checked);
    if (event.target.checked == false) {
      setJobDetailData(prevState => ({
        ...prevState,
        status: 0,
        liquidDispenser: {
          ...prevState.liquidDispenser,
          status: 0,
          productName: '',
          productLotno: '',
          image: '',
          machineBefore1: 0,
          machineAfter1: 0,
          machineBefore2: 0,
          machineAfter2: 0,
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
        }
      }));
    } else {
      setJobDetailData(prevState => ({
        ...prevState,
        status: 1,
        liquidDispenser: {
          ...prevState.liquidDispenser,
          status: 1
        }
      }));
    }
  };
  const handleCheckTwo = event => {
    setCheckTwo(event.target.checked);
    console.log('proSink = ' + event.target.checked);
    if (event.target.checked == false) {
      setJobDetailData(prevState => ({
        ...prevState,
        status: 0,
        proSink: {
          ...prevState.proSink,

          status: 0,
          productName: '',
          productLotno: '',
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
      }));
    } else {
      setJobDetailData(prevState => ({
        ...prevState,
        status: 1,
        proSink: {
          ...prevState.proSink,
          status: 1
        }
      }));
    }
  };

  const handleCheckThree = event => {
    setCheckThree(event.target.checked);
    console.log('proMax = ' + event.target.checked);
    if (event.target.checked == false) {
      setJobDetailData(prevState => ({
        ...prevState,
        status: 0,
        proMax: {
          ...prevState.proMax,

          status: 0,
          productName: '',
          productLotno: '',
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
      }));
    } else {
      setJobDetailData(prevState => ({
        ...prevState,
        status: 1,
        proMax: {
          ...prevState.proMax,
          status: 1
        }
      }));
    }
  };

  const handleCheckFour = event => {
    setCheckFour(event.target.checked);
    if (event.target.checked == false) {
      setJobDetailData(prevState => ({
        ...prevState,
        status: 0,
        hydroMaster: {
          ...prevState.hydroMaster,

          status: 0,
          productName: '',
          productLotno: '',
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
      }));
    } else {
      setJobDetailData(prevState => ({
        ...prevState,
        status: 1,
        hydroMaster: {
          ...prevState.hydroMaster,
          status: 1
        }
      }));
    }
  };

  const clickRow = () => {
    setShowData(true);
  };

  const sumJobNum = () => {
    let sum = 0;
    if (
      jobDetailData.liquidDispenser.status == 1 ||
      jobDetailData.liquidDispenser.status == 2 ||
      jobDetailData.liquidDispenser.status == 3
    ) {
      sum = sum + 1;
    } else if (jobDetailData.liquidDispenser.status == 0) {
      sum = sum + 0;
    }

    // -------------------------------
    if (
      jobDetailData.proSink.status == 1 ||
      jobDetailData.proSink.status == 2 ||
      jobDetailData.proSink.status == 3
    ) {
      sum = sum + 1;
    } else if (jobDetailData.proSink.status == 0) {
      sum = sum + 0;
    }

    //   // -------------------------------
    if (
      jobDetailData.hydroMaster.status == 1 ||
      jobDetailData.hydroMaster.status == 2 ||
      jobDetailData.hydroMaster.status == 3
    ) {
      sum = sum + 1;
    } else if (jobDetailData.hydroMaster.status == 0) {
      sum = sum + 0;
    }

    return sum;
  };
  const splitDate = (str, i1, i2) => {
    const result = [str.slice(0, i1), str.slice(i1)];
    const day = [result[1].slice(0, i2), result[1].slice(i2)];

    setDateDetail({
      year: result[0],
      month: day[0],
      day: day[1],
      hr: '',
      min: ''
    });
  };
  const handleCloseDialogCancel = () => {
    setDialogCnacel(false);
    if (check1 != 4) {
      setChecked(false);
    }
    if (check2 != 4) {
      setChecked2(false);
    }
    if (check3 != 4) {
      setChecked3(false);
    }
    if (check4 != 4) {
      setChecked4(false);
    }
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        status: check1
      },
      proSink: {
        ...prevState.proSink,
        status: check2
      },
      proMax: {
        ...prevState.proMax,
        status: check2
      },
      hydroMaster: {
        ...prevState.hydroMaster,
        status: check3
      }
    }));
  };
  const handleOpenDialogCancel = () => {
    setJobDetailData(prevState => ({
      ...prevState,
      status: 4
    }));
    setDialogCnacel(true);
  };
  const handleCloseDialogCancelSave = () => {
    setDialogCnacelSave(false);
    window.location.reload();
  };
  const handleOpenDialogCancelSave = () => {
    updateJob(jobDetailData).then(res => {
      setDialogCnacel(false);
      setDialogCnacelSave(true);
    });
  };
  return (
    <div style={{ margin: 10 }}>
      {edit ? (
        <>
          <Card className={classes.root} style={{ marginBottom: '15px' }}>
            <CardContent>
              {' '}
              <Grid container spacing={2}>
                <Grid container item xs={7} sm={7} md={7}>
                  <ArrowBackIosIcon
                    className={classes.kk}
                    onClick={() => {
                      const path = '/joblist';
                      history.push(path);
                    }}
                  />
                  <Typography variant="h2">รายการตรวจเช็ค</Typography>
                </Grid>
                <Grid item xs={5} sm={5} md={5}>
                  <Grid item xs={6} sm={12} style={{ textAlign: 'end' }}>
                    <ButtonPramary
                      label="เเก้ไข"
                      fullWidth
                      onClick={handleEdit}
                      disabled={editFix}
                    />
                  </Grid>
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
                เลขที่ใบงาน {job_ID}
              </Typography>{' '}
              <Typography variant="subtitle2">
                วันที่ {dateCreate.day}/{dateCreate.month}/{dateCreate.year}{' '}
                {dateCreate.hr}:{dateCreate.min}
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.cardPad}>
            <Grid item>
              <Typography variant="h3">ข้อมูลส่วนตัว</Typography>
            </Grid>
          </Card>
          <Card className={classes.root} style={{ marginBottom: '15px' }}>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={9}>
                  {/*  1 row  */}
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={2}>
                      <Typography variant="subtitle2">รหัสร้านค้า</Typography>
                      <Box mt={1} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={10}>
                      <Typography variant="body2" color="textSecondary">
                        {jobDetailData.customerId}
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                  </Grid>
                  {/* ------  */}
                  {/*  2 row  */}
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={2}>
                      <Typography variant="subtitle2">ชื่อร้านค้า</Typography>
                    </Grid>
                    <Box mt={1} />
                    <Grid item xs={12} sm={12} md={10}>
                      <Typography variant="body2" color="textSecondary">
                        {jobDetailData.customerName}
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                  </Grid>
                  {/* ------  */}
                  {/*  2 row  */}
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={2}>
                      <Typography variant="subtitle2">สาขา</Typography>
                    </Grid>
                    <Box mt={1} />
                    <Grid item xs={12} sm={12} md={10}>
                      <Typography variant="body2" color="textSecondary">
                        {jobDetailData.customerInfo.branch}
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                  </Grid>
                  {/* ------  */}
                  {/*  3 row  */}
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={2}>
                      <Typography variant="subtitle2">ที่อยู่</Typography>
                      <Box mt={1} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={10}>
                      <Typography variant="body2" color="textSecondary">
                        {jobDetailData.customerInfo.address}
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                  </Grid>
                  {/* ------  */}
                  {/*  4 row  */}
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={2}>
                      <Typography variant="subtitle2">โทรศัพท์</Typography>
                      <Box mt={1} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={10}>
                      <Typography variant="body2" color="textSecondary">
                        {jobDetailData.customerInfo.telephoneNumber}
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                  </Grid>
                  {/* ------  */}
                  {/*  5 row  */}
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={2}>
                      <Typography variant="subtitle2">อีเมล</Typography>
                      <Box mt={1} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={10}>
                      <Typography variant="body2" color="textSecondary">
                        {jobDetailData.customerInfo.email}
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                  </Grid>
                  {/* ------  */}
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className={classes.cardPad}>
            <Grid item container xs={12} sm={12} md={12}>
              <Grid item container xs={8} sm={8} md={10}>
                <Box ml={1} />
                <Typography
                  variant="h3"
                  style={{ marginTop: 'auto', marginBottom: 'auto' }}
                >
                  {' '}
                  งานที่ต้องทำ{' '}
                </Typography>
              </Grid>
              <Grid item container xs={4} sm={4} md={2}>
                <ButtonAddPer
                  label="ยกเลิกใบงาน"
                  fullWidth
                  onClick={handleOpenDialogCancel}
                />
              </Grid>
            </Grid>
          </Card>
          <Dialogsuc
            open={dialogCancelSave}
            onClose={handleCloseDialogCancelSave}
            title={'ยกเลิกใบงานสำเร็จ'}
          />
          <DialogCancelJob
            open={dialogCancel}
            onClose={handleCloseDialogCancel}
            save={handleOpenDialogCancelSave}
            setJobDetailData={setJobDetailData}
            check1={check1}
            check2={check2}
            check3={check3}
            chec4={check4}
            checked={checked}
            checked2={checked2}
            checked3={checked3}
            checked4={checked4}
            setChecked={setChecked}
            setChecked2={setChecked2}
            setChecked3={setChecked3}
            setChecked4={setChecked4}
          />
          <Card className={classes.root} style={{ marginBottom: '15px' }}>
            <CardContent>
              <Grid container>
                <Grid item xs={12} sm={6} md>
                  {(() => {
                    switch (jobDetailData.liquidDispenser.status) {
                      case 1:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/liquidDispenser/' + jobDetailData.jobId}
                          >
                            <ButtonJobsAc
                              headlabel="รอตรวจ"
                              label="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
                            />
                          </Link>
                        );
                      case 2:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/liquidDispenser/' + jobDetailData.jobId}
                          >
                            <ButtonJobs
                              headlabel="ตรวจแล้ว"
                              label="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
                              backgroundColor="#fff"
                            />
                          </Link>
                        );
                      case 3:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/liquidDispenser/' + jobDetailData.jobId}
                          >
                            <ButtonJobsAc
                              headlabel="รอตรวจ"
                              label="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
                            />
                          </Link>
                        );
                      case 4:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/liquidDispenser/' + jobDetailData.jobId}
                          >
                            <ButtonJobs
                              headlabel="ยกเลิก"
                              label="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
                              backgroundColor="#fff"
                            />
                          </Link>
                        );
                      default:
                        return (
                          <>
                            <ButtonJobs
                              headlabel="ไม่มีงาน"
                              label="ตรวจเช็คอุปกรณ์จ่ายน้ำยา"
                              backgroundColor="#fff"
                              disabled
                            />
                          </>
                        );
                    }
                  })()}
                </Grid>
                <Grid item xs={12} sm={6} md>
                  {(() => {
                    switch (jobDetailData.proSink.status) {
                      case 1:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/proSink/' + jobDetailData.jobId}
                          >
                            <ButtonJobsAc
                              headlabel="รอตรวจ"
                              label=" ตรวจเช็ค ProSink"
                            />
                          </Link>
                        );
                      case 2:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/proSink/' + jobDetailData.jobId}
                          >
                            <ButtonJobs
                              headlabel="ตรวจแล้ว"
                              label=" ตรวจเช็ค ProSink"
                              backgroundColor="#fff"
                            />
                          </Link>
                        );
                      case 3:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/proSink/' + jobDetailData.jobId}
                          >
                            <ButtonJobsAc
                              headlabel="รอตรวจ"
                              label=" ตรวจเช็ค ProSink"
                            />
                          </Link>
                        );
                      case 4:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/proSink/' + jobDetailData.jobId}
                          >
                            <ButtonJobs
                              headlabel="ยกเลิก"
                              label=" ตรวจเช็ค ProSink"
                              backgroundColor="#fff"
                            />
                          </Link>
                        );

                      default:
                        return (
                          <>
                            <ButtonJobs
                              headlabel="ไม่มีงาน"
                              label="ตรวจเช็ค ProSink"
                              backgroundColor="#fff"
                              disabled
                            />
                          </>
                        );
                    }
                  })()}
                </Grid>
                <Grid item xs={12} sm={6} md>
                  {(() => {
                    switch (jobDetailData.proMax.status) {
                      case 1:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/proMax/' + jobDetailData.jobId}
                          >
                            <ButtonJobsAc
                              headlabel="รอตรวจ"
                              label=" ตรวจเช็ค ProMax"
                            />
                          </Link>
                        );
                      case 2:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/proMax/' + jobDetailData.jobId}
                          >
                            <ButtonJobs
                              headlabel="ตรวจแล้ว"
                              label=" ตรวจเช็ค ProMax"
                              backgroundColor="#fff"
                            />
                          </Link>
                        );
                      case 3:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/proMax/' + jobDetailData.jobId}
                          >
                            <ButtonJobsAc
                              headlabel="รอตรวจ"
                              label=" ตรวจเช็ค ProMax"
                            />
                          </Link>
                        );
                      case 4:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/proMax/' + jobDetailData.jobId}
                          >
                            <ButtonJobs
                              headlabel="ยกเลิก"
                              label=" ตรวจเช็ค ProMax"
                              backgroundColor="#fff"
                            />
                          </Link>
                        );

                      default:
                        return (
                          <>
                            <ButtonJobs
                              headlabel="ไม่มีงาน"
                              label="ตรวจเช็ค ProMax"
                              backgroundColor="#fff"
                              disabled
                            />
                          </>
                        );
                    }
                  })()}
                </Grid>
                <Grid item xs={12} sm={6} md>
                  {(() => {
                    switch (jobDetailData.hydroMaster.status) {
                      case 1:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/hydroMaster/' + jobDetailData.jobId}
                          >
                            <ButtonJobsAc
                              headlabel="รอตรวจ"
                              label=" ตรวจเช็ค Hydro Master"
                            />
                          </Link>
                        );
                      case 2:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/hydroMaster/' + jobDetailData.jobId}
                          >
                            <ButtonJobs
                              headlabel="ตรวจแล้ว"
                              label="ตรวจเช็ค Hydro Master"
                              backgroundColor="#fff"
                            />
                          </Link>
                        );
                      case 3:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/hydroMaster/' + jobDetailData.jobId}
                          >
                            <ButtonJobsAc
                              headlabel="รอตรวจ"
                              label=" ตรวจเช็ค Hydro Master"
                            />
                          </Link>
                        );
                      case 4:
                        return (
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={'/hydroMaster/' + jobDetailData.jobId}
                          >
                            <ButtonJobs
                              headlabel="ยกเลิก"
                              label="ตรวจเช็ค Hydro Master"
                              backgroundColor="#fff"
                            />
                          </Link>
                        );
                      default:
                        return (
                          <>
                            <ButtonJobs
                              headlabel="ไม่มีงาน"
                              label="ตรวจเช็ค Hydro Master"
                              backgroundColor="#fff"
                              disabled
                            />
                          </>
                        );
                    }
                  })()}
                </Grid>
                <Grid item xs={12} sm={6} md>
                  <ButtonJobsAc
                    headlabel="ยังไม่พร้อมใช้งาน"
                    label="N/A"
                    disabled
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={9}>
                  {/*  1 row  */}
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle2">
                        จำนวนงานที่ต้องทำทั้งหมด
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      <Typography variant="body2" color="textSecondary">
                        {sumJobNum()}
                        &nbsp;งาน
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                  </Grid>
                  {/* ------  */}
                  {/*  2 row  */}
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle2">
                        วันที่เข้าตรวจเช็ค
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      <Typography variant="body2" color="textSecondary">
                        {dateDetail.day}/{dateDetail.month}/{dateDetail.year}
                        {/* {splitDate("20220711",4,2)} 
                      {console.log(jobDetailData.jobDate)} */}
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                  </Grid>
                  {/* ------  */}
                  {/*  3 row  */}
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle2">
                        เจ้าหน้าที่ผู้เข้าตรวจเช็ค
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      <Typography variant="body2" color="textSecondary">
                        {jobDetailData.employeeName}
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                  </Grid>
                  {/* ------  */}
                  {/*  4 row  */}
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle2">
                        ใบงานนี้จัดทำโดย
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      <Typography variant="body2" color="textSecondary">
                        {jobDetailData.createBy}
                      </Typography>
                      <Box mt={1} />
                    </Grid>
                  </Grid>
                  {/* ------  */}
                </Grid>
              </Grid>
              {/* <Box mt={4} style={{ textAlign: 'center' }} fullWidth>
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
                  <Grid xs={5} sm={5} md={2} style={{ textAlign: 'start' }}>
                    <ButtonPramary
                      label="บันทึก"
                      fullWidth
                      size="small"
                      type="submit"
                      href="/joblist"
                    />
                  </Grid>
                </Grid>
              </Box> */}
            </CardContent>
          </Card>
          <Box mt={20} />
        </>
      ) : (
        <JobEdit
          jobDetailData={jobDetailData}
          setJobDetailData={setJobDetailData}
          checkOne={checkOne}
          disabled={disabledOne}
          checkTwo={checkTwo}
          checkThree={checkThree}
          checkFour={checkFour}
          handleCheckOne={handleCheckOne}
          handleCheckTwo={handleCheckTwo}
          handleCheckThree={handleCheckThree}
          handleCheckFour={handleCheckFour}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
}
