import React from 'react';
import {
  Typography,
  Grid,
  TextField,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  makeStyles,
  FormHelperText,
  RadioGroup,
  Divider,
  Card,
  Button
} from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { getProductSearch } from '../../api/keeen/product';
import IconUpload from 'src/components/keen/icon/iconUpload';
import { postImage, getImage, putImage,deleteImage } from '../../api/keeen/uploadimg';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  cardPad: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  disableText: {
    backgroundColor: '#E9E9E9',
    borderColor: '#687178'
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
}));

function Head3(props) {
  const classes = useStyles();
  const formik = props.formik;

  // useEffect(()=>{
  //   console.log('img4 change');
  // },[props.preImg4])
  
  const handleChangeMachineBefore5 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeBefore31: data
      }
    }));
  };

  const handleChangeMachineAfter5 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeAfter31: data
      }
    }));
  };
  const handleChangeMachineBefore6 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeBefore32: data
      }
    }));
  };

  const handleChangeMachineAfter6 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeAfter32: data
      }
    }));
  };
  const handleChangeMachineBefore7 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeBefore331: data
      }
    }));
  };

  const handleChangeMachineAfter7 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeAfter331: data
      }
    }));
  };
  const handleChangeMachineBefore8 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeBefore332: data
      }
    }));
  };

  const handleChangeMachineAfter8 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeAfter332: data
      }
    }));
  };
  const handleChangeMachineBefore9 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeBefore333: data
      }
    }));
  };

  const handleChangeMachineAfter9 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeAfter333: data
      }
    }));
  };
  const handleChangeMachineBefore10 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeBefore34: data
      }
    }));
  };

  const handleChangeMachineAfter10 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeAfter34: data
      }
    }));
  };
  const handleChangeMachineBefore11 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeBefore35: data
      }
    }));
  };

  const handleChangeMachineAfter11 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeAfter35: data
      }
    }));
  };
  // ---------------------------------------------
  const handleRadioChange9 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError9(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange10 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError10(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange11 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError11(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange12 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError12(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange13 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError13(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange14 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError14(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange15 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError15(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange16 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError16(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange17 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError17(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange18 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError18(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange19 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError19(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange20 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError20(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange21 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError21(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange22 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError22(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };

  //  -------choice 4----------
  const handleBarcode = data => {

    const result = data;
    props.setBarcodeHead1(prevState => ({
      ...prevState,
      value: result,
      error: false,
      helperText: ''
    }));
    searchProduct(result);
    props.setJobDetailData(prevState => ({
      ...prevState,
      proMax: {
        ...prevState.proMax,
        headThreeBarcode2: data
      }
    }));
  };
  const searchProduct = data => {
    getProductSearch(data)
      .then(res => {
        const productNameget = res.data.result.data.productName;
        console.log(res.data.result.data.productName);
       
        props.setJobDetailData(prevState => ({
          ...prevState,
          proMax: {
            ...prevState.proMax,
            headThreeProductKeeenName: productNameget
          }
        }));
      })
      .catch(error => {
      
        props.setJobDetailData(prevState => ({
          ...prevState,
          proMax: {
            ...prevState.proMax,
            headThreeProductKeeenName: ''
          }
        }));
      });
  };
  const handleLotNo = data => {
    const result = data
    props.setLotnoHead1(prevState => ({
      ...prevState,
      value: result,
      error: false,
      helperText: ''
    }));
    props.setJobDetailData(prevState => ({
      ...prevState,
      proMax: {
        ...prevState.proMax,
        headThreeProductKeeenLotNo: data
      }
    }));
  };
  const handleProduct1 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThree41: data
      }
    }));
  };
  const handleProduct2 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThree42: data
      }
    }));
  };
  const handleProduct3 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThree43: data
      }
    }));
  };
  const handleProduct4 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThree44: data
      }
    }));
  };
  
  const handleChangeheadThreeBefore51 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeBefore51: data
      }
    }));
  };
  
  const handleChangeheadThreeBefore521 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeBefore521: data
      }
    }));
  };
  const handleChangeheadThreeAfter521 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeAfter521: data
      }
    }));
  };
  const handleChangeheadThreeBefore522 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeBefore522: data
      }
    }));
  };
  const handleChangeheadThreeAfter522 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeAfter522: data
      }
    }));
  };

  const handleChangeheadThreeBefore531 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeBefore531: data
      }
    }));
  };
  const handleChangeheadThreeBefore532 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeBefore532: data
      }
    }));
  };
  const handleChangeheadThreeBefore533 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeBefore533: data
      }
    }));
  };
  const handleChangeFeedBack2 = event => {
    const data = event.target.value;
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headThreeDescription2: data
      }
    }));
  };
  const handleRadioChange23 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError23(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const getImgForm = data => {
    getImage(data).then(res => {
      const result = res.data.data.images;
      props.setImageFirst4(result);
    });
    return props.imageFirst4;
  };
  const handleRadioChange24 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError24(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange25 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError25(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange26 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError26(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange27 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError27(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange28 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError28(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange29 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError29(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange30 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError30(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange31 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError31(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange32 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError32(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange33 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError33(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  const handleRadioChange34 = event => {
    // console.log(event.target.value);
    props.setRadioGroupError34(prevState => ({
      ...prevState,
      value: event.target.value,
      error: false,
      helperText: ''
    }));
  };
  return (
    <div>
      <Card
        className={classes.cardPad}
        style={{
          borderRadius: 0
        }}
      >
        <Grid container>
          <Typography variant="h3">3.1. การเปิด-ปิด วาล์ว</Typography>
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
                error={props.radioGroupError9.error}
              >
                <RadioGroup
                  aria-label="machineBefore5"
                  name="machineBefore5"
                  value={formik.values.radiogroup61}
                  onChange={e => {
                    handleRadioChange9(e);
                    handleChangeMachineBefore5(e);
                    formik.setFieldValue('radiogroup61', e.target.value);
                  }}
                >
                  {props.jobDetailData.proMax.headThreeBefore31 == 1 ? (
                    <FormControlLabel
                      value={1}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดีมาก 100%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked={true}
                    />
                  ) : (
                    <FormControlLabel
                      value={1}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดีมาก 100%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}

                  {props.jobDetailData.proMax.headThreeBefore31 == 2 ? (
                    <FormControlLabel
                      value={2}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดี 80%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked
                    />
                  ) : (
                    <FormControlLabel
                      value={2}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดี 80%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}

                  {props.jobDetailData.proMax.headThreeBefore31 == 3 ? (
                    <FormControlLabel
                      value={3}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="พอใช้ 60%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked
                    />
                  ) : (
                    <FormControlLabel
                      value={3}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="พอใช้ 60%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}

                  {props.jobDetailData.proMax.headThreeBefore31 == 4 ? (
                    <FormControlLabel
                      value={4}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ควรปรับปรุง <40%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked
                    />
                  ) : (
                    <FormControlLabel
                      value={4}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ควรปรับปรุง <40%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}
                </RadioGroup>
                <FormHelperText>
                  {props.radioGroupError9.helperText}
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
                error={props.radioGroupError10.error}
              >
                <RadioGroup
                  aria-label="machineAfter5"
                  name="machineAfter5"
                  value={formik.values.radiogroup62}
                  onChange={e => {
                    handleRadioChange10(e);
                    handleChangeMachineAfter5(e);
                    formik.setFieldValue('radiogroup62', e.target.value);
                  }}
                >
                  {props.jobDetailData.proMax.headThreeAfter31 == 1 ? (
                    <FormControlLabel
                      value={1}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดีมาก 100%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked={true}
                    />
                  ) : (
                    <FormControlLabel
                      value={1}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดีมาก 100%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}

                  {props.jobDetailData.proMax.headThreeAfter31 == 2 ? (
                    <FormControlLabel
                      value={2}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดี 80%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked
                    />
                  ) : (
                    <FormControlLabel
                      value={2}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดี 80%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}

                  {props.jobDetailData.proMax.headThreeAfter31 == 3 ? (
                    <FormControlLabel
                      value={3}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="พอใช้ 60%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked
                    />
                  ) : (
                    <FormControlLabel
                      value={3}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="พอใช้ 60%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}

                  {props.jobDetailData.proMax.headThreeAfter31 == 4 ? (
                    <FormControlLabel
                      value={4}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ควรปรับปรุง <40%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked
                    />
                  ) : (
                    <FormControlLabel
                      value={4}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ควรปรับปรุง <40%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}
                </RadioGroup>
                <FormHelperText>
                  {props.radioGroupError10.helperText}
                </FormHelperText>
              </FormControl>
              {/* ----------------end radio config after------------------------------ */}
            </Grid>
          </Grid>
        </Grid>
        <Box mt={2} />
        <Divider />
        <Box mt={2} />
        {/* -----end----------- */}

        {/* ---start------------ */}

        <Grid container>
          <Typography variant="h3">
            3.2. Mertering Tip อยู่ตำแหน่งเดิม
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
                error={props.radioGroupError11.error}
              >
                <RadioGroup
                  aria-label="machineBefore6"
                  name="machineBefore6"
                  value={formik.values.radiogroup63}
                  onChange={e => {
                    handleRadioChange11(e);
                    handleChangeMachineBefore6(e);
                    formik.setFieldValue('radiogroup63', e.target.value);
                  }}
                >
                  {props.jobDetailData.proMax.headThreeBefore32 == 1 ? (
                    <FormControlLabel
                      value={1}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดีมาก 100%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked={true}
                    />
                  ) : (
                    <FormControlLabel
                      value={1}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดีมาก 100%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}

                  {props.jobDetailData.proMax.headThreeBefore32 == 2 ? (
                    <FormControlLabel
                      value={2}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดี 80%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked
                    />
                  ) : (
                    <FormControlLabel
                      value={2}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดี 80%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}

                  {props.jobDetailData.proMax.headThreeBefore32 == 3 ? (
                    <FormControlLabel
                      value={3}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="พอใช้ 60%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked
                    />
                  ) : (
                    <FormControlLabel
                      value={3}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="พอใช้ 60%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}

                  {props.jobDetailData.proMax.headThreeBefore32 == 4 ? (
                    <FormControlLabel
                      value={4}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ควรปรับปรุง <40%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked
                    />
                  ) : (
                    <FormControlLabel
                      value={4}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ควรปรับปรุง <40%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}
                </RadioGroup>
                <FormHelperText>
                  {props.radioGroupError11.helperText}
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
                error={props.radioGroupError12.error}
              >
                <RadioGroup
                  aria-label="machineAfter6"
                  name="machineAfter6"
                  value={formik.values.radiogroup64}
                  onChange={e => {
                    handleRadioChange12(e);
                    handleChangeMachineAfter6(e);
                    formik.setFieldValue('radiogroup64', e.target.value);
                  }}
                >
                  {props.jobDetailData.proMax.headThreeAfter32 == 1 ? (
                    <FormControlLabel
                      value={1}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดีมาก 100%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked={true}
                    />
                  ) : (
                    <FormControlLabel
                      value={1}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดีมาก 100%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}

                  {props.jobDetailData.proMax.headThreeAfter32 == 2 ? (
                    <FormControlLabel
                      value={2}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดี 80%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked
                    />
                  ) : (
                    <FormControlLabel
                      value={2}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ดี 80%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}

                  {props.jobDetailData.proMax.headThreeAfter32 == 3 ? (
                    <FormControlLabel
                      value={3}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="พอใช้ 60%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked
                    />
                  ) : (
                    <FormControlLabel
                      value={3}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="พอใช้ 60%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}

                  {props.jobDetailData.proMax.headThreeAfter32 == 4 ? (
                    <FormControlLabel
                      value={4}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ควรปรับปรุง <40%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                      checked
                    />
                  ) : (
                    <FormControlLabel
                      value={4}
                      control={props.handleDisableRadio(
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                          props.jobDetailData.proMax.signatureEmployee.length >
                            0
                      )}
                      label="ควรปรับปรุง <40%"
                      disabled={
                        props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                      }
                      classes={{
                        label: classes.label
                      }}
                    />
                  )}
                </RadioGroup>
                <FormHelperText>
                  {props.radioGroupError12.helperText}
                </FormHelperText>
              </FormControl>
              {/* ----------------end radio config after------------------------------ */}
            </Grid>
          </Grid>
        </Grid>
        <Box mt={2} />
        <Divider />
        <Box mt={2} />
        {/* -----end----------- */}

        {/* ---start------------ */}

        <Typography variant="h3">3.3. สายยาง</Typography>
        <Box mt={2} />
        <Typography variant="h4" style={{ fontWeight: '500' }}>
          3.3.1. สายยางดูดน้ำยา
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
              error={props.radioGroupError13.error}
            >
              <RadioGroup
                aria-label="machineBefore7"
                name="machineBefore7"
                value={formik.values.radiogroup65}
                onChange={e => {
                  handleRadioChange13(e);
                  handleChangeMachineBefore7(e);
                  formik.setFieldValue('radiogroup65', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headThreeBefore331 == 1 ? (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked={true}
                  />
                ) : (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore331 == 2 ? (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore331 == 3 ? (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore331 == 4 ? (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}
              </RadioGroup>
              <FormHelperText>
                {props.radioGroupError13.helperText}
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
              error={props.radioGroupError14.error}
            >
              <RadioGroup
                aria-label="machineAfter7"
                name="machineAfter7"
                value={formik.values.radiogroup66}
                onChange={e => {
                  handleRadioChange14(e);
                  handleChangeMachineAfter7(e);
                  formik.setFieldValue('radiogroup66', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headThreeAfter331 == 1 ? (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked={true}
                  />
                ) : (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter331 == 2 ? (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter331 == 3 ? (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter331 == 4 ? (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}
              </RadioGroup>
              <FormHelperText>
                {props.radioGroupError14.helperText}
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
          3.3.2. สายยางน้ำประปา
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
              error={props.radioGroupError15.error}
            >
              <RadioGroup
                aria-label="machineBefore8"
                name="machineBefore8"
                value={formik.values.radiogroup67}
                onChange={e => {
                  handleRadioChange15(e);
                  handleChangeMachineBefore8(e);
                  formik.setFieldValue('radiogroup67', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headThreeBefore332 == 1 ? (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked={true}
                  />
                ) : (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore332 == 2 ? (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore332 == 3 ? (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore332 == 4 ? (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}
              </RadioGroup>
              <FormHelperText>
                {props.radioGroupError15.helperText}
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
              error={props.radioGroupError16.error}
            >
              <RadioGroup
                aria-label="machineAfter8"
                name="machineAfter8"
                value={formik.values.radiogroup68}
                onChange={e => {
                  handleRadioChange16(e);
                  handleChangeMachineAfter8(e);
                  formik.setFieldValue('radiogroup68', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headThreeAfter332 == 1 ? (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked={true}
                  />
                ) : (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter332 == 2 ? (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter332 == 3 ? (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter332 == 4 ? (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}
              </RadioGroup>
              <FormHelperText>
                {props.radioGroupError16.helperText}
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
          3.3.3. สายยางปล่อยน้ำยาที่ผสมแล้ว
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
              error={props.radioGroupError17.error}
            >
              <RadioGroup
                aria-label="machineBefore9"
                name="machineBefore9"
                value={formik.values.radiogroup69}
                onChange={e => {
                  handleRadioChange17(e);
                  handleChangeMachineBefore9(e);
                  formik.setFieldValue('radiogroup69', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headThreeBefore333 == 1 ? (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked={true}
                  />
                ) : (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore333 == 2 ? (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore333 == 3 ? (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore333 == 4 ? (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}
              </RadioGroup>
              <FormHelperText>
                {props.radioGroupError17.helperText}
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
              error={props.radioGroupError18.error}
            >
              <RadioGroup
                aria-label="machineAfter9"
                name="machineAfter9"
                value={formik.values.radiogroup70}
                onChange={e => {
                  handleRadioChange18(e);
                  handleChangeMachineAfter9(e);
                  formik.setFieldValue('radiogroup70', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headThreeAfter333 == 1 ? (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked={true}
                  />
                ) : (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter333 == 2 ? (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter333 == 3 ? (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter333 == 4 ? (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}
              </RadioGroup>
              <FormHelperText>
                {props.radioGroupError18.helperText}
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
          3.4. ตรวจเช็คการรั่วซึมตามแนวข้อต่อต่างๆ
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
              error={props.radioGroupError19.error}
            >
              <RadioGroup
                aria-label="machineBefore9"
                name="machineBefore9"
                value={formik.values.radiogroup71}
                onChange={e => {
                  handleRadioChange19(e);
                  handleChangeMachineBefore10(e);
                  formik.setFieldValue('radiogroup71', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headThreeBefore34 == 1 ? (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked={true}
                  />
                ) : (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore34 == 2 ? (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore34 == 3 ? (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore34 == 4 ? (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}
              </RadioGroup>
              <FormHelperText>
                {props.radioGroupError19.helperText}
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
              error={props.radioGroupError20.error}
            >
              <RadioGroup
                aria-label="machineAfter10"
                name="machineAfter10"
                value={formik.values.radiogroup72}
                onChange={e => {
                  handleRadioChange20(e);
                  handleChangeMachineAfter10(e);
                  formik.setFieldValue('radiogroup72', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headThreeAfter34 == 1 ? (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked={true}
                  />
                ) : (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter34 == 2 ? (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter34 == 3 ? (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter34 == 4 ? (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}
              </RadioGroup>
              <FormHelperText>
                {props.radioGroupError20.helperText}
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
          3.5. ตรวจชุดถ่วงน้ำหนัก (เซรามิคถ่วงน้ำหนัก/กรองดักตะกอน)
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
              error={props.radioGroupError21.error}
            >
              <RadioGroup
                aria-label="machineBefore11"
                name="machineBefore11"
                value={formik.values.radiogroup73}
                onChange={e => {
                  handleRadioChange21(e);
                  handleChangeMachineBefore11(e);
                  formik.setFieldValue('radiogroup73', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headThreeBefore35 == 1 ? (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked={true}
                  />
                ) : (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore35 == 2 ? (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore35 == 3 ? (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeBefore35 == 4 ? (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}
              </RadioGroup>
              <FormHelperText>
                {props.radioGroupError21.helperText}
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
              error={props.radioGroupError22.error}
            >
              <RadioGroup
                aria-label="machineAfter11"
                name="machineAfter11"
                value={formik.values.radiogroup74}
                onChange={e => {
                  handleRadioChange22(e);
                  handleChangeMachineAfter11(e);
                  formik.setFieldValue('radiogroup74', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headThreeAfter35 == 1 ? (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked={true}
                  />
                ) : (
                  <FormControlLabel
                    value={1}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดีมาก 100%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter35 == 2 ? (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={2}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ดี 80%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter35 == 3 ? (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={3}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="พอใช้ 60%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}

                {props.jobDetailData.proMax.headThreeAfter35 == 4 ? (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                    checked
                  />
                ) : (
                  <FormControlLabel
                    value={4}
                    control={props.handleDisableRadio(
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0
                    )}
                    label="ควรปรับปรุง <40%"
                    disabled={
                      props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                    }
                    classes={{
                      label: classes.label
                    }}
                  />
                )}
              </RadioGroup>
              <FormHelperText>
                {props.radioGroupError22.helperText}
              </FormHelperText>
            </FormControl>
            {/* ----------------end radio config after------------------------------ */}
          </Grid>
        </Grid>
        {/* -----end----------- */}
      </Card>
      <Box mt={2} />
      <Card
        className={classes.cardPad}
        style={{
          borderRadius: 0
        }}
      >
        <Grid container>
          <Typography variant="h3" style={{ fontWeight: '1000' }}>
            4. ผลิตภัณฑ์ Keeen / Dr. Keeen
          </Typography>
          <Box ml={1} />
          <Typography style={{ color: '#D44848' }}> * </Typography>
        </Grid>
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
                      className={props.handleDisableText(
                        props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                      )}
                      id="barcode2"
                      name="barcode2"
                      variant="outlined"
                      value={formik.values.barcodeHead3}
                      // onChange={formik.handleChange}
                      onChange={e => {
                        handleBarcode(e.target.value);
                        formik.setFieldValue('barcodeHead3', e.target.value);
                      }}
                      inputProps={{ maxLength: 20 }}
       
                      placeholder="กรุณากรอกข้อมูล"
                      error={Boolean(props.barcodeHead1.error)}
              
                      color="secondary"
                      size="small"
                      disabled={ props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                    />
                     <FormHelperText error={props.barcodeHead1.error}>
                {props.barcodeHead1.helperText}
              </FormHelperText>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Grid container>
                      <Typography variant="subtitle2">ชื่อสินค้า</Typography>
                    </Grid>
                    <Box mb={1} />
                    {props.jobDetailData.proMax.headThreeProductKeeenName.length > 1 ? (
                      <TextField
                        className={classes.disableText}
                        fullWidth
                        id="productKeeenName"
                        name="productKeeenName"
                        variant="outlined"
                        placeholder={props.jobDetailData.proMax.headThreeProductKeeenName}
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
                      id="lotnoHead2"
                      name="lotnoHead2"
                      variant="outlined"
                      className={props.handleDisableText(
                        props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                      )}
                      value={formik.values.lotnoHead3}
                      // onChange={formik.handleChange}
                      onChange={e => {
                        handleLotNo(e.target.value);
                        formik.setFieldValue('lotnoHead3', e.target.value);
                      }}
                      placeholder="กรุณากรอกข้อมูล"
                      error={Boolean(props.lotnoHead1.error)}
                      
                      color="secondary"
                      size="small"
                      disabled={ props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                    />
                           <FormHelperText error={props.lotnoHead1.error}>
                {props.lotnoHead1.helperText}
              </FormHelperText>
                  </Grid>
                </Grid>
                <Box mt={2} />
                 {/* --------start--------- */}
                 <Typography variant="h3">
                  4.1. สี (กรณีเลือกผิดปกติ ถ่ายรูปน้ำยาประกอบ)
                </Typography>
                <Box mt={1} />
                {/* ----------------start radio config before------------------------------ */}
                <FormControl
                  component="fieldset"
                  error={props.radioGroupError23.error}
                >
                  <RadioGroup
                    row
                    aria-label="headThree41"
                    name="headThree41"
                    defaultValue="top"
                    value={formik.values.radiogroup75}
                    onChange={e => {
                      handleRadioChange23(e);
                      handleProduct1(e);
                      formik.setFieldValue('radiogroup75', e.target.value);
                    }}
                  >
                    {props.jobDetailData.proMax.headThree41 == 1 ? (
                      <FormControlLabel
                        value={1}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label={
                          <>
                            <Box mt={1} />
                            <Grid container>ปกติ</Grid>
                          </>
                        }
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={1}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label={
                          <>
                            <Box mt={1} />
                            <Grid container>ปกติ</Grid>
                          </>
                        }
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}

                    {props.jobDetailData.proMax.headThree41 == 2 ? (
                      <FormControlLabel
                        value={2}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
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
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={2}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
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
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                          0 &&
                        props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}
                  </RadioGroup>
                  <FormHelperText>
                    {props.radioGroupError23.helperText}
                  </FormHelperText>
                </FormControl>
                {/* ----------------end radio config before------------------------------ */}

                {props.jobDetailData.proMax.headThree41 == 2 ? (
                  <>
                    <Grid item xs={12} sm={12} md={2}>
                      <Grid item xs={12} sm={12} md={12}>
                        {props.preImg4 ? (
                          <img
                            src={props.preImg4}
                            alt="dummy"
                            width="300px"
                            height="188px"
                            borderRadius="1vh"
                          />
                        ) : (
                          <>
                            {props.jobDetailData.proMax.headThreeimage2.length >
                            3 ? (
                              <img
                                src={getImgForm(
                                  props.jobDetailData.proMax.headThreeimage2
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
                          id="head3Img"
                          multiple
                          type="file"
                          onChange={(e)=>{
                            props.handleChangeimgHead(e)
                          }}
                          disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        />{' '}
                        <label htmlFor="head3Img">
                          <Button
                            className={classes.btnChoose}
                            variant="contained"
                            component="span"
                            startIcon={
                              <IconUpload style={{ width: '1.5vh' }} />
                            }
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                          >
                            เพิ่มไฟล์
                          </Button>
                          <FormHelperText error={props.headOneimage.error}>
                            {props.headOneimage.helperText}
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
                <Typography variant="h3">4.2. กลิ่น</Typography>
                <Box mt={1} />
                {/* ----------------start radio config before------------------------------ */}
                <FormControl
                  component="fieldset"
                  error={props.radioGroupError24.error}
                >
                  <RadioGroup
                    row
                    aria-label="headThree42"
                    name="headThree42"
                    defaultValue="top"
                    value={formik.values.radiogroup76}
                    onChange={e => {
                      handleRadioChange24(e);
                      handleProduct2(e);
                      formik.setFieldValue('radiogroup76', e.target.value);
                    }}
                  >
                    {props.jobDetailData.proMax.headThree42 == 1 ? (
                      <FormControlLabel
                        value={1}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="มีกลิ่น"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={1}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="มีกลิ่น"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}

                    {props.jobDetailData.proMax.headThree42 == 2 ? (
                      <FormControlLabel
                        value={2}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="ไม่มีกลิ่น"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={2}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="ไม่มีกลิ่น"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}
                  </RadioGroup>
                  <FormHelperText>
                    {props.radioGroupError24.helperText}
                  </FormHelperText>
                </FormControl>
                {/* ----------------end radio config before------------------------------ */}

                <Box mt={2} />
                <Divider />
                <Box mt={2} />
                {/* --------end------- */}

                {/* --------start--------- */}
                <Typography variant="h3">4.3. ความใส</Typography>
                <Box mt={1} />
                {/* ----------------start radio config before------------------------------ */}
                <FormControl
                  component="fieldset"
                  error={props.radioGroupError25.error}
                >
                  <RadioGroup
                    row
                    aria-label="headThree43"
                    name="headThree43"
                    defaultValue="top"
                    value={formik.values.radiogroup77}
                    onChange={e => {
                      handleRadioChange25(e);
                      handleProduct3(e);
                      formik.setFieldValue('radiogroup77', e.target.value);
                    }}
                  >
                    {props.jobDetailData.proMax.headThree43 == 1 ? (
                      <FormControlLabel
                        value={1}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="ปกติ"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={1}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="ปกติ"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}

                    {props.jobDetailData.proMax.headThree43 == 2 ? (
                      <FormControlLabel
                        value={2}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="ผิดปกติ"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={2}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="ผิดปกติ"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}
                  </RadioGroup>
                  <FormHelperText>
                    {props.radioGroupError25.helperText}
                  </FormHelperText>
                </FormControl>
                {/* ----------------end radio config before------------------------------ */}

                <Box mt={2} />
                <Divider />
                <Box mt={2} />
                {/* --------end------- */}
                {/* --------start--------- */}
                <Typography variant="h3">4.4. pH</Typography>
                <Box mt={1} />
                {/* ----------------start radio config before------------------------------ */}
                <FormControl
                  component="fieldset"
                  error={props.radioGroupError26.error}
                >
                  <RadioGroup
                    row
                    aria-label="headThree44"
                    name="headThree44"
                    defaultValue="top"
                    value={formik.values.radiogroup78}
                    onChange={e => {
                      handleRadioChange26(e);
                      handleProduct4(e);
                      formik.setFieldValue('radiogroup78', e.target.value);
                    }}
                  >
                    {props.jobDetailData.proMax.headThree44 == 1 ? (
                      <FormControlLabel
                        value={1}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="10-12"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={1}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="10-12"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}

                    {props.jobDetailData.proMax.headThree44 == 2 ? (
                      <FormControlLabel
                        value={2}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="8-9"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={2}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="8-9"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}
                    {props.jobDetailData.proMax.headThree44 == 3 ? (
                      <FormControlLabel
                        value={3}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="6-7"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={3}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="6-7"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}
                    {props.jobDetailData.proMax.headThree44 == 4 ? (
                      <FormControlLabel
                        value={4}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="3-5"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                        checked
                      />
                    ) : (
                      <FormControlLabel
                        value={4}
                        control={props.handleDisableRadio(
                          props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                        )}
                        label="3-5"
                        disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        classes={{
                          label: classes.label
                        }}
                      />
                    )}
                  </RadioGroup>
                  <FormHelperText>
                    {props.radioGroupError26.helperText}
                  </FormHelperText>
                </FormControl>
                {/* ----------------end radio config before------------------------------ */}

                <Box mt={2} />
                <Divider />
                <Box mt={2} />
                {/* --------end------- */}
      </Card>
      <Box mt={2} />
      <Card
        className={classes.cardPad}
        style={{
          borderRadius: 0
        }}
      >
        <Grid container>
                  <Typography variant="h3" style={{ fontWeight: '1000' }}>
                    5. ทางเทคนิค
                  </Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mb={1} />
                {/* ------------------------------start 4-------------------------------------- */}
                <Typography variant="h3">
                  5.1. แรงดันนํ้า วัดจากเครื่อง Pressure Guage
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
                      error={props.radioGroupError27.error}
                    >
                      <RadioGroup
                        aria-label="headThreeBefore51"
                        name="headThreeBefore51"
                        value={formik.values.radiogroup79}
                        onChange={e => {
                          handleRadioChange27(e);
                          handleChangeheadThreeBefore51(e);
                          formik.setFieldValue('radiogroup79', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headThreeBefore51 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label=">58psi"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label=">58psi"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore51 ==
                        2 ? (
                          <FormControlLabel
                            value={parseInt(2)}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="29-58psi"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="29-58psi"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore51 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="<29psi"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="<29psi"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {props.radioGroupError27.helperText}
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
                  5.2. ความเที่ยงตรงของเครื่อองมือ
                </Typography>
                <Box mt={2} />
                <Typography variant="h4" style={{ fontWeight: '500' }}>
                  5.2.1. ปริมาณนํ้ายาที่ถูกจ่ายมีความเที่ยงตรง
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
                      error={props.radioGroupError28.error}
                    >
                      <RadioGroup
                        aria-label="headThreeBefore521"
                        name="headThreeBefore521"
                        value={formik.values.radiogroup80}
                        onChange={e => {
                          handleRadioChange28(e);
                          handleChangeheadThreeBefore521(e);
                          formik.setFieldValue('radiogroup80', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headThreeBefore521 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore521 ==
                        2 ? (
                          <FormControlLabel
                            value={2}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดี 80%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดี 80%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore521 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore521 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {props.radioGroupError28.helperText}
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
                      error={props.radioGroupError29.error}
                    >
                      <RadioGroup
                        aria-label="headThreeAfter521"
                        name="headThreeAfter521"
                        value={formik.values.radiogroup81}
                        onChange={e => {
                          handleRadioChange29(e);
                          handleChangeheadThreeAfter521(e);
                          formik.setFieldValue('radiogroup81', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headThreeAfter521 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeAfter521 ==
                        2 ? (
                          <FormControlLabel
                            value={2}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดี 80%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดี 80%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeAfter521 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeAfter521 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {props.radioGroupError29.helperText}
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
                  5.2.2. ปริมาณนํ้าที่ถูกจ่ายมีความเที่ยงตรง
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
                      error={props.radioGroupError30.error}
                    >
                      <RadioGroup
                        aria-label="headThreeBefore522"
                        name="headThreeBefore522"
                        value={formik.values.radiogroup82}
                        onChange={e => {
                          handleRadioChange30(e);
                          handleChangeheadThreeBefore522(e);
                          formik.setFieldValue('radiogroup82', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headThreeBefore522 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore522 ==
                        2 ? (
                          <FormControlLabel
                            value={2}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดี 80%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดี 80%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore522 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore522 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {props.radioGroupError30.helperText}
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
                      error={props.radioGroupError31.error}
                    >
                      <RadioGroup
                        aria-label="headThreeAfter522"
                        name="headThreeAfter522"
                        value={formik.values.radiogroup83}
                        onChange={e => {
                          handleRadioChange31(e);
                          handleChangeheadThreeAfter522(e);
                          formik.setFieldValue('radiogroup83', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headThreeAfter522 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดีมาก 100%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeAfter522 ==
                        2 ? (
                          <FormControlLabel
                            value={2}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดี 80%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ดี 80%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeAfter522 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="พอใช้ 60%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeAfter522 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="ควรปรับปรุง <40%"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {props.radioGroupError31.helperText}
                      </FormHelperText>
                    </FormControl>
                    {/* ----------------end radio config after------------------------------ */}
                  </Grid>
                </Grid>

                <Box mt={2} />
                <Divider />
                <Box mt={2} />
                {/* -----end----------- */}
                {/* -----start--------- */}
                <Typography variant="h3">5.3. คุณภาพน้ำ</Typography>
                <Box mt={2} />
                <Typography variant="h4" style={{ fontWeight: '500' }}>
                  5.3.1. ค่า pH
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
                      error={props.radioGroupError32.error}
                    >
                      <RadioGroup
                        aria-label="headThreeBefore531"
                        name="headThreeBefore531"
                        value={formik.values.radiogroup84}
                        onChange={e => {
                          handleRadioChange32(e);
                          handleChangeheadThreeBefore531(e);
                          formik.setFieldValue('radiogroup84', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headThreeBefore531 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label=">10-12"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label=">10-12"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore531 ==
                        2 ? (
                          <FormControlLabel
                            value={parseInt(2)}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="8-9"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="8-9"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore531 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="6-7"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="6-7"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                        {props.jobDetailData.proMax.headThreeBefore531 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="3-5"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="3-5"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {props.radioGroupError32.helperText}
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
                  5.3.2. ค่า Electrical Conductivity (µs/cm)
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
                      error={props.radioGroupError33.error}
                    >
                      <RadioGroup
                        aria-label="headThreeBefore532"
                        name="headThreeBefore532"
                        value={formik.values.radiogroup85}
                        onChange={e => {
                          handleRadioChange33(e);
                          handleChangeheadThreeBefore532(e);
                          formik.setFieldValue('radiogroup85', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headThreeBefore532 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="> 800"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="> 800"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore532 ==
                        2 ? (
                          <FormControlLabel
                            value={parseInt(2)}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="401 - 800"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="401 - 800"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore532 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="50 - 400"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="50 - 400"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                        {props.jobDetailData.proMax.headThreeBefore532 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="< 50"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="< 50"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {props.radioGroupError33.helperText}
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
                {/* -----start--------- */}

                <Typography variant="h4">5.3.3. ค่า TDS (mg/l)</Typography>
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
                      error={props.radioGroupError34.error}
                    >
                      <RadioGroup
                        aria-label="headThreeBefore533"
                        name="headThreeBefore533"
                        value={formik.values.radiogroup86}
                        onChange={e => {
                          handleRadioChange34(e);
                          handleChangeheadThreeBefore533(e);
                          formik.setFieldValue('radiogroup86', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headThreeBefore533 ==
                        1 ? (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="> 1,000"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked={true}
                          />
                        ) : (
                          <FormControlLabel
                            value={1}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="> 1,000"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore533 ==
                        2 ? (
                          <FormControlLabel
                            value={parseInt(2)}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="501 - 1,0000"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={2}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="501 - 1,0000"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}

                        {props.jobDetailData.proMax.headThreeBefore533 ==
                        3 ? (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="100 - 500"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={3}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="100 - 500"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                        {props.jobDetailData.proMax.headThreeBefore533 ==
                        4 ? (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="< 50"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                            checked
                          />
                        ) : (
                          <FormControlLabel
                            value={4}
                            control={props.handleDisableRadio(
                              props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                            )}
                            label="< 50"
                            disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                            classes={{
                              label: classes.label
                            }}
                          />
                        )}
                      </RadioGroup>
                      <FormHelperText>
                        {props.radioGroupError34.helperText}
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
                {/* -------start-------- */}
                <Typography variant="h4">ข้อเสนอแนะ</Typography>
                <Box mt={1} />

                <TextField
                  fullWidth
                  id="headThreeDescription2"
                  name="headThreeDescription2"
                  variant="outlined"
                  multiline
                  minRows={3}
                  value={props.jobDetailData.proMax.headThreeDescription2}
                  placeholder="กรุณากรอกข้อมูล"
                  onChange={handleChangeFeedBack2}
                  color="secondary"
                  size="small"
                  disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                  className={props.handleDisableText(
                    props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0
                  )}
                />
                {/* ---------end---------- */}
        </Card>
    </div>
  );
}

export default Head3;
