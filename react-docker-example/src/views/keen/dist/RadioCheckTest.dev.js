// //import React from 'react';
// // import { Formik, Field } from 'formik';
// // import * as Yup from 'yup';
// // import classNames from 'classnames';
// // import { useFormik } from 'formik';
// // const InputFeedback = ({ error }) =>
// //   error ? <div className={classNames('input-feedback')}>{error}</div> : null;
// // const RadioButton = ({
// //   field: { name, value, onChange, onBlur },
// //   id,
// //   label,
// //   className,
// //   ...props
// // }) => {
// //   return (
// //     <div>
// //       <input
// //         name={name}
// //         id={id}
// //         type="radio"
// //         value={id} // could be something else for output?
// //         checked={id === value}
// //         onChange={onChange}
// //         onBlur={onBlur}
// //         className={classNames('radio-button')}
// //         {...props}
// //       />
// //       <label htmlFor={id}>{label}</label>
// //     </div>
// //   );
// // };
// // // Radio group
// // const RadioButtonGroup = ({
// //   value,
// //   error,
// //   touched,
// //   id,
// //   label,
// //   className,
// //   children
// // }) => {
// //   const classes = classNames(
// //     'input-field',
// //     {
// //       'is-success': value || (!error && touched), // handle prefilled or user-filled
// //       'is-error': !!error && touched
// //     },
// //     className
// //   );
// //   return (
// //     <div className={classes}>
// //       <fieldset>
// //         <legend>{label}</legend>
// //         {children}
// //         {touched && <InputFeedback error={error} />}
// //       </fieldset>
// //     </div>
// //   );
// // };
// // const formik = useFormik({
// //     initialValues: {
// //         radioGroup: '',
// //     },
// //     enableReinitialize: true,
// //     validationSchema: Yup.object({
// //         radioGroup: Yup.string().required('A radio option is required')
// //     }),
// //     onSubmit: values => {
// //       console.log(values);
// //   }});
// // function RadioCheckTest() {
// //   return (
// //     <div>
// //       <h1>Radio & checkbox inputs with Formik</h1>
// //     </div>
// //   );
// // }
// // export default RadioCheckTest;
// import React,{useState} from 'react';
// import { Form, Formik, useFormik } from 'formik';
// import * as Yup from 'yup';
// import {
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
//   FormLabel
// } from '@material-ui/core';
// const option = [{ values: 1 }, { values: 2 }, { values: 3 }];
// const RadioCheckTest = () => {
//   const name = 'selectedOption';
//     const [radioValue,setRadioValue] = useState()
//   const formik = useFormik({
//     initialValues: {
//       radiogroup: ''
//     },
//     enableReinitialize: true,
//     validationSchema: Yup.object({
//       radiogroup: Yup.string()
//       .required('กรุณากรอกข้อมูลให้ครบถ้วน')
//     }),
//     onSubmit: values => {
//       console.log(values);
//     }
//   });
//   return (
//     <>
//     <form onSubmit={formik.handleSubmit}>
//     <FormControl component="fieldset">
//             <FormLabel component="legend">Selected Option</FormLabel>
//             <RadioGroup
//               id='radiogroup'
//               name='radiogroup'
//               value={radioValue}
//               onChange={event => {
//                 console.log(event.target);
//                 // setFieldValue(name, event.currentTarget.value);
//               }}
//               error={
//                 formik.touched.radiogroup &&
//                 Boolean(formik.errors.radiogroup)
//               }
//               helperText={
//                 formik.touched.radiogroup &&
//                 formik.errors.radiogroup
//               }
//             >
//               <FormControlLabel
//                 value={option[0].values}
//                 control={<Radio />}
//                 label="Option 1"
//               />
//               <FormControlLabel
//                 value={option[1].values}
//                 control={<Radio />}
//                 label="Option 2"
//               />
//               <FormControlLabel
//                 value={option[2].values}
//                 control={<Radio />}
//                 label="Option 3"
//               />
//             </RadioGroup>
//           </FormControl>
//           <button type="submit">save</button>
//     </form>
//     {/* <Formik
//       initialValues={{
//         selectedOption: option
//       }}
//       onSubmit={() => {
//         console.log('save');
//       }}
//     >
//       {({ values, setFieldValue }) => (
//         <Form>
//           <FormControl component="fieldset">
//             <FormLabel component="legend">Selected Option</FormLabel>
//             <RadioGroup
//               name={name}
//               value={values.selectedOption.toString()}
//               onChange={event => {
//                 console.log(event.target);
//                 setFieldValue(name, event.currentTarget.value);
//               }}
//             >
//               <FormControlLabel
//                 value={option[0].values}
//                 control={<Radio />}
//                 label="Option 1"
//               />
//               <FormControlLabel
//                 value={option[1].values}
//                 control={<Radio />}
//                 label="Option 2"
//               />
//               <FormControlLabel
//                 value={option[2].values}
//                 control={<Radio />}
//                 label="Option 3"
//               />
//             </RadioGroup>
//           </FormControl>
//           <button type="submit">save</button>
//         </Form>
//       )}
//     </Formik> */}
//     </>
//   );
// };
// export default RadioCheckTest;
"use strict";