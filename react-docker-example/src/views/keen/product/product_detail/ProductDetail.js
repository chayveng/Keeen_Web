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
  Switch,
  InputLabel,
  Input,
  MenuItem,
  FormControl,
  FormHelperText,
  Select
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import { withStyles } from '@material-ui/core/styles';
import Dialogsuc from 'src/components/keen/Dialogsuc';
import MuiTableCell from '@material-ui/core/TableCell';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { getProductSearch, updateProduct } from '../../api/keeen/product';

const TableCell = withStyles({
  root: {
    borderBottom: 'none',
    paddingRight: 50
  }
})(MuiTableCell);

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

const validationSchema = yup.object({
  barcode: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  skuNumber: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  productName: yup
    .string('Enter your name')
    .min(3, 'กรุณากรอกข้อมูลให้ครบถ้วน')
    .required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  capacity: yup.number().required('กรุณากรอกข้อมูลให้ครบถ้วน'),
  type: yup
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
  selectCon: {},
  menu: {
    maxHeight: 100
  },
  menuPaper: {
    maxHeight: 100
  },
  kk: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

const sellMember = ['ดิว จิรวรรตน์', 'นัด จิรวรรตน์', 'กิต จิรวรรตน์'];
export default function ProductDetail() {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();
  const product_ID = params.productID;
  const [edtitData, setEditData] = useState(false);
  const [titleL, setTitleL] = useState(true);
  const [titleR, setTitleR] = useState(true);
  const [labelstatus1, setLabelStatus1] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [productID, setProductID] = useState(product_ID);
  const type = ['KEEEN', 'FOOD SERVICE', 'DR. KEEEN'];
  const [status, setStatus] = useState();
  const [productDetail, setProductDetail] = useState({
    barcode: '',
    skuNumber: '',
    productName: '',
    capacity: '',
    type: '',
    use: '',
    uuid: ''
  });
  const update = () => {
    console.log(productDetail);
    updateProduct({
      barcode: formik.values.barcode,
      skuNumber: formik.values.skuNumber,
      productName: formik.values.productName,
      capacity: formik.values.capacity,
      type: formik.values.type,
      use: productDetail.use,
      uuid: productDetail.uuid
    }).then(res => {
      console.log(res);
    });
  };

  const fetchData = ()=>{
    getProductSearch(product_ID).then(res => {
      console.log(res.data.result.data.type);
      setProductDetail(res.data.result.data);
      setStatus(res.data.result.data.use)
      if (res.data.result.data.use == true) {
        setLabelStatus1('On');
      } else setLabelStatus1('Off');
    });
  }
  useEffect(() => {
    fetchData()
  }, []);
  const handleChangeSwitch = event => {
    // setStatus(!status);
    setProductDetail(prevState => ({
      ...prevState,
      use: !productDetail.use
    }));
  };
  const formik = useFormik({
    initialValues: {
      barcode: productDetail.barcode,
      skuNumber: productDetail.skuNumber,
      productName: productDetail.productName,
      capacity: productDetail.capacity,
      type: productDetail.type
      // use: status
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: values => {
      handleDialog();

      console.log(values);
    }
  });

  const handleDialog = () => {
    update()
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditData(false);
    //window.location.reload()
    fetchData()
  };
  // เปิดหน้าแก้ไข
  const handleEdit = () => {
    setTitleL(!titleL);
    setTitleR(!titleR);
    setEditData(true);
  };
  const handleCancelEdit = () => {
    setTitleL(!titleL);
    setTitleR(!titleR);
    setEditData(false);
  };
  const titleShowL = num1 => {
    if (num1) {
      return 'รายการสินค้าและอุปกรณ์';
    } else {
      return 'ข้อมูลสินค้าและอุปกรณ์';
    }
  };
  const titleShowR = num1 => {
    if (num1) {
      return 'ข้อมูลสินค้าและอุปกรณ์';
    } else {
      return 'แก้ไขข้อมูลสินค้าและอุปกรณ์';
    }
  };
  const handleProductID = value => {
    setProductDetail(prevState => ({
      ...prevState,
      productId: value
    }));
  };

  const handleProductName = value => {
    setProductDetail(prevState => ({
      ...prevState,
      productName: value
    }));
  };

  return (
    <div style={{ margin: 10 }}>
      <Card className={classes.root} style={{ marginBottom: '15px' }}>
        {' '}
        <Grid container justify="space-between" spacing={3}>
          <Grid container item xs={12} sm={12} md={8}>
            <ArrowBackIosIcon
              className={classes.kk}
              onClick={!edtitData ? () => history.goBack() : handleCancelEdit}
            />
            {/* <Typography variant="h2">{customerName}</Typography> */}
            <Typography variant="h2">{titleShowL(titleL)}</Typography>
          </Grid>
          <Grid container item xs={12} sm={12} md={4} justifyContent="flex-end">
            <Typography variant="h2">{titleShowR(titleR)}</Typography>
          </Grid>
        </Grid>
      </Card>
      <Card className={classes.cardPad}>
        <Grid item>
          <Typography variant="h3">ข้อมูล</Typography>
        </Grid>
      </Card>
      <Card className={classes.cardPad} style={{ paddingTop: 10 }}>
        <Box mb={1} />

        {!edtitData ? (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={9}>
                {/*  1 row  */}
                <Grid container item xs={12} spacing={2}>
                  <Grid item xs={12} sm={12} md={3}>
                    <Typography variant="subtitle2">Barcode</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={9}>
                    <Typography variant="body2" color="textSecondary">
                      {productDetail.barcode}
                    </Typography>
                  </Grid>
                </Grid>
                {/* ------  */}
                <Grid container item xs={12} spacing={2}>
                  <Grid item xs={12} sm={12} md={3}>
                    <Typography variant="subtitle2">SKU Number</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={9}>
                    <Typography variant="body2" color="textSecondary">
                      {productDetail.skuNumber}
                    </Typography>
                  </Grid>
                </Grid>
                {/*  1 row  */}
                <Grid container item xs={12} spacing={2}>
                  <Grid item xs={12} sm={12} md={3}>
                    <Typography variant="subtitle2">
                      ชื่อสินค้าและอุปกรณ์
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={9}>
                    <Typography variant="body2" color="textSecondary">
                      {productDetail.productName}
                    </Typography>
                  </Grid>
                </Grid>
                {/* ------  */}
                {/*  1 row  */}
                <Grid container item xs={12} spacing={2}>
                  <Grid item xs={12} sm={12} md={3}>
                    <Typography variant="subtitle2">
                      ขนาดบรรจุ (ลิตร)
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={9}>
                    <Typography variant="body2" color="textSecondary">
                      {productDetail.capacity}
                    </Typography>
                  </Grid>
                </Grid>
                {/* ------  */}
                {/*  1 row  */}
                <Grid container item xs={12} spacing={2}>
                  <Grid item xs={12} sm={12} md={3}>
                    <Typography variant="subtitle2">กลุ่มสินค้า</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={9}>
                    <Typography variant="body2" color="textSecondary">
                      {productDetail.type}
                    </Typography>
                  </Grid>
                </Grid>
                {/* ------  */}
                <Grid container item xs={12} spacing={1}>
                  <Grid item xs={12} sm={12} md={3}>
                    <Typography variant="subtitle2">การใช้งาน</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={9}>
                    {/* productDetail.use status */}
                    {status ? (
                      <Typography variant="body2"  style={{ color: '#7FB344' }}>
                        {labelstatus1}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="textSecondary">
                       {labelstatus1}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
              <Box ml={6} />
              <Grid style={{ textAlign: 'right' }} item xs={6} sm={6} md={2}>
                <ButtonPramary
                  label="แก้ไข"
                  fullWidth
                  size="small"
                  onClick={handleEdit}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <>
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
                      <Typography variant="subtitle2">Barcode</Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    <Box mt={1} />

                    <TextField
                      fullWidth
                      id="barcode"
                      name="barcode"
                      variant="outlined"
                      value={formik.values.barcode}
                      onChange={formik.handleChange}
                      placeholder="กรุณากรอกข้อมูล"
                      error={
                        formik.touched.barcode && Boolean(formik.errors.barcode)
                      }
                      helperText={
                        formik.touched.barcode && formik.errors.barcode
                      }
                      color="secondary"
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12} sm={12} md={6} spacing={1}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container>
                      <Typography variant="subtitle2">SKU Number</Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    <Box mt={1} />

                    <TextField
                      fullWidth
                      id="skuNumber"
                      name="skuNumber"
                      variant="outlined"
                      value={formik.values.skuNumber}
                      onChange={formik.handleChange}
                      placeholder="กรุณากรอกข้อมูล"
                      error={
                        formik.touched.skuNumber &&
                        Boolean(formik.errors.skuNumber)
                      }
                      helperText={
                        formik.touched.skuNumber && formik.errors.skuNumber
                      }
                      color="secondary"
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} spacing={1}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container>
                      <Typography variant="subtitle2">
                        ชื่อสินค้าและอุปกรณ์
                      </Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    <Box mt={1} />

                    <TextField
                      fullWidth
                      id="productName"
                      name="productName"
                      variant="outlined"
                      value={formik.values.productName}
                      onChange={formik.handleChange}
                      placeholder="กรุณากรอกข้อมูล"
                      error={
                        formik.touched.productName &&
                        Boolean(formik.errors.productName)
                      }
                      helperText={
                        formik.touched.productName && formik.errors.productName
                      }
                      color="secondary"
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12} sm={12} md={6} spacing={1}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container>
                      <Typography variant="subtitle2">ขนาดบรรจุ (ลิตร)</Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    <Box mt={1} />

                    <TextField
                      fullWidth
                      id="capacity"
                      name="capacity"
                      variant="outlined"
                      value={formik.values.capacity}
                      onChange={formik.handleChange}
                      placeholder="กรุณากรอกข้อมูล"
                      error={
                        formik.touched.capacity &&
                        Boolean(formik.errors.capacity)
                      }
                      helperText={
                        formik.touched.capacity && formik.errors.capacity
                      }
                      color="secondary"
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12} sm={12} md={6} spacing={1}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container>
                      <Typography variant="subtitle2">กลุ่มสินค้า</Typography>
                      <Box ml={1} />
                      <Typography style={{ color: '#D44848' }}> * </Typography>
                    </Grid>
                    <Box mt={1} />
                    <TextField
                      fullWidth
                      className="px-2 my-2"
                      variant="outlined"
                      name="type"
                      id="type"
                      select
                      SelectProps={{
                        native: true,
                        className: classes.selectCon,
                        MenuProps: {
                          className: { paper: classes.menuPaper }
                        }
                      }}
                      onChange={formik.handleChange}
                      placeholder="กรุณากรอกข้อมูล"
                      size="small"
                      value={formik.values.type}
                      error={formik.touched.type && Boolean(formik.errors.type)}
                      helperText={formik.touched.type && formik.errors.type}
                    >
                      <option value={1}>กรุณาเลือกข้อมูล</option>
                      {type.map((row, index) => {
                        return (
                          <option key={index} value={row}>
                            {row}
                          </option>
                        );
                      })}
                    </TextField>
                  </Grid>
                </Grid>
                <Grid container item xs={12} sm={12} md={6} spacing={1}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Grid container>
                      <Typography variant="subtitle2">
                        การใช้งาน
                      </Typography>

                      <Box mb={1} />
                    </Grid>

                    <FormControlLabel
                      style={{ cursor: 'context-menu' }}
                      control={
                        <IOSSwitch
                          checked={productDetail.use}
                          onChange={handleChangeSwitch}
                          name="checkedB"
                          size="small"
                        />
                      }
                      size="small"
                      label={
                        productDetail.use ? (
                          <Typography
                            variant="subtitle2"
                            style={{ color: '#7FB344' }}
                          >
                           labelstatus1
                          </Typography>
                        ) : (
                          <Typography
                            variant="subtitle2"
                            style={{ color: '#000' }}
                          >
                            Off
                          </Typography>
                        )
                      }
                    />
                  </Grid>
                </Grid>
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
          </>
        )}
      </Card>
    </div>
  );
}
