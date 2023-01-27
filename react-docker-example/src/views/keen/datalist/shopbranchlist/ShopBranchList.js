import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {
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
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {},
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
  }
});

const initialList = [
  {
    id: '000001',
    shop: 'สำนักงานใหญ่',
    name: 'สมชาย ใจดี',
    number: '087-5678-210',
    email: 'chalerm7k@gmail.com'
  },
  {
    id: '000001',
    shop: 'สำนักงานใหญ่',
    name: 'สมชาย ใจดี',
    number: '087-5678-210',
    email: 'chalerm7k@gmail.com'
  },
  {
    id: '000001',
    shop: 'สำนักงานใหญ่',
    name: 'สมชาย ใจดี',
    number: '087-5678-210',
    email: 'chalerm7k@gmail.com'
  }
];

export default function ShopBranchList() {
  const classes = useStyles();
  const history = useHistory();
  const bull = <span className={classes.bullet}>•</span>;
  const [shopList, setShopList] = useState(initialList);
  const [showData, setShowData] = useState(false);

  const clickRow = () => {
    setShowData(true);
  };
  return (
    <>
      <Card className={classes.root} style={{ marginBottom: '15px' }}>
        <CardContent>
          <Box p={2}>
            <Grid container spacing={1} verticalAlign="middle">
              <Grid container spacing={1} justify="space-between">
                <Grid item md={9}>
                  <Grid container>
                    <Grid container item xs={12} sm={12} md={8}>
                      <ArrowBackIosIcon
                        className={classes.kk}
                        onClick={() => history.goBack()}
                      />
                      <Typography variant="h2">ร้านรุ่งเรืองกิจ</Typography>
                    </Grid>
                  </Grid>
                  <Box mb={1} />
                </Grid>

                <Grid style={{ textAlign: 'right' }} item md={3}>
                  <Box display="block" flexGrow={1}>
                    <Box ml={2} />
                    <ButtonPramary
                      label="เพิ่มสาขา"
                      fullWidth
                      size="small"
                      //onClick={addMerchant}
                      // onClick={handleOpenDialog}
                    />
                  </Box>
                </Grid>
                <Grid container item xs={8} sm={8} md={6}>
                        <Box display="block" flexGrow={1} style={{ display: "flex", }}>
                            <Typography variant="h3"  >เลขประจำตัวผู้เสียภาษี</Typography>
                        </Box>
                        <Box display="block" flexGrow={1} style={{ display: "flex",  }}>

                            <Typography variant="h3"  >0105563090158</Typography>
                        </Box>

                        <Box display="block" flexGrow={1} style={{ display: "flex",  }}>

                            <Typography variant="h3"  >จำนวนสาขา</Typography>
                        </Box>

                        <Box display="block" flexGrow={1} style={{ display: "flex", }}>

                            <Typography variant="h3" style={{ textAlign: 'start' }} >20 สาขา</Typography>
                        </Box>


                    </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="Keyword"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" padding="0">
                        <SvgIcon fontSize="small" color="action">
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="ค้นหาตำแหน่งของร้าน"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#014426' }}>#</TableCell>
                <TableCell style={{ color: '#014426' }}>รหัสสาขา</TableCell>
                <TableCell style={{ color: '#014426' }}>ชื่อสาขา</TableCell>
                <TableCell style={{ color: '#014426' }}>
                  ชื่อผู้ติดต่อ
                </TableCell>
                <TableCell style={{ color: '#014426' }}>
                  ชื่อผู้ติดต่อ
                </TableCell>
                <TableCell style={{ color: '#014426' }}>E-mail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shopList.map((row, index) => (
                <TableRow
                  onClick={clickRow}
                  key={row.name}
                  className={classes.select}
                  component={Link}
                  to={`/datalist/branchlist/shopdata`}
                >
                  <TableCell component="th" scope="row">
                    {/* {index < 3 ? 0: null} */}
                    {index + 1}
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.shop}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}
