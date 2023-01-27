import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Typography,
  TableCell,
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
  Button
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
const validationSchema = yup.object({
  shopName: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  name: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  shopID: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  address: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  email: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  number: yup
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
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      background: '#D3D3D3'
    }
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
  }
}));
export default function ShopData() {
  const classes = useStyles();
  const history = useHistory();
  const [edtitData, setEditData] = useState(false);
  const [id, setID] = useState('0105563090158');
  const [shopID, setShopID] = useState('0000000');
  const [shopName, setShopName] = useState('สำนักงานใหญ่');
  const [name, setName] = useState('บริษัท โรโบเทล จำกัด');
  const [address, setAddress] = useState(
    'ชั้น เอ็ม และ 27 ห้อง 062 อาคารเอ็มไพร์ ทาวเวอร์เลขที่ 1 ถนนสาทรใต้ เขตสาทร กรุงเทพมหานคร 10120'
  );
  const [email, setEmail] = useState('chalerm7k@gmail.com');
  const [number, setNumber] = useState('0123456789');
  const [nameA, setNameA] = useState('สมชาย ใจดี');

  const formik = useFormik({
    initialValues: {
      shopName: name,
      shopID: id,
      address: address,
      email: email,
      number: number,
      name: nameA
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert('success');
      console.log(values);
      handleName(values.name);
      saveEdit();
    }
  });

  const handleEdit = () => {
    setEditData(true);
  };
  const saveEdit = name => {
    setEditData(false);
  };
  const handleID = event => {
    setID(event.target.value);
  };
  const handleNameA = event => {
    setNameA(event.target.value);
  };
  const handleName = name => {
    setName(name);
  };
  const handleAddress = event => {
    setAddress(event.target.value);
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handleNumber = event => {
    setNumber(event.target.value);
  };
  return (
    <>
      <Card className={classes.root} style={{ marginBottom: '15px' }}>
        {' '}
        <Grid container justify="space-between" spacing={3}>
          <Grid container item xs={12} sm={12} md={8}>
            <ArrowBackIosIcon
              className={classes.kk}
              onClick={() => history.goBack()}
            />
            <Typography variant="h2">ร้านรุ่งเรืองกิจ</Typography>
          </Grid>
        </Grid>
      </Card>
      <Card className={classes.cardPad}>
        <Grid item>
          <Typography variant="h3">ข้อมูลส่วนตัว</Typography>
        </Grid>
      </Card>
      <Card className={classes.cardPad} style={{paddingTop:10}}>
        <Box mb={1} />
        {!edtitData ? (
          <>
            <Grid container spacing={1}>
              <Grid item xs={4} md={2}>
                <Typography variant="subtitle2">
                  เลขประจำตัวผู้เสียภาษี
                </Typography>
                <Box mt={1} />

                <Typography variant="subtitle2">รหัสสาขา</Typography>
                <Box mt={1} />

                <Typography variant="subtitle2">ชื่อสาขา</Typography>
                <Box mt={1} />

                <Typography variant="subtitle2">ชื่อนิติบุลคล</Typography>
                <Box mt={1} />

                <Typography variant="subtitle2">ที่อยู่</Typography>
                <Box mt={1} />
              </Grid>
              <Grid item xs={8} md={6}>
                <Typography variant="body2">{id}</Typography>
                <Box mt={1} />

                <Typography variant="body2">{shopID}</Typography>
                <Box mt={1} />

                <Typography variant="body2">{shopName}</Typography>
                <Box mt={1} />

                <Typography variant="body2">{name}</Typography>
                <Box mt={1} />

                <Typography variant="body2">{address}</Typography>
                <Box mt={1} />
              </Grid>
              <Grid item xs={12} md={4}>
                <ButtonPramary
                  label="แก้ไข"
                  fullWidth
                  size="small"
                  onClick={handleEdit}
                />
                <Button size="small" className={classes.btnDelete}>
                  ลบ
                </Button>
                {/* <ButtonSecondary label="ลบ"  size="small" /> */}
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <Box mt={1} />
                  <Typography variant="subtitle2">
                    เลขประจำตัวผู้เสียภาษี
                  </Typography>
                  <Box mt={1} />
                  <TextField
                    fullWidth
                    id="shopID"
                    name="shopID"
                    variant="outlined"
                    value={formik.values.shopID}
                    onChange={formik.handleChange}
                    placeholder="กรุณากรอกข้อมูล"
                    error={
                      formik.touched.shopID && Boolean(formik.errors.shopID)
                    }
                    helperText={formik.touched.shopID && formik.errors.shopID}
                    color="secondary"
                    size="small"
                  />
                  <Box mt={1} />
                  <Typography variant="subtitle2">ที่อยู่</Typography>
                  <Box mt={1} />
                  <TextField
                    fullWidth
                    id="address"
                    name="address"
                    variant="outlined"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    placeholder="กรุณากรอกข้อมูล"
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
                    color="secondary"
                    size="small"
                  />
                  <Box mt={1} />

                  <Typography variant="subtitle2">เบอร์โทร</Typography>
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
                      formik.touched.number && Boolean(formik.errors.number)
                    }
                    helperText={formik.touched.number && formik.errors.number}
                    color="secondary"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box mt={1} />

                  <Typography variant="subtitle2">ชื่อนิติบุลคล</Typography>
                  <Box mt={1} />

                  <TextField
                    fullWidth
                    id="shopName"
                    name="shopName"
                    variant="outlined"
                    value={formik.values.shopName}
                    onChange={formik.handleChange}
                    placeholder="กรุณากรอกข้อมูล"
                    error={
                      formik.touched.shopName && Boolean(formik.errors.shopName)
                    }
                    helperText={
                      formik.touched.shopName && formik.errors.shopName
                    }
                    color="secondary"
                    size="small"
                  />
                  <Box mt={1} />

                  <Typography variant="subtitle2">
                    ผู้มีอำนาจลงนาม/ประทับตรา *
                  </Typography>
                  <Box mt={1} />

                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    variant="outlined"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder="กรุณากรอกข้อมูล"
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    color="secondary"
                    size="small"
                  />
                  <Box mt={1} />

                  <Typography variant="subtitle2">อีเมล์</Typography>
                  <Box mt={1} />

                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="กรุณากรอกข้อมูล"
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    color="secondary"
                    size="small"
                  />
                </Grid>
              </Grid>

              <Box mt={1} />
              <div style={{ textAlign: 'center' }}>
              <ButtonSecondary
                  label="ยกเลิก"
                  onClick={() => {
                    setEditData(false);
                  }}
                  fullWidth
                  size="small"
                />
                <ButtonPramary
                  label="บันทึก"
                  fullWidth
                  size="small"
                  type="submit"
                />

                
              </div>
            </form>
          </>
        )}
      </Card>
    </>
  );
}
