import React, { useEffect, useState } from 'react';
import {
  Card,
  Box,
  Divider,
  Container,
  Button,
  TextField,
  Grid,
  makeStyles,
  Typography,
  CardContent,
  FormControlLabel,
  Radio,
  FormControl,
  FormGroup,
  RadioGroup,
  FormLabel,
  withStyles,
  InputAdornment,
  FormHelperText,
  Checkbox
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Signature from 'src/components/keen/Signature ';
import IconAutograph from 'src/components/keen/icon/autograph';
import { useParams } from 'react-router-dom';
import { getJobSearch, updateJob } from '../../api/keeen/job';
import { postImage, getImage, putImage } from '../../api/keeen/uploadimg';
import { getProductSearch } from '../../api/keeen/product';
import ButtonPramarys from 'src/components/keen/Buttonprimary';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import IconUpload from 'src/components/keen/icon/iconUpload';
import Head1 from './Head1';
import Head2 from './Head2';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import configApi from "../../../../configApi.json";
const GreenRadio = withStyles({
  root: {
    '&$checked': {
      color: '#3AA775'
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);
const DisableRadio = withStyles({
  root: {
    '&$checked': {
      color: '#3AA775'
    }
  }
})(props => <Radio color="default" {...props} />);
// ---------style-----------------
const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  media: {
    height: 160
  },
  rootCard: {
    marginBottom: '5px',
    padding: '10px 30px 10px 30px'
    // borderRadius:0
  },
  root: {
    borderRadius: 0
  },
  rootTextInput: {
    margin: theme.spacing(1),
    width: '25ch'
  },
  textInput: {
    marginBottom: '10px'
  },
  title: {
    flexGrow: 1
  },
  dataUser: {
    paddingTop: 10,
    paddingBottom: 10
  },
  btnSig: {
    backgroundColor: '#EBEBEB',
    color: '#687178',
    borderRadius: 16,
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: '#3777BD'
    }
  },
  textSig: {
    fontWeight: '350',
    fontSize: '12px'
  },
  btnSave: {
    borderRadius: 12,
    alignItems: 'center',
    padding: '5px 20px 5px 20px',
    color: '#FFFFFF',
    border: '1px solid #084BA8',
    justifyContent: 'center',
    fontSize: '12px',
    backgroundColor: '#084BA8',
    '&:hover': {
      backgroundColor: '#3777BD',
      color: '#FFFFFF'
    }
  },
  disableText: {
    backgroundColor: '#E9E9E9',
    borderColor: '#687178'
  },
  btnCancel: {
    borderRadius: 12,
    alignItems: 'center',
    padding: '5px 20px 5px 20px',
    color: '#084BA8',
    border: '1px solid #084BA8',
    justifyContent: 'center',
    fontSize: '12px',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#3777BD',
      color: '#FFFFFF'
    }
  },
  cardPad: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  cardPadH1: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '&:hover': {
      cursor: 'pointer'
    }
  },
  label: {
    fontSize: '0.75rem'
  },
  btnChoose: {
    borderRadius: '10px',
    fontSize: '10px',
    color: '#0F8E54',
    backgroundColor: '#fff',
    border: 'solid 1px #0F8E54'
  },
  barscan: {
    marginRight: '-5px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  img2: {
    width: '100%',
    height: 'auto',
    maxWidth: '300px'
  },
  btnDis: {
    borderRadius: '10px',
    fontSize: '10px',
    color: '#263238',
    backgroundColor: '#0000001f',
    border: 'solid 1px #0F8E54'
  }
}));
// checkbox style-------------
const GreenCheckbox = withStyles({
  root: {
    color: '#3AA775',
    '&$checked': {
      color: '#3AA775'
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

function FormProsink() {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();
  const job_ID = params.jobID;
  const type = ['OT-PROSINK', 'OT-PROSINK2'];
  let reader = new FileReader();
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
  const [dateDetail, setDateDetail] = useState({
    year: '',
    month: '',
    day: '',
    hr: '',
    min: ''
  });
  const [headOne, setHeadOne] = useState(false);
  const [head1Error,setHead1Error] = useState(true)
  const [head2Error,setHead2Error] = useState(true)
  const [openSignature1, setOpenSignature1] = useState(false);
  const [openSignature2, setOpenSignature2] = useState(false);
  const [sig1, setSig1] = useState('');
  const [sig2, setSig2] = useState('');
  const [dateShow, setDateShow] = useState();
  const [productName, setProductName] = useState('');
  const [preImgCustomerSig, setPreImgCustomerSig] = useState('');
  const [preImgEmployeeSig, setPreImgEmployeeSig] = useState('');
  const [imgCustomer, setImgCustomer] = useState();
  const [imgEmpoyee, setImgEmployee] = useState();
  const [base64imgShop, setBase64imgShop] = useState('');
  const [base64imgUser, setBase64imgUser] = useState('');
  const [imgIdEditEmp, setImgIdEditEmp] = useState('');
  const [imgIdEditCus, setImgIdEditCus] = useState('');
  const [save, setSave] = useState(false);
  const [imgNumber, setImgNumber] = useState();
  const [imgDB, setImgDB] = useState('');

  const [save2, setSave2] = useState(false);
  const [imgNumber2, setImgNumber2] = useState();
  const [imgDB2, setImgDB2] = useState('');

  const [save3, setSave3] = useState(false);
  const [imgNumber3, setImgNumber3] = useState();
  const [imgDB3, setImgDB3] = useState('');

  const [save4, setSave4] = useState(false);
  const [imgNumber4, setImgNumber4] = useState();
  const [imgDB4, setImgDB4] = useState('');

  const [save5, setSave5] = useState(false);
  const [imgNumber5, setImgNumber5] = useState();
  const [imgDB5, setImgDB5] = useState('');

  const [preImg, setPreImg] = useState('');
  const [imgFile, setImgFile] = useState();
  const [imageFirst, setImageFirst] = useState();

  const [imageFirst2, setImageFirst2] = useState();
  const [imgFile2, setImgFile2] = useState();
  const [preImg2, setPreImg2] = useState('');

  const [imageFirst3, setImageFirst3] = useState();
  const [imgFile3, setImgFile3] = useState();
  const [preImg3, setPreImg3] = useState('');


  const [imageFirst4, setImageFirst4] = useState();
  const [imgFile4, setImgFile4] = useState();
  const [preImg4, setPreImg4] = useState('');

  const [imageFirst5, setImageFirst5] = useState();
  const [imgFile5, setImgFile5] = useState();
  const [preImg5, setPreImg5] = useState('');

  const [imageBeforeError1, setImageBeforeError1] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [imageAfterError1, setImageAfterError1] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [imageError1, setImageError1] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError1, setRadioGroupError1] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError2, setRadioGroupError2] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError3, setRadioGroupError3] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError4, setRadioGroupError4] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError5, setRadioGroupError5] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError6, setRadioGroupError6] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError7, setRadioGroupError7] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError8, setRadioGroupError8] = useState({
    value: '',
    error: '',
    helperText: ''
  });

  const handleRadioChange1 = event => {
    // console.log(event.target.value);
    setRadioGroupError1(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange2 = event => {
    // console.log(event.target.value);
    setRadioGroupError2(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange3 = event => {
    // console.log(event.target.value);
    setRadioGroupError3(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange4 = event => {
    // console.log(event.target.value);
    setRadioGroupError4(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange5 = event => {
    // console.log(event.target.value);
    setRadioGroupError5(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange6 = event => {
    // console.log(event.target.value);
    setRadioGroupError6(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange7 = event => {
    // console.log(event.target.value);
    setRadioGroupError7(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange8 = event => {
    // console.log(event.target.value);
    setRadioGroupError8(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleChangeMachineBefore1 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSink: {
        ...prevState.proSink,
        machineBefore1: data
      }
    }));
  };
  const handleChangeMachineBefore2 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSink: {
        ...prevState.proSink,
        machineBefore2: data
      }
    }));
  };
  const handleChangeMachineBefore3 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSink: {
        ...prevState.proSink,
        machineBefore3: data
      }
    }));
  };
  const handleChangeMachineBefore4 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSink: {
        ...prevState.proSink,
        machineBefore4: data
      }
    }));
  };
  const handleChangeMachineAfter1 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSink: {
        ...prevState.proSink,
        machineAfter1: data
      }
    }));
  };

  const handleChangeMachineAfter2 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSink: {
        ...prevState.proSink,
        machineAfter2: data
      }
    }));
  };
  const handleChangeMachineAfter3 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSink: {
        ...prevState.proSink,
        machineAfter3: data
      }
    }));
  };
  const handleChangeMachineAfter4 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSink: {
        ...prevState.proSink,
        machineAfter4: data
      }
    }));
  };
  const handleChangeimgAfter1 = async e => {
    const length = e.target.files.length;
    const imageFile = e.target.files[0];
    const imageFilname = e.target.files[0].name;
    console.log(imageFile);
    console.log(job_ID);

    if (length > 0) {
      reader.onload = e => {
        const img = new Image();
        img.onload = () => {
          //------------- Resize img code ----------------------------------
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          var MAX_WIDTH = 437;
          var MAX_HEIGHT = 437;
          var width = img.width;
          var height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          ctx.canvas.toBlob(
            blob => {
              const file = new File([blob], imageFilname, {
                type: 'image/png',
                lastModified: Date.now()
              });
              console.log('--------------');
              console.log(file);
              console.log(URL.createObjectURL(imageFile));
              setImgFile3(file);
            },
            'image/png',
            1
          );
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(imageFile);

      const img = imageFile;
      const base64 = await convertBase64(img);
      setPreImg3(base64);

      setImageAfterError1(prevState => ({
        ...prevState,
        error: false,
        helperText: ''
      }));
    }
  };
  // ----head1 validate-----------------

  const [radioGroupError9, setRadioGroupError9] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError10, setRadioGroupError10] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError11, setRadioGroupError11] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError12, setRadioGroupError12] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError13, setRadioGroupError13] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError14, setRadioGroupError14] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError15, setRadioGroupError15] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError16, setRadioGroupError16] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError17, setRadioGroupError17] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError18, setRadioGroupError18] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError19, setRadioGroupError19] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError20, setRadioGroupError20] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError21, setRadioGroupError21] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError22, setRadioGroupError22] = useState({
    value: '',
    error: '',
    helperText: ''
  });

  // --------------------choice4------------------------
  const [barcodeHead1, setBarcodeHead1] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [lotnoHead1, setLotnoHead1] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError23, setRadioGroupError23] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError24, setRadioGroupError24] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError25, setRadioGroupError25] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError26, setRadioGroupError26] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError27, setRadioGroupError27] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError28, setRadioGroupError28] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError29, setRadioGroupError29] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError30, setRadioGroupError30] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError31, setRadioGroupError31] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError32, setRadioGroupError32] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError33, setRadioGroupError33] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [radioGroupError34, setRadioGroupError34] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  const [headOneimage, setHeadOneimage] = useState({
    value: '',
    error: '',
    helperText: ''
  });
// ------end h1 ---------

 // ----head2 validate-----------------

 const [radioGroupError35, setRadioGroupError35] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError36, setRadioGroupError36] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError37, setRadioGroupError37] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError38, setRadioGroupError38] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError39, setRadioGroupError39] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError40, setRadioGroupError40] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError41, setRadioGroupError41] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError42, setRadioGroupError42] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError43, setRadioGroupError43] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError44, setRadioGroupError44] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError45, setRadioGroupError45] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError46, setRadioGroupError46] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError47, setRadioGroupError47] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError48, setRadioGroupError48] = useState({
  value: '',
  error: '',
  helperText: ''
});

// --------------------choice4------------------------
const [barcodeHead2, setBarcodeHead2] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [lotnoHead2, setLotnoHead2] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError49, setRadioGroupError49] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError50, setRadioGroupError50] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError51, setRadioGroupError51] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError52, setRadioGroupError52] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError53, setRadioGroupError53] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError54, setRadioGroupError54] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError55, setRadioGroupError55] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError56, setRadioGroupError56] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError57, setRadioGroupError57] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError58, setRadioGroupError58] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError59, setRadioGroupError59] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [radioGroupError60, setRadioGroupError60] = useState({
  value: '',
  error: '',
  helperText: ''
});
const [headTwoimage, setHeadTwoimage] = useState({
  value: '',
  error: '',
  helperText: ''
});
// ------end h2 ---------



  const handleSubmitTop = () => {
    //----------------imageBefore1--------------------------
    if (
      formik.values.imageBefore1 != '' ||
      jobDetailData.proSink.imageBefore1 != ''
    ) {
      setImageBeforeError1(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setImageBeforeError1(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกรูปภาพ'
      }));
    }
    //-----------------end---------------
    //----------------imageAfter1--------------------------
    if (
      formik.values.imageAfter1 != '' ||
      jobDetailData.proSink.imageAfter1 != ''
    ) {
      setImageAfterError1(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setImageAfterError1(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกรูปภาพ'
      }));
    }
    //-----------------end---------------
    //----------------1--------------------------
    if (formik.values.radiogroup1) {
      setRadioGroupError1(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError1(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------2--------------------------
    if (formik.values.radiogroup2) {
      setRadioGroupError2(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError2(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------3--------------------------
    if (formik.values.radiogroup3) {
      setRadioGroupError3(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError3(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------4--------------------------
    if (formik.values.radiogroup4) {
      setRadioGroupError4(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError4(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------5--------------------------
    if (formik.values.radiogroup5) {
      setRadioGroupError5(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError5(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------6--------------------------
    if (formik.values.radiogroup6) {
      setRadioGroupError6(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError6(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------7--------------------------
    if (formik.values.radiogroup7) {
      setRadioGroupError7(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError7(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------8--------------------------
    if (formik.values.radiogroup8) {
      setRadioGroupError8(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError8(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
  };
  
  const handleSubmitHead1 = () => {
    //----------------9--------------------------
    if (formik.values.radiogroup9) {
      setRadioGroupError9(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError9(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------10--------------------------
    if (formik.values.radiogroup10) {
      setRadioGroupError10(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError10(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------11--------------------------
    if (formik.values.radiogroup11) {
      setRadioGroupError11(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError11(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------12--------------------------
    if (formik.values.radiogroup12) {
      setRadioGroupError12(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError12(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------13--------------------------
    if (formik.values.radiogroup13) {
      setRadioGroupError13(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError13(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------14--------------------------
    if (formik.values.radiogroup14) {
      setRadioGroupError14(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError14(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------15--------------------------
    if (formik.values.radiogroup15) {
      setRadioGroupError15(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError15(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------16--------------------------
    if (formik.values.radiogroup16) {
      setRadioGroupError16(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError16(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------17--------------------------
    if (formik.values.radiogroup17) {
      setRadioGroupError17(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError17(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------18-------------------------
    if (formik.values.radiogroup18) {
      setRadioGroupError18(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError18(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------19-------------------------
    if (formik.values.radiogroup19) {
      setRadioGroupError19(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError19(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------20-------------------------
    if (formik.values.radiogroup20) {
      setRadioGroupError20(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError20(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------21-------------------------
    if (formik.values.radiogroup21) {
      setRadioGroupError21(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError21(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------22-------------------------
    if (formik.values.radiogroup22) {
      setRadioGroupError22(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError22(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------

    // ----------------choice 4--------------
    //----------------barcodeH1-------------------------
    if (formik.values.barcodeHead1) {
      setBarcodeHead1(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setBarcodeHead1(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาใส่ข้อมูล'
      }));
    }
    //-----------------end---------------
    //----------------lotH1-------------------------
    if (formik.values.lotnoHead1) {
      setLotnoHead1(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setLotnoHead1(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาใส่ข้อมูล'
      }));
    }
    //-----------------end---------------
          //----------------23-------------------------
          if (formik.values.radiogroup23) {
            setRadioGroupError23(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError23(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
          if (
            (formik.values.headOneimage != '' &&
            jobDetailData.proSink.headOne41 == 1) ||
            (formik.values.headOneimage == '' &&
              jobDetailData.proSink.headOne41 == 1) ||
            (formik.values.headOneimage != '' &&
              jobDetailData.proSink.headOne41 == 2) ||
            (formik.values.headOneimage == '' &&
              jobDetailData.proSink.headOneimage2 != '')
          ) {
            setHeadOneimage(prevState => ({
              ...prevState,
              error: false,
              helperText: ''
            }));
          } else {
            setHeadOneimage(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
     //----------------24-------------------------
     if (formik.values.radiogroup24) {
      setRadioGroupError24(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError24(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
         //----------------25-------------------------
         if (formik.values.radiogroup25) {
          setRadioGroupError25(prevState => ({
            ...prevState,
            error: false
          }));
        } else {
          setRadioGroupError25(prevState => ({
            ...prevState,
            error: true,
            helperText: 'กรุณาเลือกคำตอบ'
          }));
        }
        //-----------------end---------------
          //----------------26-------------------------
          if (formik.values.radiogroup26) {
            setRadioGroupError26(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError26(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
          //----------------27-------------------------
          if (formik.values.radiogroup27) {
            setRadioGroupError27(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError27(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
                   //----------------28-------------------------
                   if (formik.values.radiogroup28) {
                    setRadioGroupError28(prevState => ({
                      ...prevState,
                      error: false
                    }));
                  } else {
                    setRadioGroupError28(prevState => ({
                      ...prevState,
                      error: true,
                      helperText: 'กรุณาเลือกคำตอบ'
                    }));
                  }
                  //-----------------end---------------
                           //----------------29-------------------------
          if (formik.values.radiogroup29) {
            setRadioGroupError29(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError29(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
          //----------------30-------------------------
          if (formik.values.radiogroup30) {
            setRadioGroupError30(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError30(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
          //----------------31-------------------------
          if (formik.values.radiogroup31) {
            setRadioGroupError31(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError31(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
           //----------------32-------------------------
           if (formik.values.radiogroup32) {
            setRadioGroupError32(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError32(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
          //----------------33-------------------------
          if (formik.values.radiogroup33) {
            setRadioGroupError33(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError33(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
          //----------------34-------------------------
          if (formik.values.radiogroup34) {
            setRadioGroupError34(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError34(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
  };

  const handleSubmitHead2 = () => {
    //----------------35--------------------------
    if (formik.values.radiogroup35) {
      setRadioGroupError35(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError35(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------36--------------------------
    if (formik.values.radiogroup36) {
      setRadioGroupError36(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError36(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------37--------------------------
    if (formik.values.radiogroup37) {
      setRadioGroupError37(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError37(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------38--------------------------
    if (formik.values.radiogroup38) {
      setRadioGroupError38(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError38(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------39--------------------------
    if (formik.values.radiogroup39) {
      setRadioGroupError39(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError39(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------40--------------------------
    if (formik.values.radiogroup40) {
      setRadioGroupError40(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError40(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------41--------------------------
    if (formik.values.radiogroup41) {
      setRadioGroupError41(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError41(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------42--------------------------
    if (formik.values.radiogroup42) {
      setRadioGroupError42(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError42(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------43--------------------------
    if (formik.values.radiogroup43) {
      setRadioGroupError43(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError43(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------44-------------------------
    if (formik.values.radiogroup44) {
      setRadioGroupError44(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError44(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------45-------------------------
    if (formik.values.radiogroup45) {
      setRadioGroupError45(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError45(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------46-------------------------
    if (formik.values.radiogroup46) {
      setRadioGroupError46(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError46(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------47-------------------------
    if (formik.values.radiogroup47) {
      setRadioGroupError47(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError47(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------48-------------------------
    if (formik.values.radiogroup48) {
      setRadioGroupError48(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError48(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------

    // ----------------choice 4--------------
    //----------------barcodeH2-------------------------
    if (formik.values.barcodeHead2) {
      setBarcodeHead2(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setBarcodeHead2(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาใส่ข้อมูล'
      }));
    }
    //-----------------end---------------
    //----------------lotH2-------------------------
    if (formik.values.lotnoHead2) {
      setLotnoHead2(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setLotnoHead2(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาใส่ข้อมูล'
      }));
    }
    //-----------------end---------------
          //----------------49-------------------------
          if (formik.values.radiogroup49) {
            setRadioGroupError49(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError49(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
          if (
            (formik.values.headTwoimage != '' &&
            jobDetailData.proSink.headTwo41 == 1) ||
            (formik.values.headTwoimage == '' &&
              jobDetailData.proSink.headTwo41 == 1) ||
            (formik.values.headTwoimage != '' &&
              jobDetailData.proSink.headTwo41 == 2) ||
            (formik.values.headTwoimage == '' &&
              jobDetailData.proSink.headTwoimage2 != '')
          ) {
            setHeadTwoimage(prevState => ({
              ...prevState,
              error: false,
              helperText: ''
            }));
          } else {
            setHeadTwoimage(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
     //----------------50-------------------------
     if (formik.values.radiogroup50) {
      setRadioGroupError50(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setRadioGroupError50(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
         //----------------51-------------------------
         if (formik.values.radiogroup51) {
          setRadioGroupError51(prevState => ({
            ...prevState,
            error: false
          }));
        } else {
          setRadioGroupError51(prevState => ({
            ...prevState,
            error: true,
            helperText: 'กรุณาเลือกคำตอบ'
          }));
        }
        //-----------------end---------------
          //----------------52-------------------------
          if (formik.values.radiogroup52) {
            setRadioGroupError52(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError52(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
          //----------------53-------------------------
          if (formik.values.radiogroup53) {
            setRadioGroupError53(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError53(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
                   //----------------54-------------------------
                   if (formik.values.radiogroup54) {
                    setRadioGroupError54(prevState => ({
                      ...prevState,
                      error: false
                    }));
                  } else {
                    setRadioGroupError54(prevState => ({
                      ...prevState,
                      error: true,
                      helperText: 'กรุณาเลือกคำตอบ'
                    }));
                  }
                  //-----------------end---------------
                           //----------------55-------------------------
          if (formik.values.radiogroup55) {
            setRadioGroupError55(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError55(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
          //----------------56-------------------------
          if (formik.values.radiogroup56) {
            setRadioGroupError56(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError56(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
          //----------------57-------------------------
          if (formik.values.radiogroup57) {
            setRadioGroupError57(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError57(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
           //----------------58-------------------------
           if (formik.values.radiogroup58) {
            setRadioGroupError58(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError58(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
          //----------------59-------------------------
          if (formik.values.radiogroup59) {
            setRadioGroupError59(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError59(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
          //----------------60-------------------------
          if (formik.values.radiogroup60) {
            setRadioGroupError60(prevState => ({
              ...prevState,
              error: false
            }));
          } else {
            setRadioGroupError60(prevState => ({
              ...prevState,
              error: true,
              helperText: 'กรุณาเลือกคำตอบ'
            }));
          }
          //-----------------end---------------
  };
  const fecthData = () => {
    getJobSearch(job_ID)
      .then(res => {
        // console.log(res.data.result.data);
        setCheckHeadOne(res.data.result.data.proSink.headOne);
        setCheckHeadTwo(res.data.result.data.proSink.headTwo);
        setImgDB(res.data.result.data.proSink.image);
        setImgDB2(res.data.result.data.proSink.imageBefore1);
        setImgDB3(res.data.result.data.proSink.imageAfter1);
        setImgDB4(res.data.result.data.proSink.headOneimage2);
        setImgDB5(res.data.result.data.proSink.headTwoimage2);
        setJobDetailData(res.data.result.data);
        setDateShow(splitDate(res.data.result.data.jobDate, 4, 2));
        handlejobDate(res.data.result.data.jobDate);

        if (res.data.result.data.proSink.productName.length > 0) {
          getProductSearch(res.data.result.data.proSink.productName).then(
            res => {
              // console.log(res);
              setProductName(res.data.result.data.productName);
            }
          );
        }
        if (res.data.result.data.proSink.signatureEmployee) {
          getImage(res.data.result.data.proSink.signatureEmployee)
            .then(res => {
              const result = res.data.data.images;
              setImgEmployee(result);
         
            })
            .catch(err => {
              console.log(err);
            });
        }
        if (res.data.result.data.proSink.signatureCustomer) {
          getImage(res.data.result.data.proSink.signatureCustomer)
            .then(res => {
              const result = res.data.data.images;
              setImgCustomer(result);
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    fecthData();
  }, []);

  const [pathTest,setPathTest] = useState(false)
  
  useEffect(() => {
    //head 2 error
    console.log('h1 set error '+head1Error);
    console.log('h2 set error '+head2Error);

    if((head1Error===true||head2Error===true)){
  
      console.log('A');
   
    }else{
      // if(pathTest===true){
      //   console.log('B');
      //   const path = '/joblist/jobdetail/' + jobDetailData.jobId;
      //    history.push(path);
      // }
      updateImg1()
      console.log('update1');
    }
   
    
  }, [head2Error,head1Error]);


  useEffect(() => {
    if (imgDB == '') {
      //เลือกรูป ?
      if (imgNumber) {
        if (save) {
          // console.log('post img');
          
          updateJob(jobDetailData).then(res => {
        
          });
        }
      } 

      // console.log("post "+userList.name);
    } else if (imgNumber) {
      if (save) {
        // console.log('put img');
  
        updateJob(jobDetailData).then(res => {
      
        });
      }
    } else {
      // console.log('ยังไมเลือก');
      if (save) {
        updateJob(jobDetailData).then(res => {

        });
      }
    }
  }, [jobDetailData.proSink.image, save]);

  useEffect(() => {
    if (imgDB2 == '') {
      //เลือกรูป ?
      if (imgNumber2) {
        if (save2) {
          // console.log('post img');
 
          updateJob(jobDetailData).then(res => {
 
          });
        }
      } 

      // console.log("post "+userList.name);
    } else if (imgNumber2) {
      if (save2) {
        // console.log('put img');
     
        updateJob(jobDetailData).then(res => {
        
        });
      }
    } else {
      // console.log('ยังไมเลือก');
      if (save2) {
        updateJob(jobDetailData).then(res => {
        
        });
      }
    }
  }, [jobDetailData.proSink.imageBefore1, save2]);

//  ---------------last ---------------------------
  useEffect(() => {
    if (imgDB3 == '') {
      //เลือกรูป ?
      if (imgNumber3) {
        if (save3) {
          console.log('post img');
   
          updateJob(jobDetailData).then(res => {
            setPathTest(true)
         
            const path = '/joblist/jobdetail/' + jobDetailData.jobId;
            history.push(path);
          });
        }
      } 
  
      // console.log("post "+userList.name);
    } else if (imgNumber3) {
      if (save3) {
        console.log('put img');
  
        updateJob(jobDetailData).then(res => {
      
          
          const path = '/joblist/jobdetail/' + jobDetailData.jobId;
          history.push(path);
        });
      }
    } else {
      console.log('ยังไมเลือก');
      if (save3) {
        updateJob(jobDetailData).then(res => {
   
       
            const path = '/joblist/jobdetail/' + jobDetailData.jobId;
            history.push(path);
          
         
   
        });
      }
    }
  }, [jobDetailData.proSink.imageAfter1, save3]);


  useEffect(() => {
    if (imgDB4 == '') {
      //เลือกรูป ?
      if (imgNumber4) {
        if (save4) {
          // console.log('post img');
        
          updateJob(jobDetailData).then(res => {
            setHead1Error(false)
          });
        }
      } 

      // console.log("post "+userList.name);
    } else if (imgNumber4) {
      if (save4) {
        // console.log('put img');

        updateJob(jobDetailData).then(res => {
          setHead1Error(false)
        });
      }
    } else {
      // console.log('ยังไมเลือก');
      if (save4) {
        updateJob(jobDetailData).then(res => {
          setHead1Error(false)
        });
      }
    }
  }, [jobDetailData.proSink.headOneimage2, save4]);

  useEffect(() => {
    if (imgDB5 == '') {
      //เลือกรูป ?
      if (imgNumber5) {
        if (save5) {
          // console.log('post img');
  
          updateJob(jobDetailData).then(res => {
            setHead2Error(false)
          });
        }
      } 
   
      // console.log("post "+userList.name);
    } else if (imgNumber5) {
      if (save5) {
        // console.log('put img');
      
        updateJob(jobDetailData).then(res => {
          setHead2Error(false)
        });
      }
    } else {
      // console.log('ยังไมเลือก');
      if (save5) {
        updateJob(jobDetailData).then(res => {
          setHead2Error(false)
        });
      }
    }
  }, [jobDetailData.proSink.headTwoimage2, save5]);

  const handleStatus = () => {


    if(jobDetailData.proSink.signatureCustomer&& 
      jobDetailData.proSink.signatureEmployee){
        setJobDetailData(prevState => ({
          ...prevState,
    
          proSink: {
            ...prevState.proSink,
            status: 2
          }
        }));
        if (
          ((jobDetailData.liquidDispenser.signatureCustomer !== '' &&
            jobDetailData.liquidDispenser.signatureEmployee !== '') ||
          jobDetailData.liquidDispenser.status == 0) &&
          ((jobDetailData.proMax.signatureCustomer !== '' &&
            jobDetailData.proMax.signatureEmployee !== '') ||
          jobDetailData.proMax.status == 0) &&
          ((jobDetailData.hydroMaster.signatureCustomer !== '' &&
            jobDetailData.hydroMaster.signatureEmployee !== '') ||
            jobDetailData.hydroMaster.status == 0)
        ) {
          setJobDetailData(prevState => ({
            ...prevState,
            status: 2
          }));
        }else{
          setJobDetailData(prevState => ({
            ...prevState,
            status: 3
           
          }));
        }
    }else {
      setJobDetailData(prevState => ({
        ...prevState,
        status: 3,
        proSink: {
          ...prevState.proSink,
          status: 3
        }
      }));
    }
    
  };
  //  --------------validation  v-------------------------
  const validationSchema = yup.object({
    barcode: yup
      .string()
      .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
      .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
    serialNumber: yup.string().required('กรุณากรอกข้อมูลให้ครบถ้วน'),
    radiogroup1: yup.string().required(''),
    radiogroup2: yup.string().required(''),
    radiogroup3: yup.string().required(''),
    radiogroup4: yup.string().required(''),
    radiogroup5: yup.string().required(''),
    radiogroup6: yup.string().required(''),
    radiogroup7: yup.string().required(''),
    radiogroup8: yup.string().required(''),
    radiogroup9: yup.string().required(''),
    radiogroup10: yup.string().required(''),
    radiogroup11: yup.string().required(''),
    radiogroup12: yup.string().required('')
  });
  const formik = useFormik({
    initialValues: {
      barcode: jobDetailData.proSink.barcode,
      productName: jobDetailData.proSink.productName,
      serialNumber: jobDetailData.proSink.serialNo,
      image1: preImg,
      imageBefore1: preImg2,
      imageAfter1: preImg3,
      radiogroup1: jobDetailData.proSink.machineBefore1,
      radiogroup2: jobDetailData.proSink.machineAfter1,
      radiogroup3: jobDetailData.proSink.machineBefore2,
      radiogroup4: jobDetailData.proSink.machineAfter2,
      radiogroup5: jobDetailData.proSink.machineBefore3,
      radiogroup6: jobDetailData.proSink.machineAfter3,
      radiogroup7: jobDetailData.proSink.machineBefore4,
      radiogroup8: jobDetailData.proSink.machineAfter4,
      // -------head 1----------------
      radiogroup9: jobDetailData.proSink.headOneBefore31,
      radiogroup10: jobDetailData.proSink.headOneAfter31,
      radiogroup11: jobDetailData.proSink.headOneBefore32,
      radiogroup12: jobDetailData.proSink.headOneAfter32,
      radiogroup13: jobDetailData.proSink.headOneBefore331,
      radiogroup14: jobDetailData.proSink.headOneAfter331,
      radiogroup15: jobDetailData.proSink.headOneBefore332,
      radiogroup16: jobDetailData.proSink.headOneAfter332,
      radiogroup17: jobDetailData.proSink.headOneBefore333,
      radiogroup18: jobDetailData.proSink.headOneAfter333,
      radiogroup19: jobDetailData.proSink.headOneBefore34,
      radiogroup20: jobDetailData.proSink.headOneAfter34,
      radiogroup21: jobDetailData.proSink.headOneBefore35,
      radiogroup22: jobDetailData.proSink.headOneAfter35,

      barcodeHead1: jobDetailData.proSink.headOneBarcode2,
      lotnoHead1: jobDetailData.proSink.headOneProductKeeenLotNo,
      radiogroup23: jobDetailData.proSink.headOne41,
      headOneimage: preImg4,
      radiogroup24: jobDetailData.proSink.headOne42,
      radiogroup25: jobDetailData.proSink.headOne43,
      radiogroup26: jobDetailData.proSink.headOne44,
      radiogroup27: jobDetailData.proSink.headOneBefore51,
       radiogroup28: jobDetailData.proSink.headOneBefore521,
       radiogroup29: jobDetailData.proSink.headOneAfter521,
       radiogroup30: jobDetailData.proSink.headOneBefore522,
       radiogroup31: jobDetailData.proSink.headOneAfter522,
       radiogroup32: jobDetailData.proSink.headOneBefore531,
       radiogroup33: jobDetailData.proSink.headOneBefore532,
       radiogroup34: jobDetailData.proSink.headOneBefore533,
       //--------head 2-----------------

       radiogroup35: jobDetailData.proSink.headTwoBefore31,
      radiogroup36: jobDetailData.proSink.headTwoAfter31,
      radiogroup37: jobDetailData.proSink.headTwoBefore32,
      radiogroup38: jobDetailData.proSink.headTwoAfter32,
      radiogroup39: jobDetailData.proSink.headTwoBefore331,
      radiogroup40: jobDetailData.proSink.headTwoAfter331,
      radiogroup41: jobDetailData.proSink.headTwoBefore332,
      radiogroup42: jobDetailData.proSink.headTwoAfter332,
      radiogroup43: jobDetailData.proSink.headTwoBefore333,
      radiogroup44: jobDetailData.proSink.headTwoAfter333,
      radiogroup45: jobDetailData.proSink.headTwoBefore34,
      radiogroup46: jobDetailData.proSink.headTwoAfter34,
      radiogroup47: jobDetailData.proSink.headTwoBefore35,
      radiogroup48: jobDetailData.proSink.headTwoAfter35,

      barcodeHead2: jobDetailData.proSink.headTwoBarcode2,
      lotnoHead2: jobDetailData.proSink.headTwoProductKeeenLotNo,
      radiogroup49: jobDetailData.proSink.headTwo41,
      headTwoimage: preImg5,
      radiogroup50: jobDetailData.proSink.headTwo42,
      radiogroup51: jobDetailData.proSink.headTwo43,
      radiogroup52: jobDetailData.proSink.headTwo44,
      radiogroup53: jobDetailData.proSink.headTwoBefore51,
       radiogroup54: jobDetailData.proSink.headTwoBefore521,
       radiogroup55: jobDetailData.proSink.headTwoAfter521,
       radiogroup56: jobDetailData.proSink.headTwoBefore522,
       radiogroup57: jobDetailData.proSink.headTwoAfter522,
       radiogroup58: jobDetailData.proSink.headTwoBefore531,
       radiogroup59: jobDetailData.proSink.headTwoBefore532,
       radiogroup60: jobDetailData.proSink.headTwoBefore533,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: values => {
      // handleLog(values);

      if (
        formik.values.radiogroup1 != 0 &&
        formik.values.radiogroup2 != 0 &&
        formik.values.radiogroup3 != 0 &&
        formik.values.radiogroup4 != 0 &&
        formik.values.radiogroup5 != 0 &&
        formik.values.radiogroup6 != 0 &&
        formik.values.radiogroup7 != 0 &&
        formik.values.radiogroup8 != 0 &&
        (formik.values.image1 != '' || jobDetailData.proSink.image != '') &&
        (formik.values.imageBefore1 != '' ||
          jobDetailData.proSink.imageBefore1 != '') &&
        (formik.values.imageAfter1 != '' ||
          jobDetailData.proSink.imageAfter1 != '')
      ) {
        handleStatus()
        if (checkHeadOne === true || checkHeadTwo === true) {
         
          if (checkHeadOne === true) {
            handleSubmitHead1();
            if (
              formik.values.radiogroup9 == 0 ||
              formik.values.radiogroup10 == 0 ||
              formik.values.radiogroup11 == 0 ||
              formik.values.radiogroup12 == 0 ||
              formik.values.radiogroup13 == 0 ||
              formik.values.radiogroup14 == 0 ||
              formik.values.radiogroup15 == 0 ||
              formik.values.radiogroup16 == 0 ||
              formik.values.radiogroup17 == 0 ||
              formik.values.radiogroup18 == 0 ||
              formik.values.radiogroup19 == 0 ||
              formik.values.radiogroup20 == 0 ||
              formik.values.radiogroup21 == 0 ||
              formik.values.radiogroup22 == 0 ||
              
              formik.values.barcodeHead1 == '' ||
              formik.values.lotnoHead1 == '' ||
              formik.values.radiogroup23 == 0 ||
            ((formik.values.radiogroup23==2&&jobDetailData.proSink.headOneimage2=='')&&(formik.values.radiogroup23==2&&preImg4=='')) ||
            formik.values.radiogroup24 == 0 ||
            formik.values.radiogroup25 == 0 ||
            formik.values.radiogroup26 == 0 ||
            formik.values.radiogroup27 == 0 ||
            formik.values.radiogroup28 == 0 ||
            formik.values.radiogroup29 == 0 ||
            formik.values.radiogroup30 == 0 ||
            formik.values.radiogroup31 == 0 ||
            formik.values.radiogroup32 == 0 ||
            formik.values.radiogroup33 == 0 ||
            formik.values.radiogroup34 == 0 

            ) {
              console.log('head1 error');
              setHead1Error(true)
            } else {
              
              console.log('pass have head1');
              if(preImg4!=''){
                updateImg4()
              } else {
                setHead1Error(false)
              }
         
            }
          } else {
            console.log('pass no head 1');
            setHead1Error(false)
          }
          //------checkHeadTwo------------
          if (checkHeadTwo === true) {
            handleSubmitHead2();
            if (
              formik.values.radiogroup35 == 0 ||
              formik.values.radiogroup36 == 0 ||
              formik.values.radiogroup37 == 0 ||
              formik.values.radiogroup38 == 0 ||
              formik.values.radiogroup39 == 0 ||
              formik.values.radiogroup40 == 0 ||
              formik.values.radiogroup41 == 0 ||
              formik.values.radiogroup42 == 0 ||
              formik.values.radiogroup43 == 0 ||
              formik.values.radiogroup44 == 0 ||
              formik.values.radiogroup45 == 0 ||
              formik.values.radiogroup46 == 0 ||
              formik.values.radiogroup47 == 0 ||
              formik.values.radiogroup48 == 0 ||
              
              formik.values.barcodeHead2 == '' ||
              formik.values.lotnoHead2 == '' ||
              formik.values.radiogroup49 == 0 ||
            ((formik.values.radiogroup49==2&&jobDetailData.proSink.headTwoimage2=='')&&(formik.values.radiogroup49==2&&preImg5=='')) ||
            formik.values.radiogroup50 == 0 ||
            formik.values.radiogroup51 == 0 ||
            formik.values.radiogroup52 == 0 ||
            formik.values.radiogroup53 == 0 ||
            formik.values.radiogroup54 == 0 ||
            formik.values.radiogroup55 == 0 ||
            formik.values.radiogroup56 == 0 ||
            formik.values.radiogroup57 == 0 ||
            formik.values.radiogroup58 == 0 ||
            formik.values.radiogroup59 == 0 ||
            formik.values.radiogroup60 == 0 

            ) {
              setHead2Error(true)
              console.log('head2 error');
            } else {
              
              console.log('pass have head2');
              if(preImg5!=''){
                updateImg5()
              } else{
                setHead2Error(false)
              }
         
            }
          } else {
            console.log('pass no head 2');
            setHead2Error(false)
          }
          /*
            if (headError false ทั้ง 2){
              update 1
            }
          */
        } else {
          updateImg1();
          console.log('pass no head 1&2');
        }
      } else {
        console.log('check ข้อ 2 error');
      }
    }
  });
  //  --------------validation  ^-------------------------

  const updateImg1 = () => {
    if (jobDetailData.proSink.image == '' && preImg != '') {
      const formData = new FormData();
      formData.append('JobId', job_ID);
      formData.append('Images', imgFile);
      postImage(formData)
        .then(res => {
          const imgresult = res.data.data;
          setImgNumber(imgresult);
          console.log(imgresult + 'img1');
          setJobDetailData(prevState => ({
            ...prevState,
            proSink: {
              ...prevState.proSink,
              image: imgresult
            }
          }));
          setSave(true);
          updateImg2();
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // console.log(preImg);
      if (preImg.length > 0) {
        const formData = new FormData();
        formData.append('ImagesId', jobDetailData.proSink.image);
        formData.append('JobId', job_ID);
        formData.append('Images', imgFile);
        putImage(formData)
          .then(res => {
            const imgresult = res.data.data;
            console.log(imgresult + 'put img1');
            setImgNumber(imgresult);
            setJobDetailData(prevState => ({
              ...prevState,
              proSink: {
                ...prevState.proSink,
                image: jobDetailData.proSink.image
              }
            }));
            setSave(true);
            updateImg2();
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log('no-up 1');
        updateImg2();
      }
    }
  };
  const updateImg2 = () => {
    if (jobDetailData.proSink.imageBefore1 == '' && preImg2 != '') {
      const formData = new FormData();
      formData.append('JobId', job_ID);
      formData.append('Images', imgFile2);
      postImage(formData)
        .then(res => {
          const imgresult = res.data.data;
          setImgNumber2(imgresult);
          console.log(imgresult + 'img2');
          setJobDetailData(prevState => ({
            ...prevState,
            proSink: {
              ...prevState.proSink,
              imageBefore1: imgresult
            }
          }));
          setSave2(true);
          updateImg3();
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // console.log(preImg2);
      if (preImg2.length > 0) {
        const formData = new FormData();
        formData.append('ImagesId', jobDetailData.proSink.imageBefore1);
        formData.append('JobId', job_ID);
        formData.append('Images', imgFile2);
        putImage(formData)
          .then(res => {
            const imgresult = res.data.data;
            console.log(imgresult + 'put img2');
            setImgNumber2(imgresult);
            setJobDetailData(prevState => ({
              ...prevState,
              proSink: {
                ...prevState.proSink,
                imageBefore1: jobDetailData.proSink.imageBefore1
              }
            }));
            setSave2(true);
            updateImg3();
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log('no-up 2');
        updateImg3();
      }
    }
  };
  const updateImg3 = () => {
    if (jobDetailData.proSink.imageAfter1 == '' && preImg3 != '') {
      const formData = new FormData();
      formData.append('JobId', job_ID);
      formData.append('Images', imgFile3);
      postImage(formData)
        .then(res => {
          const imgresult = res.data.data;
          setImgNumber3(imgresult);
          console.log(imgresult + 'img3');
          setJobDetailData(prevState => ({
            ...prevState,
            proSink: {
              ...prevState.proSink,
              imageAfter1: imgresult
            }
          }));
          setSave3(true);
          // updateImg4()
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // console.log(preImg3);
      if (preImg3.length > 0) {
        const formData = new FormData();
        formData.append('ImagesId', jobDetailData.proSink.imageAfter1);
        formData.append('JobId', job_ID);
        formData.append('Images', imgFile3);
        putImage(formData)
          .then(res => {
            const imgresult = res.data.data;
            console.log(imgresult + 'put img3');
            setImgNumber3(imgresult);
            setJobDetailData(prevState => ({
              ...prevState,
              proSink: {
                ...prevState.proSink,
                imageAfter1: jobDetailData.proSink.imageAfter1
              }
            }));
            setSave3(true);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        if (
          preImg.length == '' ||
          preImg2.length == '' ||
          preImg3.length == ''
        ) {
          if (preImg.length == '') {
            setSave(true);
          }
          if (preImg2.length == '') {
            setSave2(true);
          }
          if (preImg3.length == '') {
            setSave3(true);
          }
        } else {
          handleNext();
        }
      }
    }
  };
  // ---------------------------------------------------
  const updateImg4 = () => {
    if (jobDetailData.proSink.headOneimage2 == '' && preImg4 != '') {
      const formData = new FormData();
      formData.append('JobId', job_ID);
      formData.append('Images', imgFile4);
      postImage(formData)
        .then(res => {
          const imgresult = res.data.data;
          setImgNumber4(imgresult);
          console.log(imgresult + 'img4');
          setJobDetailData(prevState => ({
            ...prevState,
            proSink: {
              ...prevState.proSink,
              headOneimage2: imgresult
            }
          }));
          setSave4(true);
          
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // console.log(preImg3);
      if (preImg4.length > 0) {
        // console.log(preImg4);
        const formData = new FormData();
        formData.append('ImagesId', jobDetailData.proSink.headOneimage2);
        formData.append('JobId', job_ID);
        formData.append('Images', imgFile4);
        putImage(formData)
          .then(res => {
            const imgresult = res.data.data;
            console.log(imgresult + 'put img4');
            setImgNumber4(imgresult);
            setJobDetailData(prevState => ({
              ...prevState,
              proSink: {
                ...prevState.proSink,
                headOneimage2: jobDetailData.proSink.headOneimage2
              }
            }));
            setSave4(true);
           
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        setHead1Error(false)
      }
    }
  };

  const updateImg5 = () => {
    if (jobDetailData.proSink.headTwoimage2 == '' && preImg5 != '') {
      const formData = new FormData();
      formData.append('JobId', job_ID);
      formData.append('Images', imgFile5);
      postImage(formData)
        .then(res => {
          const imgresult = res.data.data;
          setImgNumber5(imgresult);
          console.log(imgresult + 'img5');
          setJobDetailData(prevState => ({
            ...prevState,
            proSink: {
              ...prevState.proSink,
              headTwoimage2: imgresult
            }
          }));
          setSave5(true);
          
        })
        .catch(error => {
          console.log(error);
        });
    } else {
    
      if (preImg5.length > 0) {
  
        const formData = new FormData();
        formData.append('ImagesId', jobDetailData.proSink.headTwoimage2);
        formData.append('JobId', job_ID);
        formData.append('Images', imgFile5);
        putImage(formData)
          .then(res => {
            const imgresult = res.data.data;
            console.log(imgresult + 'put img5');
            setImgNumber5(imgresult);
            setJobDetailData(prevState => ({
              ...prevState,
              proSink: {
                ...prevState.proSink,
                headTwoimage2: jobDetailData.proSink.headTwoimage2
              }
            }));
            setSave5(true);
           
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        setHead2Error(false)
      }
    }
  };
  const handleNext = () => {
    console.log(jobDetailData);
    updateJob(jobDetailData).then(res => {
      console.log('save');
    });
  };

  const handleSubmitAll = () => {
    handleSubmitTop();
    // updateImg1();
    // updateImgTest()
    //----------------image1--------------------------
    if (formik.values.image1 != '' || jobDetailData.proSink.image != '') {
      setImageError1(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      setImageError1(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกรูปภาพ'
      }));
    }
    //-----------------end---------------
    const host_url = configApi.API_SERVER;
    console.log("**********> START <*********");
    if((sig1.length > 0 && sig2.length > 0) ||
      (imgIdEditCus !== "" && imgIdEditEmp !== "") ||
      (imgIdEditCus !== "" && sig2.length > 0) ||
      (imgIdEditEmp !== "" && sig1.length > 0)
    ){
      console.log("Send Email prosink");
      axios.get(host_url + "/api/v1/PDFs/prosink/"+ job_ID+ "/send");
    }
    console.log("sig1: "+sig1);
    console.log("sig1: "+sig2);
    console.log("imgIdEdiCus: "+imgIdEditCus);
    console.log("imgIdEdiEmp: "+imgIdEditEmp)
    // // const host_url = "https://localhost:7029";
    // const host_url = "http://13.212.143.253:1771";
    // axios.get(host_url + "/api/v1/PDFs/prosink/"+job_ID+"/send");
    // // axios.get(host_url + "/Hello");
    // // axios.get(host_url + "/api/v1/Todo/todo/Dbcooper From Keeenservice FormProSink");
    // // axios.get(host_url + "/api/v1/Todo/todo/" + job_ID);
  };
  // ----------image function v----------
  const convertBase64 = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = error => {
        reject(error);
      };
    });
  };

  const getImgForm1 = data => {
    getImage(data).then(res => {
      const result = res.data.data.images;
      setImageFirst(result);
    });
    return imageFirst;
  };
  const getImgForm2 = data => {
    getImage(data).then(res => {
      const result = res.data.data.images;
      setImageFirst2(result);
    });
    return imageFirst2;
  };
  const getImgForm3 = data => {
    getImage(data).then(res => {
      const result = res.data.data.images;
      setImageFirst3(result);
    });
    return imageFirst3;
  };
  const handleChangeimgBefore1 = async e => {
    const length = e.target.files.length;
    const imageFile = e.target.files[0];
    const imageFilname = e.target.files[0].name;
    // console.log(imageFile);
    // console.log(job_ID);

    if (length > 0) {
      reader.onload = e => {
        const img = new Image();
        img.onload = () => {
          //------------- Resize img code ----------------------------------
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          var MAX_WIDTH = 437;
          var MAX_HEIGHT = 437;
          var width = img.width;
          var height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          ctx.canvas.toBlob(
            blob => {
              const file = new File([blob], imageFilname, {
                type: 'image/png',
                lastModified: Date.now()
              });
              // console.log('--------------');
              // console.log(file);
              // console.log(URL.createObjectURL(imageFile));
              setImgFile2(file);
            },
            'image/png',
            1
          );
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(imageFile);

      const img = imageFile;
      const base64 = await convertBase64(img);
      setPreImg2(base64);

      setImageBeforeError1(prevState => ({
        ...prevState,
        error: false,
        helperText: ''
      }));
    }
  };
  const handleChangeimg1 = async e => {
    const length = e.target.files.length;
    const imageFile = e.target.files[0];
    const imageFilname = e.target.files[0].name;
    //  console.log(imageFile);
    // console.log(job_ID);

    if (length > 0) {
      reader.onload = e => {
        const img = new Image();
        img.onload = () => {
          //------------- Resize img code ----------------------------------
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          var MAX_WIDTH = 437;
          var MAX_HEIGHT = 437;
          var width = img.width;
          var height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          ctx.canvas.toBlob(
            blob => {
              const file = new File([blob], imageFilname, {
                type: 'image/png',
                lastModified: Date.now()
              });
              // console.log('--------------');
              // console.log(file);
              // console.log(URL.createObjectURL(imageFile));
              setImgFile(file);
            },
            'image/png',
            1
          );
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(imageFile);

      const img = imageFile;
      const base64 = await convertBase64(img);
      setPreImg(base64);
       console.log('preimg1');
      setImageError1(prevState => ({
        ...prevState,
        error: false,
        helperText: ''
      }));
    }
  };
  const handleChangeimg4 = async e => {
    const length = e.target.files.length;
    const imageFile = e.target.files[0];
    const imageFilname = e.target.files[0].name;
    //  console.log(imageFile);
    // console.log(job_ID);

    if (length > 0) {
      reader.onload = e => {
        const img = new Image();
        img.onload = () => {
          //------------- Resize img code ----------------------------------
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          var MAX_WIDTH = 437;
          var MAX_HEIGHT = 437;
          var width = img.width;
          var height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          ctx.canvas.toBlob(
            blob => {
              const file = new File([blob], imageFilname, {
                type: 'image/png',
                lastModified: Date.now()
              });
              // console.log('--------------');
              // console.log(file);
              // console.log(URL.createObjectURL(imageFile));
              setImgFile4(file);
            },
            'image/png',
            1
          );
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(imageFile);

      const img = imageFile;
      const base64 = await convertBase64(img);
      setPreImg4(base64);
      // console.log(base64);
      console.log('preimg4');
      setHeadOneimage(prevState => ({
        ...prevState,
        error: false,
        helperText: ''
      }));
    }
  };

  const handleChangeimg5 = async e => {
    const length = e.target.files.length;
    const imageFile = e.target.files[0];
    const imageFilname = e.target.files[0].name;
    //  console.log(imageFile);
    // console.log(job_ID);

    if (length > 0) {
      reader.onload = e => {
        const img = new Image();
        img.onload = () => {
          //------------- Resize img code ----------------------------------
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          var MAX_WIDTH = 437;
          var MAX_HEIGHT = 437;
          var width = img.width;
          var height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          ctx.canvas.toBlob(
            blob => {
              const file = new File([blob], imageFilname, {
                type: 'image/png',
                lastModified: Date.now()
              });
              // console.log('--------------');
              // console.log(file);
              // console.log(URL.createObjectURL(imageFile));
              setImgFile5(file);
            },
            'image/png',
            1
          );
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(imageFile);

      const img = imageFile;
      const base64 = await convertBase64(img);
      setPreImg5(base64);
      // console.log(base64);
      console.log('preimg5');
      setHeadTwoimage(prevState => ({
        ...prevState,
        error: false,
        helperText: ''
      }));
    }
  };
  // -----image function ^------------------
  const handlejobDate = str => {
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
    setDateDetail({
      year: date.getFullYear() + 543,
      month: mnth,
      day: day,
      hr: hours,
      min: minutes
    });
  };
  const searchProduct = data => {
    getProductSearch(data)
      .then(res => {
        const productNameget = res.data.result.data.productName;
        // console.log(res.data.result.data.productName);
        setProductName(res.data.result.data.productName);
        setJobDetailData(prevState => ({
          ...prevState,
          proSink: {
            ...prevState.proSink,
            productName: productNameget
          }
        }));
      })
      .catch(error => {
        setProductName('');
        setJobDetailData(prevState => ({
          ...prevState,
          proSink: {
            ...prevState.proSink,
            productName: ''
          }
        }));
      });
  };

  const handleProductID = data => {
    setJobDetailData(prevState => ({
      ...prevState,
      proSink: {
        ...prevState.proSink,
        barcode: data
      }
    }));
  };
  const handleSerialNumber = data => {
    setJobDetailData(prevState => ({
      ...prevState,
      proSink: {
        ...prevState.proSink,
        serialNo: data
      }
    }));
  };
  const handleDisableText = status => {
    if (status) {
      return classes.disableText;
    }
  };
  const handleDisableBtn = status => {
    if (status) {
      return classes.btnDis;
    } else {
      return classes.btnChoose;
    }
  };
  const handleDisableRadio = status => {
    if (status) {
      return <DisableRadio />;
    } else {
      return <GreenRadio />;
    }
  };
  const splitDate = (str, i1, i2) => {
    const result = [str.slice(0, i1), str.slice(i1)];
    const day = [result[1].slice(0, i2), result[1].slice(i2)];
    return day[1] + '/' + day[0] + '/' + result[0];
  };

  const handleClickOpen1 = () => {
    setOpenSignature1(true);
  };
  const handleClickOpen2 = () => {
    setOpenSignature2(true);
  };

  const handleHeadOne = () => {
    if (checkHeadOne === true) {
      setHeadOne(!headOne);
    }
  };
  const [checkHeadOne, setCheckHeadOne] = useState(false);
  const handleCheckHeadOne = () => {
    // remainder send data to api ...
    setCheckHeadOne(!checkHeadOne);
    setHeadOne(!checkHeadOne);

    setJobDetailData(prevState => ({
      ...prevState,
      proSink: {
        ...prevState.proSink,
        headOne: !checkHeadOne
      }
    }));
  };
  const [headTwo, setHeadTwo] = useState(false);

  const handleHeadTwo = () => {
    if (checkHeadTwo === true) {
      setHeadTwo(!headTwo);
    }
  };
  const [checkHeadTwo, setCheckHeadTwo] = useState(false);
  const handleCheckHeadTwo = () => {
    // remainder send data to api...
    setCheckHeadTwo(!checkHeadTwo);
    setHeadTwo(!checkHeadTwo);

    setJobDetailData(prevState => ({
      ...prevState,
      proSink: {
        ...prevState.proSink,
        headTwo: !checkHeadTwo
      }
    }));
  };
  const handleBase64imgUser = value => {
    setJobDetailData(prevState => ({
      ...prevState,

      proSink: {
        ...prevState.proSink,

        signatureEmployee: value
      }
    }));
  };
  const handleBase64imgShop = value => {
    setBase64imgShop(value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSink: {
        ...prevState.proSink,

        signatureCustomer: value
      }
    }));
  };
  const handleLog = data => {
    console.log(data);
  };
  const backPage = () => {
    const path = '/joblist/jobdetail/' + jobDetailData.jobId;
    history.push(path);
  };
  return (
    <div style={{ margin: 10 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid item xs></Grid>
          <Grid item xs={12} sm={8}>
            <Card
              style={{
                borderTop: '12px solid #3AA775',
                borderRadius: 0
              }}
              className={classes.cardPad}
            >
              <Typography variant="h1" className={classes.title}>
                ตรวจเช็ค ProSink
              </Typography>
              <Box mt={2} />
              <Typography variant="body2" className={classes.title}>
                เลขที่ใบงาน {jobDetailData.jobId}
              </Typography>
              <Box mt={2} />
              <Typography variant="body2" className={classes.title}>
                วันที่นัดหมาย {dateShow}
              </Typography>
            </Card>
            <Box mt={2} />
            <Card
              className={classes.cardPad}
              style={{
                borderRadius: 0
              }}
            >
              <Grid item xs>
                <Typography variant="h3">ข้อมูลใบงาน</Typography>
              </Grid>
            </Card>
            <Card
              className={classes.root}
              style={{ marginBottom: '15px', borderRadius: 0 }}
            >
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12}>
                    {/*  1 row  */}
                    <Grid container item xs={12} spacing={1}>
                      <Grid item xs={12} sm={12} md={2}>
                        <Typography variant="subtitle2">รหัสร้านค้า</Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={10}>
                        <Typography variant="body2" color="textSecondary">
                          {jobDetailData.customerId}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box mt={1} />
                    {/* ------  */}
                    {/*  2 row  */}
                    <Grid container item xs={12} spacing={1}>
                      <Grid item xs={12} sm={12} md={2}>
                        <Typography variant="subtitle2">ชื่อร้านค้า</Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={10}>
                        <Typography variant="body2" color="textSecondary">
                          {jobDetailData.customerName}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box mt={1} />
                    {/* ------  */}
                    {/*  3 row  */}
                    <Grid container item xs={12} spacing={1}>
                      <Grid item xs={12} sm={12} md={2}>
                        <Typography variant="subtitle2">ที่อยู่</Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={10}>
                        <Typography variant="body2" color="textSecondary">
                          {jobDetailData.customerInfo.address}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box mt={1} />
                    {/* ------  */}
                    {/*  4 row  */}
                    <Grid container item xs={12} spacing={1}>
                      <Grid item xs={12} sm={12} md={2}>
                        <Typography variant="subtitle2">อีเมล</Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={10}>
                        <Typography variant="body2" color="textSecondary">
                          {jobDetailData.customerInfo.email}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box mt={1} />
                    {/* ------  */}
                    {/*  5 row  */}
                    <Grid container item xs={12} spacing={1}>
                      <Grid item xs={12} sm={12} md={2}>
                        <Typography variant="subtitle2">โทรศัพท์</Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={10}>
                        <Typography variant="body2" color="textSecondary">
                          {jobDetailData.customerInfo.telephoneNumber}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box mt={1} />
                    {/* ------  */}
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={6}>
                        <Grid container>
                          <Typography variant="subtitle2">
                            Equipment Code (รหัสอุปกรณ์)
                          </Typography>
                          <Box ml={1} />
                          <Typography style={{ color: '#D44848' }}>
                            {' '}
                            *{' '}
                          </Typography>
                        </Grid>
                        <Box mb={1} />
                        <TextField
                          fullWidth
                          className="px-2 my-2"
                          variant="outlined"
                          name="type"
                          id="type"
                          select
                          SelectProps={{
                            native: true,
                            className: classes.selectCon,
                            MenuProps: {
                              className: { paper: classes.menuPaper }
                            }
                          }}
                          onChange={e => {
                            searchProduct(e.target.value);
                            handleProductID(e.target.value);
                            formik.handleChange(e);
                          }}
                          placeholder="กรุณากรอกข้อมูล"
                          size="small"
                          value={formik.values.barcode}
                          error={
                            formik.touched.barcode &&
                            Boolean(formik.errors.barcode)
                          }
                          helperText={
                            formik.touched.barcode && formik.errors.barcode
                          }
                          disabled={
                            jobDetailData.proSink.signatureCustomer.length >
                              0 &&
                            jobDetailData.proSink.signatureEmployee.length > 0
                          }
                        >
                          <option value={1}>กรุณาเลือกข้อมูล</option>
                          {type.map((row, index) => {
                            return (
                              <option key={index} value={row}>
                                {row}
                              </option>
                            );
                          })}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Grid container>
                          <Typography variant="subtitle2">
                            ชื่ออุปกรณ์
                          </Typography>
                        </Grid>
                        <Box mb={1} />
                        {productName.length > 1 ? (
                          <TextField
                            className={classes.disableText}
                            fullWidth
                            id="productName"
                            name="productName"
                            variant="outlined"
                            placeholder={productName}
                            color="secondary"
                            size="small"
                            disabled
                          />
                        ) : (
                          <TextField
                            className={classes.disableText}
                            fullWidth
                            id="productName"
                            name="productName"
                            variant="outlined"
                            placeholder="กรุณากรอกรหัสของอุปกรณ์"
                            color="secondary"
                            size="small"
                            disabled
                          />
                        )}
                      </Grid>
                      {/* <Dialogbarcode
                          title={'ScanBarcode'}
                          open={openDialog}
                          onClose={handleCloseDialog}
                          handleSerialNumber={handleSerialNumber}
                        /> */}
                      <Grid item xs={12} sm={6}>
                        <Grid container>
                          <Typography variant="subtitle2">
                            Serial No.
                          </Typography>
                          <Box ml={1} />
                          <Typography style={{ color: '#D44848' }}>
                            {' '}
                            *{' '}
                          </Typography>
                        </Grid>
                        <Box mb={1} />
                        <TextField
                          fullWidth
                          id="serialNumber"
                          name="serialNumber"
                          variant="outlined"
                          className={handleDisableText(
                            jobDetailData.proSink.signatureCustomer.length >
                              0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                          )}
                          value={formik.values.serialNumber}
                          onChange={e => {
                            console.log(e.target.value);
                            handleSerialNumber(e.target.value);
                            formik.handleChange(e);
                          }}
                          placeholder="กรุณากรอกข้อมูล"
                          inputProps={{ maxLength: 20 }}
                          error={
                            formik.touched.serialNumber &&
                            Boolean(formik.errors.serialNumber)
                          }
                          helperText={
                            formik.touched.serialNumber &&
                            formik.errors.serialNumber
                          }
                          color="secondary"
                          size="small"
                          disabled={
                            jobDetailData.proSink.signatureCustomer.length >
                              0 &&
                            jobDetailData.proSink.signatureEmployee.length > 0
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            {/*  -------- 1----------------- */}
            <Card style={{ borderRadius: 0 }}>
              <CardContent>
                <Grid container>
                  <Typography variant="h3" style={{ fontWeight: '1000' }}>
                    1. ภาพถ่ายอุปกรณ์ ณ วันที่เข้าไปตรวจสอบ
                  </Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mt={2} />

                <Grid item xs={12} sm={12} md={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    {preImg ? (
                      <img
                        src={preImg}
                        alt="dummy"
                        width="300px"
                        height="188px"
                        borderradius="1vh"
                      />
                    ) : (
                      <>
                        {jobDetailData.proSink.image ? (
                          <img
                            src={getImgForm1(jobDetailData.proSink.image)}
                            alt="dummy"
                            width="300px"
                            height="188px"
                            borderradius="1vh"
                          />
                        ) : (
                          <img
                            src="/static/images/noImg.png"
                            style={{
                              width: '300px',
                              height: '188px',
                              borderradius: '1vh'
                            }}
                          />
                        )}
                      </>
                    )}
                    <Box mt={1} />
                    <h6>กรุณาอัปโหลดรูปภาพ</h6>
                    <Box mt={1} />
                  </Grid>
                  <Box mt={1} />

                  <Grid container xs={12} sm={12} md={12}>
                    {/* <div className={classes.media}>
                      </div> */}
                    <input
                      accept="image/*"
                      style={{ display: 'none' }}
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={handleChangeimg1}
                      disabled={
                        jobDetailData.proSink.signatureCustomer.length > 0 &&
                        jobDetailData.proSink.signatureEmployee.length > 0
                      }
                    />{' '}
                    <label htmlFor="contained-button-file">
                      <Button
                        className={classes.btnChoose}
                        variant="contained"
                        component="span"
                        startIcon={<IconUpload style={{ width: '1.5vh' }} />}
                        disabled={
                          jobDetailData.proSink.signatureCustomer.length > 0 &&
                          jobDetailData.proSink.signatureEmployee.length > 0
                        }
                      >
                        เพิ่มไฟล์
                      </Button>
                      <FormHelperText error={imageError1.error}>
                        {imageError1.helperText}
                      </FormHelperText>
                    </label>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Box mt={2} />
            <Card>
              <CardContent>
                <Grid container>
                  <Typography variant="h3" style={{ fontWeight: '1000' }}>
                    2. สภาพเครื่อง
                  </Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mb={1} />
                {/* ------------------------------start 2-------------------------------------- */}
                <Typography variant="h3">
                  2.1 สภาพเครื่องภายนอก ความสวยงาม เช่น สติกเกอร์ POSM
                  ยังคงมีความคมชัด ไม่หลุดลอก
                </Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <Box mt={2} />
                    <Grid container>
                      <Typography variant="h5" style={{ fontWeight: '1000' }}>
                        ก่อนการตรวจเช็ค
                      </Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>

                    {/* ----------------start radio config before------------------------------ */}
                    <FormControl
                      component="fieldset"
                      error={radioGroupError1.error}
                    >
                      <RadioGroup
                        aria-label="machineBefore1"
                        name="machineBefore1"
                        value={formik.values.radiogroup1}
                        onChange={e => {
                          handleRadioChange1(e);
                          handleChangeMachineBefore1(e);
                          formik.setFieldValue('radiogroup1', e.target.value);
                        }}
                      >
                        {jobDetailData.proSink.machineBefore1 == 1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineBefore1 == 2 ? (
                          <FormControlLabel
                            value={parseInt(2)}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineBefore1 == 3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineBefore1 == 4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError1.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* ----------------end radio config before------------------------------ */}
                  </Grid>
                  <Grid item xs={6}>
                    <Box mt={2} />
                    <Grid container>
                      <Typography variant="h5" style={{ fontWeight: '1000' }}>
                        หลังการตรวจเช็ค
                      </Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    {/* ----------------start radio config after------------------------------ */}
                    <FormControl
                      component="fieldset"
                      error={radioGroupError2.error}
                    >
                      <RadioGroup
                        aria-label="machineAfter1"
                        name="machineAfter1"
                        value={formik.values.radiogroup2}
                        onChange={e => {
                          handleRadioChange2(e);
                          handleChangeMachineAfter1(e);
                          formik.setFieldValue('radiogroup2', e.target.value);
                        }}
                      >
                        {jobDetailData.proSink.machineAfter1 == 1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineAfter1 == 2 ? (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineAfter1 == 3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineAfter1 == 4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError2.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* ----------------end radio config after------------------------------ */}
                  </Grid>
                </Grid>
                <Box mt={2} />
                <Divider />
                <Box mt={2} />
                {/* ---start------------ */}
                <Typography variant="h3">
                  2.2. ความแข็งแรง หรือสมบูรณ์ของอุปกรณ์
                </Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <Box mt={2} />
                    <Grid container>
                      <Typography variant="h5" style={{ fontWeight: '1000' }}>
                        ก่อนการตรวจเช็ค
                      </Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    {/* ----------------start radio config before------------------------------ */}
                    <FormControl
                      component="fieldset"
                      error={radioGroupError3.error}
                    >
                      <RadioGroup
                        aria-label="machineBefore2"
                        name="machineBefore2"
                        value={formik.values.radiogroup3}
                        onChange={e => {
                          handleRadioChange3(e);
                          handleChangeMachineBefore2(e);
                          formik.setFieldValue('radiogroup3', e.target.value);
                        }}
                      >
                        {jobDetailData.proSink.machineBefore2 == 1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineBefore2 == 2 ? (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineBefore2 == 3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineBefore2 == 4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError3.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* ----------- */}
                    <>
                      <Grid item xs={12} sm={12} md={12}>
                        <Grid item xs={12} sm={12} md={12}>
                          {preImg2 ? (
                            <img
                              src={preImg2}
                              alt="dummy"
                              width="300px"
                              height="188px"
                              borderradius="1vh"
                            />
                          ) : (
                            <>
                              {jobDetailData.proSink.imageBefore1 ? (
                                <img
                                  src={getImgForm2(
                                    jobDetailData.proSink.imageBefore1
                                  )}
                                  alt="dummy"
                                  width="300px"
                                  height="188px"
                                  borderradius="1vh"
                                />
                              ) : (
                                <img
                                  src="/static/images/noImg.png"
                                  style={{
                                    width: '300px',
                                    height: '188px',
                                    borderradius: '1vh'
                                  }}
                                />
                              )}
                            </>
                          )}
                          <Box mt={1} />
                          <h6>กรุณาอัปโหลดรูปภาพ</h6>
                          <Box mt={1} />
                        </Grid>
                        <Box mt={1} />
                        <Grid container xs={12} sm={12} md={12}>
                          <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="imgBefore1"
                            multiple
                            type="file"
                            onChange={handleChangeimgBefore1}
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                          />{' '}
                          <label htmlFor="imgBefore1">
                            <Button
                              className={classes.btnChoose}
                              variant="contained"
                              component="span"
                              startIcon={
                                <IconUpload style={{ width: '1.5vh' }} />
                              }
                              disabled={
                                jobDetailData.proSink.signatureCustomer.length >
                                  0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                              }
                            >
                              เพิ่มไฟล์
                            </Button>
                            <FormHelperText error={imageBeforeError1.error}>
                              {imageBeforeError1.helperText}
                            </FormHelperText>
                          </label>
                        </Grid>
                      </Grid>{' '}
                    </>
                    {/* ----------------end radio config before------------------------------ */}
                  </Grid>
                  <Grid item xs={6}>
                    <Box mt={2} />
                    <Grid container>
                      <Typography variant="h5" style={{ fontWeight: '1000' }}>
                        หลังการตรวจเช็ค
                      </Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    {/* ----------------start radio config after------------------------------ */}
                    <FormControl
                      component="fieldset"
                      error={radioGroupError4.error}
                    >
                      <RadioGroup
                        aria-label="machineAfter2"
                        name="machineAfter2"
                        value={formik.values.radiogroup4}
                        onChange={e => {
                          handleRadioChange4(e);
                          handleChangeMachineAfter2(e);
                          formik.setFieldValue('radiogroup4', e.target.value);
                        }}
                      >
                        {jobDetailData.proSink.machineAfter2 == 1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineAfter2 == 2 ? (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineAfter2 == 3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineAfter2 == 4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError4.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* -------------------- */}
                    <>
                      <Grid item xs={12} sm={12} md={12}>
                        <Grid item xs={12} sm={12} md={12}>
                          {preImg3 ? (
                            <img
                              src={preImg3}
                              alt="dummy"
                              width="300px"
                              height="188px"
                              borderradius="1vh"
                            />
                          ) : (
                            <>
                              {jobDetailData.proSink.imageAfter1 ? (
                                <img
                                  src={getImgForm3(
                                    jobDetailData.proSink.imageAfter1
                                  )}
                                  alt="dummy"
                                  width="300px"
                                  height="188px"
                                  borderradius="1vh"
                                />
                              ) : (
                                <img
                                  src="/static/images/noImg.png"
                                  style={{
                                    width: '300px',
                                    height: '188px',
                                    borderradius: '1vh'
                                  }}
                                />
                              )}
                            </>
                          )}
                          <Box mt={1} />
                          <h6>กรุณาอัปโหลดรูปภาพ</h6>
                          <Box mt={1} />
                        </Grid>
                        <Box mt={1} />
                        <Grid container xs={12} sm={12} md={12}>
                          <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="imgAfter1"
                            multiple
                            type="file"
                            onChange={handleChangeimgAfter1}
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                          />{' '}
                          <label htmlFor="imgAfter1">
                            <Button
                              className={classes.btnChoose}
                              variant="contained"
                              component="span"
                              startIcon={
                                <IconUpload style={{ width: '1.5vh' }} />
                              }
                              disabled={
                                jobDetailData.proSink.signatureCustomer.length >
                                  0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                              }
                            >
                              เพิ่มไฟล์
                            </Button>
                            <FormHelperText error={imageAfterError1.error}>
                              {imageAfterError1.helperText}
                            </FormHelperText>
                          </label>
                        </Grid>
                      </Grid>{' '}
                    </>
                    {/* ----------------end radio config after------------------------------ */}
                  </Grid>
                </Grid>

                <Box mt={2} />
                <Divider />
                <Box mt={2} />
                {/* -----end----------- */}
                {/* ---start------------ */}
                <Typography variant="h3">2.3. ความสะอาดของอุปกรณ์</Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <Box mt={2} />
                    <Grid container>
                      <Typography variant="h5" style={{ fontWeight: '1000' }}>
                        ก่อนการตรวจเช็ค
                      </Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    {/* ----------------start radio config before------------------------------ */}
                    <FormControl
                      component="fieldset"
                      error={radioGroupError5.error}
                    >
                      <RadioGroup
                        aria-label="machineBefore3"
                        name="machineBefore3"
                        value={formik.values.radiogroup5}
                        onChange={e => {
                          handleRadioChange5(e);
                          handleChangeMachineBefore3(e);
                          formik.setFieldValue('radiogroup5', e.target.value);
                        }}
                      >
                        {jobDetailData.proSink.machineBefore3 == 1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineBefore3 == 2 ? (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineBefore3 == 3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineBefore3 == 4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError5.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* ----------------end radio config before------------------------------ */}
                  </Grid>
                  <Grid item xs={6}>
                    <Box mt={2} />
                    <Grid container>
                      <Typography variant="h5" style={{ fontWeight: '1000' }}>
                        หลังการตรวจเช็ค
                      </Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    {/* ----------------start radio config after------------------------------ */}
                    <FormControl
                      component="fieldset"
                      error={radioGroupError6.error}
                    >
                      <RadioGroup
                        aria-label="machineAfter3"
                        name="machineAfter3"
                        value={formik.values.radiogroup6}
                        onChange={e => {
                          handleRadioChange6(e);
                          handleChangeMachineAfter3(e);
                          formik.setFieldValue('radiogroup6', e.target.value);
                        }}
                      >
                        {jobDetailData.proSink.machineAfter3 == 1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineAfter3 == 2 ? (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineAfter3 == 3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineAfter3 == 4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError6.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* ----------------end radio config after------------------------------ */}
                  </Grid>
                </Grid>

                <Box mt={2} />
                <Divider />
                <Box mt={2} />
                {/* -----end----------- */}
                {/* ---start------------ */}
                <Typography variant="h3">
                  2.4. เครื่องจ่ายน้ำยายึดติดแน่นกับผนัง
                </Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <Box mt={2} />
                    <Grid container>
                      <Typography variant="h5" style={{ fontWeight: '1000' }}>
                        ก่อนการตรวจเช็ค
                      </Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    {/* ----------------start radio config before------------------------------ */}
                    <FormControl
                      component="fieldset"
                      error={radioGroupError7.error}
                    >
                      <RadioGroup
                        aria-label="machineBefore4"
                        name="machineBefore4"
                        value={formik.values.radiogroup7}
                        onChange={e => {
                          handleRadioChange7(e);
                          handleChangeMachineBefore4(e);
                          formik.setFieldValue('radiogroup7', e.target.value);
                        }}
                      >
                        {jobDetailData.proSink.machineBefore4 == 1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineBefore4 == 2 ? (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineBefore4 == 3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineBefore4 == 4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError7.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* ----------------end radio config before------------------------------ */}
                  </Grid>
                  <Grid item xs={6}>
                    <Box mt={2} />
                    <Grid container>
                      <Typography variant="h5" style={{ fontWeight: '1000' }}>
                        หลังการตรวจเช็ค
                      </Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    {/* ----------------start radio config after------------------------------ */}
                    <FormControl
                      component="fieldset"
                      error={radioGroupError8.error}
                    >
                      <RadioGroup
                        aria-label="machineAfter4"
                        name="machineAfter4"
                        value={formik.values.radiogroup8}
                        onChange={e => {
                          handleRadioChange8(e);
                          handleChangeMachineAfter4(e);
                          formik.setFieldValue('radiogroup8', e.target.value);
                        }}
                      >
                        {jobDetailData.proSink.machineAfter4 == 1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดีมาก 100%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineAfter4 == 2 ? (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ดี 80%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineAfter4 == 3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="พอใช้ 60%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {jobDetailData.proSink.machineAfter4 == 4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                                jobDetailData.proSink.signatureEmployee.length >
                                  0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={
                              jobDetailData.proSink.signatureCustomer.length >
                                0 &&
                              jobDetailData.proSink.signatureEmployee.length > 0
                            }
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError8.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* ----------------end radio config after------------------------------ */}
                  </Grid>
                </Grid>

                {/* -----end----------- */}
              </CardContent>
            </Card>

            {/* ---------------เช็คหัวฉีด 1 start --------------- */}
            <Box mt={2} />

            {checkHeadOne === true ? (
              <Card
                onClick={handleHeadOne}
                className={classes.cardPadH1}
                style={{
                  borderRadius: 0
                }}
              >
                <Grid container>
                  <Grid item xs={5}>
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                          checked={checkHeadOne}
                          onChange={handleCheckHeadOne}
                          name="checkedG"
                          disabled={
                            jobDetailData.proSink.signatureCustomer.length >
                              0 &&
                            jobDetailData.proSink.signatureEmployee.length > 0
                          }
                        />
                      }
                      label="หัวจ่ายน้ำยาหัวที่ 1"
                    />
                  </Grid>
                </Grid>
              </Card>
            ) : (
              <Card
                onClick={handleHeadOne}
                className={classes.cardPad}
                style={{
                  borderRadius: 0
                }}
              >
                <Grid container>
                  <Grid item xs={5}>
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                          checked={checkHeadOne}
                          onChange={handleCheckHeadOne}
                          name="checkedG"
                          disabled={
                            jobDetailData.proSink.signatureCustomer.length >
                              0 &&
                            jobDetailData.proSink.signatureEmployee.length > 0
                          }
                        />
                      }
                      label="หัวจ่ายน้ำยาหัวที่ 1"
                    />
                  </Grid>
                </Grid>
              </Card>
            )}

            <Box mt={2} />
            {headOne ? (
          
              <Head1
                formik={formik}
                radioGroupError9={radioGroupError9}
                radioGroupError10={radioGroupError10}
                radioGroupError11={radioGroupError11}
                radioGroupError12={radioGroupError12}
                radioGroupError13={radioGroupError13}
                radioGroupError14={radioGroupError14}
                radioGroupError15={radioGroupError15}
                radioGroupError16={radioGroupError16}
                radioGroupError17={radioGroupError17}
                radioGroupError18={radioGroupError18}
                radioGroupError19={radioGroupError19}
                radioGroupError20={radioGroupError20}
                radioGroupError21={radioGroupError21}
                radioGroupError22={radioGroupError22}
                radioGroupError23={radioGroupError23}
                radioGroupError24={radioGroupError24}
                radioGroupError25={radioGroupError25}
                radioGroupError26={radioGroupError26}
                radioGroupError27={radioGroupError27}
                radioGroupError28={radioGroupError28}
                radioGroupError29={radioGroupError29}
                radioGroupError30={radioGroupError30}
                radioGroupError31={radioGroupError31}
                radioGroupError32={radioGroupError32}
                radioGroupError33={radioGroupError33}
                radioGroupError34={radioGroupError34}

                setRadioGroupError9={setRadioGroupError9}
                setRadioGroupError10={setRadioGroupError10}
                setRadioGroupError11={setRadioGroupError11}
                setRadioGroupError12={setRadioGroupError12}
                setRadioGroupError13={setRadioGroupError13}
                setRadioGroupError14={setRadioGroupError14}
                setRadioGroupError15={setRadioGroupError15}
                setRadioGroupError16={setRadioGroupError16}
                setRadioGroupError17={setRadioGroupError17}
                setRadioGroupError18={setRadioGroupError18}
                setRadioGroupError19={setRadioGroupError19}
                setRadioGroupError20={setRadioGroupError20}
                setRadioGroupError21={setRadioGroupError21}
                setRadioGroupError22={setRadioGroupError22}
                setRadioGroupError23={setRadioGroupError23}
                setRadioGroupError24={setRadioGroupError24}
                setRadioGroupError25={setRadioGroupError25}
                setRadioGroupError26={setRadioGroupError26}
                setRadioGroupError27={setRadioGroupError27}
                setRadioGroupError28={setRadioGroupError28}
                setRadioGroupError29={setRadioGroupError29}
                setRadioGroupError30={setRadioGroupError30}
                setRadioGroupError31={setRadioGroupError31}
                setRadioGroupError32={setRadioGroupError32}
                setRadioGroupError33={setRadioGroupError33}
                setRadioGroupError34={setRadioGroupError34}

                barcodeHead1={barcodeHead1}
                setBarcodeHead1={setBarcodeHead1}
                lotnoHead1={lotnoHead1}
                setLotnoHead1={setLotnoHead1}
                preImg4={preImg4}
                imageFirst4={imageFirst4}
                setImageFirst4={setImageFirst4}
                setPreImg4={setPreImg4}
                headOneimage={headOneimage}
                handleChangeimgHead={handleChangeimg4}
                handleDisableRadio={handleDisableRadio}
                handleDisableText={handleDisableText}
                jobDetailData={jobDetailData}
                setJobDetailData={setJobDetailData}
              />
            ) : 
            null}
            {/* ---------------เช็คหัวฉีด 1 end --------------- */}
            {/* ---------------เช็คหัวฉีด 2 start --------------- */}
            <Box mt={2} />

            {checkHeadTwo === true ? (
              <Card
                onClick={handleHeadTwo}
                className={classes.cardPadH1}
                style={{
                  borderRadius: 0
                }}
              >
                <Grid container>
                  <Grid item xs={5}>
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                          checked={checkHeadTwo}
                          onChange={handleCheckHeadTwo}
                          name="checkedG"
                          disabled={
                            jobDetailData.proSink.signatureCustomer.length >
                              0 &&
                            jobDetailData.proSink.signatureEmployee.length > 0
                          }
                        />
                      }
                      label="หัวจ่ายน้ำยาหัวที่ 2"
                    />
                  </Grid>
                </Grid>
              </Card>
            ) : (
              <Card
                onClick={handleHeadTwo}
                className={classes.cardPad}
                style={{
                  borderRadius: 0
                }}
              >
                <Grid container>
                  <Grid item xs={5}>
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                          checked={checkHeadTwo}
                          onChange={handleCheckHeadTwo}
                          name="checkedG"
                          disabled={
                            jobDetailData.proSink.signatureCustomer.length >
                              0 &&
                            jobDetailData.proSink.signatureEmployee.length > 0
                          }
                        />
                      }
                      label="หัวจ่ายน้ำยาหัวที่ 2"
                    />
                  </Grid>
                </Grid>
              </Card>
            )}

            {headTwo ? (
              <Head2
              formik={formik}
              radioGroupError9={radioGroupError35}
              radioGroupError10={radioGroupError36}
              radioGroupError11={radioGroupError37}
              radioGroupError12={radioGroupError38}
              radioGroupError13={radioGroupError39}
              radioGroupError14={radioGroupError40}
              radioGroupError15={radioGroupError41}
              radioGroupError16={radioGroupError42}
              radioGroupError17={radioGroupError43}
              radioGroupError18={radioGroupError44}
              radioGroupError19={radioGroupError45}
              radioGroupError20={radioGroupError46}
              radioGroupError21={radioGroupError47}
              radioGroupError22={radioGroupError48}
              radioGroupError23={radioGroupError49}
              radioGroupError24={radioGroupError50}
              radioGroupError25={radioGroupError51}
              radioGroupError26={radioGroupError52}
              radioGroupError27={radioGroupError53}
              radioGroupError28={radioGroupError54}
              radioGroupError29={radioGroupError55}
              radioGroupError30={radioGroupError56}
              radioGroupError31={radioGroupError57}
              radioGroupError32={radioGroupError58}
              radioGroupError33={radioGroupError59}
              radioGroupError34={radioGroupError60}

              setRadioGroupError9={setRadioGroupError35}
              setRadioGroupError10={setRadioGroupError36}
              setRadioGroupError11={setRadioGroupError37}
              setRadioGroupError12={setRadioGroupError38}
              setRadioGroupError13={setRadioGroupError39}
              setRadioGroupError14={setRadioGroupError40}
              setRadioGroupError15={setRadioGroupError41}
              setRadioGroupError16={setRadioGroupError42}
              setRadioGroupError17={setRadioGroupError43}
              setRadioGroupError18={setRadioGroupError44}
              setRadioGroupError19={setRadioGroupError45}
              setRadioGroupError20={setRadioGroupError46}
              setRadioGroupError21={setRadioGroupError47}
              setRadioGroupError22={setRadioGroupError48}
              setRadioGroupError23={setRadioGroupError49}
              setRadioGroupError24={setRadioGroupError50}
              setRadioGroupError25={setRadioGroupError51}
              setRadioGroupError26={setRadioGroupError52}
              setRadioGroupError27={setRadioGroupError53}
              setRadioGroupError28={setRadioGroupError54}
              setRadioGroupError29={setRadioGroupError55}
              setRadioGroupError30={setRadioGroupError56}
              setRadioGroupError31={setRadioGroupError57}
              setRadioGroupError32={setRadioGroupError58}
              setRadioGroupError33={setRadioGroupError59}
              setRadioGroupError34={setRadioGroupError60}

              barcodeHead1={barcodeHead2}
              setBarcodeHead1={setBarcodeHead2}
              lotnoHead1={lotnoHead2}
              setLotnoHead1={setLotnoHead2}
              preImg4={preImg5}
              imageFirst4={imageFirst5}
              setImageFirst4={setImageFirst5}
              setPreImg4={setPreImg5}
              headOneimage={headTwoimage}
              handleChangeimgHead={handleChangeimg5}
              
              handleDisableRadio={handleDisableRadio}
              handleDisableText={handleDisableText}
              jobDetailData={jobDetailData}
              setJobDetailData={setJobDetailData}
            />
            ) : null}
            {/* ---------------เช็คหัวฉีด 2 end --------------- */}
            <Box mt={2} />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Grid container>
                      <Typography variant="h3">
                        ลายเซ็นต์ตัวแทนร้านค้า
                      </Typography>
                    </Grid>
                    <Box mt={2} />
                    <Grid container>
                      <Grid item xs={12}>
                        {preImgCustomerSig ? (
                          <>
                            <img
                              src={preImgCustomerSig}
                              alt="dummy"
                              width="300px"
                              height="188px"
                              borderRadius="1vh"
                            />
                            <Typography variant="h4">
                              วันที่ {dateShow}
                            </Typography>
                          </>
                        ) : (
                          <>
                            {jobDetailData.proSink.signatureCustomer.length >
                            3 ? (
                              <>
                                <img
                                  src={imgCustomer}
                                  alt="dummy"
                                  width="300px"
                                  height="188px"
                                  borderRadius="1vh"
                                />
                                <Typography variant="h4">
                                  วันที่ {dateShow}
                                </Typography>
                              </>
                            ) : null}
                          </>
                        )}
                      </Grid>
                    </Grid>
                    <Button
                      onClick={handleClickOpen1}
                      className={handleDisableBtn(
                        sig1.length > 0 && sig2.length > 0
                      )}
                      startIcon={
                        <IconAutograph style={{ margin: '0 0 0 10px' }} />
                      }
                      disabled={sig1.length > 0 && sig2.length > 0}
                    >
                      เซ็นต์ชื่อ
                    </Button>
                    <Signature
                      title="ลายเซ็นต์ตัวแทนร้านค้า"
                      open={openSignature1}
                      handleClose={() => {
                        setOpenSignature1(false);
                      }}
                      handleBase64img={handleBase64imgShop}
                      imgName={'ลายเซ็นต์พนักงาน_' + job_ID}
                      job_ID={job_ID}
                      ImgID={sig1}
                      setImgIdEdit={setImgIdEditCus}
                      imgIdEdit={imgIdEditCus}
                      setPreImgSig={setPreImgCustomerSig}
                    />
                  </CardContent>
                </Card>
              </Grid>
              {/* ------------------------------------------------------- */}
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Grid container>
                      <Typography variant="h3">ลายเซ็นต์พนักงาน</Typography>
                    </Grid>
                    <Box mt={2} />
                    <Grid container>
                      <Grid item xs={12}>
                        {preImgEmployeeSig ? (
                          <>
                            <img
                              src={preImgEmployeeSig}
                              alt="dummy"
                              width="300px"
                              height="188px"
                              borderRadius="1vh"
                            />
                            <Typography variant="h4">
                              วันที่ {dateShow}
                            </Typography>
                          </>
                        ) : (
                          <>
                            {jobDetailData.proSink.signatureEmployee.length >
                            3 ? (
                              <>
                                <img
                                  src={imgEmpoyee}
                                  alt="dummy"
                                  width="300px"
                                  height="188px"
                                  borderRadius="1vh"
                                />
                                <Typography variant="h4">
                                  วันที่ {dateShow}
                                </Typography>
                              </>
                            ) : null}
                          </>
                        )}
                      </Grid>
                    </Grid>
                    <Button
                      onClick={handleClickOpen2}
                      className={handleDisableBtn(
                        sig1.length > 0 && sig2.length > 0
                      )}
                      startIcon={
                        <IconAutograph style={{ margin: '0 0 0 10px' }} />
                      }
                      disabled={sig1.length > 0 && sig2.length > 0}
                    >
                      เซ็นต์ชื่อ
                    </Button>
                    <Signature
                      title="ลายเซ็นต์พนักงาน"
                      open={openSignature2}
                      handleClose={() => {
                        setOpenSignature2(false);
                      }}
                      handleBase64img={handleBase64imgUser}
                      imgName={'ลายเซ็นต์พนักงาน_' + job_ID}
                      job_ID={job_ID}
                      ImgID={sig2}
                      setImgIdEdit={setImgIdEditEmp}
                      imgIdEdit={imgIdEditEmp}
                      setPreImgSig={setPreImgEmployeeSig}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box mt={2} />

            <Grid container justifyContent="center" xs={12} sm={12} md={12}>
              <Grid xs={5} sm={5} md={3} style={{ textAlign: 'end' }}>
                <ButtonSecondary
                  label="ย้อนกลับ"
                  fullWidth
                  size="small"
                  onClick={backPage}
                />
              </Grid>
              <Box ml={2} />

              {/* <button onClick={() => console.log(props.jobDetailData)}>
                log
              </button> */}

              <Grid xs={5} sm={5} md={3} style={{ textAlign: 'start' }}>
                <ButtonPramarys
                  label="บันทึก"
                  onClick={handleSubmitAll}
                  type="submit"
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>
            {/* -----end page------ */}
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </form>
    </div>
  );
}

export default FormProsink;
