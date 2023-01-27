import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Typography,
  CardContent,
  Paper,
  TableHead,
  Table,
  TableRow,
  TableContainer,
  TableBody,
  Grid,
  TextField,
  Box,
  InputAdornment,
  SvgIcon,
  Button,
  FormControlLabel,
  Switch
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import { withStyles } from '@material-ui/core/styles';
import Dialogsuc from 'src/components/keen/Dialogsuc';
import MuiTableCell from '@material-ui/core/TableCell';
import { getEmployeeAll } from '../../api/keeen/employee';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { deleteCustomerByID, postCustomer } from '../../api/keeen/customer';

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
const provinceList = [
  'กรุงเทพมหานคร',
  'กระบี่',
  'กาญจนบุรี',
  'กาฬสินธุ์',
  'กำแพงเพชร',
  'ขอนแก่น',
  'จันทบุรี',
  'ฉะเชิงเทรา',
  'ชลบุรี',
  'ชัยนาท',
  'ชัยภูมิ',
  'ชุมพร',
  'เชียงใหม่',
  'เชียงราย',
  'ตรัง',
  'ตราด',
  'ตาก',
  'นครนายก',
  'นครปฐม',
  'นครพนม',
  'นครราชสีมา',
  'นครศรีธรรมราช',
  'นครสวรรค์',
  'นนทบุรี',
  'นราธิวาส',
  'น่าน',
  'บึงกาฬ',
  'บุรีรัมย์',
  'ปทุมธานี',
  'ประจวบคีรีขันธ์',
  'ปราจีนบุรี',
  'ปัตตานี',
  'พระนครศรีอยุธยา',
  'พะเยา',
  'พังงา',
  'พัทลุง',
  'พิจิตร',
  'พิษณุโลก',
  'เพชรบุรี',
  'เพชรบูรณ์',
  'แพร่',
  'ภูเก็ต',
  'มหาสารคาม',
  'มุกดาหาร',
  'แม่ฮ่องสอน',
  'ยโสธร',
  'ยะลา',
  'ร้อยเอ็ด',
  'ระนอง',
  'ระยอง',
  'ราชบุรี',
  'ลพบุรี',
  'ลำปาง',
  'ลำพูน',
  'เลย',
  'ศรีสะเกษ',
  'สกลนคร',
  'สงขลา',
  'สตูล',
  'สมุทรปราการ',
  'สมุทรสงคราม',
  'สมุทรสาคร',
  'สระแก้ว',
  'สระบุรี',
  'สิงห์บุรี',
  'สุโขทัย',
  'สุพรรณบุรี',
  'สุราษฎร์ธานี',
  'สุรินทร์',
  'หนองคาย',
  'หนองบัวลำภู',
  'อ่างทอง',
  'อำนาจเจริญ',
  'อุดรธานี',
  'อุตรดิตถ์',
  'อุทัยธานี',
  'อุบลราชธานี'
];

const sellMember = ['ดิว จิรวรรตน์', 'นัด จิรวรรตน์', 'กิต จิรวรรตน์'];
const validationSchema = yup.object({
  customerID: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  customerName: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  customerBranch: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  customerAddress: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  customerPhone: yup
    .string('Enter your name')
    //.min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  //validate email ***
  customerEmail: yup
    .string('Enter your name')
    // .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  customerSell: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  province: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน')
});

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  select: {
    // cursor: 'pointer',
    textDecoration: 'none'
    // '&:hover': {
    //   background: '#D3D3D3'
    // }
  },
  btnDelete: {
    margin: 3,
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    // padding: '9px 48px',
    border: '1px solid',
    lineHeight: 1.5,
    background: '#FFFFFF',
    borderColor: '#028E4E',
    borderRadius: 10,
    color: '#028E4E',
    width: 80
  },
  cardPad: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),

    borderRadius: 0
  },
  kk: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));
function AddCustomer() {
  const classes = useStyles();
  const history = useHistory();
  const [openDialog, setOpenDialog] = useState(false);
  const [customerStatus, setCustomerStatus] = useState(true);
  const [labelstatus, setLabelStatus] = useState('เปิดใช้งาน');
  const [employee, setEmployee] = useState([]);
  const [colorLabel, setColorLabel] = useState('#7FB344');
  useEffect(() => {
    getEmployeeAll(`Keyword=พนักงานขาย&Page=1&PageSize=100&request=Id`)
      .then(res => {
     
        setEmployee(res.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const createCustomer = () => {
    // console.log(
    //   formik.values.customerID +
    //     ' ' +
    //     formik.values.customerName +
    //     ' ' +
    //     formik.values.customerBranch +
    //     ' ' +
    //     formik.values.customerAddress+
    //     ' ' +
    //     formik.values.province+
    //     ' ' +
    //    formik.values.customerPhone+
    //    ' ' +
    //    formik.values.customerEmail+
    //    ' ' +
    //    formik.values.customerSell+
    //    ' ' +
    //    customerStatus
    // );
    postCustomer({
      customerId: formik.values.customerID,
      customerName: formik.values.customerName,
      branch: formik.values.customerBranch,
      address: formik.values.customerAddress,
      province: formik.values.province,
      telephoneNumber: formik.values.customerPhone,
      email: formik.values.customerEmail,
      contactPerson: formik.values.customerSell,
      use: customerStatus
    });
  };

  const handleChangeSwitch = event => {
    setCustomerStatus(!customerStatus);
    if (customerStatus == true) {
      setLabelStatus('ปิดการใช้งาน');
      setColorLabel('#000');
    } else {
      setLabelStatus('เปิดใช้งาน');
      setColorLabel('#7FB344');
    }
  };

  const handleDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    history.goBack();
  };
  const deleteCus = str => {
    deleteCustomerByID(str).then(res => {
      console.log('deleted');
    });
  };
  const formik = useFormik({
    initialValues: {
      customerID: '',
      customerName: '',
      customerBranch: '',
      customerAddress: '',
      province: '',
      customerPhone: '',
      customerEmail: '',
      customerSell: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      createCustomer();
      handleDialog();
    }
  });
  return (
    <div style={{ margin: 10 }}>
      {/* <button onClick={()=>deleteCus('error1')}>delete</button> */}
      <Card className={classes.root} style={{ marginBottom: '15px' }}>
        {' '}
        <Grid container justify="space-between" spacing={3}>
          <Grid container item xs={12} sm={12} md={8}>
            <ArrowBackIosIcon
              className={classes.kk}
              onClick={() => history.goBack()}
            />
            <Typography variant="h2">รายชื่อลูกค้า</Typography>
          </Grid>
          <Grid container item xs={12} sm={12} md={4} justifyContent="flex-end">
            <Typography variant="h2">เพิ่มข้อมูลลูกค้า</Typography>
          </Grid>
        </Grid>
      </Card>
      <Card className={classes.cardPad}>
        <Grid item>
          <Typography variant="h3">ข้อมูลลูกค้า</Typography>
        </Grid>
      </Card>
      <Card className={classes.cardPad} style={{ paddingTop: 10 }}>
        <Box mb={1} />
        <Dialogsuc
          title={'บันทึกข้อมูลสำเร็จ'}
          open={openDialog}
          onClose={handleCloseDialog}
        />

        <form onSubmit={formik.handleSubmit}>
          <Grid container item xs={12} sm={12} md={12} spacing={1}>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <Grid container>
                  <Typography variant="subtitle2">รหัสลูกค้า</Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mt={1} />

                <TextField
                  fullWidth
                  id="customerID"
                  name="customerID"
                  variant="outlined"
                  value={formik.values.customerID}
                  onChange={formik.handleChange}
                  placeholder="กรุณากรอกข้อมูล"
                  error={
                    formik.touched.customerID &&
                    Boolean(formik.errors.customerID)
                  }
                  helperText={
                    formik.touched.customerID && formik.errors.customerID
                  }
                  color="secondary"
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <Grid container>
                  <Typography variant="subtitle2">ชื่อลูกค้า</Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mt={1} />

                <TextField
                  fullWidth
                  id="customerName"
                  name="customerName"
                  variant="outlined"
                  value={formik.values.customerName}
                  onChange={formik.handleChange}
                  placeholder="กรุณากรอกข้อมูล"
                  error={
                    formik.touched.customerName &&
                    Boolean(formik.errors.customerName)
                  }
                  helperText={
                    formik.touched.customerName && formik.errors.customerName
                  }
                  color="secondary"
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <Grid container>
                  <Typography variant="subtitle2">ชื่อสาขา</Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mt={1} />

                <TextField
                  fullWidth
                  id="customerBranch"
                  name="customerBranch"
                  variant="outlined"
                  value={formik.values.customerBranch}
                  onChange={formik.handleChange}
                  placeholder="กรุณากรอกข้อมูล"
                  error={
                    formik.touched.customerBranch &&
                    Boolean(formik.errors.customerBranch)
                  }
                  helperText={
                    formik.touched.customerBranch &&
                    formik.errors.customerBranch
                  }
                  color="secondary"
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <Grid container>
                  <Typography variant="subtitle2">ที่อยู่</Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mt={1} />

                <TextField
                  fullWidth
                  id="customerAddress"
                  name="customerAddress"
                  variant="outlined"
                  value={formik.values.customerAddress}
                  onChange={formik.handleChange}
                  placeholder="กรุณากรอกข้อมูล"
                  error={
                    formik.touched.customerAddress &&
                    Boolean(formik.errors.customerAddress)
                  }
                  helperText={
                    formik.touched.customerAddress &&
                    formik.errors.customerAddress
                  }
                  color="secondary"
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <Grid container>
                  <Typography variant="subtitle2">จังหวัด</Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mt={1} />
                <TextField
                  fullWidth
                  className="px-2 my-2"
                  variant="outlined"
                  name="province"
                  id="province"
                  select
                  SelectProps={{
                    native: true,
                    className: classes.selectCon,
                    MenuProps: {
                      className: { paper: classes.menuPaper }
                    }
                  }}
                  value={formik.values.province}
                  onChange={formik.handleChange}
                  placeholder="กรุณากรอกข้อมูล"
                  error={
                    formik.touched.province && Boolean(formik.errors.province)
                  }
                  helperText={formik.touched.province && formik.errors.province}
                  size="small"
                >
                  <option value={1}>กรุณาเลือกข้อมูล</option>
                  {provinceList.map((province, index) => {
                    return <option value={province}>{province}</option>;
                  })}
                </TextField>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <Grid container>
                  <Typography variant="subtitle2">โทรศัพท์</Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mt={1} />

                <TextField
                  fullWidth
                  id="customerPhone"
                  name="customerPhone"
                  variant="outlined"
                  value={formik.values.customerPhone}
                  onChange={formik.handleChange}
                  placeholder="กรุณากรอกข้อมูล"
                  error={
                    formik.touched.customerPhone &&
                    Boolean(formik.errors.customerPhone)
                  }
                  helperText={
                    formik.touched.customerPhone && formik.errors.customerPhone
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
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mt={1} />

                <TextField
                  fullWidth
                  id="customerEmail"
                  name="customerEmail"
                  variant="outlined"
                  value={formik.values.customerEmail}
                  onChange={formik.handleChange}
                  placeholder="กรุณากรอกข้อมูล"
                  error={
                    formik.touched.customerEmail &&
                    Boolean(formik.errors.customerEmail)
                  }
                  helperText={
                    formik.touched.customerEmail && formik.errors.customerEmail
                  }
                  color="secondary"
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <Grid container>
                  <Typography variant="subtitle2">พนักงานขาย</Typography>
                  <Box ml={1} />
                  <Typography style={{ color: '#D44848' }}> * </Typography>
                </Grid>
                <Box mt={1} />

                <TextField
                  fullWidth
                  className="px-2 my-2"
                  variant="outlined"
                  name="customerSell"
                  id="customerSell"
                  select
                  SelectProps={{
                    native: true,
                    className: classes.selectCon,
                    MenuProps: {
                      className: { paper: classes.menuPaper }
                    }
                  }}
                  value={formik.values.customerSell}
                  onChange={formik.handleChange}
                  placeholder="กรุณากรอกข้อมูล"
                  error={
                    formik.touched.customerSell &&
                    Boolean(formik.errors.customerSell)
                  }
                  helperText={
                    formik.touched.customerSell && formik.errors.customerSell
                  }
                  size="small"
                >
                  <option value={1}>กรุณาเลือกข้อมูล</option>
                  {employee.map((sell, index) => {
                   if (sell.position == 'พนักงานขาย' && sell.use == true) {
                      return (
                        <option value={sell.firstName + ' ' + sell.lastName}>
                          {sell.firstName + ' ' + sell.lastName}
                        </option>
                      );
                    }
                  })}
                </TextField>
              </Grid>
            </Grid>
          </Grid>

          <Box mt={1} />
          <Grid item xs={12} sm={6} md={6}>
            <Box mt={1} />
            <Grid container>
              <Typography variant="subtitle2">การใช้าน</Typography>
              <Box ml={1} />
              <Typography style={{ color: '#D44848' }}> * </Typography>
            </Grid>
            {/* <Typography variant="subtitle2">การใช้าน</Typography> */}
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={customerStatus}
                  // onChange={handleChangeSwitch}
                  name="checkedB"
                  size="small"
                />
              }
              size="small"
              label={
                customerStatus ? (
                  <Typography variant="subtitle2" style={{ color: '#7FB344' }}>
                    {labelstatus}
                  </Typography>
                ) : (
                  <Typography variant="subtitle2">{labelstatus}</Typography>
                )
              }
            />
          </Grid>

          <Box mt={4} style={{ textAlign: 'center' }} fullWidth>
            <Grid container justifyContent="center" xs={12} sm={12} md={12}>
              <Grid xs={5} sm={5} md={2} style={{ textAlign: 'end' }}>
                <ButtonSecondary
                  label="ยกเลิก"
                  onClick={() => {
                    history.goBack();
                  }}
                  fullWidth
                  size="small"
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
        </form>
      </Card>
    </div>
  );
}

export default AddCustomer;
