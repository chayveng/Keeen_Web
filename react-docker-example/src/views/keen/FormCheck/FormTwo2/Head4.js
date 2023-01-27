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

function Head4(props) {
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
        headFourBefore31: data
      }
    }));
  };

  const handleChangeMachineAfter5 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourAfter31: data
      }
    }));
  };
  const handleChangeMachineBefore6 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourBefore32: data
      }
    }));
  };

  const handleChangeMachineAfter6 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourAfter32: data
      }
    }));
  };
  const handleChangeMachineBefore7 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourBefore331: data
      }
    }));
  };

  const handleChangeMachineAfter7 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourAfter331: data
      }
    }));
  };
  const handleChangeMachineBefore8 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourBefore332: data
      }
    }));
  };

  const handleChangeMachineAfter8 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourAfter332: data
      }
    }));
  };
  const handleChangeMachineBefore9 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourBefore333: data
      }
    }));
  };

  const handleChangeMachineAfter9 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourAfter333: data
      }
    }));
  };
  const handleChangeMachineBefore10 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourBefore34: data
      }
    }));
  };

  const handleChangeMachineAfter10 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourAfter34: data
      }
    }));
  };
  const handleChangeMachineBefore11 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourBefore35: data
      }
    }));
  };

  const handleChangeMachineAfter11 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourAfter35: data
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
        headFourBarcode2: data
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
            headFourProductKeeenName: productNameget
          }
        }));
      })
      .catch(error => {
      
        props.setJobDetailData(prevState => ({
          ...prevState,
          proMax: {
            ...prevState.proMax,
            headFourProductKeeenName: ''
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
        headFourProductKeeenLotNo: data
      }
    }));
  };
  const handleProduct1 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFour41: data
      }
    }));
  };
  const handleProduct2 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFour42: data
      }
    }));
  };
  const handleProduct3 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFour43: data
      }
    }));
  };
  const handleProduct4 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFour44: data
      }
    }));
  };
  
  const handleChangeheadFourBefore51 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourBefore51: data
      }
    }));
  };
  
  const handleChangeheadFourBefore521 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourBefore521: data
      }
    }));
  };
  const handleChangeheadFourAfter521 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourAfter521: data
      }
    }));
  };
  const handleChangeheadFourBefore522 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourBefore522: data
      }
    }));
  };
  const handleChangeheadFourAfter522 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourAfter522: data
      }
    }));
  };

  const handleChangeheadFourBefore531 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourBefore531: data
      }
    }));
  };
  const handleChangeheadFourBefore532 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourBefore532: data
      }
    }));
  };
  const handleChangeheadFourBefore533 = event => {
    const data = parseInt(event.target.value);
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourBefore533: data
      }
    }));
  };
  const handleChangeFeedBack2 = event => {
    const data = event.target.value;
    props.setJobDetailData(prevState => ({
      ...prevState,

      proMax: {
        ...prevState.proMax,
        headFourDescription2: data
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
                  value={formik.values.radiogroup87}
                  onChange={e => {
                    handleRadioChange9(e);
                    handleChangeMachineBefore5(e);
                    formik.setFieldValue('radiogroup87', e.target.value);
                  }}
                >
                  {props.jobDetailData.proMax.headFourBefore31 == 1 ? (
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

                  {props.jobDetailData.proMax.headFourBefore31 == 2 ? (
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

                  {props.jobDetailData.proMax.headFourBefore31 == 3 ? (
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

                  {props.jobDetailData.proMax.headFourBefore31 == 4 ? (
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
                  value={formik.values.radiogroup88}
                  onChange={e => {
                    handleRadioChange10(e);
                    handleChangeMachineAfter5(e);
                    formik.setFieldValue('radiogroup88', e.target.value);
                  }}
                >
                  {props.jobDetailData.proMax.headFourAfter31 == 1 ? (
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

                  {props.jobDetailData.proMax.headFourAfter31 == 2 ? (
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

                  {props.jobDetailData.proMax.headFourAfter31 == 3 ? (
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

                  {props.jobDetailData.proMax.headFourAfter31 == 4 ? (
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
                  value={formik.values.radiogroup89}
                  onChange={e => {
                    handleRadioChange11(e);
                    handleChangeMachineBefore6(e);
                    formik.setFieldValue('radiogroup89', e.target.value);
                  }}
                >
                  {props.jobDetailData.proMax.headFourBefore32 == 1 ? (
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

                  {props.jobDetailData.proMax.headFourBefore32 == 2 ? (
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

                  {props.jobDetailData.proMax.headFourBefore32 == 3 ? (
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

                  {props.jobDetailData.proMax.headFourBefore32 == 4 ? (
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
                  value={formik.values.radiogroup90}
                  onChange={e => {
                    handleRadioChange12(e);
                    handleChangeMachineAfter6(e);
                    formik.setFieldValue('radiogroup90', e.target.value);
                  }}
                >
                  {props.jobDetailData.proMax.headFourAfter32 == 1 ? (
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

                  {props.jobDetailData.proMax.headFourAfter32 == 2 ? (
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

                  {props.jobDetailData.proMax.headFourAfter32 == 3 ? (
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

                  {props.jobDetailData.proMax.headFourAfter32 == 4 ? (
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
                value={formik.values.radiogroup91}
                onChange={e => {
                  handleRadioChange13(e);
                  handleChangeMachineBefore7(e);
                  formik.setFieldValue('radiogroup91', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headFourBefore331 == 1 ? (
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

                {props.jobDetailData.proMax.headFourBefore331 == 2 ? (
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

                {props.jobDetailData.proMax.headFourBefore331 == 3 ? (
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

                {props.jobDetailData.proMax.headFourBefore331 == 4 ? (
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
                value={formik.values.radiogroup92}
                onChange={e => {
                  handleRadioChange14(e);
                  handleChangeMachineAfter7(e);
                  formik.setFieldValue('radiogroup92', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headFourAfter331 == 1 ? (
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

                {props.jobDetailData.proMax.headFourAfter331 == 2 ? (
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

                {props.jobDetailData.proMax.headFourAfter331 == 3 ? (
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

                {props.jobDetailData.proMax.headFourAfter331 == 4 ? (
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
                value={formik.values.radiogroup93}
                onChange={e => {
                  handleRadioChange15(e);
                  handleChangeMachineBefore8(e);
                  formik.setFieldValue('radiogroup93', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headFourBefore332 == 1 ? (
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

                {props.jobDetailData.proMax.headFourBefore332 == 2 ? (
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

                {props.jobDetailData.proMax.headFourBefore332 == 3 ? (
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

                {props.jobDetailData.proMax.headFourBefore332 == 4 ? (
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
                value={formik.values.radiogroup94}
                onChange={e => {
                  handleRadioChange16(e);
                  handleChangeMachineAfter8(e);
                  formik.setFieldValue('radiogroup94', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headFourAfter332 == 1 ? (
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

                {props.jobDetailData.proMax.headFourAfter332 == 2 ? (
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

                {props.jobDetailData.proMax.headFourAfter332 == 3 ? (
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

                {props.jobDetailData.proMax.headFourAfter332 == 4 ? (
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
                value={formik.values.radiogroup95}
                onChange={e => {
                  handleRadioChange17(e);
                  handleChangeMachineBefore9(e);
                  formik.setFieldValue('radiogroup95', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headFourBefore333 == 1 ? (
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

                {props.jobDetailData.proMax.headFourBefore333 == 2 ? (
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

                {props.jobDetailData.proMax.headFourBefore333 == 3 ? (
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

                {props.jobDetailData.proMax.headFourBefore333 == 4 ? (
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
                value={formik.values.radiogroup96}
                onChange={e => {
                  handleRadioChange18(e);
                  handleChangeMachineAfter9(e);
                  formik.setFieldValue('radiogroup96', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headFourAfter333 == 1 ? (
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

                {props.jobDetailData.proMax.headFourAfter333 == 2 ? (
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

                {props.jobDetailData.proMax.headFourAfter333 == 3 ? (
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

                {props.jobDetailData.proMax.headFourAfter333 == 4 ? (
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
                value={formik.values.radiogroup97}
                onChange={e => {
                  handleRadioChange19(e);
                  handleChangeMachineBefore10(e);
                  formik.setFieldValue('radiogroup97', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headFourBefore34 == 1 ? (
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

                {props.jobDetailData.proMax.headFourBefore34 == 2 ? (
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

                {props.jobDetailData.proMax.headFourBefore34 == 3 ? (
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

                {props.jobDetailData.proMax.headFourBefore34 == 4 ? (
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
                value={formik.values.radiogroup98}
                onChange={e => {
                  handleRadioChange20(e);
                  handleChangeMachineAfter10(e);
                  formik.setFieldValue('radiogroup98', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headFourAfter34 == 1 ? (
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

                {props.jobDetailData.proMax.headFourAfter34 == 2 ? (
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

                {props.jobDetailData.proMax.headFourAfter34 == 3 ? (
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

                {props.jobDetailData.proMax.headFourAfter34 == 4 ? (
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
                value={formik.values.radiogroup99}
                onChange={e => {
                  handleRadioChange21(e);
                  handleChangeMachineBefore11(e);
                  formik.setFieldValue('radiogroup99', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headFourBefore35 == 1 ? (
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

                {props.jobDetailData.proMax.headFourBefore35 == 2 ? (
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

                {props.jobDetailData.proMax.headFourBefore35 == 3 ? (
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

                {props.jobDetailData.proMax.headFourBefore35 == 4 ? (
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
                value={formik.values.radiogroup100}
                onChange={e => {
                  handleRadioChange22(e);
                  handleChangeMachineAfter11(e);
                  formik.setFieldValue('radiogroup100', e.target.value);
                }}
              >
                {props.jobDetailData.proMax.headFourAfter35 == 1 ? (
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

                {props.jobDetailData.proMax.headFourAfter35 == 2 ? (
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

                {props.jobDetailData.proMax.headFourAfter35 == 3 ? (
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

                {props.jobDetailData.proMax.headFourAfter35 == 4 ? (
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
                      value={formik.values.barcodeHead4}
                      // onChange={formik.handleChange}
                      onChange={e => {
                        handleBarcode(e.target.value);
                        formik.setFieldValue('barcodeHead4', e.target.value);
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
                    {props.jobDetailData.proMax.headFourProductKeeenName.length > 1 ? (
                      <TextField
                        className={classes.disableText}
                        fullWidth
                        id="productKeeenName"
                        name="productKeeenName"
                        variant="outlined"
                        placeholder={props.jobDetailData.proMax.headFourProductKeeenName}
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
                      value={formik.values.lotnoHead4}
                      // onChange={formik.handleChange}
                      onChange={e => {
                        handleLotNo(e.target.value);
                        formik.setFieldValue('lotnoHead4', e.target.value);
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
                    aria-label="headFour41"
                    name="headFour41"
                    defaultValue="top"
                    value={formik.values.radiogroup101}
                    onChange={e => {
                      handleRadioChange23(e);
                      handleProduct1(e);
                      formik.setFieldValue('radiogroup101', e.target.value);
                    }}
                  >
                    {props.jobDetailData.proMax.headFour41 == 1 ? (
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

                    {props.jobDetailData.proMax.headFour41 == 2 ? (
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

                {props.jobDetailData.proMax.headFour41 == 2 ? (
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
                            {props.jobDetailData.proMax.headFourimage2.length >
                            3 ? (
                              <img
                                src={getImgForm(
                                  props.jobDetailData.proMax.headFourimage2
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
                          id="head4Img"
                          multiple
                          type="file"
                          onChange={(e)=>{
                            props.handleChangeimgHead(e)
                          }}
                          disabled={props.jobDetailData.proMax.signatureCustomer.length >
                        0 &&
                      props.jobDetailData.proMax.signatureEmployee.length > 0}
                        />{' '}
                        <label htmlFor="head4Img">
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
                    aria-label="headFour42"
                    name="headFour42"
                    defaultValue="top"
                    value={formik.values.radiogroup102}
                    onChange={e => {
                      handleRadioChange24(e);
                      handleProduct2(e);
                      formik.setFieldValue('radiogroup102', e.target.value);
                    }}
                  >
                    {props.jobDetailData.proMax.headFour42 == 1 ? (
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

                    {props.jobDetailData.proMax.headFour42 == 2 ? (
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
                    aria-label="headFour43"
                    name="headFour43"
                    defaultValue="top"
                    value={formik.values.radiogroup103}
                    onChange={e => {
                      handleRadioChange25(e);
                      handleProduct3(e);
                      formik.setFieldValue('radiogroup103', e.target.value);
                    }}
                  >
                    {props.jobDetailData.proMax.headFour43 == 1 ? (
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

                    {props.jobDetailData.proMax.headFour43 == 2 ? (
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
                    aria-label="headFour44"
                    name="headFour44"
                    defaultValue="top"
                    value={formik.values.radiogroup104}
                    onChange={e => {
                      handleRadioChange26(e);
                      handleProduct4(e);
                      formik.setFieldValue('radiogroup104', e.target.value);
                    }}
                  >
                    {props.jobDetailData.proMax.headFour44 == 1 ? (
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

                    {props.jobDetailData.proMax.headFour44 == 2 ? (
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
                    {props.jobDetailData.proMax.headFour44 == 3 ? (
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
                    {props.jobDetailData.proMax.headFour44 == 4 ? (
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
                        aria-label="headFourBefore51"
                        name="headFourBefore51"
                        value={formik.values.radiogroup105}
                        onChange={e => {
                          handleRadioChange27(e);
                          handleChangeheadFourBefore51(e);
                          formik.setFieldValue('radiogroup105', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headFourBefore51 ==
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

                        {props.jobDetailData.proMax.headFourBefore51 ==
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

                        {props.jobDetailData.proMax.headFourBefore51 ==
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
                        aria-label="headFourBefore521"
                        name="headFourBefore521"
                        value={formik.values.radiogroup106}
                        onChange={e => {
                          handleRadioChange28(e);
                          handleChangeheadFourBefore521(e);
                          formik.setFieldValue('radiogroup106', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headFourBefore521 ==
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

                        {props.jobDetailData.proMax.headFourBefore521 ==
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

                        {props.jobDetailData.proMax.headFourBefore521 ==
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

                        {props.jobDetailData.proMax.headFourBefore521 ==
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
                        aria-label="headFourAfter521"
                        name="headFourAfter521"
                        value={formik.values.radiogroup107}
                        onChange={e => {
                          handleRadioChange29(e);
                          handleChangeheadFourAfter521(e);
                          formik.setFieldValue('radiogroup107', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headFourAfter521 ==
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

                        {props.jobDetailData.proMax.headFourAfter521 ==
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

                        {props.jobDetailData.proMax.headFourAfter521 ==
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

                        {props.jobDetailData.proMax.headFourAfter521 ==
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
                        aria-label="headFourBefore522"
                        name="headFourBefore522"
                        value={formik.values.radiogroup108}
                        onChange={e => {
                          handleRadioChange30(e);
                          handleChangeheadFourBefore522(e);
                          formik.setFieldValue('radiogroup108', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headFourBefore522 ==
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

                        {props.jobDetailData.proMax.headFourBefore522 ==
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

                        {props.jobDetailData.proMax.headFourBefore522 ==
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

                        {props.jobDetailData.proMax.headFourBefore522 ==
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
                        aria-label="headFourAfter522"
                        name="headFourAfter522"
                        value={formik.values.radiogroup109}
                        onChange={e => {
                          handleRadioChange31(e);
                          handleChangeheadFourAfter522(e);
                          formik.setFieldValue('radiogroup109', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headFourAfter522 ==
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

                        {props.jobDetailData.proMax.headFourAfter522 ==
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

                        {props.jobDetailData.proMax.headFourAfter522 ==
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

                        {props.jobDetailData.proMax.headFourAfter522 ==
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
                        aria-label="headFourBefore531"
                        name="headFourBefore531"
                        value={formik.values.radiogroup110}
                        onChange={e => {
                          handleRadioChange32(e);
                          handleChangeheadFourBefore531(e);
                          formik.setFieldValue('radiogroup110', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headFourBefore531 ==
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

                        {props.jobDetailData.proMax.headFourBefore531 ==
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

                        {props.jobDetailData.proMax.headFourBefore531 ==
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
                        {props.jobDetailData.proMax.headFourBefore531 ==
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
                        aria-label="headFourBefore532"
                        name="headFourBefore532"
                        value={formik.values.radiogroup111}
                        onChange={e => {
                          handleRadioChange33(e);
                          handleChangeheadFourBefore532(e);
                          formik.setFieldValue('radiogroup111', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headFourBefore532 ==
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

                        {props.jobDetailData.proMax.headFourBefore532 ==
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

                        {props.jobDetailData.proMax.headFourBefore532 ==
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
                        {props.jobDetailData.proMax.headFourBefore532 ==
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
                        aria-label="headFourBefore533"
                        name="headFourBefore533"
                        value={formik.values.radiogroup112}
                        onChange={e => {
                          handleRadioChange34(e);
                          handleChangeheadFourBefore533(e);
                          formik.setFieldValue('radiogroup112', e.target.value);
                        }}
                      >
                        {props.jobDetailData.proMax.headFourBefore533 ==
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

                        {props.jobDetailData.proMax.headFourBefore533 ==
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

                        {props.jobDetailData.proMax.headFourBefore533 ==
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
                        {props.jobDetailData.proMax.headFourBefore533 ==
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
                  id="headFourDescription2"
                  name="headFourDescription2"
                  variant="outlined"
                  multiline
                  minRows={3}
                  value={props.jobDetailData.proMax.headFourDescription2}
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

export default Head4;
