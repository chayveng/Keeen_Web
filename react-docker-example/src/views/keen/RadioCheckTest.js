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
import React from "react";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useHistory } from 'react-router-dom';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
export default function RadioCheckTest() {
    const history = useHistory();
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const handleRadioChange = event => {
    console.log(event.target.value);
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };
  const handleSubmitRadio = event => {
    
    if (formik.values.radiogroup1) {
      setHelperText("");
      setError(false);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }

  };

  const formik = useFormik({
        initialValues: {
          radiogroup1: ''
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
          radiogroup1: Yup.string()
          .required('กรุณากรอกข้อมูลให้ครบถ้วน')
        }),
    
        onSubmit: values => {   
        //   const path = '/joblist'
        //   history.push(path)
        alert('submit')
        }
      });
  return (
    <>
    
     {/* <form onSubmit={handleSubmit}> */}
        <form onSubmit={formik.handleSubmit}>
      <FormControl component="fieldset" error={error}>
        <FormLabel component="legend">What's 1 + 1?</FormLabel>
        <RadioGroup name="quiz" value={formik.values.radiogroup1} 
      
        onChange={e => {
            handleRadioChange(e);
            formik.setFieldValue("radiogroup1", e.target.value);
           }}
           >
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined" color="primary" onClick={handleSubmitRadio}>
          Check Answer
        </Button>
      </FormControl>
      </form>
    {/* </form> */}
    </>
  );
}