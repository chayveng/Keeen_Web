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
  Button
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

const DetailProfile = ({ className, data, ...rest }) => {
  const classes = useStyles();
  const reducer = useSelector(state => state.qrTransaction);
  const { id } = useParams();
  const history = useHistory();
  const [editProfile, seteditProfile] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = (name, lastName, phone, email) => {
    setOpenDialog(false);
    seteditProfile(false);
  };

  const [name, setName] = useState('ดิว ');
  const [lastName, setlastName] = useState('จิรวรรตน์');
  const [phone, setPhone] = useState('0972727117');
  const [email, setEmail] = useState('kik.plw@gmail.com');
  const [date_of_birth, setdate_of_birth] = useState('1997-01-01');

  const [image, setImage] = useState({ preview: '', raw: '' });

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }

  };
  const handleChangeDate = (date) => {
    formik.setFieldValue(
      "date_of_birth",
      moment(date).format("YYYY-MM-DD")
    );
  };

  const handleClickEdit = () => {
    seteditProfile(true);
  };
  const handleCancelEdit = () => {
    seteditProfile(false);
  };
  const handleDialog = () => {
    setOpenDialog(true);
  };
  const today = moment().format('YYYY-MM-DD');
  const phoneRegExp = '^[0]+[0-9]';

  const formik = useFormik({
    initialValues: {
      name: name,
      lastName: lastName,
      phone: phone,
      email: email,
      date_of_birth: date_of_birth
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
        .required('กรุณากรอกข้อมูลให้ครบถ้วน'),

      lastName: Yup.string('Enter your lastName')
        .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
        .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
      phone: Yup.string('Main Contact phone')
        .matches(phoneRegExp, 'กรุณากรอกข้อมูลให้ครบถ้วน')
        .min(10, 'กรุณากรอกข้อมูลให้ครบถ้วน')
        .max(10, 'กรุณากรอกข้อมูลให้ครบถ้วน')
        .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
      email: Yup.string('Enter your email')
        .email('ข้อมูลไม่ตรงตามเงื่อนไข')
        .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
      date_of_birth: Yup
        .date()
        .max(today, "กรุณากรอกข้อมูลให้ครบถ้วน")
        .typeError("กรุณากรอกข้อมูลให้ครบถ้วน")
    }),

    onSubmit: values => {
      handleDialog();
      handleName(values.name);
      handlelastName(values.lastName);
      handlePhone(values.phone);
      handledate_of_birth(values.date_of_birth);
    }
  });
  // const [edtitData, setEditData] = useState(false);

  const handleName = name => {
    setName(name);
  };
  const handlelastName = lastName => {
    setlastName(lastName);
  };
  const handlePhone = Phone => {
    setPhone(Phone);
  };
  const handleEmail = email => {
    setEmail(email);
  };
  const handledate_of_birth = date_of_birth => {
    setdate_of_birth(date_of_birth)
  }


  return (
    <>
      <form onSubmit={formik.handleSubmit}>
      <Card className={classes.root} style={{ marginBottom: '15px' }}>
        {' '}
        <Grid container justify="space-between" spacing={3}>
          <Grid container item xs={12} sm={12} md={8}>
            <ArrowBackIosIcon
              className={classes.kk}
              onClick={() => history.goBack()}
            />
            <Typography variant="h2">ข้อมูลส่วนตัว</Typography>
          </Grid>
        </Grid>
      </Card>
        <Box mb={2} />
        <Card className={classes.cardPad}>
          <Grid item>
            <Typography variant="h3">ข้อมูลส่วนตัว</Typography>
          </Grid>
        </Card>
        <Card className={classes.cardPad} {...rest}>
          {/* <CardContent> */}

          {/* -------start-------*/}

          {/* ---------------------end------------------------------ */}

          {!editProfile ? (
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={3}>
                  <Grid item xs={12} sm={12} md={12}>
                    {image.preview ? (
                      <img
                        src={image.preview}
                        alt="dummy"
                        width="153"
                        height="188"
                        borderRadius="100"
                      />
                    ) : (
                      <img
                        src="/static/images/img_admin.png"
                        style={{
                          width: '153',
                          height: '160',
                          borderRadius: '1vh'
                        }}
                      />
                    )}
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <Grid container item xs={12} spacing={2}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle2">
                        ชื่อ - นามสกุล
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      <Typography variant="body2" color="textSecondary">
                        {name + lastName}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item xs={12} spacing={2}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle2">วันเกิด</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      <Typography variant="body2" color="textSecondary">
                        {date_of_birth}                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} spacing={2}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle2">เพศ</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      <Typography variant="body2" color="textSecondary">
                        ชาย
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} spacing={2}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle2">เบอร์โทร</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      <Typography variant="body2" color="textSecondary">
                        {phone}
                        {/* {data?.tel} */}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item xs={12} spacing={2}>
                    <Grid item xs={12} sm={12} md={3}>
                      <Typography variant="subtitle2">อีเมล</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      <Typography variant="body2" color="textSecondary">
                        {email}
                      </Typography>
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
                  <Grid item xs={12} sm={12} md={2}>
                    <Grid item xs={12} sm={12} md={12}>
                      {image.preview ? (
                        <img
                          src={image.preview}
                          alt="dummy"
                          width="153"
                          height="188"
                          borderRadius="100"
                        />
                      ) : (
                        <img
                          src="/static/images/img_admin.png"
                          style={{
                            width: '153px',
                            height: '188px',
                            borderRadius: '1vh'
                          }}
                        />
                      )}
                      <Box mt={1} />
                      <h6>กรุณาอัปโหลดรูปภาพ 220 * 245</h6>

                      <Box mt={1} />
                    </Grid>
                    <Box mt={1} />
                    <Grid container xs={12} sm={12} md={12}>

                      {/* <input
                        type="file"
                        id="upload-button"
                        onChange={handleChange}
                        label="อัปโหลดไฟล์"
                      /> */}
                      <div className={classes.media}>
                        {/* <img src={image} alt="Logo" className={classes.imgInput} /> */}
                      </div>
                      <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={handleChange}
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
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            placeholder="กรุณากรอกข้อมูล"
                            error={
                              formik.touched.name && Boolean(formik.errors.name)
                            }
                            helperText={
                              formik.touched.name && formik.errors.name
                            }
                            color="secondary"
                            size="small"
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
                            id="lastName"
                            name="lastName"
                            variant="outlined"
                            placeholder="กรุณากรอกข้อมูล"
                            color="secondary"
                            defaultValue="จิรวรรต์"
                            size="small"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.lastName &&
                              Boolean(formik.errors.lastName)
                            }
                            helperText={
                              formik.touched.lastName && formik.errors.lastName
                            }
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Box mt={1} />
                    <Grid container item xs={12} sm={12} md={12} spacing={1}>
                      <Grid container item xs={12} sm={12} md={6} spacing={1}>
                        <Grid item xs={12} sm={12} md={12}>
                          <Grid container>
                            <Typography variant="subtitle2">วันเกิด</Typography>
                            <Box ml={1} />
                            <Typography style={{ color: '#D44848' }}>
                              {' '}
                              *{' '}
                            </Typography>

                            <Box mb={1} />
                          </Grid>

                          <KeyboardDatePicker
                            margin="normal"
                            id="date_of_birth"
                            name="date-picker-dialog"
                            format="DD/MM/yyyy"
                            inputVariant="outlined"
                            // value={moment().format('1997-01-01')}
                            // onChange={handleChangeDate}
                            KeyboardButtonProps={{
                              'aria-label': 'change date'
                            }}
                            value={formik.values.date_of_birth}
                            onChange={handleChangeDate}
                            error={
                              formik.touched.date_of_birth &&
                              Boolean(formik.errors.date_of_birth)
                            }
                            helperText={
                              formik.touched.date_of_birth && formik.errors.date_of_birth
                            }
                            fullWidth
                            size="small"
                          />
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={6} spacing={1}>
                        <Grid item xs={12} sm={12} md={12}>
                          <Grid container>
                            <Typography variant="subtitle2">เพศ</Typography>
                            <Box ml={1} />
                            <Typography style={{ color: '#D44848' }}>
                              {' '}
                              *{' '}
                            </Typography>
                          </Grid>
                          <FormControl component="fieldset">
                            <RadioGroup
                              row
                              aria-label="position"
                              name="position"
                              defaultValue="top"
                            >
                              <FormControlLabel
                                value="female"
                                control={<StyledRadio />}
                                label="ชาย"
                              />
                              <FormControlLabel
                                value="male"
                                control={<StyledRadio />}
                                label="หญิง"
                              />
                              <FormControlLabel
                                value="other"
                                control={<StyledRadio />}
                                label="LGBT"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid container item xs={12} sm={12} md={12} spacing={1}>
                      <Grid container item xs={12} sm={12} md={6} spacing={1}>
                        <Grid item xs={12} sm={12} md={12}>
                          <Grid container>
                            <Typography variant="subtitle2">
                              เบอร์โทร
                            </Typography>
                            <Box ml={1} />
                            <Typography style={{ color: '#D44848' }}>
                              {' '}
                              *{' '}
                            </Typography>
                          </Grid>
                          <Box mt={1} />

                          <TextField
                            fullWidth
                            id="phone"
                            name="phone"
                            variant="outlined"
                            placeholder="กรุณากรอกข้อมูล"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.phone &&
                              Boolean(formik.errors.phone)
                            }
                            helperText={
                              formik.touched.phone && formik.errors.phone
                            }
                            color="secondary"
                            size="small"
                          />
                        </Grid>
                      </Grid>

                      <Grid container item xs={12} sm={12} md={6} spacing={1}>
                        <Grid item xs={12} sm={12} md={12}>
                          <Grid container>
                            <Typography variant="subtitle2">อีเมล</Typography>
                            <Box ml={1} />
                            <Typography style={{ color: '#D44848' }}>
                              {' '}
                              *{' '}
                            </Typography>
                          </Grid>
                          <Box mt={1} />

                          <TextField
                            fullWidth
                            id="email"
                            name="email"
                            variant="outlined"
                            placeholder="กรุณากรอกข้อมูล"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.email &&
                              Boolean(formik.errors.email)
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                            color="secondary"
                            size="small"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              <Dialogsuc
                title={'บันทึกข้อมูลสำเร็จ'}
                open={openDialog}
                onClose={handleCloseDialog}
              />
            </>
          )}
          {/* </CardContent> */}
          {editProfile ? (
        

            <Box mt={4} style={{ textAlign: 'center' }} fullWidth>
            <Grid container justifyContent="center" xs={12} sm={12}md={12}>
            <Grid  xs={5} sm={5}md={2} style={{textAlign:'end'}}>
                   <ButtonSecondary
                    label="ยกเลิก"
                    size="small"
                    onClick={handleCancelEdit}
                  />
              </Grid>
              <Box ml={2} />
              <Grid  xs={5} sm={5}md={2}  style={{textAlign:'start'}}>
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
    </>
  );
};

DetailProfile.propTypes = {
  className: PropTypes.string
};

DetailProfile.defaultProps = {};

export default DetailProfile;
