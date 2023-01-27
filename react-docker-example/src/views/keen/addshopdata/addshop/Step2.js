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
  TextField,
  Button
} from '@material-ui/core';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน')
});
export default function Step2(props) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(values.name);
      testPage();
    }
  });

  const testPage = () => {
    history.push('/datalist');
  };
  return (
    <div>
      Step4
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="subtitle2">ชื่อ</Typography>
        <TextField
          fullWidth
          id="name"
          name="name"
          variant="outlined"
          defaultValue="Hello World"
          placeholder="กรุณากรอกข้อมูล"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          color="secondary"
          size="small"
        />
         <Box mt={1} />
        <div style={{ textAlign: 'center' }}>
          <ButtonPramary label="บันทึก" type="submit" size="small" />

          <ButtonSecondary
            label="ย้อนกลับ"
            onClick={props.handleBack}
            size="small"
          />
        </div>
      </form>
    </div>
  );
}
