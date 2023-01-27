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
export default function Step3(props) {
  return (
    <div>
      Step3
      <ButtonPramary label="ถัดไป" onClick={props.handleNext} size="small" />
      <ButtonSecondary label="ย้อนกลับ" onClick={props.handleBack} size="small" />
    </div>
  );
}
