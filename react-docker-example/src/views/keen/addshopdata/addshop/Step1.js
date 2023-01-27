import React, { useState } from 'react';
import {
  Box,
  Card,
  makeStyles,
  Grid,
  Typography,
  CardContent,
  FormControl,
  OutlinedInput,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  TextField
} from '@material-ui/core';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

const validationSchema = yup.object({
  id: yup.string('Enter your name').required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  address: yup.string('Enter your name').required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  number: yup.string('Enter your name').required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  shopName: yup.string('Enter your name').required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  name: yup.string('Enter your name').required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  email: yup.string('Enter your name').required('กรุณากรอกข้อมูลให้ครบถ้วน')
});
function Step1(props) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      id: '',
      address: '',
      number: '',
      shopName: '',
      name: '',
      email: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(values.name); //
      props.handleNext();
    }
  });

  const testPage = () => {
    history.push('/datalist');
  };
  return (
    <Card>
        <CardContent> 
      Step1
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
                id="name"
                name="id"
                variant="outlined"
                value={formik.values.id}
                onChange={formik.handleChange}
                placeholder="กรุณากรอกข้อมูล"
                error={formik.touched.id && Boolean(formik.errors.id)}
                helperText={formik.touched.id && formik.errors.id}
                color="secondary"
                size="small"
              />
     
            <Box mt={1} />
      
              <Typography variant="subtitle2">ที่อยู่</Typography>
              <Box mt={1} />
              <TextField
                fullWidth
                id="name"
                name="address"
                variant="outlined"
                value={formik.values.address}
                onChange={formik.handleChange}
                placeholder="กรุณากรอกข้อมูล"
                error={formik.touched.address && Boolean(formik.errors.address)}
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
                error={formik.touched.number && Boolean(formik.errors.number)}
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
              id="name"
              name="shopName"
              variant="outlined"
              value={formik.values.shopName}
              onChange={formik.handleChange}
              placeholder="กรุณากรอกข้อมูล"
              error={formik.touched.shopName && Boolean(formik.errors.shopName)}
              helperText={formik.touched.shopName && formik.errors.shopName}
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
        <div style={{textAlign:'center'}}>
        <ButtonPramary label="บันทึก" type="submit" size="small" />

        <ButtonSecondary label="ยกเลิก" onClick={testPage} size="small" />
        </div>
      </form>
      </CardContent>
    </Card>
  );
}

export default Step1;
