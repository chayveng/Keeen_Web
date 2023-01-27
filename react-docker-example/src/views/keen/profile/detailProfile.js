// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import clsx from 'clsx';
// import PropTypes from 'prop-types';
// import {
//     Box,
//     Card,
//     makeStyles,
//     Grid,
//     Typography,
//     CardContent,
//     FormControl,
//     OutlinedInput,
//     FormControlLabel,
//     FormLabel,
//     RadioGroup,
//     Radio, TextField
// } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';
// import ButtonSecondary from 'src/components/keen/ButtonSecondary';
// import ButtonPramary from 'src/components/keen/Buttonprimary'
// import ButtonAddfile from 'src/components/keen/ButtonAddfile'
// import IconUpload from 'src/components/keen/icon/iconUpload'

// import { KeyboardDatePicker } from '@material-ui/pickers';
// import { useFormik } from 'formik';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import { useSelector } from 'react-redux';
// import * as yup from 'yup';
// import Dialogsuc from 'src/components/keen/Dialogsuc'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         borderRadius: 0,
//         padding: theme.spacing(3),
//         paddingLeft: theme.spacing(4),
//         paddingRight: theme.spacing(4),

//     },
//     pb: {
//         paddingBottom: theme.spacing(1),
//         paddingTop: theme.spacing(1),
//         fontFamily: "Prompt, sans-serif",
//     },
//     kk: {
//         verticalAlign: 'center',
//         // width: 16
//     },
//     icon: {
//         borderRadius: '50%',
//         width: 16,
//         height: 16,
//         boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//         backgroundColor: '#f5f8fa',
//         backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//         '$root.Mui-focusVisible &': {
//             outline: '2px auto rgba(19,124,189,.6)',
//             outlineOffset: 2,
//         },
//         'input:hover ~ &': {
//             backgroundColor: '#ebf1f5',
//         },
//         'input:disabled ~ &': {
//             boxShadow: 'none',
//             background: 'rgba(206,217,224,.5)',
//         },
//     },
//     checkedIcon: {
//         backgroundColor: '#137cbd',
//         backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//         '&:before': {
//             display: 'block',
//             width: 16,
//             height: 16,
//             backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
//             content: '""',
//         },
//         'input:hover ~ &': {
//             backgroundColor: '#106ba3',
//         },
//     },

//     cardPad: {
//         padding: theme.spacing(2),
//         paddingLeft: theme.spacing(3),
//         paddingRight: theme.spacing(3),

//         borderRadius: 0,

//     }

// }));
// const today = moment().format("YYYY-MM-DD");
// const phoneRegExp = '^[0]+[0-9]'
// const validationSchema = yup.object({
//     id: yup
//         .string('Enter your id')
//         .min(8, 'กรุณากรอกข้อมูลให้ครบถ้วน')
//         .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
//     name: yup
//         .string('Enter your name')
//         .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
//         .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
//     lastName: yup
//         .string('Enter your lastName')
//         .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
//         .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
//     phone: yup
//         .string('Main Contact phone')
//         .matches(phoneRegExp, 'Phone number is not valid')
//         .min(10, 'กรุณากรอกข้อมูลให้ครบถ้วน')
//         .max(10, 'กรุณากรอกข้อมูลให้ครบถ้วน')
//         .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
//     pstion: yup.string()
//         // .nullable()
//         .oneOf(['tester', 'programer'])
//         .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
//     email: yup
//         .string('Enter your email')
//         .email('ข้อมูลไม่ตรงตามเงื่อนไข')
//         .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
//     date_of_birth: yup
//         .date()
//         .max(today, "กรุณากรอกข้อมูลให้ครบถ้วน")
//         .typeError("กรุณากรอกข้อมูลให้ครบถ้วน")

// });

// function StyledRadio(props) {
//     const classes = useStyles();

//     return (
//         <Radio
//             className={classes.root}
//             disableRipple
//             color="default"
//             checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
//             icon={<span className={classes.icon} />}
//             {...props}
//         />
//     );
// }

// const DetailProfile = ({
//     className,
//     data,
//     ...rest

// }) => {
//     const classes = useStyles();
//     const reducer = useSelector((state) => state.qrTransaction);
//     const { id } = useParams();
//     const history = useHistory();
//     const [editProfile, seteditProfile] = useState(false)

//     const [openDialog, setOpenDialog] = useState(false);
//     ;

//     const handleClickEdit = () => {

//         seteditProfile(true)
//     }
//     const handleChangeDate = (date) => {
//         formik.setFieldValue(
//             "date_of_birth",
//             moment(date).format("YYYY-MM-DD")
//         );
//     };
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             name: '',
//             id: '',
//             lastName: '',
//             phone: '',
//             pstion: '',
//             date_of_birth: null
//         },
//         validationSchema: validationSchema,

//         onSubmit: values => {
//             alert(values.name);
//             // testPage()
//         }
//     });
//     return (
//         <>
//             <form onSubmit={formik.handleSubmit}>
//                 <Card
//                     className={clsx(classes.root, className)}
//                     {...rest}
//                 >
//                     <Grid container justify='space-between' spacing={3}>
//                         <Grid container item xs={12} sm={12} md={8} >

//                             <ArrowBackIosIcon
//                                 className={classes.kk}
//                                 onClick={() => history.goBack()}
//                             />
//                             <Typography variant="h2"
//                             >ข้อมูลส่วนตัว</Typography>
//                         </Grid>
//                         <Grid item xs={12} sm={4} md={4} >

//                         </Grid>
//                     </Grid>
//                 </Card>
//                 <Box mb={2} />
//                 <Card className={classes.cardPad}>
//                     <Grid item>
//                         <Typography variant="h3">ข้อมูลส่วนตัว</Typography>
//                     </Grid>
//                 </Card>
//                 <Card className={classes.cardPad}
//                     {...rest}>
//                     {/* <CardContent> */}
//                     {!editProfile ? (

//                         <Box >
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} sm={12} md={2}>

//                                     <Grid item xs={12} sm={12} md={12}>
//                                         <img src="/static/images/img_admin.png" style={{ width: "10vw", height: "25vh", borderRadius: '1vh' }} />
//                                     </Grid>
//                                 </Grid>


//                                 <Grid item xs={12} sm={12} md={7}>
//                                     <Grid container item xs={12} spacing={1}>
//                                         <Grid item xs={12} sm={12} md={3}>
//                                             <Typography variant="subtitle2">
//                                                 ชื่อ - นามสกุล
//                                             </Typography>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={9}>
//                                             <Typography
//                                                 variant="body2"
//                                                 color="textSecondary"
//                                             >
//                                                 ดิว จิรวรรตน์
//                                                 {/* {data?.isCompany
//                                     ? 'นิติบุคคล'
//                                     : 'บุคคลธรรมดา'} */}
//                                             </Typography>
//                                         </Grid>

//                                     </Grid>

//                                     <Grid container item xs={12} spacing={1}>
//                                         <Grid item xs={12} sm={12} md={3}>
//                                             <Typography variant="subtitle2">
//                                                 วันเกิด
//                                             </Typography>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={9}>
//                                             <Typography
//                                                 variant="body2"
//                                                 color="textSecondary"
//                                             >
//                                                 21 ก.ค. 41
//                                                 {/* {data?.contractFirstname}{' '}
//                                   {data?.contractLastname} */}
//                                             </Typography>
//                                         </Grid>
//                                     </Grid>
//                                     <Grid container item xs={12} spacing={1}>
//                                         <Grid item xs={12} sm={12} md={3}>
//                                             <Typography variant="subtitle2">
//                                                 เพศ
//                                             </Typography>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={9}>
//                                             <Typography
//                                                 variant="body2"
//                                                 color="textSecondary"
//                                             >
//                                                 ชาย
//                                                 {/* {data?.houseNumber ? data?.address : ''} */}
//                                             </Typography>
//                                         </Grid>
//                                     </Grid>
//                                     <Grid container item xs={12} spacing={1}>
//                                         <Grid item xs={12} sm={12} md={3}>
//                                             <Typography variant="subtitle2">
//                                                 เบอร์โทร
//                                             </Typography>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={9}>
//                                             <Typography
//                                                 variant="body2"
//                                                 color="textSecondary"
//                                             >
//                                                 081-5648-222
//                                                 {/* {data?.tel} */}
//                                             </Typography>
//                                         </Grid>
//                                     </Grid>

//                                     <Grid container item xs={12} spacing={1}>
//                                         <Grid item xs={12} sm={12} md={3}>
//                                             <Typography variant="subtitle2">
//                                                 อีเมล
//                                             </Typography>
//                                         </Grid>
//                                         <Grid item xs={12} sm={12} md={9}>
//                                             <Typography
//                                                 variant="body2"
//                                                 color="textSecondary"
//                                             >
//                                                 Apinya007@gmail.com
//                                                 {/* {data?.email} */}
//                                             </Typography>
//                                         </Grid>
//                                     </Grid>


//                                 </Grid>

//                                 <Grid item xs={12} sm={12} md={3} className={classes.textAlignend}>
//                                     <ButtonPramary
//                                         label="แก้ไข"
//                                         onClick={handleClickEdit}
//                                         size="small"
//                                     />
//                                 </Grid>
//                             </Grid>

//                         </Box>
//                     ) :
//                         (
//                             <>
//                                 <Box>
//                                     <Grid container spacing={2}>
//                                         <Grid item xs={12} sm={12} md={2}>

//                                             <Grid item xs={12} sm={12} md={12}>
//                                                 <img src="/static/images/img_admin.png" style={{ width: "10vw", height: "25vh", borderRadius: '1vh' }} />
//                                                 <Box mt={1} />
//                                                 <h6>กรุณาอัปโหลดรูปภาพ</h6>
//                                                 <Box mt={1} />

//                                             </Grid>
//                                             <Box mt={1} />
//                                             <Grid container xs={12} sm={12} md={12}  >
//                                                 <ButtonAddfile
//                                                     label="เพิ่มไฟล์"
//                                                     size="small"
//                                                     type='submit'
//                                                     startIcon={<IconUpload />}
//                                                 />


//                                             </Grid>


//                                         </Grid>

//                                         <Grid item xs={12} sm={12} md={10}>
//                                             <Grid container item xs={12} sm={12} md={12} spacing={1}>

//                                                 <Grid container item xs={12} sm={12} md={6} spacing={1}>
//                                                     <Grid item xs={12} sm={12} md={12}>
//                                                         <Grid container>
//                                                             <Typography variant="subtitle2">
//                                                                 ชื่อ
//                                                             </Typography>
//                                                             <Box ml={1} />
//                                                             <Typography style={{ color: '#D44848' }} > * </Typography>

//                                                             <Box mb={1} />
//                                                         </Grid>


//                                                         <Box mt={1} />

//                                                         <TextField
//                                                             fullWidth
//                                                             id="name"
//                                                             name="name"
//                                                             variant="outlined"
//                                                             defaultValue="Hello World"
//                                                             placeholder="กรุณากรอกข้อมูล"
//                                                             value={formik.values.name}
//                                                             onChange={formik.handleChange}
//                                                             error={formik.touched.name && Boolean(formik.errors.name)}
//                                                             helperText={formik.touched.name && formik.errors.name}
//                                                             color="secondary"
//                                                             size="small"
//                                                         />
//                                                     </Grid>

//                                                 </Grid>
//                                                 <Grid container item xs={12} sm={12} md={6} spacing={1}>
//                                                     <Grid item xs={12} sm={12} md={12}>
//                                                         <Grid container>
//                                                             <Typography variant="subtitle2">
//                                                                 นามสกุล
//                                                             </Typography>
//                                                             <Box ml={1} />
//                                                             <Typography style={{ color: '#D44848' }} > * </Typography>

//                                                             <Box mb={1} />
//                                                         </Grid>
//                                                         <Box mt={1} />

//                                                         <TextField
//                                                             fullWidth
//                                                             id="lastName"
//                                                             name="lastName"
//                                                             variant="outlined"
//                                                             placeholder='กรุณากรอกข้อมูล'
//                                                             value={formik.values.lastName}
//                                                             onChange={formik.handleChange}
//                                                             error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//                                                             helperText={formik.touched.lastName && formik.errors.lastName}
//                                                             color='secondary'
//                                                             defaultValue="โสภสกุล"
//                                                             size='small'
//                                                         />
//                                                     </Grid>

//                                                 </Grid>
//                                             </Grid>
//                                             <Box mt={1} />
//                                             <Grid container item xs={12} sm={12} md={12} spacing={1}>
//                                                 <Grid container item xs={12} sm={12} md={6} spacing={1}>
//                                                     <Grid item xs={12} sm={12} md={12}>
//                                                         <Grid container>
//                                                             <Typography variant="subtitle2">
//                                                                 วันเกิด
//                                                             </Typography>
//                                                             <Box ml={1} />
//                                                             <Typography style={{ color: '#D44848' }} > * </Typography>

//                                                             <Box mb={1} />
//                                                         </Grid>

//                                                         <KeyboardDatePicker
//                                                             margin="normal"
//                                                             id="date_of_birth"
//                                                             name='date-picker-dialog'
//                                                             format="DD/MM/yyyy"
//                                                             inputVariant="outlined"
//                                                             // value={selectedDate}
//                                                             onChange={handleChangeDate}
//                                                             KeyboardButtonProps={{
//                                                                 'aria-label': 'change date'
//                                                             }}
//                                                             // value={formik.values.date_of_birth}
//                                                             value={formik.values.date_of_birth}
//                                                             error={Boolean(formik.errors.date_of_birth)}
//                                                             helperText={formik.errors.date_of_birth}
//                                                             fullWidth
//                                                             size='small'
//                                                         />
//                                                     </Grid>
//                                                 </Grid>

//                                                 <Grid item xs={12} sm={12} md={6} spacing={1}>
//                                                     <Grid item xs={12} sm={12} md={12}>
//                                                         <Grid container>
//                                                             <Typography variant="subtitle2">
//                                                                 เพศ
//                                                             </Typography>
//                                                             <Box ml={1} />
//                                                             <Typography style={{ color: '#D44848' }} > * </Typography>

//                                                         </Grid>
//                                                         <FormControl component="fieldset">

//                                                             <RadioGroup row aria-label="position" name="position" defaultValue="top">
//                                                                 <FormControlLabel value="female" control={<StyledRadio />} label="ชาย" />
//                                                                 <FormControlLabel value="male" control={<StyledRadio />} label="หญิง" />
//                                                                 <FormControlLabel value="other" control={<StyledRadio />} label="LGBT" />
//                                                             </RadioGroup>
//                                                         </FormControl>
//                                                     </Grid>

//                                                 </Grid>
//                                             </Grid>

//                                             <Grid container item xs={12} sm={12} md={12} spacing={1}>
//                                                 <Grid container item xs={12} sm={12} md={6} spacing={1}>
//                                                     <Grid item xs={12} sm={12} md={12}>

//                                                         <Grid container>
//                                                             <Typography variant="subtitle2">
//                                                                 เบอร์โทร
//                                                             </Typography>
//                                                             <Box ml={1} />
//                                                             <Typography style={{ color: '#D44848' }} > * </Typography>

//                                                         </Grid>
//                                                         <Box mt={1} />

//                                                         <TextField
//                                                             fullWidth
//                                                             id="phone"
//                                                             name="phone"
//                                                             variant="outlined"
//                                                             placeholder='กรุณากรอกข้อมูล'
//                                                             value={formik.values.phone}
//                                                             onChange={formik.handleChange}
//                                                             error={formik.touched.phone && Boolean(formik.errors.phone)}
//                                                             helperText={formik.touched.phone && formik.errors.phone}
//                                                             color='secondary'
//                                                             size='small'

//                                                         />
//                                                     </Grid>
//                                                 </Grid>


//                                                 <Grid container item xs={12} sm={12} md={6} spacing={1}>
//                                                     <Grid item xs={12} sm={12} md={12}>

//                                                         <Grid container>
//                                                             <Typography variant="subtitle2">
//                                                                 อีเมล
//                                                             </Typography>
//                                                             <Box ml={1} />
//                                                             <Typography style={{ color: '#D44848' }} > * </Typography>

//                                                         </Grid>
//                                                         <Box mt={1} />

//                                                         <TextField
//                                                             fullWidth
//                                                             id="email"
//                                                             name="email"
//                                                             variant="outlined"
//                                                             placeholder='กรุณากรอกข้อมูล'
//                                                             value={formik.values.email}
//                                                             onChange={formik.handleChange}
//                                                             error={formik.touched.email && Boolean(formik.errors.email)}
//                                                             helperText={formik.touched.email && formik.errors.email}
//                                                             color='secondary'
//                                                             size='small'

//                                                         />
//                                                     </Grid>
//                                                 </Grid>

//                                             </Grid>
//                                         </Grid>
//                                     </Grid>

//                                 </Box>

//                             </>
//                         )
//                     }
//                     {/* </CardContent> */}

//                 </Card>
//                 {editProfile ? (

//                     <Box mt={2} style={{ textAlign: 'center' }} fullWidth>
//                         <ButtonSecondary
//                             label="ยกเลิก"
//                             size="small"
//                         />
//                         <ButtonPramary
//                             label="บันทึก"
//                             size="small"
//                             type='submit'

//                         />
//                     </Box>
//                 ) : null}
//                 {/* { openDialog ? <Dialogsuc/>:null} */}
//             </form>

//         </>)
// };


// DetailProfile.propTypes = {
//     className: PropTypes.string,
// };

// DetailProfile.defaultProps = {
// };

// export default DetailProfile;





// import moment from 'moment';
// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//     Card,
//     Typography,
//     TableCell,
//     CardContent,
   
//     Grid,
//     TextField,
//     Box,
//     InputAdornment,
//     SvgIcon
// } from '@material-ui/core';
// import { Search as SearchIcon } from 'react-feather';
// import ButtonPramary from 'src/components/keen/Buttonprimary';
// import ButtonSecondary from 'src/components/keen/ButtonSecondary';
// import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';
// import clsx from 'clsx';
// import { KeyboardDatePicker } from '@material-ui/pickers';



// const today = moment().format("YYYY-MM-DD");
// const phoneRegExp = '^[0]+[0-9]'
// const validationSchema = yup.object({
//     id: yup
//         .string('Enter your id')
//         .min(8, 'กรุณากรอกข้อมูลให้ครบถ้วน')
//         .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
//     name: yup
//         .string('Enter your name')
//         .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
//         .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
//     lastName: yup
//         .string('Enter your lastName')
//         .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
//         .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
//     phone: yup
//         .string('Main Contact phone')
//         .matches(phoneRegExp, 'Phone number is not valid')
//         .min(10, 'กรุณากรอกข้อมูลให้ครบถ้วน')
//         .max(10, 'กรุณากรอกข้อมูลให้ครบถ้วน')
//         .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
//     pstion: yup.string()
//         // .nullable()
//         .oneOf(['tester', 'programer'])
//         .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
//     email: yup
//         .string('Enter your email')
//         .email('ข้อมูลไม่ตรงตามเงื่อนไข')
//         .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
//     date_of_birth: yup
//         .date()
//         .max(today, "กรุณากรอกข้อมูลให้ครบถ้วน")
//         .typeError("กรุณากรอกข้อมูลให้ครบถ้วน")

// });

// const useStyles = makeStyles({
//     root: {},
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)'
//     },
//     title: {
//         fontSize: 14
//     },
//     pos: {
//         marginBottom: 12
//     },
//     select: {
//         cursor: 'pointer',
//         textDecoration: 'none',
//         '&:hover': {
//             background: '#D3D3D3'
//         }
//     }
// });
// export default function ShopData() {
//     const classes = useStyles();
//     const [edtitData, setEditData] = useState(false);
//     // const [id, setID] = useState('0105563090158');
//     const [name, setName] = useState('ดิว จิรวรรตน์');
//     const [Brith, setฺBrith] = useState(moment().format("1997-01-21"));
//     const [shopName, setShopName] = useState('สำนักงานใหญ่');
//     const [address, setAddress] = useState(
//         'ชั้น เอ็ม และ 27 ห้อง 062 อาคารเอ็มไพร์ ทาวเวอร์เลขที่ 1 ถนนสาทรใต้ เขตสาทร กรุงเทพมหานคร 10120'
//     );
//     const [email, setEmail] = useState('chalerm7k@gmail.com');
//     const [number, setNumber] = useState('0123456789');
//     const [nameA, setNameA] = useState('สมชาย ใจดี');
//     const handleEdit = () => {
//         setEditData(true);
//     };
//     const saveEdit = name => {
//         setEditData(false);
//     };
//     const handleBrith = event => {
//         setฺBrith(event.target.value);
//     };
//     const handleNameA = event => {
//         setNameA(event.target.value);
//     };
//     const handleName = event => {
//         setName(event.target.value);
//     };
//     const handleAddress = event => {
//         setAddress(event.target.value);
//     };

//     const handleEmail = event => {
//         setEmail(event.target.value);
//     };
//     const handleNumber = event => {
//         setNumber(event.target.value);
//     };

//         const formik = useFormik({
//         initialValues: {
//             email: '',
//             name: '',
//             id: '',
//             lastName: '',
//             phone: '',
//             pstion: '',
//             date_of_birth: null
//         },
//         validationSchema: validationSchema,

//         onSubmit: values => {
//             alert(values.name);
//             // testPage()
//         }
//     });
//     return (
//         <>
//             <Card
//                 className={clsx(classes.root)}
//             // {...rest}
//             >
//                 <CardContent>
//                     {' '}
//                     <Typography variant="h2" className={classes.pb}>
//                         ข้อมูลส่วนตัว
//                     </Typography>
//                 </CardContent>
//             </Card>
//             <Box mt={3} />
//             <Card className={classes.root}>
//                 <CardContent>
//                     {' '}
//                     <Typography variant="h3" className={classes.pb}>
//                         ข้อมูลส่วนตัว
//                     </Typography>
//                     {!edtitData ? (
//                         <>
//                             <Grid container>
//                                 <Grid item xs={4} md={2}>
//                                     {/* <Typography variant="subtitle2">
//                                         เลขประจำตัวผู้เสียภาษี
//                                     </Typography> */}
//                                     <Typography variant="subtitle2">ชื่อ-นามสกุล</Typography>
//                                     <Typography variant="subtitle2">วันเกิด</Typography>
//                                     <Typography variant="subtitle2">ชื่อนิติบุลคล</Typography>
//                                     <Typography variant="subtitle2">ที่อยู่</Typography>
//                                 </Grid>
//                                 <Grid item xs={8} md={6}>
//                                     {/* <Typography variant="subtitle2">{id}</Typography> */}
//                                     <Typography variant="subtitle2">{name}</Typography>
//                                     <Typography variant="subtitle2">{Brith}</Typography>
//                                     <Typography variant="subtitle2">{shopName}</Typography>
//                                     <Typography variant="subtitle2">{address}</Typography>
//                                 </Grid>
//                                 <Grid item xs={12} md={4}>
//                                     <Card>
//                                         <ButtonPramary
//                                             label="แก้ไข"
//                                             fullWidth
//                                             size="small"
//                                             onClick={handleEdit}
//                                         />
//                                         <ButtonSecondary label="ลบ" fullWidth size="small" />
//                                     </Card>
//                                 </Grid>
//                             </Grid>
//                         </>
//                     ) : (
//                         <>
//                             <Grid container>
//                                 <Grid item xs={12} md={6}>
//                                     <Typography variant="subtitle2">
//                                         ชื่อ-นามสกุล
//                                     </Typography>
//                                     <TextField
//                                         fullWidth
//                                         id="name"
//                                         name="name"
//                                         variant="outlined"
//                                         value={name}
//                                         onChange={handleName}
//                                         placeholder="กรุณากรอกข้อมูล"
//                                         color="secondary"
//                                         size="small"
//                                     />

//                                     <KeyboardDatePicker
//                                         margin="normal"
//                                         id="date_of_birth"
//                                         name='date-picker-dialog'
//                                         format="DD/MM/yyyy"
//                                         inputVariant="outlined"
//                                         // value={selectedDate}
//                                         onChange={handleBrith}
//                                         KeyboardButtonProps={{
//                                             'aria-label': 'change date'
//                                         }}
//                                         value={Brith}

//                                         // value={formik.values.date_of_birth}
//                                         // value={formik.values.date_of_birth}
//                                         // error={Boolean(formik.errors.date_of_birth)}
//                                         // helperText={formik.errors.date_of_birth}
//                                         fullWidth
//                                         size='small'
//                                     />

//                                     <Typography variant="subtitle2">ที่อยู่</Typography>
//                                     <TextField
//                                         fullWidth
//                                         id="name"
//                                         name="name"
//                                         variant="outlined"
//                                         value={address}
//                                         onChange={handleAddress}
//                                         placeholder="กรุณากรอกข้อมูล"
//                                         color="secondary"
//                                         size="small"
//                                     />
//                                     <Typography variant="subtitle2">เบอร์โทร</Typography>
//                                     <TextField
//                                         fullWidth
//                                         id="number"
//                                         name="number"
//                                         variant="outlined"
//                                         value={number}
//                                         onChange={handleNumber}
//                                         placeholder="กรุณากรอกข้อมูล"
//                                         color="secondary"
//                                         size="small"
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <Typography variant="subtitle2">ชื่อนิติบุลคล</Typography>
//                                     <TextField
//                                         fullWidth
//                                         id="name"
//                                         name="name"
//                                         variant="outlined"
//                                         value={name}
//                                         onChange={handleName}
//                                         placeholder="กรุณากรอกข้อมูล"
//                                         color="secondary"
//                                         size="small"
//                                     />
//                                     <Typography variant="subtitle2">
//                                         ผู้มีอำนาจลงนาม/ประทับตรา *
//                                     </Typography>
//                                     <TextField
//                                         fullWidth
//                                         id="name"
//                                         name="name"
//                                         variant="outlined"
//                                         value={nameA}
//                                         onChange={handleNameA}
//                                         placeholder="กรุณากรอกข้อมูล"
//                                         color="secondary"
//                                         size="small"
//                                     />
//                                     <Typography variant="subtitle2">อีเมล์</Typography>
//                                     <TextField
//                                         fullWidth
//                                         id="email"
//                                         name="email"
//                                         variant="outlined"
//                                         value={email}
//                                         onChange={handleEmail}
//                                         placeholder="กรุณากรอกข้อมูล"
//                                         color="secondary"
//                                         size="small"
//                                     />
//                                 </Grid>
//                             </Grid>
//                             <ButtonPramary
//                                 label="บันทึก"
//                                 fullWidth
//                                 size="small"
//                                 onClick={saveEdit}
//                             />
//                             <ButtonSecondary
//                                 label="ยกเลิก"
//                                 onClick={() => {
//                                     setEditData(false);
//                                 }}
//                                 fullWidth
//                                 size="small"
//                             />
//                         </>
//                     )}
//                 </CardContent>
//             </Card>
//         </>
//     );
// }
