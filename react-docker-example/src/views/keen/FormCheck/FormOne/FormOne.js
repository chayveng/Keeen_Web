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
  SvgIcon,
  FormHelperText
} from '@material-ui/core';
import ButtonPramarys from 'src/components/keen/Buttonprimary';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import FormOne2 from './FormOne2';
import IconUpload from 'src/components/keen/icon/iconUpload';
import { useParams } from 'react-router-dom';
import { getJobSearch, updateJob } from '../../api/keeen/job';
import { postImage, getImage, putImage } from '../../api/keeen/uploadimg';
import { getProductSearch } from '../../api/keeen/product';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import IconBarCode from '../icon_barcode.svg';
import * as Yup from 'yup';
import Dialogbarcode from 'src/components/keen/DialogBarcode';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFform1 from './PDFform1';

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
  disableText: {
    backgroundColor: '#E9E9E9',
    borderColor: '#687178'
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
  btnAdd: {
    backgroundColor: '#EEFCF5',
    textDeoration: 'none',
    borderRadius: 15,
    paddingRight: 15,
    paddingLeft: 15
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

function FormOne() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState();
  const [next, setNext] = useState(false);
  const [valueProduct, setValueProduct] = useState();
  const [valueLotNo, setValueLotNo] = useState();
  const params = useParams();
  const job_ID = params.jobID;
  const [sign1, setSign1] = useState();
  const [sign2, setSign2] = useState();
  const [productName, setProductName] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [disableAll, setDisableAll] = useState(false);
  const [testBar, setTestBar] = useState();
  const [imageFirst, setImageFirst] = useState();
  const [imgFile, setImgFile] = useState();
  const [preImg, setPreImg] = useState('');
  let reader = new FileReader();

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

  const fecthData = () => {
    getJobSearch(job_ID)
      .then(res => {
        //console.log(res.data.result.data);
        setJobDetailData(res.data.result.data);
        handlejobDate(res.data.result.data.jobDate);

        if (res.data.result.data.liquidDispenser.productName.length > 0) {
          getProductSearch(
            res.data.result.data.liquidDispenser.productName
          ).then(res => {
            //  console.log(res.data.result.data.productName);
            setProductName(res.data.result.data.productName);
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

  const handleChangeMachineBefore1 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineBefore1: data
      }
    }));
  };
  const handleChangeMachineBefore21 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineBefore21: data
      }
    }));
  };
  const handleChangeMachineBefore22 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineBefore22: data
      }
    }));
  };
  const handleChangeMachineBefore3 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineBefore3: data
      }
    }));
  };
  const handleChangeMachineBefore4 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineBefore4: data
      }
    }));
  };
  const handleChangeMachineBefore5 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineBefore5: data
      }
    }));
  };
  const handleChangeMachineBefore6 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineBefore6: data
      }
    }));
  };
  const handleChangeMachineBefore7 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineBefore7: data
      }
    }));
  };
  const handleChangeMachineBefore8 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineBefore8: data
      }
    }));
  };
  const handleChangeMachineAfter1 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineAfter1: data
      }
    }));
  };

  const handleChangeMachineAfter21 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineAfter21: data
      }
    }));
  };
  const handleChangeMachineAfter22 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineAfter22: data
      }
    }));
  };
  const handleChangeMachineAfter3 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineAfter3: data
      }
    }));
  };
  const handleChangeMachineAfter4 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineAfter4: data
      }
    }));
  };
  const handleChangeMachineAfter5 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineAfter5: data
      }
    }));
  };
  const handleChangeMachineAfter6 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineAfter6: data
      }
    }));
  };
  const handleChangeMachineAfter7 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineAfter7: data
      }
    }));
  };
  const handleChangeMachineAfter8 = event => {
    const data = parseInt(event.target.value);
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
        machineAfter8: data
      }
    }));
  };
  const handleChangeFeedBack = event => {
    const data = event.target.value;
    setJobDetailData(prevState => ({
      ...prevState,

      liquidDispenser: {
        ...prevState.liquidDispenser,
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

  const searchProduct = data => {
    getProductSearch(data)
      .then(res => {
        const productNameget = res.data.result.data.productName;
        // console.log(res.data.result.data.productName);
        setProductName(res.data.result.data.productName);
        setJobDetailData(prevState => ({
          ...prevState,
          liquidDispenser: {
            ...prevState.liquidDispenser,
            productName: productNameget
          }
        }));
      })
      .catch(error => {
        setProductName('');
        setJobDetailData(prevState => ({
          ...prevState,
          liquidDispenser: {
            ...prevState.liquidDispenser,
            productName: ''
          }
        }));
      });
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
  const handleProductID = data => {
    setJobDetailData(prevState => ({
      ...prevState,
      liquidDispenser: {
        ...prevState.liquidDispenser,
        barcode: data
      }
    }));
  };

  const handleLotNo = data => {
    setJobDetailData(prevState => ({
      ...prevState,
      liquidDispenser: {
        ...prevState.liquidDispenser,
        productLotno: data
      }
    }));
  };

  const handleSerialNumber = data => {
    setJobDetailData(prevState => ({
      ...prevState,
      liquidDispenser: {
        ...prevState.liquidDispenser,
        serialNo: data
      }
    }));
  };
  const backPage = () => {
    const path = '/joblist/jobdetail/' + jobDetailData.jobId;
    history.push(path);
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
  const splitDate = (str, i1, i2) => {
    const result = [str.slice(0, i1), str.slice(i1)];
    const day = [result[1].slice(0, i2), result[1].slice(i2)];
    return day[1] + '/' + day[0] + '/' + result[0];
  };
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
  const [imageError1, setImageError1] = useState({
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

  const handleSubmitRadio = event => {
    //----------------image1--------------------------
    if (formik.values.image1 != '') {
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
  };

  const formik = useFormik({
    initialValues: {
      barcode: jobDetailData.liquidDispenser.barcode,
      productName: jobDetailData.liquidDispenser.productName,
      // product_lotno: jobDetailData.liquidDispenser.productLotno,
      serialNumber: jobDetailData.liquidDispenser.serialNo,

      radiogroup1: jobDetailData.liquidDispenser.machineBefore1,
      radiogroup2: jobDetailData.liquidDispenser.machineAfter1,
      radiogroup3: jobDetailData.liquidDispenser.machineBefore21,
      radiogroup4: jobDetailData.liquidDispenser.machineAfter21,
      radiogroup5: jobDetailData.liquidDispenser.machineBefore22,
      radiogroup6: jobDetailData.liquidDispenser.machineAfter22,
      radiogroup7: jobDetailData.liquidDispenser.machineBefore3,
      radiogroup8: jobDetailData.liquidDispenser.machineAfter3,
      radiogroup9: jobDetailData.liquidDispenser.machineBefore4,
      radiogroup10: jobDetailData.liquidDispenser.machineAfter4,
      radiogroup11: jobDetailData.liquidDispenser.machineBefore5,
      radiogroup12: jobDetailData.liquidDispenser.machineAfter5,
      radiogroup13: jobDetailData.liquidDispenser.machineBefore6,
      radiogroup14: jobDetailData.liquidDispenser.machineAfter6,
      image1: preImg
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      barcode: Yup.string()
        .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
        .required('กรุณากรอกข้อมูลให้ครบถ้วน'),

      // product_lotno: Yup.string().required('กรุณากรอกข้อมูลให้ครบถ้วน'),
      serialNumber: Yup.string()
     
      .required('กรุณากรอกข้อมูลให้ครบถ้วน'),

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
      image1: Yup.string().required('')
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
        (values.image1 != '' || jobDetailData.liquidDispenser.image != '')
      ) {
        console.log('next');

        if (jobDetailData.liquidDispenser.image == '') {
          const formData = new FormData();
          formData.append('JobId', job_ID);
          formData.append('Images', imgFile);
          postImage(formData)
            .then(res => {
              const imgresult = res.data.data;
              // console.log(imgresult);
              setJobDetailData(prevState => ({
                ...prevState,
                liquidDispenser: {
                  ...prevState.liquidDispenser,
                  image: imgresult
                }
              }));
              handleNext();
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          if (preImg.length > 0) {
            const formData = new FormData();
            formData.append('ImagesId', jobDetailData.liquidDispenser.image);
            formData.append('JobId', job_ID);
            formData.append('Images', imgFile);
            putImage(formData)
              .then(res => {
                setJobDetailData(prevState => ({
                  ...prevState,
                  liquidDispenser: {
                    ...prevState.liquidDispenser,
                    image: jobDetailData.liquidDispenser.image
                  }
                }));
                handleNext();
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            handleNext();
          }
        }
      } else {
        console.log('error');
      }
    }
  });

  const handleNext = () => {
    updateJob(jobDetailData).then(res => {
      setNext(!next);
      // if (jobDetailData.liquidDispenser.status == 1) {
      //   setJobDetailData(prevState => ({
      //     ...prevState,

      //     liquidDispenser: {
      //       ...prevState.liquidDispenser,
      //       status: 2
      //     }
      //   }));
      // }
    });
  };
  const handleDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const type = ['OT-AIRDIS', 'OT-FOAMDIS', 'OT-GELAUTO'];

  return (
    <div style={{ margin: 10 }}>
      {next ? (
        <FormOne2
          sign1={sign1}
          sign2={sign2}
          dateDetail={dateDetail}
          handleNext={handleNext}
          jobDetailData={jobDetailData}
          setJobDetailData={setJobDetailData}
        />
      ) : (
        <>
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
                <Grid container>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="h1" className={classes.title}>
                      ตรวจเช็คอุปกรณ์จ่ายน้ำยา
                    </Typography>
                  </Grid>
                  {/* <Grid item xs={12} sm={3}>
                    {
                    jobDetailData.liquidDispenser.signatureCustomer.length >
                      0 &&
                    jobDetailData.liquidDispenser.signatureEmployee.length >
                      0
               
                       ? (
                      <PDFDownloadLink
                        document={
                          <PDFform1 title="LiquidDispenser"  job_ID={job_ID}/>
                        }
                        fileName="FORM 1"
                        style={{textDecoration:'none'} }
                      >
                        {({ loading, error }) =>
                          loading ? 
                          null : (
                            <Button fullWidth className={classes.btnAdd}>
                              <Typography variant="subtitle2">
                                พิมพ์เอกสาร PDF
                              </Typography>
                            </Button>
                          )
                        }
                      </PDFDownloadLink>
                    ) : null}
                  </Grid> */}
                </Grid>

                <Box mt={2} />
                <Typography variant="body2" className={classes.title}>
                  เลขที่ใบงาน {jobDetailData.jobId}
                </Typography>
                <Box mt={2} />
                <Typography variant="body2" className={classes.title}>
                  วันที่นัดหมาย {splitDate(jobDetailData.jobDate, 4, 2)}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
          <Box mt={2} />
          <form onSubmit={formik.handleSubmit}>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item xs={12} sm={8}>
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
                            <Typography variant="subtitle2">
                              โทรศัพท์
                            </Typography>
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
                                jobDetailData.liquidDispenser.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.liquidDispenser.signatureEmployee
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
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <Grid container>
                              <Typography variant="subtitle2">
                                ชื่ออุปกรณ์
                              </Typography>
                            </Grid>
                            <Box mb={1} />
                            {formik.values.productName.length > 1 ? (
                              <TextField
                                className={classes.disableText}
                                fullWidth
                                id="productName"
                                name="productName"
                                variant="outlined"
                                placeholder={formik.values.productName}
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
                            setTestBar={setTestBar}
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
                                jobDetailData.liquidDispenser.signatureCustomer
                                  .length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                              )}
                              value={formik.values.serialNumber}
                              onChange={e => {
                                //console.log(e.target.value);
                                handleSerialNumber(e.target.value);
                                formik.handleChange(e);
                              }}
                              inputProps={{ maxLength: 20 }}
                              // InputProps={{
                              //   maxLength: 5,
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
                                jobDetailData.liquidDispenser.signatureCustomer
                                  .length > 0 &&
                                jobDetailData.liquidDispenser.signatureEmployee
                                  .length > 0
                              }
                            />
                          </Grid>
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
                            {jobDetailData.liquidDispenser.image ? (
                              <img
                                src={getImgForm(
                                  jobDetailData.liquidDispenser.image
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
                          onChange={e => {
                            handleChangeimg(e);
                          }}
                          disabled={
                            jobDetailData.liquidDispenser.signatureCustomer
                              .length > 0 &&
                            jobDetailData.liquidDispenser.signatureEmployee
                              .length > 0
                          }
                        />{' '}
                        <label htmlFor="contained-button-file">
                          <Button
                            className={classes.btnChoose}
                            variant="contained"
                            component="span"
                            startIcon={
                              <IconUpload style={{ width: '1.5vh' }} />
                            }
                            disabled={
                              jobDetailData.liquidDispenser.signatureCustomer
                                .length > 0 &&
                              jobDetailData.liquidDispenser.signatureEmployee
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
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                              formik.setFieldValue(
                                'radiogroup1',
                                e.target.value
                              );
                            }}
                          >
                            {jobDetailData.liquidDispenser.machineBefore1 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore1 ==
                            2 ? (
                              <FormControlLabel
                                value={parseInt(2)}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore1 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore1 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
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
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                              formik.setFieldValue(
                                'radiogroup2',
                                e.target.value
                              );
                            }}
                          >
                            {jobDetailData.liquidDispenser.machineAfter1 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter1 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter1 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter1 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
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
                    <Box mt={2} />
                    <Typography variant="h4" style={{ fontWeight: '500' }}>
                      2.2.1. ฝาครอบเครื่องแน่น ไม่ขยับ
                    </Typography>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box mt={2} />
                        <Grid container>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                            aria-label="machineBefore21"
                            name="machineBefore21"
                            value={formik.values.radiogroup3}
                            onChange={e => {
                              handleRadioChange3(e);
                              handleChangeMachineBefore21(e);
                              formik.setFieldValue(
                                'radiogroup3',
                                e.target.value
                              );
                            }}
                          >
                            {jobDetailData.liquidDispenser.machineBefore21 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore21 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore21 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore21 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}
                          </RadioGroup>
                          <FormHelperText>
                            {radioGroupError3.helperText}
                          </FormHelperText>
                        </FormControl>
                        {/* ----------------end radio config before------------------------------ */}
                      </Grid>
                      <Grid item xs={6}>
                        <Box mt={2} />
                        <Grid container>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                            aria-label="machineAfter21"
                            name="machineAfter21"
                            value={formik.values.radiogroup4}
                            onChange={e => {
                              handleRadioChange4(e);
                              handleChangeMachineAfter21(e);
                              formik.setFieldValue(
                                'radiogroup4',
                                e.target.value
                              );
                            }}
                            dataName="machineBefore1"
                          >
                            {jobDetailData.liquidDispenser.machineAfter21 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter21 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter21 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter21 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}
                          </RadioGroup>
                          <FormHelperText>
                            {radioGroupError4.helperText}
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

                    <Typography variant="h4" style={{ fontWeight: '500' }}>
                      2.2.2. ปุ่มกดล็อคปรับคืนได้
                    </Typography>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box mt={2} />
                        <Grid container>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                            aria-label="machineBefore22"
                            name="machineBefore22"
                            value={formik.values.radiogroup5}
                            onChange={e => {
                              handleRadioChange5(e);
                              handleChangeMachineBefore22(e);
                              formik.setFieldValue(
                                'radiogroup5',
                                e.target.value
                              );
                            }}
                          >
                            {jobDetailData.liquidDispenser.machineBefore22 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore22 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore22 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore22 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
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
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                            aria-label="machineAfter22"
                            name="machineAfter22"
                            value={formik.values.radiogroup6}
                            onChange={e => {
                              handleRadioChange6(e);
                              handleChangeMachineAfter22(e);
                              formik.setFieldValue(
                                'radiogroup6',
                                e.target.value
                              );
                            }}
                          >
                            {jobDetailData.liquidDispenser.machineAfter22 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter22 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter22 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter22 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
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
                      2.3. ความสะอาดของอุปกรณ์
                    </Typography>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box mt={2} />
                        <Grid container>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                            aria-label="machineBefore3"
                            name="machineBefore3"
                            value={formik.values.radiogroup7}
                            onChange={e => {
                              handleRadioChange7(e);
                              handleChangeMachineBefore3(e);
                              formik.setFieldValue(
                                'radiogroup7',
                                e.target.value
                              );
                            }}
                          >
                            {jobDetailData.liquidDispenser.machineBefore3 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore3 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore3 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore3 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
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
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                            aria-label="machineAfter3"
                            name="machineAfter3"
                            value={formik.values.radiogroup8}
                            onChange={e => {
                              handleRadioChange8(e);
                              handleChangeMachineAfter3(e);
                              formik.setFieldValue(
                                'radiogroup8',
                                e.target.value
                              );
                            }}
                          >
                            {jobDetailData.liquidDispenser.machineAfter3 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter3 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter3 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter3 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
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
                    <Typography variant="h3">2.4. หัวจ่ายน้ำยา</Typography>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box mt={2} />
                        <Grid container>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                            aria-label="machineBefore4"
                            name="machineBefore4"
                            value={formik.values.radiogroup9}
                            onChange={e => {
                              handleRadioChange9(e);
                              handleChangeMachineBefore4(e);
                              formik.setFieldValue(
                                'radiogroup9',
                                e.target.value
                              );
                            }}
                          >
                            {jobDetailData.liquidDispenser.machineBefore4 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore4 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore4 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore4 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
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
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                            aria-label="machineAfter4"
                            name="machineAfter4"
                            value={formik.values.radiogroup10}
                            onChange={e => {
                              handleRadioChange10(e);
                              handleChangeMachineAfter4(e);
                              formik.setFieldValue(
                                'radiogroup10',
                                e.target.value
                              );
                            }}
                          >
                            {jobDetailData.liquidDispenser.machineAfter4 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter4 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter4 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter4 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
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
                    <Typography variant="h3">2.5. Battery</Typography>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box mt={2} />
                        <Grid container>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                            aria-label="machineBefore5"
                            name="machineBefore5"
                            value={formik.values.radiogroup11}
                            onChange={e => {
                              handleRadioChange11(e);
                              handleChangeMachineBefore5(e);
                              formik.setFieldValue(
                                'radiogroup11',
                                e.target.value
                              );
                            }}
                          >
                            {jobDetailData.liquidDispenser.machineBefore5 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore5 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore5 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore5 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
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
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                            aria-label="machineAfter5"
                            name="machineAfter5"
                            value={formik.values.radiogroup12}
                            onChange={e => {
                              handleRadioChange12(e);
                              handleChangeMachineAfter5(e);
                              formik.setFieldValue(
                                'radiogroup12',
                                e.target.value
                              );
                            }}
                          >
                            {jobDetailData.liquidDispenser.machineAfter5 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter5 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter5 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter5 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
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
                    <Typography variant="h3">
                      2.6. ปริมาณน้ำยาในเครือง
                    </Typography>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box mt={2} />
                        <Grid container>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                            aria-label="machineBefore6"
                            name="machineBefore6"
                            value={formik.values.radiogroup13}
                            onChange={e => {
                              handleRadioChange13(e);
                              handleChangeMachineBefore6(e);
                              formik.setFieldValue(
                                'radiogroup13',
                                e.target.value
                              );
                            }}
                          >
                            {jobDetailData.liquidDispenser.machineBefore6 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore6 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore6 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore6 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
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
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
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
                            aria-label="machineAfter6"
                            name="machineAfter6"
                            value={formik.values.radiogroup14}
                            onChange={e => {
                              handleRadioChange14(e);
                              handleChangeMachineAfter6(e);
                              formik.setFieldValue(
                                'radiogroup14',
                                e.target.value
                              );
                            }}
                          >
                            {jobDetailData.liquidDispenser.machineAfter6 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter6 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter6 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter6 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
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
                    <Typography variant="h3">
                      2.7. ความแข็งแรงของขาตั้ง (ถ้ามี)
                    </Typography>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box mt={2} />
                        <Grid container>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
                            ก่อนการตรวจเช็ค
                          </Typography>
                        </Grid>
                        {/* ----------------start radio config before------------------------------ */}
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            value={jobDetailData.liquidDispenser.machineBefore7}
                            onChange={handleChangeMachineBefore7}
                          >
                            {jobDetailData.liquidDispenser.machineBefore7 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore7 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore7 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore7 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}
                          </RadioGroup>
                        </FormControl>
                        {/* ----------------end radio config before------------------------------ */}
                      </Grid>
                      <Grid item xs={6}>
                        <Box mt={2} />
                        <Grid container>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
                            หลังการตรวจเช็ค
                          </Typography>
                        </Grid>
                        {/* ----------------start radio config after------------------------------ */}
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            value={jobDetailData.liquidDispenser.machineAfter7}
                            onChange={handleChangeMachineAfter7}
                          >
                            {jobDetailData.liquidDispenser.machineAfter7 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter7 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter7 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter7 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}
                          </RadioGroup>
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
                      2.8. ความสะอาดของขาตั้ง (ถ้ามี)
                    </Typography>
                    <Grid container>
                      <Grid item xs={6}>
                        <Box mt={2} />
                        <Grid container>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
                            ก่อนการตรวจเช็ค
                          </Typography>
                          <Box ml={1} />
                        </Grid>
                        {/* ----------------start radio config before------------------------------ */}
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            value={jobDetailData.liquidDispenser.machineBefore8}
                            onChange={handleChangeMachineBefore8}
                          >
                            {jobDetailData.liquidDispenser.machineBefore8 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore8 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore8 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineBefore8 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}
                          </RadioGroup>
                        </FormControl>
                        {/* ----------------end radio config before------------------------------ */}
                      </Grid>
                      <Grid item xs={6}>
                        <Box mt={2} />
                        <Grid container>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: '1000' }}
                          >
                            หลังการตรวจเช็ค
                          </Typography>
                        </Grid>
                        {/* ----------------start radio config after------------------------------ */}
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            value={jobDetailData.liquidDispenser.machineAfter8}
                            onChange={handleChangeMachineAfter8}
                          >
                            {jobDetailData.liquidDispenser.machineAfter8 ==
                            1 ? (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                checked={true}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={1}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดีมาก 100%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter8 ==
                            2 ? (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={2}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ดี 80%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter8 ==
                            3 ? (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={3}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="พอใช้ 60%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}

                            {jobDetailData.liquidDispenser.machineAfter8 ==
                            4 ? (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                checked
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            ) : (
                              <FormControlLabel
                                value={4}
                                control={handleDisableRadio(
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                    jobDetailData.liquidDispenser
                                      .signatureEmployee.length > 0
                                )}
                                label="ควรปรับปรุง <40%"
                                classes={{
                                  label: classes.label
                                }}
                                disabled={
                                  jobDetailData.liquidDispenser
                                    .signatureCustomer.length > 0 &&
                                  jobDetailData.liquidDispenser
                                    .signatureEmployee.length > 0
                                }
                              />
                            )}
                          </RadioGroup>
                        </FormControl>
                        {/* ----------------end radio config after------------------------------ */}
                      </Grid>
                    </Grid>

                    {/* <Box mt={2} />
                <Divider />
                <Box mt={2} /> */}
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
                      value={jobDetailData.liquidDispenser.description}
                      onChange={handleChangeFeedBack}
                      placeholder="กรุณากรอกข้อมูล"
                      color="secondary"
                      size="small"
                      disabled={
                        jobDetailData.liquidDispenser.signatureCustomer.length >
                          0 &&
                        jobDetailData.liquidDispenser.signatureEmployee.length >
                          0
                      }
                      className={handleDisableText(
                        jobDetailData.liquidDispenser.signatureCustomer.length >
                          0 &&
                          jobDetailData.liquidDispenser.signatureEmployee
                            .length > 0
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
                      onClick={handleSubmitRadio}
                      fullWidth
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </form>
        </>
      )}
      <Box mt={10} />
    </div>
  );
}

export default FormOne;
