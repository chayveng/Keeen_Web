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
  Avatar,
  InputAdornment,
  FormHelperText
} from '@material-ui/core';
import ButtonPramarys from 'src/components/keen/Buttonprimary';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import Signature from 'src/components/keen/Signature ';
import IconAutograph from 'src/components/keen/icon/autograph';
import IconUpload from 'src/components/keen/icon/iconUpload';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { updateJob, getJobSearch } from '../../api/keeen/job';
import { postImage, getImage, putImage,deleteImage } from '../../api/keeen/uploadimg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getProductSearch } from '../../api/keeen/product';
import DialogBarcode from 'src/components/keen/DialogBarcode';
import IconBarCode from '../icon_barcode.svg';
import axios from "axios";
import configApi from "../../../../configApi.json";
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
  },
  root: {},
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
    backgroundColor: '#fff',
    color: '#0F8E54',
    fontWeight: '500',
    fontSize: '10px',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    border: 'solid 1px #0F8E54',
    '&:hover': {
      color: '#0F8E54',
      backgroundColor: '#EBEBEB'
    }
  },
  textSig: {
    fontWeight: '500',
    fontSize: '12px'
  },

  cardPad: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

    borderRadius: 0
  },

  imgSig: {
    width: '100%',
    height: 'auto'
  },
  label: {
    fontSize: '0.75rem'
  },
  disableText: {
    backgroundColor: '#E9E9E9',
    borderColor: '#687178'
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
  btnDis: {
    borderRadius: '10px',
    fontSize: '10px',
    color: '#263238',
    backgroundColor: '#0000001f',
    border: 'solid 1px #0F8E54'
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
function FormTwo2(props) {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState();
  const [valueLotNo, setValueLotNo] = useState();
  const [confirm, setConfirm] = useState(false);
  const [openSignature1, setOpenSignature1] = useState(false);
  const [openSignature2, setOpenSignature2] = useState(false);
  const [base64imgShop, setBase64imgShop] = useState('');
  const [base64imgUser, setBase64imgUser] = useState('');
  const [uploadImg1, setUploadImg1] = useState(false);
  const [productName, setProductName] = useState('');
 const [imgIdEditEmp,setImgIdEditEmp] = useState('')
 const [imgIdEditCus,setImgIdEditCus] = useState('')
  const [imageFirst, setImageFirst] = useState();
  const [imgFile, setImgFile] = useState();
  const [imgNumber, setImgNumber] = useState();
  const [preImg, setPreImg] = useState('');
  const [save, setSave] = useState(false);
  const [imgDB, setImgDB] = useState('');

  const [sig1, setSig1] = useState('');
  const [sig2, setSig2] = useState('');
  let reader = new FileReader();
  const [preImgCustomerSig, setPreImgCustomerSig] = useState('');
  const [preImgEmployeeSig, setPreImgEmployeeSig] = useState('');
  const [imgEmpoyee, setImgEmployee] = useState();
  const [imgCustomer, setImgCustomer] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const params = useParams();
  const job_ID = params.jobID;
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
  const showData = () => {
    console.log(props.jobDetailData);
    // console.log(base64imgShop);
  };

  const handleUploadImg1 = () => {
    setUploadImg1(!uploadImg1);
  };
  const handleBase64imgShop = value => {
    setBase64imgShop(value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,

        signatureCustomer: value
      }
    }));
  };
  const handleBase64imgUser = value => {
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,

        signatureEmployee: value
      }
    }));
  };
  const handleClickOpen1 = () => {
    setOpenSignature1(true);
  };
  const handleClickOpen2 = () => {
    setOpenSignature2(true);
  };
useEffect(()=>{
console.log(props.jobDetailData.proSinkProMax);
},[props.jobDetailData.proSinkProMax.signatureEmployee])
  useEffect(() => {
    getJobSearch(job_ID)
      .then(res => {
        // console.log(res.data.result.data.proSinkProMax);
        setImgDB(res.data.result.data.proSinkProMax.image2);
        setSig1(res.data.result.data.proSinkProMax.signatureCustomer);
        setSig2(res.data.result.data.proSinkProMax.signatureEmployee);

        if (res.data.result.data.proSinkProMax.signatureEmployee) {
          getImage(res.data.result.data.proSinkProMax.signatureEmployee)
            .then(res => {
              const result = res.data.data.images;
              setImgEmployee(result);
              // setPreImgEmployeeSig(result)
            })
            .catch(err => {
              console.log(err);
            });
        }
        if (res.data.result.data.proSinkProMax.signatureCustomer) {
          getImage(res.data.result.data.proSinkProMax.signatureCustomer)
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
  }, []);
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
  const [imgError, setImgError] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  // const [sigError1,setSigError1] = useState({value:'',error:'',helperText:''})
  // const [sigError2,setSigError2] = useState({value:'',error:'',helperText:''})
  const handleRadioChange23 = event => {
    // console.log(event.target.value);
    setRadioGroupError23(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange24 = event => {
    // console.log(event.target.value);
    setRadioGroupError24(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange25 = event => {
    // console.log(event.target.value);
    setRadioGroupError25(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange26 = event => {
    // console.log(event.target.value);
    setRadioGroupError26(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange27 = event => {
    // console.log(event.target.value);
    setRadioGroupError27(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange28 = event => {
    // console.log(event.target.value);
    setRadioGroupError28(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange29 = event => {
    // console.log(event.target.value);
    setRadioGroupError29(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange30 = event => {
    // console.log(event.target.value);
    setRadioGroupError30(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange31 = event => {
    // console.log(event.target.value);
    setRadioGroupError31(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange32 = event => {
    // console.log(event.target.value);
    setRadioGroupError32(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange33 = event => {
    // console.log(event.target.value);
    setRadioGroupError33(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange34 = event => {
    // console.log(event.target.value);
    setRadioGroupError34(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };

  const handleSubmitRadio = event => {
    //----------------sigError1formik--------------------------
    //  if (formik.values.sigError1formik!="") {
    //   setSigError1(prevState=>({
    //     ...prevState,
    //     error: false,
    //     helperText:''
    //   }))

    // } else {

    //   setSigError1(prevState=>({
    //     ...prevState,
    //     error: true,
    //     helperText:"กรุณาเซ็นต์ชื่อ"
    //   }))
    // }
    //-----------------end---------------
    //----------------sigError2formik--------------------------
    //  if (formik.values.sigError2formik!="") {
    //   setSigError2(prevState=>({
    //     ...prevState,
    //     error: false,
    //     helperText:''
    //   }))

    // } else {

    //   setSigError2(prevState=>({
    //     ...prevState,
    //     error: true,
    //     helperText:"กรุณาเซ็นต์ชื่อ"
    //   }))
    // }
    //-----------------end---------------
    if (
      (formik.values.imageProduct != '' &&
      props.jobDetailData.proSinkProMax.product1 == 1) ||
      (formik.values.imageProduct == '' &&
        props.jobDetailData.proSinkProMax.product1 == 1) ||
      (formik.values.imageProduct != '' &&
        props.jobDetailData.proSinkProMax.product1 == 2) ||
      (formik.values.imageProduct == '' &&
        props.jobDetailData.proSinkProMax.image2 != '')
    ) {
      setImgError(prevState => ({
        ...prevState,
        error: false,
        helperText: ''
      }));
    } else {
      setImgError(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //----------------23--------------------------
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
    //----------------24--------------------------
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
    //----------------25--------------------------
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
    //----------------26--------------------------
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
    //----------------27--------------------------
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
    //----------------28--------------------------
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
    //----------------29--------------------------
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
    //----------------30--------------------------
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
    //----------------31--------------------------
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
    //----------------32--------------------------
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
    //----------------33--------------------------
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
    //----------------34--------------------------
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
    // const host_url = configApi.API_SERVER;
    // console.log("**********> START <*********");
    // if((sig1.length > 0 && sig2.length > 0) || (imgIdEditCus != "" && sig2.length > 0) || (imgIdEditEmp != "" && sig1.length > 0)
    // ){
    //   console.log("Send Email liquidDispenser");
    //   // axios.get(host_url + "/api/v1/PDFs/hydromaster/"+ job_ID+ "/send");
    // }
    // console.log("sig1: "+sig1);
    // console.log("sig1: "+sig2);
    // console.log("imgIdEdiCus: "+imgIdEditCus);
    // console.log("imgIdEdiEmp: "+imgIdEditEmp)

    // const host_url = "https://localhost:7029";
    // axios.get(host_url + "/Hello");
    // axios.get(host_url + "/api/v1/Todo/todo/Dbcooper From Keeenservice FormTwo2");
    // axios.get(host_url + "/api/v1/Todo/todo/" + job_ID);
  };
  const formik = useFormik({
    initialValues: {
      barcode2: props.jobDetailData.proSinkProMax.barcode2,
      productKeeenName: props.jobDetailData.proSinkProMax.productKeeenName,
      product_lotno: props.jobDetailData.proSinkProMax.productKeeenLotNo,

      radiogroup23: props.jobDetailData.proSinkProMax.product1,
      radiogroup24: props.jobDetailData.proSinkProMax.product2,
      radiogroup25: props.jobDetailData.proSinkProMax.product3,
      radiogroup26: props.jobDetailData.proSinkProMax.product4,
      radiogroup27: props.jobDetailData.proSinkProMax.technicalBefore1,
      radiogroup28: props.jobDetailData.proSinkProMax.technicalBefore21,
      radiogroup29: props.jobDetailData.proSinkProMax.technicalAfter21,
      radiogroup30: props.jobDetailData.proSinkProMax.technicalBefore22,
      radiogroup31: props.jobDetailData.proSinkProMax.technicalAfter22,
      radiogroup32: props.jobDetailData.proSinkProMax.technicalBefore31,
      radiogroup33: props.jobDetailData.proSinkProMax.technicalBefore32,
      radiogroup34: props.jobDetailData.proSinkProMax.technicalBefore33,
      imageProduct: preImg
      // sigError1formik: props.jobDetailData.proSinkProMax.signatureCustomer,
      // sigError2formik: props.jobDetailData.proSinkProMax.signatureEmployee,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      barcode2: Yup.string().required('กรุณากรอกข้อมูลให้ครบถ้วน'),
      product_lotno: Yup.string().required('กรุณากรอกข้อมูลให้ครบถ้วน'),

      radiogroup23: Yup.string().required(''),
      radiogroup24: Yup.string().required(''),
      radiogroup25: Yup.string().required(''),
      radiogroup26: Yup.string().required(''),
      radiogroup27: Yup.string().required(''),
      radiogroup28: Yup.string().required(''),
      radiogroup29: Yup.string().required(''),
      radiogroup30: Yup.string().required(''),
      radiogroup31: Yup.string().required(''),
      radiogroup32: Yup.string().required(''),
      radiogroup33: Yup.string().required(''),
      radiogroup34: Yup.string().required(''),
      imageProduct: Yup.string().required('')
      // sigError1formik: Yup.string().required(''),
      // sigError2formik: Yup.string().required(''),
    }),

    onSubmit: values => {
      handleBarcode(values.barcode2);
      console.log(values);
      if (
        (values.radiogroup23 != 0 &&
          values.radiogroup24 != 0 &&
          values.radiogroup25 != 0 &&
          values.radiogroup26 != 0 &&
          values.radiogroup27 != 0 &&
          values.radiogroup28 != 0 &&
          values.radiogroup29 != 0 &&
          values.radiogroup30 != 0 &&
          values.radiogroup31 != 0 &&
          values.radiogroup32 != 0 &&
          values.radiogroup33 != 0 &&
          values.radiogroup34 != 0 &&
         

        (  
          (values.imageProduct != '' && props.jobDetailData.proSinkProMax.product1 == 1) ||
          (values.imageProduct == '' && props.jobDetailData.proSinkProMax.product1 == 1) || 
          (values.imageProduct != '' && props.jobDetailData.proSinkProMax.product1 == 2) ||
          (values.imageProduct == '' && props.jobDetailData.proSinkProMax.image2 != '')
        ))
// (formik.values.imageProduct != '' &&
//       props.jobDetailData.proSinkProMax.product1 == 1) ||
//       (formik.values.imageProduct == '' &&
//         props.jobDetailData.proSinkProMax.product1 == 1) ||
//       (formik.values.imageProduct != '' &&
//         props.jobDetailData.proSinkProMax.product1 == 2) ||
//       (formik.values.imageProduct == '' &&
//         props.jobDetailData.proSinkProMax.image2 != '')
      ) {
        console.log('next');

        if (props.jobDetailData.proSinkProMax.product1 == 1) {
          console.log(
            'delete when have img ' + props.jobDetailData.proSinkProMax.image2
          );
          console.log(props.jobDetailData.proSinkProMax.product1);
          props.setJobDetailData(prevState => ({
            ...prevState,
            proSinkProMax: {
              ...prevState.proSinkProMax,
              image2: ''
            }
          }));
          handleStatus()
          setSave(true);
          if(props.jobDetailData.proSinkProMax.image2){

            deleteImage(props.jobDetailData.proSinkProMax.image2)
              .then(res => {
                console.log('delete');
                handleStatus()
                setSave(true);
              })
              .catch(err => {
                console.log(err);
              });
          }else{
            handleStatus()
            setSave(true);
          }
        } else {
          if (props.jobDetailData.proSinkProMax.image2 == ''&& props.jobDetailData.proSinkProMax.product1==2) {
            const formData = new FormData();
            formData.append('JobId', job_ID);
            formData.append('Images', imgFile);
            postImage(formData)
              .then(res => {
                const imgresult = res.data.data;
                setImgNumber(imgresult);
                // console.log(imgresult);
                props.setJobDetailData(prevState => ({
                  ...prevState,
                  proSinkProMax: {
                    ...prevState.proSinkProMax,
                    image2: imgresult
                  }
                }));
                handleStatus()
                setSave(true);
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            if (preImg.length > 0) {
              const formData = new FormData();
              formData.append(
                'ImagesId',
                props.jobDetailData.proSinkProMax.image2
              );
              formData.append('JobId', job_ID);
              formData.append('Images', imgFile);
              putImage(formData)
                .then(res => {
                  const imgresult = res.data.data;
                  setImgNumber(imgresult);
                  props.setJobDetailData(prevState => ({
                    ...prevState,
                    proSinkProMax: {
                      ...prevState.proSinkProMax,
                      image2: props.jobDetailData.proSinkProMax.image2
                    }
                  }));
                  handleStatus()
                  setSave(true);
                })
                .catch(error => {
                  console.log(error);
                });
            } else {
              if((preImg.length=='')){
                handleStatus()
                setSave(true);
              }else{
                handleSave();
              }
             
              
            }
          }
        }
       
      } else {
        console.log('error');
      }
    }
  });
  const handleDisableText = status => {
    if (status) {
      return classes.disableText;
    }
  };
  const handleBarcode = data => {
    const result = data;
    searchProduct(result);
    props.setJobDetailData(prevState => ({
      ...prevState,
      proSinkProMax: {
        ...prevState.proSinkProMax,
        barcode2: data
      }
    }));
  };

  const handleLotNo = data => {
    props.setJobDetailData(prevState => ({
      ...prevState,
      proSinkProMax: {
        ...prevState.proSinkProMax,
        productKeeenLotNo: data
      }
    }));
  };
  useEffect(() => {
    if (props.jobDetailData.proSinkProMax.product1 == 1) {
      if (save) {
        updateJob(props.jobDetailData).then(res => {
          const path = '/joblist/jobdetail/' + props.jobDetailData.jobId;
          history.push(path);
        });
      }
    }else{
      if (imgDB == '') {
        //เลือกรูป ?
        if (imgNumber) {
          if (save) {
            // console.log('post img');
            // console.log('update ' + props.jobDetailData.liquidDispenser.image1);
            updateJob(props.jobDetailData).then(res => {
              const path = '/joblist/jobdetail/' + props.jobDetailData.jobId;
              history.push(path);
            });
          }
        } else {
          console.log('ยังไมเลือก');
        }
        // console.log("post "+userList.name);
      } else if (props.jobDetailData.proSinkProMax.product1 == 2){
        if (imgNumber) {
          if (save) {
            // console.log('put img');
            // console.log('update ' + props.jobDetailData.liquidDispenser.image1);
            updateJob(props.jobDetailData).then(res => {
              const path = '/joblist/jobdetail/' + props.jobDetailData.jobId;
              history.push(path);
            });
          }
        } else {
          console.log('ยังไมเลือก');
          if (save) {
           
            updateJob(props.jobDetailData).then(res => {
              const path = '/joblist/jobdetail/' + props.jobDetailData.jobId;
              history.push(path);
            });
          }
        }
      }
    }

    
  }, [props.jobDetailData.proSinkProMax.image2, save]);

  useEffect(() => {
    updateJob(props.jobDetailData).then(res => {
      console.log(res.data);
    });

    if (props.jobDetailData.proSinkProMax.productKeeenName.length > 0) {
      getProductSearch(props.jobDetailData.proSinkProMax.productKeeenName).then(
        res => {
          console.log(res);
          setProductName(res.data.result.data.productName);
        }
      );
    }
  }, []);
  const searchProduct = data => {
    getProductSearch(data)
      .then(res => {
        const productNameget = res.data.result.data.productName;
        console.log(res.data.result.data.productName);
        setProductName(res.data.result.data.productName);
        props.setJobDetailData(prevState => ({
          ...prevState,
          proSinkProMax: {
            ...prevState.proSinkProMax,
            productKeeenName: productNameget
          }
        }));
      })
      .catch(error => {
        setProductName('');
        props.setJobDetailData(prevState => ({
          ...prevState,
          proSinkProMax: {
            ...prevState.proSinkProMax,
            productKeeenName: ''
          }
        }));
      });
  };
  const handleBack = () => {
    // if (props.jobDetailData.proSinkProMax == 2) {
    //   props.setJobDetailData(prevState => ({
    //     ...prevState,

    //     proSinkProMax: {
    //       ...prevState.proSinkProMax,
    //       status: 1
    //     }
    //   }));
    // }
    window.location.reload();
  };

  const handleStatus = () => {


    if(props.jobDetailData.proSinkProMax.signatureCustomer&& 
      props.jobDetailData.proSinkProMax.signatureEmployee){
        props.setJobDetailData(prevState => ({
          ...prevState,
    
          proSinkProMax: {
            ...prevState.proSinkProMax,
            status: 2
          }
        }));
        if (
          ((props.jobDetailData.liquidDispenser.signatureCustomer !== '' &&
            props.jobDetailData.liquidDispenser.signatureEmployee !== '') ||
          props.jobDetailData.liquidDispenser.status == 0) &&
          ((props.jobDetailData.hydroMaster.signatureCustomer !== '' &&
            props.jobDetailData.hydroMaster.signatureEmployee !== '') ||
            props.jobDetailData.hydroMaster.status == 0)
        ) {
          props.setJobDetailData(prevState => ({
            ...prevState,
            status: 2
          }));
        }else{
          props.setJobDetailData(prevState => ({
            ...prevState,
            status: 3
           
          }));
        }
    }else {
      props.setJobDetailData(prevState => ({
        ...prevState,
        status: 3,
        proSinkProMax: {
          ...prevState.proSinkProMax,
          status: 3
        }
      }));
    }
    
  };

  const handleSave = () => {
    //console.log(props.jobDetailData);

    updateJob(props.jobDetailData).then(res => {
      const path = '/joblist/jobdetail/' + props.jobDetailData.jobId;
      history.push(path);
    });
  };
  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleChangeLotNo = event => {
    setValueLotNo(event.target.value);
  };

  const handleProduct1 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        product1: data
      }
    }));
  };
  const handleProduct2 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        product2: data
      }
    }));
  };
  const handleProduct3 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        product3: data
      }
    }));
  };
  const handleProduct4 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        product4: data
      }
    }));
  };

  const handleChangeimg = async e => {
    const length = e.target.files.length;
    const imageFile = e.target.files[0];
    const imageFilname = e.target.files[0].name;
    //console.log(length);
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
      props.setJobDetailData(prevState => ({
        ...prevState
      }));
      setImgError(prevState => ({
        ...prevState,
        error: false,
        helperText: ''
      }));
    }
  };

  const getImgForm = data => {
    getImage(data).then(res => {
      const result = res.data.data.images;
      setImageFirst(result);
    });
    return imageFirst;
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
  const handleChangeFeedBack2 = event => {
    const data = event.target.value;
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        description2: data
      }
    }));
  };
  const handleChangeTechnicalBefore1 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        technicalBefore1: data
      }
    }));
  };
  const handleChangeTechnicalBefore21 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        technicalBefore21: data
      }
    }));
  };
  const handleChangeTechnicalBefore22 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        technicalBefore22: data
      }
    }));
  };
  const handleChangeTechnicalBefore31 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        technicalBefore31: data
      }
    }));
  };
  const handleChangeTechnicalBefore32 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        technicalBefore32: data
      }
    }));
  };
  const handleChangeTechnicalBefore33 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        technicalBefore33: data
      }
    }));
  };

  const handleChangeTechnicalAfter21 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        technicalAfter21: data
      }
    }));
  };
  const handleChangeTechnicalAfter22 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proSinkProMax: {
        ...prevState.proSinkProMax,
        technicalAfter22: data
      }
    }));
  };
  const splitDate = (str, i1, i2) => {
    const result = [str.slice(0, i1), str.slice(i1)];
    const day = [result[1].slice(0, i2), result[1].slice(i2)];
    return day[1] + '/' + day[0] + '/' + result[0];
  };

  const handleDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
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
              ตรวจเช็ค ProSink / ProMax
              </Typography>
              <Box mt={2} />
              <Typography variant="body2" className={classes.title}>
                เลขที่ใบงาน {props.jobDetailData.jobId}
              </Typography>
              <Box mt={2} />
              <Typography variant="body2" className={classes.title}>
                วันที่นัดหมาย {props.dateShow}
              </Typography>
            </Card>
            <Box mt={2} />

            <Card className={classes.root} style={{ marginBottom: '15px' }}>
              <CardContent>
                <Grid container>
                  <Typography variant="h3" style={{ fontWeight: '1000' }}>
                    3. ผลิตภัณฑ์ Keeen / Dr. Keeen
                  </Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mt={2} />

                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <Grid container>
                      <Typography variant="subtitle2">
                        Barcode (สินค้า)
                      </Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    <Box mb={1} />
                    <TextField
                      fullWidth
                      className={handleDisableText(
                        sig1.length > 0 && sig2.length > 0
                      )}
                      id="barcode2"
                      name="barcode2"
                      variant="outlined"
                      value={formik.values.barcode2}
                      // onChange={formik.handleChange}
                      onChange={e => {
                        handleBarcode(e.target.value);
                        formik.handleChange(e);
                      }}
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
                      placeholder="กรุณากรอกข้อมูล"
                      error={
                        formik.touched.barcode2 &&
                        Boolean(formik.errors.barcode2)
                      }
                      helperText={
                        formik.touched.barcode2 && formik.errors.barcode2
                      }
                      color="secondary"
                      size="small"
                      disabled={sig1.length > 0 && sig2.length > 0}
                    />
                  </Grid>
                  <DialogBarcode
                    title={'ScanBarcode'}
                    open={openDialog}
                    onClose={handleCloseDialog}
                    handleSerialNumber={handleBarcode}
                  />
                  <Grid item xs={12} sm={6}>
                    <Grid container>
                      <Typography variant="subtitle2">ชื่อสินค้า</Typography>
                    </Grid>
                    <Box mb={1} />
                    {formik.values.productKeeenName.length > 1 ? (
                      <TextField
                        className={classes.disableText}
                        fullWidth
                        id="productKeeenName"
                        name="productKeeenName"
                        variant="outlined"
                        placeholder={formik.values.productKeeenName}
                        color="secondary"
                        size="small"
                        disabled
                      />
                    ) : (
                      <TextField
                        className={classes.disableText}
                        fullWidth
                        id="productKeeenName"
                        name="productKeeenName"
                        variant="outlined"
                        placeholder="กรุณากรอกรหัสของอุปกรณ์"
                        color="secondary"
                        size="small"
                        disabled
                      />
                    )}
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Grid container>
                      <Typography variant="subtitle2">Lot No</Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    <Box mb={1} />
                    <TextField
                      fullWidth
                      id="product_lotno"
                      name="product_lotno"
                      variant="outlined"
                      className={handleDisableText(
                        sig1.length > 0 && sig2.length > 0
                      )}
                      value={formik.values.product_lotno}
                      // onChange={formik.handleChange}
                      onChange={e => {
                        handleLotNo(e.target.value);
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
                      disabled={sig1.length > 0 && sig2.length > 0}
                    />
                  </Grid>
                </Grid>
                <Box mt={2} />

                {/* --------start--------- */}
                <Typography variant="h3">
                  3.1. สี (กรณีเลือกผิดปกติ ถ่ายรูปน้ำยาประกอบ)
                </Typography>
                <Box mt={1} />
                {/* ----------------start radio config before------------------------------ */}
                <FormControl
                  component="fieldset"
                  error={radioGroupError23.error}
                >
                  <RadioGroup
                    row
                    aria-label="product1"
                    name="product1"
                    defaultValue="top"
                    value={formik.values.radiogroup23}
                    onChange={e => {
                      handleRadioChange23(e);
                      handleProduct1(e);
                      formik.setFieldValue('radiogroup23', e.target.value);
                    }}
                  >
                    {props.jobDetailData.proSinkProMax.product1 == 1 ? (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label={
                          <>
                            <Box mt={1} />
                            <Grid container>ปกติ</Grid>
                          </>
                        }
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label={
                          <>
                            <Box mt={1} />
                            <Grid container>ปกติ</Grid>
                          </>
                        }
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}

                    {props.jobDetailData.proSinkProMax.product1 == 2 ? (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label={
                          <>
                            <Box mt={1} />
                            <Grid container>
                              ผิดปกติ
                              <Box ml={1} />
                              <Typography style={{ color: '#D44848' }}>
                                {' '}
                                *{' '}
                              </Typography>
                            </Grid>
                          </>
                        }
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label={
                          <>
                            <Box mt={1} />
                            <Grid container>
                              ผิดปกติ
                              <Box ml={1} />
                              <Typography style={{ color: '#D44848' }}>
                                {' '}
                                *{' '}
                              </Typography>
                            </Grid>
                          </>
                        }
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}
                  </RadioGroup>
                  <FormHelperText>
                    {radioGroupError23.helperText}
                  </FormHelperText>
                </FormControl>
                {/* ----------------end radio config before------------------------------ */}

                {props.jobDetailData.proSinkProMax.product1 == 2 ? (
                  <>
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
                            {props.jobDetailData.proSinkProMax.image2.length >
                            3 ? (
                              <img
                                src={getImgForm(
                                  props.jobDetailData.proSinkProMax.image2
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
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={handleChangeimg}
                          disabled={sig1.length > 0 && sig2.length > 0}
                        />{' '}
                        <label htmlFor="contained-button-file">
                          <Button
                            className={classes.btnChoose}
                            variant="contained"
                            component="span"
                            startIcon={
                              <IconUpload style={{ width: '1.5vh' }} />
                            }
                            disabled={sig1.length > 0 && sig2.length > 0}
                          >
                            เพิ่มไฟล์
                          </Button>
                          <FormHelperText error={imgError.error}>
                            {imgError.helperText}
                          </FormHelperText>
                        </label>
                      </Grid>
                    </Grid>{' '}
                  </>
                ) : null}
                <Box mt={2} />
                <Divider />
                <Box mt={2} />
                {/* --------end------- */}
                {/* --------start--------- */}
                <Typography variant="h3">3.2. กลิ่น</Typography>
                <Box mt={1} />
                {/* ----------------start radio config before------------------------------ */}
                <FormControl
                  component="fieldset"
                  error={radioGroupError24.error}
                >
                  <RadioGroup
                    row
                    aria-label="product2"
                    name="product2"
                    defaultValue="top"
                    value={formik.values.radiogroup24}
                    onChange={e => {
                      handleRadioChange24(e);
                      handleProduct2(e);
                      formik.setFieldValue('radiogroup24', e.target.value);
                    }}
                  >
                    {props.jobDetailData.proSinkProMax.product2 == 1 ? (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ปกติ"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ปกติ"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}

                    {props.jobDetailData.proSinkProMax.product2 == 2 ? (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ไม่ปกติ"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ไม่ปกติ"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}
                  </RadioGroup>
                  <FormHelperText>
                    {radioGroupError24.helperText}
                  </FormHelperText>
                </FormControl>
                {/* ----------------end radio config before------------------------------ */}

                <Box mt={2} />
                <Divider />
                <Box mt={2} />
                {/* --------end------- */}
                {/* --------start--------- */}
                <Typography variant="h3">3.3. ความใส</Typography>
                <Box mt={1} />
                {/* ----------------start radio config before------------------------------ */}
                <FormControl
                  component="fieldset"
                  error={radioGroupError25.error}
                >
                  <RadioGroup
                    row
                    aria-label="product3"
                    name="product3"
                    defaultValue="top"
                    value={formik.values.radiogroup25}
                    onChange={e => {
                      handleRadioChange25(e);
                      handleProduct3(e);
                      formik.setFieldValue('radiogroup25', e.target.value);
                    }}
                  >
                    {props.jobDetailData.proSinkProMax.product3 == 1 ? (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ใส"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ใส"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}

                    {props.jobDetailData.proSinkProMax.product3 == 2 ? (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ไม่ปกติ"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ไม่ปกติ"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}
                  </RadioGroup>
                  <FormHelperText>
                    {radioGroupError25.helperText}
                  </FormHelperText>
                </FormControl>
                {/* ----------------end radio config before------------------------------ */}

                <Box mt={2} />
                <Divider />
                <Box mt={2} />
                {/* --------end------- */}
                {/* --------start--------- */}
                <Typography variant="h3">3.4. pH</Typography>
                <Box mt={1} />
                {/* ----------------start radio config before------------------------------ */}
                <FormControl
                  component="fieldset"
                  error={radioGroupError26.error}
                >
                  <RadioGroup
                    row
                    aria-label="product4"
                    name="product4"
                    defaultValue="top"
                    value={formik.values.radiogroup26}
                    onChange={e => {
                      handleRadioChange26(e);
                      handleProduct4(e);
                      formik.setFieldValue('radiogroup26', e.target.value);
                    }}
                  >
                    {props.jobDetailData.proSinkProMax.product4 == 1 ? (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="10-12"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="10-12"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}

                    {props.jobDetailData.proSinkProMax.product4 == 2 ? (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="8-9"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="8-9"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}
                    {props.jobDetailData.proSinkProMax.product4 == 3 ? (
                      <FormControlLabel
                        value={3}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="6-7"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={3}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="6-7"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}
                    {props.jobDetailData.proSinkProMax.product4 == 4 ? (
                      <FormControlLabel
                        value={4}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="3-5"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={4}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="3-5"
                        disabled={sig1.length > 0 && sig2.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}
                  </RadioGroup>
                  <FormHelperText>
                    {radioGroupError26.helperText}
                  </FormHelperText>
                </FormControl>
                {/* ----------------end radio config before------------------------------ */}

                <Box mt={2} />
                <Divider />
                <Box mt={2} />
                {/* --------end------- */}
              </CardContent>
            </Card>
            <Card className={classes.root} style={{ marginBottom: '15px' }}>
              <CardContent>
                <Grid container>
                  <Typography variant="h3" style={{ fontWeight: '1000' }}>
                    4. ทางเทคนิค *
                  </Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mb={1} />
                {/* ------------------------------start 4-------------------------------------- */}
                <Typography variant="h3">
                  4.1. แรงดันนํ้า วัดจากเครื่อง Pressure Guage
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
                      error={radioGroupError27.error}
                    >
                      <RadioGroup
                        aria-label="technicalBefore1"
                        name="technicalBefore1"
                        value={formik.values.radiogroup27}
                        onChange={e => {
                          handleRadioChange27(e);
                          handleChangeTechnicalBefore1(e);
                          formik.setFieldValue('radiogroup27', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proSinkProMax.technicalBefore1 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label=">58psi"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label=">58psi"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore1 ==
                        2 ? (
                          <FormControlLabel
                            value={parseInt(2)}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="29-58psi"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="29-58psi"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore1 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="<29psi"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="<29psi"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError27.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* ----------------end radio config before------------------------------ */}
                  </Grid>
                  <Grid item xs={6}>
                    <Box mt={2} />
                    <Grid container>
                      <Typography variant="h5" style={{ fontWeight: '1000' }}>
                        หลังการตรวจเช็ค (ไม่มี)
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Box mt={2} />
                <Divider />
                <Box mt={2} />

                {/* -----end--------- */}
                {/* ---start------------ */}
                <Typography variant="h3">
                  4.2. ความเที่ยงตรงของเครื่อองมือ
                </Typography>
                <Box mt={2} />
                <Typography variant="h4" style={{ fontWeight: '500' }}>
                  4.2.1. ปริมาณนํ้ายาที่ถูกจ่ายมีความเที่ยงตรง
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
                      error={radioGroupError28.error}
                    >
                      <RadioGroup
                        aria-label="technicalBefore21"
                        name="technicalBefore21"
                        value={formik.values.radiogroup28}
                        onChange={e => {
                          handleRadioChange28(e);
                          handleChangeTechnicalBefore21(e);
                          formik.setFieldValue('radiogroup28', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proSinkProMax.technicalBefore21 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore21 ==
                        2 ? (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดี 80%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดี 80%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore21 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore21 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError28.helperText}
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
                      error={radioGroupError29.error}
                    >
                      <RadioGroup
                        aria-label="technicalAfter21"
                        name="technicalAfter21"
                        value={formik.values.radiogroup29}
                        onChange={e => {
                          handleRadioChange29(e);
                          handleChangeTechnicalAfter21(e);
                          formik.setFieldValue('radiogroup29', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proSinkProMax.technicalAfter21 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalAfter21 ==
                        2 ? (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดี 80%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดี 80%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalAfter21 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalAfter21 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError29.helperText}
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
                  4.2.2. ปริมาณนํ้าที่ถูกจ่ายมีความเที่ยงตรง
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
                      error={radioGroupError30.error}
                    >
                      <RadioGroup
                        aria-label="technicalBefore22"
                        name="technicalBefore22"
                        value={formik.values.radiogroup30}
                        onChange={e => {
                          handleRadioChange30(e);
                          handleChangeTechnicalBefore22(e);
                          formik.setFieldValue('radiogroup30', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proSinkProMax.technicalBefore22 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore22 ==
                        2 ? (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดี 80%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดี 80%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore22 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore22 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError30.helperText}
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
                      error={radioGroupError31.error}
                    >
                      <RadioGroup
                        aria-label="technicalAfter22"
                        name="technicalAfter22"
                        value={formik.values.radiogroup31}
                        onChange={e => {
                          handleRadioChange31(e);
                          handleChangeTechnicalAfter22(e);
                          formik.setFieldValue('radiogroup31', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proSinkProMax.technicalAfter22 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalAfter22 ==
                        2 ? (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดี 80%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ดี 80%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalAfter22 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalAfter22 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError31.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* ----------------end radio config after------------------------------ */}
                  </Grid>
                </Grid>

                <Box mt={2} />
                <Divider />
                <Box mt={2} />
                {/* -----end----------- */}
                <Typography variant="h3">4.3. คุณภาพน้ำ</Typography>
                <Box mt={2} />
                <Typography variant="h4" style={{ fontWeight: '500' }}>
                  4.3.1. ค่า pH
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
                      error={radioGroupError32.error}
                    >
                      <RadioGroup
                        aria-label="technicalBefore31"
                        name="technicalBefore31"
                        value={formik.values.radiogroup32}
                        onChange={e => {
                          handleRadioChange32(e);
                          handleChangeTechnicalBefore31(e);
                          formik.setFieldValue('radiogroup32', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proSinkProMax.technicalBefore31 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label=">10-12"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label=">10-12"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore31 ==
                        2 ? (
                          <FormControlLabel
                            value={parseInt(2)}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="8-9"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="8-9"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore31 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="6-7"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="6-7"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                        {props.jobDetailData.proSinkProMax.technicalBefore31 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="3-5"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="3-5"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError32.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* ----------------end radio config before------------------------------ */}
                  </Grid>
                  <Grid item xs={6}>
                    <Box mt={2} />
                    <Grid container>
                      <Typography variant="h5" style={{ fontWeight: '1000' }}>
                        หลังการตรวจเช็ค (ไม่มี)
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Box mt={2} />
                <Divider />
                <Box mt={2} />

                {/* -----end--------- */}
                <Typography variant="h4">
                  4.3.2. ค่า Electrical Conductivity (µs/cm)
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
                      error={radioGroupError33.error}
                    >
                      <RadioGroup
                        aria-label="technicalBefore32"
                        name="technicalBefore32"
                        value={formik.values.radiogroup33}
                        onChange={e => {
                          handleRadioChange33(e);
                          handleChangeTechnicalBefore32(e);
                          formik.setFieldValue('radiogroup33', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proSinkProMax.technicalBefore32 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="> 800"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="> 800"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore32 ==
                        2 ? (
                          <FormControlLabel
                            value={parseInt(2)}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="401 - 800"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="401 - 800"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore32 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="50 - 400"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="50 - 400"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                        {props.jobDetailData.proSinkProMax.technicalBefore32 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="< 50"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="< 50"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError33.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* ----------------end radio config before------------------------------ */}
                  </Grid>
                  <Grid item xs={6}>
                    <Box mt={2} />
                    <Grid container>
                      <Typography variant="h5" style={{ fontWeight: '1000' }}>
                        หลังการตรวจเช็ค (ไม่มี)
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Box mt={2} />
                <Divider />
                <Box mt={2} />

                {/* -----end--------- */}
                <Typography variant="h4">4.3.3. ค่า TDS (mg/l)</Typography>
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
                      error={radioGroupError34.error}
                    >
                      <RadioGroup
                        aria-label="technicalBefore33"
                        name="technicalBefore33"
                        value={formik.values.radiogroup34}
                        onChange={e => {
                          handleRadioChange34(e);
                          handleChangeTechnicalBefore33(e);
                          formik.setFieldValue('radiogroup34', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proSinkProMax.technicalBefore33 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="> 1,000"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="> 1,000"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore33 ==
                        2 ? (
                          <FormControlLabel
                            value={parseInt(2)}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="501 - 1,0000"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="501 - 1,0000"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proSinkProMax.technicalBefore33 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="100 - 500"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="100 - 500"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                        {props.jobDetailData.proSinkProMax.technicalBefore33 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="< 50"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={handleDisableRadio(
                              sig1.length > 0 && sig2.length > 0
                            )}
                            label="< 50"
                            disabled={sig1.length > 0 && sig2.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {radioGroupError34.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* ----------------end radio config before------------------------------ */}
                  </Grid>
                  <Grid item xs={6}>
                    <Box mt={2} />
                    <Grid container>
                      <Typography variant="h5" style={{ fontWeight: '1000' }}>
                        หลังการตรวจเช็ค (ไม่มี)
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Box mt={2} />
                <Divider />
                <Box mt={2} />

                {/* -----end--------- */}
                <Typography variant="h4">ข้อเสนอแนะ</Typography>
                <Box mt={1} />

                <TextField
                  fullWidth
                  id="customerID"
                  name="customerID"
                  variant="outlined"
                  multiline
                  rows={3}
                  value={props.jobDetailData.proSinkProMax.description2}
                  placeholder="กรุณากรอกข้อมูล"
                  onChange={handleChangeFeedBack2}
                  color="secondary"
                  size="small"
                  disabled={sig1.length > 0 && sig2.length > 0}
                  className={handleDisableText(
                    sig1.length > 0 && sig2.length > 0
                  )}
                />
              </CardContent>
            </Card>
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
                              วันที่{' '}
                              {/* {splitDate(props.jobDetailData.jobDate, 4, 2)} */}
                              {props.dateShow}
                            </Typography>
                          </>
                        ) : (
                          <>
                            {props.jobDetailData.proSinkProMax.signatureCustomer
                              .length > 3 ? (
                              <>
                                <img
                                  src={imgCustomer}
                                  alt="dummy"
                                  width="300px"
                                  height="188px"
                                  borderRadius="1vh"
                                />
                                <Typography variant="h4">
                                  วันที่{' '}
                                  {/* {splitDate(props.jobDetailData.jobDate, 4, 2)} */}
                                  {props.dateShow}
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
                    {/* <FormHelperText error={sigError1.error}>{sigError1.helperText}</FormHelperText> */}
                    <Signature
                      title="ลายเซ็นต์ตัวแทนร้านค้า"
                      open={openSignature1}
                      handleClose={() => {
                        // setSigError1(prevState=>({
                        //   ...prevState,
                        //   error: false,
                        //   helperText:''
                        // }))
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
                              วันที่{' '}
                              {/* {splitDate(props.jobDetailData.jobDate, 4, 2)} */}
                              {props.dateShow}
                            </Typography>
                          </>
                        ) : (
                          <>
                            {props.jobDetailData.proSinkProMax.signatureEmployee
                              .length > 3 ? (
                              <>
                                <img
                                  src={imgEmpoyee}
                                  alt="dummy"
                                  width="300px"
                                  height="188px"
                                  borderRadius="1vh"
                                />
                                <Typography variant="h4">
                                  วันที่{' '}
                                  {/* {splitDate(props.proSinkProMax.jobDate, 4, 2)} */}
                                  {props.dateShow}
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
                    {/* <FormHelperText error={sigError2.error}>{sigError2.helperText}</FormHelperText> */}
                    <Signature
                      title="ลายเซ็นต์พนักงาน"
                      open={openSignature2}
                      handleClose={() => {
                        // setSigError2(prevState=>({
                        //   ...prevState,
                        //   error: false,
                        //   helperText:''
                        // }))
                        setOpenSignature2(false);
                      }}
                      handleBase64img={handleBase64imgUser}
                      imgName={'ลายเซ็นต์พนักงาน_' + job_ID}
                      job_ID={job_ID}
                      ImgID={sig2}
                      // preImg={preImgEmployeeSig}
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
                  onClick={handleBack}
                />
              </Grid>
              <Box ml={2} />

              {/* <button onClick={() => console.log(props.jobDetailData)}>
                log
              </button> */}

              <Grid xs={5} sm={5} md={3} style={{ textAlign: 'start' }}>
                <ButtonPramarys
                  label="บันทึก"
                  onClick={handleSubmitRadio}
                  type="submit"
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
        {/* <button onClick={() => console.log(props.jobDetailData)}>log</button> */}
        <Box mt={10} />
      </form>
    </>
  );
}

export default FormTwo2;
