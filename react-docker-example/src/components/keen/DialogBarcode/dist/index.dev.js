// import React, { useState } from 'react';
// import {
//   Box,
//   makeStyles,
//   Typography,
//   Dialog,
//   Button,
//   Grid
// } from '@material-ui/core';
// import ButtonPramary from 'src/components/keen/Buttonprimary';
// import ScanBarcode from './ScanBarcode';
// import Html5QrcodePlugin from './Html5QrcodePlugin ';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme => ({
//   root: {
//     // width: 600,
//     marginLeft: 'auto',
//     marginRight: 'auto'
//   },
//   dialog: {
//     background: 'white',
//     padding: 30
//   },
//   title: {
//     color: '#014426',
//     fontFamily: 'Prompt, sans-serif',
//     textAlign: 'center',
//     fontWeight: 900,
//     fontSize: '28px'
//   },
//   img: {
//     textAlign: 'center',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     fontFamily: 'Prompt, sans-serif'
//   }
// }));
// function Dialogbarcode(props) {
//   const classes = useStyles();
//   const [barcode, setBarcode] = useState();
//     const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
//     const theme = useTheme();
//   const onNewScanResult = (decodedText, decodedResult) => {
//     // Handle the result here.
//     props.handleSerialNumber(decodedText);
//     setBarcode(decodedText);
//     // props.setTestBar(decodedText)
//     console.log(decodedText);
//     console.log('-------------');
//     console.log(decodedResult);
//   };
//   return (
//     <Dialog
//     fullScreen={fullScreen}
//       open={props.open}
//       onClose={props.onClose}
//       // maxWidth="sm"
//       fullWidth
//       className={classes.root}
//       aria-labelledby="responsive-dialog-title"
//     >
//       <div className={classes.dialog}>
//         <Box
//           mb={2.5}
//           justifyContent="space-between"
//           display="flex"
//           alignItems="center"
//         >
//           <Grid item xs={12}>
//             <Typography
//               variant="h4"
//               className={classes.title}
//               color="secondary"
//             >
//               {props.title}
//             </Typography>
//             {/* <ScanBarcode setTestBar={props.setTestBar}/> */}
//             <Html5QrcodePlugin
//               fps={10}
//               qrbox={250}
//               disableFlip={false}
//               qrCodeSuccessCallback={onNewScanResult}
//             />
//             <p>barcode = {barcode}</p>
//           </Grid>
//         </Box>
//         <Box mt={4} style={{ textAlign: 'center' }} fullWidth>
//           <Grid container justifyContent="center" xs={12} sm={12} md={12}>
//             <Grid xs={9} sm={9} md={6}>
//               <ButtonPramary
//                 variant="contained"
//                 onClick={props.onClose}
//                 // href="http://localhost:3000/profile"
//                 label="ตกลง"
//                 size="small"
//               />
//             </Grid>
//           </Grid>
//         </Box>
//       </div>
//     </Dialog>
//   );
// }
// export default Dialogbarcode;
"use strict";