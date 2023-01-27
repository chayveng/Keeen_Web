import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  makeStyles,
  Grid,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  Button,
  CardContent,
  Switch
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import ButtonAddfile from 'src/components/keen/ButtonAddfile';
import IconUpload from 'src/components/keen/icon/iconUpload';
import { KeyboardDatePicker } from '@material-ui/pickers';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useSelector } from 'react-redux';
import Dialogsuc from 'src/components/keen/Dialogsuc';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { Phone } from 'react-feather';
import { deleteEmployee, postEmpolyee } from '../../api/keeen/employee';
import { postImage , getImage } from '../../api/keeen/uploadimg';
const IOSSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#7FB344',
        opacity: 1,
        border: 'none'
      }
    },
    '&$focusVisible $thumb': {
      color: '#7FB344',
      border: '6px solid #fff'
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  pb: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    fontFamily: 'Prompt, sans-serif'
  },
  kk: {
    verticalAlign: 'center',
    // width: 16
    '&:hover': {
      cursor: 'pointer'
    }
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""'
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3'
    }
  },

  cardPad: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),

    borderRadius: 0
  },
  btnChoose: {
    borderRadius: '10px',
    fontSize: '10px',
    color: '#0F8E54',
    backgroundColor: '#fff'
  }
}));

// function StyledRadio(props) {
//   const classes = useStyles();

//   return (
//     <Radio
//       className={classes.root}
//       disableRipple
//       color="default"
//       checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
//       icon={<span className={classes.icon} />}
//       {...props}
//     />
//   );
// }

const AddEmpoyee = ({ className, data, ...rest }) => {
  const classes = useStyles();
  const reducer = useSelector(state => state.qrTransaction);
  const { id } = useParams();
  const history = useHistory();
  const [editProfile, seteditProfile] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = (number, name) => {
    const path = '/personnal';
    history.push(path);
    setOpenDialog(false);
    seteditProfile(false);
  };

  const [number, setNumber] = useState();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [position, setPosition] = useState();
  
  const [preImg, setPreImg] = useState();
  const [imgFile,setImgFile] = useState()
  let reader = new FileReader();
  const [imgPass,setImgPass] = useState()
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
      setPreImg(base64)
      
    }
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

  const createEmployee = () => {
    // console.log(
    //   image.preview
    // );
    postEmpolyee({
      employeeId: formik.values.number,
      firstname: formik.values.name,
      lastName: formik.values.lastname,
      position: formik.values.position,
      image: imgPass,
      use: true
      
    });
  };
  const deleteEmployeeByID = str => {
    deleteEmployee(str).then(res => {
      console.log('deleted');
    });
  };
  const handleClickEdit = () => {
    seteditProfile(true);
  };
  const handleCancelEdit = () => {
    // seteditProfile(false)
  };
  const handleDialog = () => {


    setOpenDialog(true);
  };
  const today = moment().format('YYYY-MM-DD');
  const phoneRegExp = '^[0]+[0-9]';
  const positionPer = ['พนักงานขาย', 'ช่าง'];
  const formik = useFormik({
    initialValues: {
      number: '',
      name: '',
      lastname: '',
      position: ''
    },
    validationSchema: Yup.object({
      number: Yup.string()
        .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
        .required('กรุณากรอกข้อมูลให้ครบถ้วน'),

      name: Yup.string('Enter your lastName')
        .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
        .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
      lastname: Yup.string('Enter your lastName')
        .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
        .required('กรุณากรอกข้อมูลให้ครบถ้วน'),

      position: Yup.string('Enter your name')
        .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
        .required('กรุณากรอกข้อมูลให้ครบถ้วน')
    }),

    onSubmit: values => {
      handleNumber(values.number);
      handleName(values.name);
      handleLastName(values.lastname);
      handlePosition(values.position);
     
      const formData = new FormData();
    formData.append("JobId", number);
    formData.append("Images", imgFile);
    postImage(formData)
    .then(res=>{
      const imgresult = res.data.data
      console.log(res.data.data);
     setImgPass(imgresult)
     postEmpolyee({
      employeeId: formik.values.number,
      firstname: formik.values.name,
      lastName: formik.values.lastname,
      position: formik.values.position,
      image: imgresult,
      use: true
      
    });
    })
    .catch(error => {
      console.log(error);
    });
 
      handleDialog();
    }
  });

  const handleName = name => {
    setName(name);
  };
  const handleNumber = number => {
    setNumber(number);
  };
  const handleLastName = lastname => {
    setLastName(lastname);
  };
  const handlePosition = position => {
    setPosition(position);
  };

  return (
    <div style={{ margin: 10 }}>
      {/* <button onClick={()=>deleteEmployeeByID('test01')}>delete</button> */}
      <form onSubmit={formik.handleSubmit}>
        <Card className={classes.root} style={{ marginBottom: '15px' }}>
          {' '}
          <Grid container justify="space-between" spacing={3}>
            <Grid container item xs={12} sm={12} md={8}>
              <ArrowBackIosIcon
                className={classes.kk}
                onClick={() => history.goBack()}
              />
              <Typography variant="h2">รายชื่อพนักงาน</Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={4}
              justifyContent="flex-end"
            >
              <Typography variant="h2">เพิ่มข้อมูลพนักงาน</Typography>
            </Grid>
          </Grid>
        </Card>

        <Box mb={2} />
        <Card className={classes.cardPad}>
          <Grid item>
            <Typography variant="h3">ข้อมูลพนักงาน</Typography>
          </Grid>
        </Card>
        <Card className={classes.cardPad} {...rest}>
          <>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    {preImg ? (
                      <img
                        src={preImg}
                        alt="dummy"
                        width="153"
                        height="188"
                        borderRadius="100"
                      />
                    ) : (
                      <img
                        src="/static/images/noImg.png"
                        style={{
                          width: '153px',
                          height: '188px',
                          borderRadius: '1vh'
                        }}
                      />
                    )}
                    <Box mt={1} />
                    <Typography variant="h6">กรุณาอัปโหลดรูปภาพ</Typography>
                    <Typography variant="h6">220 * 245</Typography>

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
                    />{' '}
                    <label htmlFor="contained-button-file">
                      <Button
                        className={classes.btnChoose}
                        variant="contained"
                        component="span"
                        startIcon={<IconUpload style={{ width: '1.5vh' }} />}
                      >
                        เพิ่มไฟล์
                      </Button>
                    </label>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={10}>
                  <Grid container item xs={12} sm={12} md={12} spacing={1}>
                    <Grid container item xs={12} sm={12} md={6} spacing={1}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Grid container>
                          <Typography variant="subtitle2">
                            รหัสพนักงาน
                          </Typography>
                          <Box ml={1} />
                          <Typography style={{ color: '#D44848' }}>
                            {' '}
                            *{' '}
                          </Typography>

                          <Box mb={1} />
                        </Grid>

                        <Box mt={1} />

                        <TextField
                          fullWidth
                          id="number"
                          name="number"
                          variant="outlined"
                          value={formik.values.number}
                          onChange={formik.handleChange}
                          placeholder="กรุณากรอกข้อมูล"
                          error={
                            formik.touched.number &&
                            Boolean(formik.errors.number)
                          }
                          helperText={
                            formik.touched.number && formik.errors.number
                          }
                          color="secondary"
                          size="small"
                        />
                      </Grid>
                    </Grid>

                    <Grid container item xs={12} sm={12} md={6} spacing={1}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Grid container>
                          <Typography variant="subtitle2">ตำแหน่ง</Typography>
                          <Box ml={1} />
                          <Typography style={{ color: '#D44848' }}>
                            {' '}
                            *{' '}
                          </Typography>

                          <Box mb={1} />
                        </Grid>
                        <Box mt={1} />

                        <TextField
                          fullWidth
                          className="px-2 my-2"
                          variant="outlined"
                          name="position"
                          id="position"
                          select
                          SelectProps={{
                            native: true,
                            className: classes.selectCon,
                            MenuProps: {
                              className: { paper: classes.menuPaper }
                            }
                          }}
                          value={formik.values.position}
                          onChange={formik.handleChange}
                          placeholder="กรุณากรอกข้อมูล"
                          error={
                            formik.touched.position &&
                            Boolean(formik.errors.position)
                          }
                          helperText={
                            formik.touched.position && formik.errors.position
                          }
                          size="small"
                        >
                          <option value={1}>กรุณาเลือกข้อมูล</option>
                          {positionPer.map((sell, index) => {
                            return (
                              <option key={index} value={sell}>
                                {sell}
                              </option>
                            );
                          })}
                        </TextField>
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={6} spacing={1}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Grid container>
                          <Typography variant="subtitle2">ชื่อ</Typography>
                          <Box ml={1} />
                          <Typography style={{ color: '#D44848' }}>
                            {' '}
                            *{' '}
                          </Typography>

                          <Box mb={1} />
                        </Grid>
                        <Box mt={1} />

                        <TextField
                          fullWidth
                          id="name"
                          name="name"
                          variant="outlined"
                          placeholder="กรุณากรอกข้อมูล"
                          color="secondary"
                          defaultValue="จิรวรรต์"
                          size="small"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.name && Boolean(formik.errors.name)
                          }
                          helperText={formik.touched.name && formik.errors.name}
                        />
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={6} spacing={1}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Grid container>
                          <Typography variant="subtitle2">นามสกุล</Typography>
                          <Box ml={1} />
                          <Typography style={{ color: '#D44848' }}>
                            {' '}
                            *{' '}
                          </Typography>

                          <Box mb={1} />
                        </Grid>
                        <Box mt={1} />

                        <TextField
                          fullWidth
                          id="lastname"
                          name="lastname"
                          variant="outlined"
                          placeholder="กรุณากรอกข้อมูล"
                          color="secondary"
                          defaultValue={formik.values.lastname}
                          size="small"
                          value={formik.values.lastname}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.lastname &&
                            Boolean(formik.errors.lastname)
                          }
                          helperText={
                            formik.touched.lastname && formik.errors.lastname
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={6} spacing={1}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Grid container>
                          <Typography variant="subtitle2">การใช้งาน</Typography>

                          <Box mb={1} />
                        </Grid>
                      
                        <FormControlLabel
                          style={{ cursor: 'context-menu' }}
                          control={
                            <IOSSwitch
                              checked
                              style={{ cursor: 'context-menu' }}
                              name="checkedB"
                              size="small"
                            />
                          }
                          size="small"
                          label={
                            <Typography
                              variant="subtitle2"
                              style={{ color: '#7FB344' }}
                            >
                              On
                            </Typography>
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Box mt={1} />
                </Grid>
              </Grid>
            </Box>
            <Dialogsuc
              open={openDialog}
              onClose={handleCloseDialog}
              title="บันทึกข้อมูลสำเร็จ"
            />
          </>

          <Box mt={4} style={{ textAlign: 'center' }} fullWidth>
            <Grid container justifyContent="center" xs={12} sm={12} md={12}>
              <Grid xs={5} sm={5} md={2} style={{ textAlign: 'end' }}>
                <ButtonSecondary
                  label="ยกเลิก"
                  size="small"
                  onClick={handleCancelEdit}
                  href="./personnal"
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
        </Card>
      </form>
    </div>
  );
};

AddEmpoyee.propTypes = {
  className: PropTypes.string
};

AddEmpoyee.defaultProps = {};

export default AddEmpoyee;
