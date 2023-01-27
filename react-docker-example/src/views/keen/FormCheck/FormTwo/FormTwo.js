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
  FormHelperText
} from '@material-ui/core';
import ButtonPramarys from 'src/components/keen/Buttonprimary';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import FormTwo2 from './FormTwo2';
import IconUpload from 'src/components/keen/icon/iconUpload';
import { useParams } from 'react-router-dom';
import { getJobSearch, updateJob } from '../../api/keeen/job';
import { postImage, getImage, putImage } from '../../api/keeen/uploadimg';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { getProductSearch } from '../../api/keeen/product';
import Dialogbarcode from 'src/components/keen/DialogBarcode';
import * as Yup from 'yup';
import IconBarCode from '../icon_barcode.svg';
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
  }
}));
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
function FormTwo() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState();
  const [next, setNext] = useState(false);
  const [valueProduct, setValueProduct] = useState();
  const [valueLotNo, setValueLotNo] = useState();
  const params = useParams();
  const job_ID = params.jobID;
  const [productName, setProductName] = useState('');
  const [imageFirst, setImageFirst] = useState();
  const [imgFile, setImgFile] = useState();
  const [preImg, setPreImg] = useState('');

  const [imageFirst2, setImageFirst2] = useState();
  const [imgFile2, setImgFile2] = useState();
  const [preImg2, setPreImg2] = useState('');

  const [imageFirst3, setImageFirst3] = useState();
  const [imgFile3, setImgFile3] = useState();
  const [preImg3, setPreImg3] = useState('');

  const [imgID1, setImgId1] = useState();
  const [imgID2, setImgId2] = useState();
  const [imgID3, setImgId3] = useState();
  let reader = new FileReader();
  const [dateShow, setDateShow] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [dateDetail, setDateDetail] = useState({
    year: '',
    month: '',
    day: '',
    hr: '',
    min: ''
  });
  const [jobDetailData, setJobDetailData] = useState({
    jobDate: '',
    status:0,
    customerInfo: {
      address: '',
      telephoneNumber: '',
      email: '',
      branch: ''
    },
    liquidDispenser: {
      status: 0,
      barcode: '',
      productName: '',
      productLotno: '',
      serialNo: '',
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
      barcode2: '',
      productKeeenName: '',
      productKeeenLotNo: '',
      product1: 0,
      image1: '',
      product2: 0,
      product3: 0,
      product4: 0,
      description2: '',
      signatureCustomer: '',
      signatureEmployee: ''
    },
    proSinkProMax: {
      status: 0,
      barcode: '',
      productName: '',
      productLotno: '',
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
      barcode2: '',
      productKeeenName: '',
      productKeeenLotNo: '',
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
    },
    hydroMaster: {
      status: 0,
      barcode: '',
      productName: '',
      productLotno: '',
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
      barcode2: '',
      productKeeenName: '',
      productKeeenLotNo: '',
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
  const [imageError1, setImageError1] = useState({
    value: '',
    error: '',
    helperText: ''
  });
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
  const handleRadioChange9 = event => {
    // console.log(event.target.value);
    setRadioGroupError9(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange10 = event => {
    // console.log(event.target.value);
    setRadioGroupError10(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange11 = event => {
    // console.log(event.target.value);
    setRadioGroupError11(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange12 = event => {
    // console.log(event.target.value);
    setRadioGroupError12(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange13 = event => {
    // console.log(event.target.value);
    setRadioGroupError13(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange14 = event => {
    // console.log(event.target.value);
    setRadioGroupError14(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange15 = event => {
    // console.log(event.target.value);
    setRadioGroupError15(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange16 = event => {
    // console.log(event.target.value);
    setRadioGroupError16(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange17 = event => {
    // console.log(event.target.value);
    setRadioGroupError17(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange18 = event => {
    // console.log(event.target.value);
    setRadioGroupError18(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange19 = event => {
    // console.log(event.target.value);
    setRadioGroupError19(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange20 = event => {
    // console.log(event.target.value);
    setRadioGroupError20(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange21 = event => {
    // console.log(event.target.value);
    setRadioGroupError21(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange22 = event => {
    // console.log(event.target.value);
    setRadioGroupError22(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleSubmitRadio = event => {
    //----------------image1--------------------------
    if (formik.values.image1 != '' || jobDetailData.proSinkProMax.image != '') {
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
    //----------------imageBefore1--------------------------
    if (
      formik.values.imageBefore1 != '' ||
      jobDetailData.proSinkProMax.imageBefore1 != ''
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
      jobDetailData.proSinkProMax.imageAfter1 != ''
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
    //----------------18--------------------------
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
    //----------------19--------------------------
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
    //----------------20--------------------------
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
    //----------------21--------------------------
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
    //----------------22--------------------------
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
  };
  const formik = useFormik({
    initialValues: {
      barcode: jobDetailData.proSinkProMax.barcode,
      productName: jobDetailData.proSinkProMax.productName,
      // product_lotno: jobDetailData.proSinkProMax.productLotno,
      serialNumber: jobDetailData.proSinkProMax.serialNo,

      radiogroup1: jobDetailData.proSinkProMax.machineBefore1,
      radiogroup2: jobDetailData.proSinkProMax.machineAfter1,
      radiogroup3: jobDetailData.proSinkProMax.machineBefore2,
      radiogroup4: jobDetailData.proSinkProMax.machineAfter2,
      radiogroup5: jobDetailData.proSinkProMax.machineBefore3,
      radiogroup6: jobDetailData.proSinkProMax.machineAfter3,
      radiogroup7: jobDetailData.proSinkProMax.machineBefore4,
      radiogroup8: jobDetailData.proSinkProMax.machineAfter4,
      radiogroup9: jobDetailData.proSinkProMax.machineBefore5,
      radiogroup10: jobDetailData.proSinkProMax.machineAfter5,
      radiogroup11: jobDetailData.proSinkProMax.machineBefore6,
      radiogroup12: jobDetailData.proSinkProMax.machineAfter6,
      radiogroup13: jobDetailData.proSinkProMax.machineBefore71,
      radiogroup14: jobDetailData.proSinkProMax.machineAfter71,
      radiogroup15: jobDetailData.proSinkProMax.machineBefore72,
      radiogroup16: jobDetailData.proSinkProMax.machineAfter72,
      radiogroup17: jobDetailData.proSinkProMax.machineBefore73,
      radiogroup18: jobDetailData.proSinkProMax.machineAfter73,
      radiogroup19: jobDetailData.proSinkProMax.machineBefore8,
      radiogroup20: jobDetailData.proSinkProMax.machineAfter8,
      radiogroup21: jobDetailData.proSinkProMax.machineBefore9,
      radiogroup22: jobDetailData.proSinkProMax.machineAfter9,
      image1: preImg,
      imageBefore1: preImg2,
      imageAfter1: preImg3
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      barcode: Yup.string()
        .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
        .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
      // product_lotno: Yup.string().required('กรุณากรอกข้อมูลให้ครบถ้วน'),
      serialNumber: Yup.string().required('กรุณากรอกข้อมูลให้ครบถ้วน'),

      radiogroup1: Yup.string().required(''),
      radiogroup2: Yup.string().required(''),
      radiogroup3: Yup.string().required(''),
      radiogroup4: Yup.string().required(''),
      radiogroup5: Yup.string().required(''),
      radiogroup6: Yup.string().required(''),
      radiogroup7: Yup.string().required(''),
      radiogroup8: Yup.string().required(''),
      radiogroup9: Yup.string().required(''),
      radiogroup10: Yup.string().required(''),
      radiogroup11: Yup.string().required(''),
      radiogroup12: Yup.string().required(''),
      radiogroup13: Yup.string().required(''),
      radiogroup14: Yup.string().required(''),
      radiogroup15: Yup.string().required(''),
      radiogroup16: Yup.string().required(''),
      radiogroup17: Yup.string().required(''),
      radiogroup18: Yup.string().required(''),
      radiogroup19: Yup.string().required(''),
      radiogroup20: Yup.string().required(''),
      radiogroup21: Yup.string().required(''),
      radiogroup22: Yup.string().required('')
      // image1: Yup.string().required(''),
      // imageBefore1: Yup.string().required(''),
      // imageAfter1: Yup.string().required('')
    }),

    onSubmit: values => {
      console.log(values);
      handleProductID(values.barcode);
      // handleLotNo(values.product_lotno);
      handleSerialNumber(values.serialNumber);
      if (
        values.radiogroup1 != 0 &&
        values.radiogroup2 != 0 &&
        values.radiogroup3 != 0 &&
        values.radiogroup4 != 0 &&
        values.radiogroup5 != 0 &&
        values.radiogroup6 != 0 &&
        values.radiogroup7 != 0 &&
        values.radiogroup8 != 0 &&
        values.radiogroup9 != 0 &&
        values.radiogroup10 != 0 &&
        values.radiogroup11 != 0 &&
        values.radiogroup12 != 0 &&
        values.radiogroup13 != 0 &&
        values.radiogroup14 != 0 &&
        values.radiogroup15 != 0 &&
        values.radiogroup16 != 0 &&
        values.radiogroup17 != 0 &&
        values.radiogroup18 != 0 &&
        values.radiogroup19 != 0 &&
        values.radiogroup20 != 0 &&
        values.radiogroup21 != 0 &&
        values.radiogroup22 != 0 &&
        (values.image1 != '' || jobDetailData.proSinkProMax.image != '') &&
        (values.imageBefore1 != '' ||
          jobDetailData.proSinkProMax.imageBefore1 != '') &&
        (values.imageAfter1 != '' ||
          jobDetailData.proSinkProMax.imageAfter1 != '')
      ) {
        console.log('next');

        updateImg1();

        // if (
        //   (values.image1 != '' || jobDetailData.proSinkProMax.image != '') &&
        //   (values.imageBefore1 != '' ||
        //     jobDetailData.proSinkProMax.imageBefore1 != '') &&
        //   (values.imageAfter1 != '' ||
        //     jobDetailData.proSinkProMax.imageAfter1 != '')
        // ) {
        //   handleNext();
        // }
      } else {
        console.log('error');
      }
    }
  });

  const updateImg1 = () => {
    if (jobDetailData.proSinkProMax.image == '') {
      const formData = new FormData();
      formData.append('JobId', job_ID);
      formData.append('Images', imgFile);
      postImage(formData)
        .then(res => {
          const imgresult = res.data.data;
          setImgId1(imgresult);
          console.log(imgresult + 'img1');
          setJobDetailData(prevState => ({
            ...prevState,
            proSinkProMax: {
              ...prevState.proSinkProMax,
              image: imgresult
            }
          }));
          updateImg2();
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // console.log(preImg);
      if (preImg.length > 0) {
        const formData = new FormData();
        formData.append('ImagesId', jobDetailData.proSinkProMax.image);
        formData.append('JobId', job_ID);
        formData.append('Images', imgFile);
        putImage(formData)
          .then(res => {
            const imgresult = res.data.data;
            console.log(imgresult + 'put img1');
            setImgId1(imgresult);
            setJobDetailData(prevState => ({
              ...prevState,
              proSinkProMax: {
                ...prevState.proSinkProMax,
                image: jobDetailData.proSinkProMax.image
              }
            }));
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
    if (jobDetailData.proSinkProMax.imageBefore1 == '') {
      const formData = new FormData();
      formData.append('JobId', job_ID);
      formData.append('Images', imgFile2);
      postImage(formData)
        .then(res => {
          const imgresult = res.data.data;
          setImgId2(imgresult);
          console.log(imgresult + 'img2');
          setJobDetailData(prevState => ({
            ...prevState,
            proSinkProMax: {
              ...prevState.proSinkProMax,
              imageBefore1: imgresult
            }
          }));
          updateImg3();
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // console.log(preImg2);
      if (preImg2.length > 0) {
        const formData = new FormData();
        formData.append('ImagesId', jobDetailData.proSinkProMax.imageBefore1);
        formData.append('JobId', job_ID);
        formData.append('Images', imgFile2);
        putImage(formData)
          .then(res => {
            const imgresult = res.data.data;
            console.log(imgresult + 'put img2');
            setImgId2(imgresult);
            setJobDetailData(prevState => ({
              ...prevState,
              proSinkProMax: {
                ...prevState.proSinkProMax,
                imageBefore1: jobDetailData.proSinkProMax.imageBefore1
              }
            }));
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
    if (jobDetailData.proSinkProMax.imageAfter1 == '') {
      const formData = new FormData();
      formData.append('JobId', job_ID);
      formData.append('Images', imgFile3);
      postImage(formData)
        .then(res => {
          const imgresult = res.data.data;
          setImgId3(imgresult);
          console.log(imgresult + 'img3');
          setJobDetailData(prevState => ({
            ...prevState,
            proSinkProMax: {
              ...prevState.proSinkProMax,
              imageAfter1: imgresult
            }
          }));
          handleNext();
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // console.log(preImg3);
      if (preImg3.length > 0) {
        const formData = new FormData();
        formData.append('ImagesId', jobDetailData.proSinkProMax.imageAfter1);
        formData.append('JobId', job_ID);
        formData.append('Images', imgFile3);
        putImage(formData)
          .then(res => {
            const imgresult = res.data.data;
            console.log(imgresult + 'put img3');
            setImgId3(imgresult);
            setJobDetailData(prevState => ({
              ...prevState,
              proSinkProMax: {
                ...prevState.proSinkProMax,
                imageAfter1: jobDetailData.proSinkProMax.imageAfter1
              }
            }));
            handleNext();
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log('no-up 3');
        handleNext();
      }
    }
  };

  const handleNext = () => {
    updateJob(jobDetailData).then(res => {
      // if (jobDetailData.proSinkProMax.status == 1) {
      //   setJobDetailData(prevState => ({
      //     ...prevState,

      //     proSinkProMax: {
      //       ...prevState.proSinkProMax,
      //       status: 2
      //     }
      //   }));
      // }
      setNext(!next);
    });
  };

  const handleSerialNumber = data => {
    setJobDetailData(prevState => ({
      ...prevState,
      proSinkProMax: {
        ...prevState.proSinkProMax,
        serialNo: data
      }
    }));
  };

  const handleProductID = data => {
    setJobDetailData(prevState => ({
      ...prevState,
      proSinkProMax: {
        ...prevState.proSinkProMax,
        barcode: data
      }
    }));
  };

  const handleLotNo = data => {
    setJobDetailData(prevState => ({
      ...prevState,
      proSinkProMax: {
        ...prevState.proSinkProMax,
        productLotno: data
      }
    }));
  };
  const handleDisableRadio = status => {
    if (status) {
      return <DisableRadio />;
    } else {
      return <GreenRadio />;
    }
  };
  const handleDisableText = status => {
    if (status) {
      return classes.disableText;
    }
  };
  const fecthData = () => {
    getJobSearch(job_ID)
      .then(res => {
        // console.log(res.data.result.data);
        setJobDetailData(res.data.result.data);
        setDateShow(splitDate(res.data.result.data.jobDate, 4, 2));
        handlejobDate(res.data.result.data.jobDate);
        console.log(res.data.result.data.proSinkProMax.productName);
        if (res.data.result.data.proSinkProMax.productName.length > 0) {
          getProductSearch(res.data.result.data.proSinkProMax.productName).then(
            res => {
              console.log(res);
              setProductName(res.data.result.data.productName);
            }
          );
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    fecthData();
  }, []);

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

  const handleDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const imgBefore1Change = () => {
    setJobDetailData(prevState => ({
      ...prevState,
      proSinkProMax: {
        ...prevState.proSinkProMax,
        imageBefore1: 'test'
      }
    }));
  };

  const [imageBefore1, setImageBefore1] = useState();
  const handleChangeimgBefore1 = async e => {
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

  const [imageAfter1, setImageAfter1] = useState();
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
  const getImgAfter = data => {
    getImage(data).then(res => {
      const result = res.data.data.images;
      setImageAfter1(result);
    });
    return imageAfter1;
  };

  const handleChangeMachineBefore1 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineBefore1: data
      }
    }));
  };
  const handleChangeMachineBefore2 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineBefore2: data
      }
    }));
  };
  const handleChangeMachineBefore3 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineBefore3: data
      }
    }));
  };
  const handleChangeMachineBefore4 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineBefore4: data
      }
    }));
  };
  const handleChangeMachineBefore5 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineBefore5: data
      }
    }));
  };
  const handleChangeMachineBefore6 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineBefore6: data
      }
    }));
  };
  const handleChangeMachineBefore71 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineBefore71: data
      }
    }));
  };
  const handleChangeMachineBefore72 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineBefore72: data
      }
    }));
  };
  const handleChangeMachineBefore73 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineBefore73: data
      }
    }));
  };
  const handleChangeMachineBefore8 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineBefore8: data
      }
    }));
  };
  const handleChangeMachineBefore9 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineBefore9: data
      }
    }));
  };
  const handleChangeMachineAfter1 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineAfter1: data
      }
    }));
  };

  const handleChangeMachineAfter2 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineAfter2: data
      }
    }));
  };
  const handleChangeMachineAfter3 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineAfter3: data
      }
    }));
  };
  const handleChangeMachineAfter4 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineAfter4: data
      }
    }));
  };
  const handleChangeMachineAfter5 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineAfter5: data
      }
    }));
  };
  const handleChangeMachineAfter6 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineAfter6: data
      }
    }));
  };
  const handleChangeMachineAfter71 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineAfter71: data
      }
    }));
  };
  const handleChangeMachineAfter72 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineAfter72: data
      }
    }));
  };
  const handleChangeMachineAfter73 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineAfter73: data
      }
    }));
  };
  const handleChangeMachineAfter8 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineAfter8: data
      }
    }));
  };
  const handleChangeMachineAfter9 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        machineAfter9: data
      }
    }));
  };
  const handleChangeFeedBack = event => {
    const data = event.target.value;
    setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        description: data
      }
    }));
  };
  const handleChangeProduct = event => {
    setValueProduct(event.target.value);
  };
  const handleChangeLotNo = event => {
    setValueLotNo(event.target.value);
  };

  const handleChangeimg = async e => {
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

      setImageError1(prevState => ({
        ...prevState,
        error: false,
        helperText: ''
      }));
    }
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

  const backPage = () => {
    const path = '/joblist/jobdetail/' + jobDetailData.jobId;
    history.push(path);
  };

  const searchProduct = data => {
    getProductSearch(data)
      .then(res => {
        const productNameget = res.data.result.data.productName;
        console.log(res.data.result.data.productName);
        setProductName(res.data.result.data.productName);
        setJobDetailData(prevState => ({
          ...prevState,
          proSinkProMax: {
            ...prevState.proSinkProMax,
            productName: productNameget
          }
        }));
      })
      .catch(error => {
        setProductName('');
        setJobDetailData(prevState => ({
          ...prevState,
          proSinkProMax: {
            ...prevState.proSinkProMax,
            productName: ''
          }
        }));
      });
  };
  const splitDate = (str, i1, i2) => {
    const result = [str.slice(0, i1), str.slice(i1)];
    const day = [result[1].slice(0, i2), result[1].slice(i2)];
    return day[1] + '/' + day[0] + '/' + result[0];
  };

  const type = ['OT-PROMAX', 'OT-PROSINK', 'OT-PROSINK2'];

  return (
    <div style={{ margin: 10 }}>
      {next ? (
        <FormTwo2
          dateDetail={dateDetail}
          handleNext={handleNext}
          jobDetailData={jobDetailData}
          setJobDetailData={setJobDetailData}
          dateShow={dateShow}
        />
      ) : (
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
                  ตรวจเช็ค ProSink / ProMAX
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
                <Grid item>
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
                          <Typography variant="subtitle2">
                            รหัสร้านค้า
                          </Typography>
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
                          <Typography variant="subtitle2">
                            ชื่อร้านค้า
                          </Typography>
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
                              jobDetailData.proSinkProMax.signatureCustomer
                                .length > 0 &&
                              jobDetailData.proSinkProMax.signatureEmployee
                                .length > 0
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
                          {/* <TextField
                            fullWidth
                            className={handleDisableText((jobDetailData.proSinkProMax.signatureCustomer.length>0)&&(jobDetailData.proSinkProMax.signatureEmployee.length>0))}
                          
                            id="barcode"
                            name="barcode"
                            variant="outlined"
                            value={formik.values.barcode}
                            onChange={(e) => {
                              searchProduct(e.target.value)
                              handleProductID(e.target.value);
                              formik.handleChange(e);
                            }}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end" padding="0">
                                  <img src={IconBarCode}></img>
                        
                                </InputAdornment>
                              )
                            }}
                            placeholder="กรุณากรอกข้อมูล"
                            error={
                              formik.touched.barcode &&
                              Boolean(formik.errors.barcode)
                            }
                            helperText={
                              formik.touched.barcode &&
                              formik.errors.barcode
                            }
                            color="secondary"
                            size="small"
                            disabled={(jobDetailData.proSinkProMax.signatureCustomer.length>0)&&(jobDetailData.proSinkProMax.signatureEmployee.length>0)}
                          /> */}
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
                        <Dialogbarcode
                          title={'ScanBarcode'}
                          open={openDialog}
                          onClose={handleCloseDialog}
                          handleSerialNumber={handleSerialNumber}
                        />
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
                              jobDetailData.proSinkProMax.signatureCustomer
                                .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                            )}
                            value={formik.values.serialNumber}
                            onChange={e => {
                              console.log(e.target.value);
                              handleSerialNumber(e.target.value);
                              formik.handleChange(e);
                            }}
                            placeholder="กรุณากรอกข้อมูล"
                            inputProps={{ maxLength: 20 }}
                            // InputProps={{
                            //   endAdornment: (
                            //     <InputAdornment position="end" padding="0">
                            //       <img
                            //         src={IconBarCode}
                            //         className={classes.barscan}
                            //         onClick={handleDialog}
                            //       ></img>
                            //     </InputAdornment>
                            //   )
                            // }}
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
                              jobDetailData.proSinkProMax.signatureCustomer
                                .length > 0 &&
                              jobDetailData.proSinkProMax.signatureEmployee
                                .length > 0
                            }
                          />
                        </Grid>

                        {/* < Grid item xs={12} sm={6}>
                          <Grid container>
                            <Typography variant="subtitle2">
                            Lot No.
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
                            className={handleDisableText((jobDetailData.liquidDispenser.signatureCustomer.length>0)&&(jobDetailData.liquidDispenser.signatureEmployee.length>0))}
                            id="product_lotno"
                            name="product_lotno"
                            variant="outlined"
                            value={formik.values.product_lotno}
                            onChange={(e) => {
                             console.log(e.target.value);
                             handleLotNo(e.target.value);
                              // handleProductID(e.target.value);
                              formik.handleChange(e);
                            }}
                            
                            placeholder="กรุณากรอกข้อมูล"
                            error={
                              formik.touched.product_lotno &&
                              Boolean(formik.errors.product_lotno)
                            }
                            helperText={
                              formik.touched.product_lotno &&
                              formik.errors.product_lotno
                            }
                            color="secondary"
                            size="small"
                            disabled={(jobDetailData.liquidDispenser.signatureCustomer.length>0)&&(jobDetailData.liquidDispenser.signatureEmployee.length>0)}
                          />
                        </Grid> */}
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
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
                          borderRadius="1vh"
                        />
                      ) : (
                        <>
                          {jobDetailData.proSinkProMax.image ? (
                            <img
                              src={getImgForm1(
                                jobDetailData.proSinkProMax.image
                              )}
                              alt="dummy"
                              width="300px"
                              height="188px"
                              borderRadius="1vh"
                            />
                          ) : (
                            <img
                              src="/static/images/noImg.png"
                              style={{
                                width: '300px',
                                height: '188px',
                                borderRadius: '1vh'
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
                        onChange={handleChangeimg}
                        disabled={
                          jobDetailData.proSinkProMax.signatureCustomer.length >
                            0 &&
                          jobDetailData.proSinkProMax.signatureEmployee.length >
                            0
                        }
                      />{' '}
                      <label htmlFor="contained-button-file">
                        <Button
                          className={classes.btnChoose}
                          variant="contained"
                          component="span"
                          startIcon={<IconUpload style={{ width: '1.5vh' }} />}
                          disabled={
                            jobDetailData.proSinkProMax.signatureCustomer
                              .length > 0 &&
                            jobDetailData.proSinkProMax.signatureEmployee
                              .length > 0
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
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
                          {jobDetailData.proSinkProMax.machineBefore1 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore1 == 2 ? (
                            <FormControlLabel
                              value={parseInt(2)}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore1 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore1 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
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
                          {jobDetailData.proSinkProMax.machineAfter1 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter1 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter1 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter1 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
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
                          {jobDetailData.proSinkProMax.machineBefore2 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore2 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore2 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore2 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                borderRadius="1vh"
                              />
                            ) : (
                              <>
                                {jobDetailData.proSinkProMax.imageBefore1 ? (
                                  <img
                                    src={getImgForm2(
                                      jobDetailData.proSinkProMax.imageBefore1
                                    )}
                                    alt="dummy"
                                    width="300px"
                                    height="188px"
                                    borderRadius="1vh"
                                  />
                                ) : (
                                  <img
                                    src="/static/images/noImg.png"
                                    style={{
                                      width: '300px',
                                      height: '188px',
                                      borderRadius: '1vh'
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                  jobDetailData.proSinkProMax.signatureCustomer
                                    .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
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
                          {jobDetailData.proSinkProMax.machineAfter2 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter2 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter2 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter2 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                borderRadius="1vh"
                              />
                            ) : (
                              <>
                                {jobDetailData.proSinkProMax.imageAfter1 ? (
                                  <img
                                    src={getImgForm3(
                                      jobDetailData.proSinkProMax.imageAfter1
                                    )}
                                    alt="dummy"
                                    width="300px"
                                    height="188px"
                                    borderRadius="1vh"
                                  />
                                ) : (
                                  <img
                                    src="/static/images/noImg.png"
                                    style={{
                                      width: '300px',
                                      height: '188px',
                                      borderRadius: '1vh'
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                  jobDetailData.proSinkProMax.signatureCustomer
                                    .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
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
                          {jobDetailData.proSinkProMax.machineBefore3 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore3 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore3 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore3 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
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
                          {jobDetailData.proSinkProMax.machineAfter3 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter3 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter3 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter3 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
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
                          {jobDetailData.proSinkProMax.machineBefore4 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore4 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore4 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore4 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
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
                          {jobDetailData.proSinkProMax.machineAfter4 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter4 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter4 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter4 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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

                  <Box mt={2} />
                  <Divider />
                  <Box mt={2} />
                  {/* -----end----------- */}
                  {/* ---start------------ */}
                  <Typography variant="h3">2.5. การเปิด-ปิด วาล์ว</Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box mt={2} />
                      <Grid container>
                        <Typography variant="h5" style={{ fontWeight: '1000' }}>
                          ก่อนการตรวจเช็ค
                        </Typography>
                        <Box ml={1} />
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config before------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError9.error}
                      >
                        <RadioGroup
                          aria-label="machineBefore5"
                          name="machineBefore5"
                          value={formik.values.radiogroup9}
                          onChange={e => {
                            handleRadioChange9(e);
                            handleChangeMachineBefore5(e);
                            formik.setFieldValue('radiogroup9', e.target.value);
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineBefore5 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore5 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore5 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore5 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError9.helperText}
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config after------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError10.error}
                      >
                        <RadioGroup
                          aria-label="machineAfter5"
                          name="machineAfter5"
                          value={formik.values.radiogroup10}
                          onChange={e => {
                            handleRadioChange10(e);
                            handleChangeMachineAfter5(e);
                            formik.setFieldValue(
                              'radiogroup10',
                              e.target.value
                            );
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineAfter5 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter5 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter5 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter5 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError10.helperText}
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
                    2.6. Mertering Tip อยู่ตำแหน่งเดิม
                  </Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box mt={2} />
                      <Grid container>
                        <Typography variant="h5" style={{ fontWeight: '1000' }}>
                          ก่อนการตรวจเช็ค
                        </Typography>
                        <Box ml={1} />
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config before------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError11.error}
                      >
                        <RadioGroup
                          aria-label="machineBefore6"
                          name="machineBefore6"
                          value={formik.values.radiogroup11}
                          onChange={e => {
                            handleRadioChange11(e);
                            handleChangeMachineBefore6(e);
                            formik.setFieldValue(
                              'radiogroup11',
                              e.target.value
                            );
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineBefore6 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore6 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore6 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore6 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError11.helperText}
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config after------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError12.error}
                      >
                        <RadioGroup
                          aria-label="machineAfter6"
                          name="machineAfter6"
                          value={formik.values.radiogroup12}
                          onChange={e => {
                            handleRadioChange12(e);
                            handleChangeMachineAfter6(e);
                            formik.setFieldValue(
                              'radiogroup12',
                              e.target.value
                            );
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineAfter6 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter6 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter6 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter6 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError12.helperText}
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
                  <Typography variant="h3">2.7. สายยาง</Typography>
                  <Box mt={2} />
                  <Typography variant="h4" style={{ fontWeight: '500' }}>
                    2.7.1. สายยางดูดน้ำยา
                  </Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box mt={2} />
                      <Grid container>
                        <Typography variant="h5" style={{ fontWeight: '1000' }}>
                          ก่อนการตรวจเช็ค
                        </Typography>
                        <Box ml={1} />
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config before------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError13.error}
                      >
                        <RadioGroup
                          aria-label="machineBefore71"
                          name="machineBefore71"
                          value={formik.values.radiogroup13}
                          onChange={e => {
                            handleRadioChange13(e);
                            handleChangeMachineBefore71(e);
                            formik.setFieldValue(
                              'radiogroup13',
                              e.target.value
                            );
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineBefore71 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore71 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore71 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore71 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError13.helperText}
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config after------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError14.error}
                      >
                        <RadioGroup
                          aria-label="machineAfter71"
                          name="machineAfter71"
                          value={formik.values.radiogroup14}
                          onChange={e => {
                            handleRadioChange14(e);
                            handleChangeMachineAfter71(e);
                            formik.setFieldValue(
                              'radiogroup14',
                              e.target.value
                            );
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineAfter71 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter71 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter71 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter71 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError14.helperText}
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

                  <Box mt={2} />
                  <Typography variant="h4" style={{ fontWeight: '500' }}>
                    2.7.2. สายยางน้ำประปา
                  </Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box mt={2} />
                      <Grid container>
                        <Typography variant="h5" style={{ fontWeight: '1000' }}>
                          ก่อนการตรวจเช็ค
                        </Typography>
                        <Box ml={1} />
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config before------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError15.error}
                      >
                        <RadioGroup
                          aria-label="machineBefore72"
                          name="machineBefore72"
                          value={formik.values.radiogroup15}
                          onChange={e => {
                            handleRadioChange15(e);
                            handleChangeMachineBefore72(e);
                            formik.setFieldValue(
                              'radiogroup15',
                              e.target.value
                            );
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineBefore72 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore72 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore72 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore72 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError15.helperText}
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config after------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError16.error}
                      >
                        <RadioGroup
                          aria-label="machineAfter72"
                          name="machineAfter72"
                          value={formik.values.radiogroup16}
                          onChange={e => {
                            handleRadioChange16(e);
                            handleChangeMachineAfter72(e);
                            formik.setFieldValue(
                              'radiogroup16',
                              e.target.value
                            );
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineAfter72 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter72 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter72 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter72 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError16.helperText}
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

                  <Box mt={2} />
                  <Typography variant="h4" style={{ fontWeight: '500' }}>
                    2.7.3. สายยางปล่อยน้ำยาที่ผสมแล้ว
                  </Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box mt={2} />
                      <Grid container>
                        <Typography variant="h5" style={{ fontWeight: '1000' }}>
                          ก่อนการตรวจเช็ค
                        </Typography>
                        <Box ml={1} />
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config before------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError17.error}
                      >
                        <RadioGroup
                          aria-label="machineBefore73"
                          name="machineBefore73"
                          value={formik.values.radiogroup17}
                          onChange={e => {
                            handleRadioChange17(e);
                            handleChangeMachineBefore73(e);
                            formik.setFieldValue(
                              'radiogroup17',
                              e.target.value
                            );
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineBefore73 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore73 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore73 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore73 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError17.helperText}
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config after------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError18.error}
                      >
                        <RadioGroup
                          aria-label="machineAfter73"
                          name="machineAfter73"
                          value={formik.values.radiogroup18}
                          onChange={e => {
                            handleRadioChange18(e);
                            handleChangeMachineAfter73(e);
                            formik.setFieldValue(
                              'radiogroup18',
                              e.target.value
                            );
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineAfter73 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter73 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter73 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter73 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError18.helperText}
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
                    2.8. ตรวจเช็คการรั่วซึมตามแนวข้อต่อต่างๆ
                  </Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box mt={2} />
                      <Grid container>
                        <Typography variant="h5" style={{ fontWeight: '1000' }}>
                          ก่อนการตรวจเช็ค
                        </Typography>
                        <Box ml={1} />
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config before------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError19.error}
                      >
                        <RadioGroup
                          aria-label="machineBefore8"
                          name="machineBefore8"
                          value={formik.values.radiogroup19}
                          onChange={e => {
                            handleRadioChange19(e);
                            handleChangeMachineBefore8(e);
                            formik.setFieldValue(
                              'radiogroup19',
                              e.target.value
                            );
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineBefore8 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore8 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore8 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore8 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError19.helperText}
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config after------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError20.error}
                      >
                        <RadioGroup
                          aria-label="machineAfter8"
                          name="machineAfter8"
                          value={formik.values.radiogroup20}
                          onChange={e => {
                            handleRadioChange20(e);
                            handleChangeMachineAfter8(e);
                            formik.setFieldValue(
                              'radiogroup20',
                              e.target.value
                            );
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineAfter8 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter8 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter8 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter8 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError20.helperText}
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
                    2.9. ตรวจชุดถ่วงน้ำหนัก (เซรามิคถ่วงน้ำหนัก/กรองดักตะกอน)
                  </Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box mt={2} />
                      <Grid container>
                        <Typography variant="h5" style={{ fontWeight: '1000' }}>
                          ก่อนการตรวจเช็ค
                        </Typography>
                        <Box ml={1} />
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config before------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError21.error}
                      >
                        <RadioGroup
                          aria-label="machineBefore9"
                          name="machineBefore9"
                          value={formik.values.radiogroup21}
                          onChange={e => {
                            handleRadioChange21(e);
                            handleChangeMachineBefore9(e);
                            formik.setFieldValue(
                              'radiogroup21',
                              e.target.value
                            );
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineBefore9 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore9 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore9 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineBefore9 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError21.helperText}
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
                        <Typography style={{ color: '#D44848' }}>
                          {' '}
                          *{' '}
                        </Typography>
                      </Grid>
                      {/* ----------------start radio config after------------------------------ */}
                      <FormControl
                        component="fieldset"
                        error={radioGroupError22.error}
                      >
                        <RadioGroup
                          aria-label="machineAfter9"
                          name="machineAfter9"
                          value={formik.values.radiogroup22}
                          onChange={e => {
                            handleRadioChange22(e);
                            handleChangeMachineAfter9(e);
                            formik.setFieldValue(
                              'radiogroup22',
                              e.target.value
                            );
                          }}
                        >
                          {jobDetailData.proSinkProMax.machineAfter9 == 1 ? (
                            <FormControlLabel
                              value={1}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดีมาก 100%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter9 == 2 ? (
                            <FormControlLabel
                              value={2}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ดี 80%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter9 == 3 ? (
                            <FormControlLabel
                              value={3}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="พอใช้ 60%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}

                          {jobDetailData.proSinkProMax.machineAfter9 == 4 ? (
                            <FormControlLabel
                              value={4}
                              control={handleDisableRadio(
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
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
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.proSinkProMax.signatureEmployee
                                    .length > 0
                              )}
                              label="ควรปรับปรุง <40%"
                              disabled={
                                jobDetailData.proSinkProMax.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.proSinkProMax.signatureEmployee
                                  .length > 0
                              }
                              classes={{
                                label: classes.label
                              }}
                            />
                          )}
                        </RadioGroup>
                        <FormHelperText>
                          {radioGroupError22.helperText}
                        </FormHelperText>
                      </FormControl>
                      {/* ----------------end radio config after------------------------------ */}
                    </Grid>
                  </Grid>

                  {/* -----end----------- */}
                  <Typography variant="h4">ข้อเสนอแนะ</Typography>
                  <Box mt={2} />

                  <TextField
                    fullWidth
                    id="customerID"
                    name="customerID"
                    variant="outlined"
                    multiline
                    rows={3}
                    value={jobDetailData.proSinkProMax.description}
                    onChange={handleChangeFeedBack}
                    placeholder="กรุณากรอกข้อมูล"
                    color="secondary"
                    size="small"
                    disabled={
                      jobDetailData.proSinkProMax.signatureCustomer.length >
                        0 &&
                      jobDetailData.proSinkProMax.signatureEmployee.length > 0
                    }
                    className={handleDisableText(
                      jobDetailData.proSinkProMax.signatureCustomer.length >
                        0 &&
                        jobDetailData.proSinkProMax.signatureEmployee.length > 0
                    )}
                  />
                </CardContent>
              </Card>
              <Box mt={2} />

              <Grid container justifyContent="center" xs={12} sm={12} md={12}>
                <Grid xs={5} sm={5} md={3} style={{ textAlign: 'end' }}>
                  <ButtonSecondary
                    label="ยกเลิก"
                    fullWidth
                    size="small"
                    onClick={backPage}
                  />
                </Grid>

                <Box ml={2} />
                <Grid xs={5} sm={5} md={3} style={{ textAlign: 'start' }}>
                  <ButtonPramarys
                    label="ถัดไป"
                    type="submit"
                    fullWidth
                    size="small"
                    onClick={handleSubmitRadio}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </form>
      )}

      <Box mt={10} />
    </div>
  );
}

export default FormTwo;
