import React, {useEffect, useState} from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  withStyles
} from '@material-ui/core';
import ButtonPramarys from 'src/components/keen/Buttonprimary';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import Signature from 'src/components/keen/Signature ';
import IconAutograph from 'src/components/keen/icon/autograph';
import IconUpload from 'src/components/keen/icon/iconUpload';
import {useHistory, useParams} from 'react-router-dom';
import {getJobSearch, updateJob} from '../../api/keeen/job';
import {deleteImage, getImage, postImage, putImage} from '../../api/keeen/uploadimg';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {getProductSearch} from '../../api/keeen/product';
import DialogBarcode from 'src/components/keen/DialogBarcode';
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
  disableText: {
    backgroundColor: '#E9E9E9',
    borderColor: '#687178'
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
  btnChoose: {
    borderRadius: '10px',
    fontSize: '10px',
    color: '#0F8E54',
    backgroundColor: '#fff',
    border: 'solid 1px #0F8E54'
  },
  btnDis: {
    borderRadius: '10px',
    fontSize: '10px',
    color: '#263238',
    backgroundColor: '#0000001f',
    border: 'solid 1px #0F8E54'
  },
  barscan: {
    marginRight: '-5px',
    '&:hover': {
      cursor: 'pointer'
    }
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

function FormOne2(props) {
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
  const [sig1, setSig1] = useState('');
  const [sig2, setSig2] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const params = useParams();
  const job_ID = params.jobID;
  const [imageFirst, setImageFirst] = useState();
  const [imgFile, setImgFile] = useState();
  const [imgNumber, setImgNumber] = useState();
  const [preImg, setPreImg] = useState('');
  const [preImgCustomerSig, setPreImgCustomerSig] = useState('');
  const [preImgEmployeeSig, setPreImgEmployeeSig] = useState('');
  const [imgEmpoyee, setImgEmployee] = useState();
  const [imgCustomer, setImgCustomer] = useState();

  const [imgIdEditEmp, setImgIdEditEmp] = useState('');
  const [imgIdEditCus, setImgIdEditCus] = useState('');
  let reader = new FileReader();
  const [save, setSave] = useState(false);
  const [imgDB, setImgDB] = useState('');
  const handleDisableRadio = status => {
    if (status) {
      return <DisableRadio/>;
    } else {
      return <GreenRadio/>;
    }
  };
  const handleDisableBtn = status => {
    if (status) {
      return classes.btnDis;
    } else {
      return classes.btnChoose;
    }
  };
  const showData = () => {
    console.log(props.jobDetailData);
    // console.log(base64imgShop);
  };
  const searchProduct = data => {
    getProductSearch(data)
      .then(res => {
        const productNameget = res.data.result.data.productName;
        console.log(res.data.result.data.productName);
        setProductName(res.data.result.data.productName);
        props.setJobDetailData(prevState => ({
          ...prevState,
          liquidDispenser: {
            ...prevState.liquidDispenser,
            productKeeenName: productNameget
          }
        }));
      })
      .catch(error => {
        setProductName('');
        props.setJobDetailData(prevState => ({
          ...prevState,
          liquidDispenser: {
            ...prevState.liquidDispenser,
            productKeeenName: ''
          }
        }));
      });
  };
  useEffect(() => {
    updateJob(props.jobDetailData).then(res => {
    });

    // console.log(props.jobDetailData.liquidDispenser.image);
    if (props.jobDetailData.liquidDispenser.productKeeenName.length > 0) {
      getProductSearch(
        props.jobDetailData.liquidDispenser.productKeeenName
      ).then(res => {
        //console.log(res.data.result.data.productName);
        setProductName(res.data.result.data.productName);
      });
    }
  }, []);
  useEffect(() => {
    getJobSearch(job_ID)
      .then(res => {
        console.log(res.data.result.data.liquidDispenser);
        setImgDB(res.data.result.data.liquidDispenser.image1);
        setSig1(res.data.result.data.liquidDispenser.signatureCustomer);
        setSig2(res.data.result.data.liquidDispenser.signatureEmployee);
        if (res.data.result.data.liquidDispenser.signatureEmployee) {
          getImage(res.data.result.data.liquidDispenser.signatureEmployee)
            .then(res => {
              const result = res.data.data.images;
              setImgEmployee(result);
              // setPreImgEmployeeSig(result)
            })
            .catch(err => {
              console.log(err);
            });
        }
        if (res.data.result.data.liquidDispenser.signatureCustomer) {
          getImage(res.data.result.data.liquidDispenser.signatureCustomer)
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
  const handleUploadImg1 = () => {
    setUploadImg1(!uploadImg1);
  };
  const handleBase64imgShop = value => {
    props.setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,

        signatureCustomer: value
      }
    }));
  };
  const handleBase64imgUser = value => {
    const resultImg = value;
    //console.log(resultImg);
    props.setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,

        signatureEmployee: resultImg
      }
    }));
  };

  const handleClickOpen1 = () => {
    setOpenSignature1(true);
  };
  const handleClickOpen2 = () => {
    setOpenSignature2(true);
  };

  useEffect(() => {
    if (imgDB == '' && props.jobDetailData.liquidDispenser.product1 == 2) {
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
        if (save) {
          updateJob(props.jobDetailData).then(res => {
            const path = '/joblist/jobdetail/' + props.jobDetailData.jobId;
            history.push(path);
          });
        }
        console.log('ยังไมเลือก');
      }
      // console.log("post "+userList.name);
    } else if (props.jobDetailData.liquidDispenser.product1 == 2) {
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
      }
    } else if (props.jobDetailData.liquidDispenser.product1 == 1) {
      if (save) {
        updateJob(props.jobDetailData).then(res => {
          const path = '/joblist/jobdetail/' + props.jobDetailData.jobId;
          history.push(path);
        });
      }
    }
  }, [
    props.jobDetailData.liquidDispenser.image1,
    save,
    props.jobDetailData.liquidDispenser.product1
  ]);

  const handleBack = () => {
    // if (props.jobDetailData.liquidDispenser == 2) {
    //   props.setJobDetailData(prevState => ({
    //     ...prevState,

    //     liquidDispenser: {
    //       ...prevState.liquidDispenser,
    //       status: 1
    //     }
    //   }));
    // }
    window.location.reload();
  };

  const handleProduct1 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        product1: data
      }
    }));
  };
  const handleProduct2 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        product2: data
      }
    }));
  };
  const handleProduct3 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        product3: data
      }
    }));
  };
  const handleProduct4 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
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
                type: 'image/jpeg',
                lastModified: Date.now()
              });
              console.log('--------------');
              console.log(file);
              console.log(URL.createObjectURL(imageFile));
              setImgFile(file);
            },
            'image/jpeg',
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
  const getImgCusSig = data => {
    getImage(data).then(res => {
      const result = res.data.data.images;
      setPreImgCustomerSig(result);
    });
    return preImgCustomerSig;
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

      liquidDispenser: {
        ...prevState.liquidDispenser,
        description2: data
      }
    }));
  };
  const handleStatus = () => {
    if (
      props.jobDetailData.liquidDispenser.signatureCustomer &&
      props.jobDetailData.liquidDispenser.signatureEmployee
    ) {
      props.setJobDetailData(prevState => ({
        ...prevState,

        liquidDispenser: {
          ...prevState.liquidDispenser,
          status: 2
        }
      }));
      if (
        ((props.jobDetailData.proSink.signatureCustomer !== '' &&
            props.jobDetailData.proSink.signatureEmployee !== '') ||
          props.jobDetailData.proSink.status == 0) &&
        ((props.jobDetailData.proMax.signatureCustomer !== '' &&
            props.jobDetailData.proMax.signatureEmployee !== '') ||
          props.jobDetailData.proMax.status == 0) &&
        ((props.jobDetailData.hydroMaster.signatureCustomer !== '' &&
            props.jobDetailData.hydroMaster.signatureEmployee !== '') ||
          props.jobDetailData.hydroMaster.status == 0)
      ) {
        props.setJobDetailData(prevState => ({
          ...prevState,
          status: 2
        }));
      } else {
        props.setJobDetailData(prevState => ({
          ...prevState,
          status: 3

        }));
      }
    } else {
      props.setJobDetailData(prevState => ({
        ...prevState,
        status: 3,
        liquidDispenser: {
          ...prevState.liquidDispenser,
          status: 3
        }
      }));
    }
  };
  const handleDisableText = status => {
    if (status) {
      return classes.disableText;
    }
  };
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
  const [imgError, setImgError] = useState({
    value: '',
    error: '',
    helperText: ''
  });
  // const [sigError1,setSigError1] = useState({value:'',error:'',helperText:''})
  // const [sigError2,setSigError2] = useState({value:'',error:'',helperText:''})
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

  // void sendEmail (){
  //
  // }
  const handleSubmitRadio = event => {

    // console.log("Event_Status: " + event.status);
    // const host_url = "https://localhost:7029";
    // const host_url = "http://13.212.143.253:1771";
    // axios.get(host_url + "/api/v1/PDFs/liquid/"+ job_ID+ "/send");

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
    //----------------15--------------------------


    if (
      (formik.values.imageProduct == '' &&
        props.jobDetailData.liquidDispenser.product1 == 1) ||
      (formik.values.imageProduct != '' &&
        props.jobDetailData.liquidDispenser.product1 == 2) ||
      (formik.values.imageProduct == '' &&
        props.jobDetailData.liquidDispenser.image1 != '')
    ) {
      console.log("**********> IF1.1 <*********");
      setImgError(prevState => ({
        ...prevState,
        error: false,
        helperText: ''
      }));
    } else {
      console.log("**********> IF1.2 <*********");
      setImgError(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------15--------------------------
    if (formik.values.radiogroup15) {
      console.log("**********> IF2.1 <*********");
      setRadioGroupError15(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      console.log("**********> IF2.2 <*********");
      setRadioGroupError15(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------16--------------------------
    if (formik.values.radiogroup16) {
      console.log("**********> IF3.1 <*********");
      setRadioGroupError16(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      console.log("**********> IF3.2 <*********");
      setRadioGroupError16(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------
    //----------------17--------------------------
    if (formik.values.radiogroup17) {
      console.log("**********> IF4.1 <*********");
      setRadioGroupError17(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      console.log("**********> IF4.2 <*********");
      setRadioGroupError17(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    //-----------------end---------------true
    //----------------18--------------------------
    if (formik.values.radiogroup18) {
      console.log("**********> IF5.1 <*********");
      setRadioGroupError18(prevState => ({
        ...prevState,
        error: false
      }));
    } else {
      console.log("**********> IF5.2 <*********");
      setRadioGroupError18(prevState => ({
        ...prevState,
        error: true,
        helperText: 'กรุณาเลือกคำตอบ'
      }));
    }
    console.log("**********> END <*********");
    // console.log("Event_Status: " + event);
    //-----------------end---------------

    const host_url = configApi.API_SERVER;
    console.log("**********> START <*********");
    if ((sig1.length > 0 && sig2.length > 0) ||
      (imgIdEditCus !== "" && imgIdEditEmp !== "") ||
      (imgIdEditCus !== "" && sig2.length > 0) ||
      (imgIdEditEmp !== "" && sig1.length > 0)
    ) {
      console.log("Send Email liquidDispenser");
      axios.get(host_url + "/api/v1/PDFs/liquid/" + job_ID + "/send");
    }
    console.log("sig1: " + sig1);
    console.log("sig1: " + sig2);
    console.log("imgIdEdiCus: " + imgIdEditCus);
    console.log("imgIdEdiEmp: " + imgIdEditEmp);

  };
  const formik = useFormik({
    initialValues: {
      barcode2: props.jobDetailData.liquidDispenser.barcode2,
      productKeeenName: props.jobDetailData.liquidDispenser.productKeeenName,
      product_lotno: props.jobDetailData.liquidDispenser.productKeeenLotNo,

      radiogroup15: props.jobDetailData.liquidDispenser.product1,
      radiogroup16: props.jobDetailData.liquidDispenser.product2,
      radiogroup17: props.jobDetailData.liquidDispenser.product3,
      radiogroup18: props.jobDetailData.liquidDispenser.product4,
      imageProduct: preImg
      // sigError1formik: props.jobDetailData.liquidDispenser.signatureCustomer,
      // sigError2formik: props.jobDetailData.liquidDispenser.signatureEmployee,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      barcode2: Yup.string().required('กรุณากรอกข้อมูลให้ครบถ้วน'),
      product_lotno: Yup.string().required('กรุณากรอกข้อมูลให้ครบถ้วน'),
      radiogroup15: Yup.string().required(''),
      radiogroup16: Yup.string().required(''),
      radiogroup17: Yup.string().required(''),
      radiogroup18: Yup.string().required(''),
      imageProduct: Yup.string().required('')
      // sigError1formik: Yup.string().required(''),
      // sigError2formik: Yup.string().required(''),
    }),

    onSubmit: values => {
      // console.log(values);
      handleBarcode(values.barcode2);
      if (
        (values.radiogroup15 != 0 &&
          values.radiogroup16 != 0 &&
          values.radiogroup17 != 0 &&
          values.radiogroup18 != 0 &&
          values.imageProduct == '' &&
          props.jobDetailData.liquidDispenser.product1 == 1) ||
        (values.imageProduct != '' &&
          props.jobDetailData.liquidDispenser.product1 == 2) ||
        (values.imageProduct == '' &&
          props.jobDetailData.liquidDispenser.image1 != '')
      ) {
        console.log('next');

        if (props.jobDetailData.liquidDispenser.product1 == 1) {
          console.log(
            'delete when have img ' + props.jobDetailData.liquidDispenser.image1
          );
          console.log(props.jobDetailData.liquidDispenser.product1);
          props.setJobDetailData(prevState => ({
            ...prevState,
            liquidDispenser: {
              ...prevState.liquidDispenser,
              image1: ''
            }
          }));

          handleStatus();
          setSave(true);
          if (props.jobDetailData.liquidDispenser.image1) {
            deleteImage(props.jobDetailData.liquidDispenser.image1)
              .then(res => {
                console.log('delete');
                handleStatus();
                setSave(true);
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            handleStatus();
            setSave(true);
          }
        } else {
          if (
            props.jobDetailData.liquidDispenser.image1 == '' &&
            props.jobDetailData.liquidDispenser.product1 == 2
          ) {
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
                  liquidDispenser: {
                    ...prevState.liquidDispenser,
                    image1: imgresult
                  }
                }));
                handleStatus();
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
                props.jobDetailData.liquidDispenser.image1
              );
              formData.append('JobId', job_ID);
              formData.append('Images', imgFile);
              putImage(formData)
                .then(res => {
                  const imgresult = res.data.data;
                  setImgNumber(imgresult);
                  props.setJobDetailData(prevState => ({
                    ...prevState,
                    liquidDispenser: {
                      ...prevState.liquidDispenser,
                      image1: props.jobDetailData.liquidDispenser.image1
                    }
                  }));
                  handleStatus();
                  setSave(true);
                })
                .catch(error => {
                  console.log(error);
                });
            } else {
              if ((preImg.length == '')) {
                handleStatus()
                setSave(true);
              } else {
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
  const handleSave = () => {
    // console.log(props.jobDetailData);
    updateJob(props.jobDetailData).then(res => {
      const path = '/joblist/jobdetail/' + props.jobDetailData.jobId;
      history.push(path);
    });
  };

  const handleBarcode = data => {
    const result = data;
    searchProduct(result);
    props.setJobDetailData(prevState => ({
      ...prevState,
      liquidDispenser: {
        ...prevState.liquidDispenser,
        barcode2: data
      }
    }));
  };

  const handleLotNo = data => {
    props.setJobDetailData(prevState => ({
      ...prevState,
      liquidDispenser: {
        ...prevState.liquidDispenser,
        productKeeenLotNo: data
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
                ตรวจเช็คอุปกรณ์จ่ายน้ำยา
              </Typography>
              <Box mt={2}/>
              <Typography variant="body2" className={classes.title}>
                เลขที่ใบงาน {props.jobDetailData.jobId}
              </Typography>
              <Box mt={2}/>
              <Typography variant="body2" className={classes.title}>
                วันที่นัดหมาย {splitDate(props.jobDetailData.jobDate, 4, 2)}
              </Typography>
            </Card>
            <Box mt={2}/>

            <Card className={classes.root} style={{marginBottom: '15px'}}>
              <CardContent>
                <Grid container>
                  <Typography variant="h3" style={{fontWeight: '1000'}}>
                    3. ผลิตภัณฑ์ Keeen / Dr. Keeen
                  </Typography>
                  <Box ml={1}/>
                  <Typography style={{color: '#D44848'}}> * </Typography>
                </Grid>
                <Box mt={2}/>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <Grid container>
                      <Typography variant="subtitle2">
                        Barcode (สินค้า)
                      </Typography>
                      <Box ml={1}/>
                      <Typography style={{color: '#D44848'}}> * </Typography>
                    </Grid>
                    <Box mb={1}/>
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
                      inputProps={{maxLength: 20}}
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
                    <Box mb={1}/>
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
                      <Box ml={1}/>
                      <Typography style={{color: '#D44848'}}> * </Typography>
                    </Grid>
                    <Box mb={1}/>
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

                <Box mt={2}/>

                {/* --------start--------- */}
                <Typography variant="h3">
                  3.1. สี (กรณีเลือกผิดปกติ ถ่ายรูปน้ำยาประกอบ)
                </Typography>
                <Box mt={1}/>
                {/* ----------------start radio config before------------------------------ */}
                <FormControl
                  component="fieldset"
                  error={radioGroupError15.error}
                >
                  <RadioGroup
                    row
                    aria-label="product1"
                    name="product1"
                    defaultValue="top"
                    value={formik.values.radiogroup15}
                    onChange={e => {
                      handleRadioChange15(e);
                      handleProduct1(e);
                      formik.setFieldValue('radiogroup15', e.target.value);
                    }}
                  >
                    {props.jobDetailData.liquidDispenser.product1 == 1 ? (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ปกติ"
                        classes={{
                          label: classes.label
                        }}
                        checked
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    ) : (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label={'ปกติ'}
                        classes={{
                          label: classes.label
                        }}
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    )}

                    {props.jobDetailData.liquidDispenser.product1 == 2 ? (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label={
                          <>
                            <Box mt={1}/>
                            <Grid container>
                              ผิดปกติ
                              <Box ml={1}/>
                              <Typography style={{color: '#D44848'}}>
                                {' '}
                                *{' '}
                              </Typography>
                            </Grid>
                          </>
                        }
                        classes={{
                          label: classes.label
                        }}
                        checked
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    ) : (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label={
                          <>
                            <Box mt={1}/>
                            <Grid container>
                              ผิดปกติ
                              <Box ml={1}/>
                              <Typography style={{color: '#D44848'}}>
                                {' '}
                                *{' '}
                              </Typography>
                            </Grid>
                          </>
                        }
                        classes={{
                          label: classes.label
                        }}
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    )}
                  </RadioGroup>
                  <FormHelperText>
                    {radioGroupError15.helperText}
                  </FormHelperText>
                </FormControl>
                {/* ----------------end radio config before------------------------------ */}

                {props.jobDetailData.liquidDispenser.product1 == 2 ? (
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
                            {props.jobDetailData.liquidDispenser.image1.length >
                            3 ? (
                              <img
                                src={getImgForm(
                                  props.jobDetailData.liquidDispenser.image1
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
                        <Box mt={1}/>
                        <h6>กรุณาอัปโหลดรูปภาพ</h6>

                        <Box mt={1}/>
                      </Grid>
                      <Box mt={1}/>
                      <Grid container xs={12} sm={12} md={12}>
                        <input
                          accept="image/*"
                          style={{display: 'none'}}
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
                              <IconUpload style={{width: '1.5vh'}}/>
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
                <Box mt={2}/>
                <Divider/>
                <Box mt={2}/>
                {/* --------end------- */}
                {/* --------start--------- */}
                <Typography variant="h3">3.2. กลิ่น</Typography>
                <Box mt={1}/>
                {/* ----------------start radio config before------------------------------ */}
                <FormControl
                  component="fieldset"
                  error={radioGroupError16.error}
                >
                  <RadioGroup
                    row
                    aria-label="product2"
                    name="product2"
                    defaultValue="top"
                    value={formik.values.radiogroup16}
                    onChange={e => {
                      handleRadioChange16(e);
                      handleProduct2(e);
                      formik.setFieldValue('radiogroup16', e.target.value);
                    }}
                  >
                    {props.jobDetailData.liquidDispenser.product2 == 1 ? (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ปกติ"
                        classes={{
                          label: classes.label
                        }}
                        checked
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    ) : (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ปกติ"
                        classes={{
                          label: classes.label
                        }}
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    )}

                    {props.jobDetailData.liquidDispenser.product2 == 2 ? (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ไม่ปกติ"
                        classes={{
                          label: classes.label
                        }}
                        checked
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    ) : (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ไม่ปกติ"
                        classes={{
                          label: classes.label
                        }}
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    )}
                  </RadioGroup>
                  <FormHelperText>
                    {radioGroupError16.helperText}
                  </FormHelperText>
                </FormControl>
                {/* ----------------end radio config before------------------------------ */}

                <Box mt={2}/>
                <Divider/>
                <Box mt={2}/>
                {/* --------end------- */}
                {/* --------start--------- */}
                <Typography variant="h3">3.3. ความใส</Typography>
                <Box mt={1}/>
                {/* ----------------start radio config before------------------------------ */}
                <FormControl
                  component="fieldset"
                  error={radioGroupError17.error}
                >
                  <RadioGroup
                    row
                    aria-label="product3"
                    name="product3"
                    defaultValue="top"
                    value={formik.values.radiogroup17}
                    onChange={e => {
                      handleRadioChange17(e);
                      handleProduct3(e);
                      formik.setFieldValue('radiogroup17', e.target.value);
                    }}
                  >
                    {props.jobDetailData.liquidDispenser.product3 == 1 ? (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ใส"
                        classes={{
                          label: classes.label
                        }}
                        checked
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    ) : (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ใส"
                        classes={{
                          label: classes.label
                        }}
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    )}

                    {props.jobDetailData.liquidDispenser.product3 == 2 ? (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ไม่ปกติ"
                        classes={{
                          label: classes.label
                        }}
                        checked
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    ) : (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="ไม่ปกติ"
                        classes={{
                          label: classes.label
                        }}
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    )}
                  </RadioGroup>
                  <FormHelperText>
                    {radioGroupError17.helperText}
                  </FormHelperText>
                </FormControl>
                {/* ----------------end radio config before------------------------------ */}

                <Box mt={2}/>
                <Divider/>
                <Box mt={2}/>
                {/* --------end------- */}
                {/* --------start--------- */}
                <Typography variant="h3">3.4. pH</Typography>
                <Box mt={1}/>
                {/* ----------------start radio config before------------------------------ */}
                <FormControl
                  component="fieldset"
                  error={radioGroupError18.error}
                >
                  <RadioGroup
                    row
                    aria-label="product4"
                    name="product4"
                    defaultValue="top"
                    value={formik.values.radiogroup18}
                    onChange={e => {
                      handleRadioChange18(e);
                      handleProduct4(e);
                      formik.setFieldValue('radiogroup18', e.target.value);
                    }}
                  >
                    {props.jobDetailData.liquidDispenser.product4 == 1 ? (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="10-12"
                        classes={{
                          label: classes.label
                        }}
                        checked
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    ) : (
                      <FormControlLabel
                        value={1}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="10-12"
                        classes={{
                          label: classes.label
                        }}
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    )}

                    {props.jobDetailData.liquidDispenser.product4 == 2 ? (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="8-9"
                        classes={{
                          label: classes.label
                        }}
                        checked
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    ) : (
                      <FormControlLabel
                        value={2}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="8-9"
                        classes={{
                          label: classes.label
                        }}
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    )}
                    {props.jobDetailData.liquidDispenser.product4 == 3 ? (
                      <FormControlLabel
                        value={3}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="6-7"
                        classes={{
                          label: classes.label
                        }}
                        checked
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    ) : (
                      <FormControlLabel
                        value={3}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="6-7"
                        classes={{
                          label: classes.label
                        }}
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    )}
                    {props.jobDetailData.liquidDispenser.product4 == 4 ? (
                      <FormControlLabel
                        value={4}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="3-5"
                        classes={{
                          label: classes.label
                        }}
                        checked
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    ) : (
                      <FormControlLabel
                        value={4}
                        control={handleDisableRadio(
                          sig1.length > 0 && sig2.length > 0
                        )}
                        label="3-5"
                        classes={{
                          label: classes.label
                        }}
                        disabled={sig1.length > 0 && sig2.length > 0}
                      />
                    )}
                  </RadioGroup>
                  <FormHelperText>
                    {radioGroupError18.helperText}
                  </FormHelperText>
                </FormControl>
                {/* ----------------end radio config before------------------------------ */}

                <Box mt={2}/>
                <Divider/>
                <Box mt={2}/>
                {/* --------end------- */}

                <Typography variant="h4">ข้อเสนอแนะ</Typography>
                <Box mt={1}/>

                <TextField
                  fullWidth
                  id="customerID"
                  name="customerID"
                  variant="outlined"
                  multiline
                  rows={3}
                  value={props.jobDetailData.liquidDispenser.description2}
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Grid container>
                      <Typography variant="h3">
                        ลายเซ็นต์ตัวแทนร้านค้า
                      </Typography>
                    </Grid>
                    <Box mt={2}/>
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
                              {splitDate(props.jobDetailData.jobDate, 4, 2)}
                            </Typography>
                          </>
                        ) : (
                          <>
                            {props.jobDetailData.liquidDispenser
                              .signatureCustomer.length > 3 ? (
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
                                  {splitDate(props.jobDetailData.jobDate, 4, 2)}
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
                        <IconAutograph style={{margin: '0 0 0 10px'}}/>
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
              {/* ------------------------------------------------------------------------- */}

              <Grid item xs={12} sm={6}>
                <Card>
                  <CardContent>
                    <Grid container>
                      <Typography variant="h3">ลายเซ็นต์พนักงาน</Typography>
                    </Grid>
                    <Box mt={2}/>
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
                              {splitDate(props.jobDetailData.jobDate, 4, 2)}
                            </Typography>
                          </>
                        ) : (
                          <>
                            {props.jobDetailData.liquidDispenser
                              .signatureEmployee.length > 3 ? (
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
                                  {splitDate(props.jobDetailData.jobDate, 4, 2)}
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
                        <IconAutograph style={{margin: '0 0 0 10px'}}/>
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
            <Box mt={2}/>

            <Grid container justifyContent="center" xs={12} sm={12} md={12}>
              <Grid xs={5} sm={5} md={3} style={{textAlign: 'end'}}>
                <ButtonSecondary
                  label="ย้อนกลับ"
                  fullWidth
                  size="small"
                  onClick={handleBack}
                  // href={'/liquidDispenser/' + job_ID}
                />
              </Grid>
              <Box ml={2}/>
              {/* <button onCLick={handleStatus}>sttau</button>
            <button onClick={() => console.log(props.jobDetailData)}>
              log
            </button> */}

              <Grid xs={5} sm={5} md={3} style={{textAlign: 'start'}}>
                <ButtonPramarys
                  label="บันทึก"
                  type="submit"
                  onClick={handleSubmitRadio}
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
        <Box mt={10}/>
      </form>
    </>
  );
}

export default FormOne2;
