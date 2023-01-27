import React, { useState, useEffect } from 'react';
import JobTable from './JobTable';
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
  SvgIcon,
  Card
} from '@material-ui/core';
import ButtonAddPer from 'src/components/keen/ButtonAddPer';
import { Search as SearchIcon } from 'react-feather';
import ButtonPramary from 'src/components/keen/Buttonprimary';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';

import { makeStyles } from '@material-ui/core/styles';

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
    //cursor: 'pointer',
    textDecoration: 'none'
    // '&:hover': {
    //   background: '#D3D3D3'
    // }
  },
  btnEdit: {
    border: '1px solid #028E4E',
    color: '#028E4E',
    borderRadius: 8,
    paddingRight: 18,
    paddingLeft: 18
  },
  btnAdd: {
    backgroundColor: '#EEFCF5',

    borderRadius: 15,
    paddingRight: 15,
    paddingLeft: 15
  },
  pb: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  tableContainer: {
    width: '100%'
  }
});

export default function JobHome() {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const onFormSubmit = e => {
    e.preventDefault();
    handleSearch();
  };
  const handleSearch = () => {
    setSearchKey(search);
  };

  return (
    <div>
      <Card className={classes.root} style={{ marginBottom: '15px' }} fullWidth>
        <form onSubmit={onFormSubmit}>
          <CardContent>
            {' '}
            <Grid item xs={12} md={12}>
              <Grid item xs={12}>
                <Typography variant="h2">รายการตรวจเช็ค </Typography>
              </Grid>
              <Box mt={2} />
              <Grid container sm={12}>
                <Grid xs={12} sm={12} md={8} style={{ marginTop: 10 }}>
                  <TextField
                    fullWidth
                    name="Keyword"
                    size="small"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" padding="0">
                          <SvgIcon fontSize="small" color="action">
                            <SearchIcon />
                          </SvgIcon>
                        </InputAdornment>
                      )
                    }}
                    placeholder="ค้นหาด้วยเลขที่ใบงาน หรือ ชื่อร้านค้า"
                    variant="outlined"
                  />
                </Grid>
                <Box mt={2} />

                <Grid container xs={12} sm={6} md={4} justifyContent="flex-end">
                  <Grid
                    xs={6}
                    sm={6}
                    md={5}
                    container
                    justifyContent="center"
                    style={{ marginTop: 10 }}
                  >
                    <ButtonPramary
                      label="ค้นหา"
                      fullWidth
                      size="small"
                      type="submit"
                      // onClick={() => handleSearch()}
                    />
                  </Grid>
                  <Grid
                    xs={6}
                    sm={6}
                    md={7}
                    container
                    justifyContent="center"
                    style={{ marginTop: 10 }}
                  >
                    <ButtonSecondary
                      label="ค้นหาแบบละเอียด"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Card>
      <Grid item container xs={12} sm={12} md={12}>
        <Grid item container xs={8} sm={8} md={10}>
          <Box ml={1} />
          <Typography
            variant="h3"
            style={{ marginTop: 'auto', marginBottom: 'auto' }}
          >
            {' '}
            รายการตรวจเช็ค{' '}
          </Typography>
        </Grid>
        <Grid item container xs={4} sm={4} md={2}>
          {/* <Link style={{ textDecoration: 'none' }} to="/joblist/jobadd"> */}
          <ButtonAddPer label="เพิ่มใบงาน" fullWidth href="/joblist/jobadd" />
          {/* </Link> */}
        </Grid>
      </Grid>
      <JobTable search={searchKey} />
    </div>
  );
}
