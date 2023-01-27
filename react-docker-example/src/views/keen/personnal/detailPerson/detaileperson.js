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
import { getEmployeeByID, updateEmployee } from '../../api/keeen/employee';
import { putImage, getImage ,postImage} from '../../api/keeen/uploadimg';
import { withStyles } from '@material-ui/core/styles';
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
    verticalAlign: 'center'
    // width: 16
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
  },
  kk: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const DetailEmpoyee = ({ className, data, ...rest }) => {
  const classes = useStyles();
  const reducer = useSelector(state => state.qrTransaction);
  const params = useParams();

  const userID = params.userID;
  const history = useHistory();
  const [editProfile, seteditProfile] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = (number, name, position) => {
    setOpenDialog(false);
    seteditProfile(false);
    // const path = '/personnal' ;
    // history.push(path)
    fetchData();
  };
  const [uuid, setUuid] = useState();
  const [number, setNumber] = useState(userID);
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [position, setPosition] = useState();
  const [image, setImage] = useState(true);
  const positionPer = ['พนักงานขาย', 'ช่าง'];
  const [titleL, setTitleL] = useState(true);
  const [titleR, setTitleR] = useState(true);
  const [positions, setPositions] = useState(positionPer[0]);
  const [status, setStatus] = useState();
  const [status1, setStatus1] = useState();
  let reader = new FileReader();
  const [labelstatus1, setLabelStatus1] = useState();
  const update = () => {
    console.log(image);
    const formData = new FormData();
     formData.append('ImagesId', image);
    formData.append('JobId', userID);
    formData.append('Images', imgFile);
    putImage(formData)
      .then(res => {

        updateEmployee({
          employeeId: formik.values.number,
          firstName: formik.values.name,
          lastName: formik.values.lastname,
          position: formik.values.position,
          image: image,
          use: status,
          uuid: uuid
        });
      })
      .catch(error => {
        console.log(error);
      });

    
  };
  const handleClickEdit = () => {
    setTitleL(!titleL);
    setTitleR(!titleR);
    seteditProfile(true);
  };
  const handleCancelEdit = () => {
    setTitleL(!titleL);
    setTitleR(!titleR);
    seteditProfile(false);
  };
  const handleDialog = () => {
    update();
    setOpenDialog(true);
  };
  const titleShowL = num1 => {
    if (num1) {
      return 'รายชื่อพนักงาน';
    } else {
      return 'ดูข้อมูลพนักงาน';
    }
  };
  const titleShowR = num1 => {
    if (num1) {
      return 'ดูข้อมูลพนักงาน';
    } else {
      return 'แก้ไขข้อมูลพนักงาน';
    }
  };
  const handlePosition = value => {
    setPosition(value);
  };
  const today = moment().format('YYYY-MM-DD');
  const phoneRegExp = '^[0]+[0-9]';

  const [imageFirst, setImageFirst] = useState();
  const [imgFile, setImgFile] = useState();
  const [preImg, setPreImg] = useState();
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
      
      const img = imageFile
      const base64 = await convertBase64(img);
      setPreImg(base64);
    }
  };

  const getImgForm = data => {
    console.log("DATAIMAGE: " + data.toString());
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
  const fetchData = () => {
    getEmployeeByID(userID)
      .then(res => {
        // console.log(res.data.data.image);
        setImage(res.data.data.image);
        console.log(typeof(res.data.data.image));
        setUuid(res.data.data.uuid);
        setName(res.data.data.firstName);
        setLastName(res.data.data.lastName);
        setPosition(res.data.data.position);
        setStatus(res.data.data.use);
        setStatus1(res.data.data.use);
        if (res.data.data.use == true) {
          setLabelStatus1('On');
        } else setLabelStatus1('Off');
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      number: number,
      name: name,
      position: position,
      lastname: lastName
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      number: Yup.string()
        .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
        .required('กรุณากรอกข้อมูลให้ครบถ้วน'),

      name: Yup.string('Enter your Name')
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
  
        handleDialog();

    
    }
  });
  // const [edtitData, setEditData] = useState(false);
  const handleChangeSwitch = event => {
    setStatus(!status);
  };
  const handleName = name => {
    setName(name);
    //console.log(name);
  };
  const handleLastName = lastName => {
    setLastName(lastName);
   // console.log(formik.values.lastname);
  };

  const handleNumber = number => {
    setNumber(number);
    //console.log(number);
  };

  return (
    <div style={{ margin: 10 }}>
      <form onSubmit={formik.handleSubmit}>
        <Card className={clsx(classes.root, className)} {...rest}>
          <Grid container justify="space-between">
            <Grid container item xs={12} sm={12} md={8}>
              <ArrowBackIosIcon
                className={classes.kk}
                onClick={
                  !editProfile ? () => history.goBack() : handleCancelEdit
                }
              />
              <Typography variant="h2">{titleShowL(titleL)}</Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              md={4}
              justifyContent="flex-end"
            >
              <Typography variant="h2">{titleShowR(titleR)}</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}></Grid>
          </Grid>
        </Card>
        <Box mb={2} />
        <Card className={classes.cardPad}>
          <Grid item>
            <Typography variant="h3">ข้อมูลพนักงาน</Typography>
          </Grid>
        </Card>
        <Card className={classes.cardPad} {...rest}>
          {/* <CardContent> */}
          {!editProfile ? (
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={3}>
                  <Grid item xs={12} sm={12} md={12}>
                    {image.length > 7 ? (
                      <img
                        // src={getImgForm(imageFirst)}
                        // src={getImgForm(imgFile)}
                        src={getImgForm(image)}
                        // src="/static/images/noImg.png"
                        alt="dummy"
                        width="200"
                        height="250"
                        borderRadius="100"
                      />
                    ) : (
                      <img
                        src="/static/images/noImg.png"
                        style={{
                          width: '153',
                          height: '188',
                          borderRadius: '1vh'
                        }}
                      />
                    )}
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle2">รหัสพนักงาน</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      <Typography variant="body2" color="textSecondary">
                        {number}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle2">ชื่อพนักงาน</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      <Typography variant="body2" color="textSecondary">
                        {name} {lastName}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle2">ตำแหน่ง</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      <Typography variant="body2" color="textSecondary">
                        {position}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle2">การใช้งาน</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      {status1 ? (
                        <Typography variant="body2" color="textSecondary">
                          {labelstatus1}
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="textSecondary">
                          {labelstatus1}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Box ml={6} />
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={2}
                  className={classes.textAlignend}
                >
                  <ButtonPramary
                    label="แก้ไข"
                    onClick={handleClickEdit}
                    size="small"
                  />
                </Grid>
              </Grid>
            </Box>
          ) : (
            <>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={2} md={2}>
                    <Grid item xs={12} sm={12} md={12}>
                      {preImg ? (
                        <img
                          src={preImg}
                          alt="dummy"
                          width="153px"
                          height="188px"
                          borderRadius="100"
                        />
                      ) : (
                        <>
                          {image ? (
                            <img
                              src={getImgForm(image)}
                              alt="dummy"
                              width="153px"
                              height="188px"
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
                        </>
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

                  <Grid item xs={12} sm={10} md={10}>
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
                              return <option value={sell}>{sell}</option>;
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
                            defaultValue={formik.values.name}
                            size="small"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.name && Boolean(formik.errors.name)
                            }
                            helperText={
                              formik.touched.name && formik.errors.name
                            }
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
                            <Typography variant="subtitle2">
                              การใช้งาน
                            </Typography>

                            <Box mb={1} />
                          </Grid>

                          <FormControlLabel
                            style={{ cursor: 'context-menu' }}
                            control={
                              <IOSSwitch
                                checked={status}
                                onChange={handleChangeSwitch}
                                name="checkedB"
                                size="small"
                              />
                            }
                            size="small"
                            label={
                              status ? (
                                <Typography
                                  variant="subtitle2"
                                  style={{ color: '#7FB344' }}
                                >
                                  On
                                </Typography>
                              ) : (
                                <Typography
                                  variant="subtitle2"
                                  style={{ color: '#000' }}
                                >
                                  Off
                                </Typography>
                              )
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
          )}
          {/* </CardContent> */}
          {editProfile ? (
            <Box mt={4} style={{ textAlign: 'center' }} fullWidth>
              <Grid container justifyContent="center" xs={12} sm={12} md={12}>
                <Grid xs={5} sm={5} md={2} style={{ textAlign: 'end' }}>
                  <ButtonSecondary
                    label="ยกเลิก"
                    size="small"
                    onClick={handleCancelEdit}
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
          ) : null}
        </Card>
      </form>
    </div>
  );
};

DetailEmpoyee.propTypes = {
  className: PropTypes.string
};

DetailEmpoyee.defaultProps = {};

export default DetailEmpoyee;
