import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  makeStyles,
  Grid,
  Typography,
  Divider
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useSelector } from 'react-redux';
import pdf1 from './pdf_file/KEEEN1.pdf';
import pdf2 from './pdf_file/KEEEN2.pdf';
import pdf4 from './pdf_file/KEEEN4.pdf';
const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  pb: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    fontFamily: 'Prompt, sans-serif'
  },
  kk: {
    verticalAlign: 'center'
    // width: 16
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""'
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3'
    }
  },

  cardPad: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),

    borderRadius: 0
  },
  btnChoose: {
    borderRadius: '10px',
    fontSize: '10px',
    color: '#0F8E54',
    backgroundColor: '#fff'
  }
}));

const DetailProfile = ({ className, data, ...rest }) => {
  const classes = useStyles();
  const reducer = useSelector(state => state.qrTransaction);
  const { id } = useParams();
  const history = useHistory();

  const onDownload1 = () => {
    const link = document.createElement("a");
    link.download = `KEEEN - รายการตรวจเช็ค.pdf`;
    link.href = pdf1;
    link.click();
  };

  const onDownload2 = () => {
    const link = document.createElement("a");
    link.download = `KEEEN - รายชื่อลูกค้า.pdf`;
    link.href = pdf2;
    link.click();
  };
  const onDownload4 = () => {
    const link = document.createElement("a");
    link.download = `KEEEN - รายชื่อพนักงาน.pdf`;
    link.href = pdf4;
    link.click();
  };
  return (
    <>
      <Card className={classes.root} style={{ marginBottom: '15px' }}>
        {' '}
        <Grid container justify="space-between" spacing={3}>
          <Grid container item xs={12} sm={12} md={8}>
            {/* <ArrowBackIosIcon
                            className={classes.kk}
                            onClick={() => history.goBack()}
                        /> */}
            <Typography variant="h2">คู่มือการใช้งาน</Typography>
          </Grid>
        </Grid>
      </Card>
      <Box mb={2} />

      <Card className={classes.cardPad} {...rest}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={7} sm={10} md={10}>
                  <Typography variant="h4">
                    คู่มือใช้งานเมนูรายการตรวจเช็ค
                  </Typography>
                  <Box mt={2} />
                  <Typography variant="subtitle2" style={{ color: '#687178' }}>
                    อธิบายวิธีการใช้งานหน้าจอ "รายการตรวจเช็ค"
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={2} md={2} style={{ textAlign: 'end' }}>
                  <ButtonSecondary label="ดาวน์โหลด" fullWidth size="small" onClick={onDownload1} />
                </Grid>
              </Grid>
              <Box mt={2} />
              <Divider />
              <Box mt={2} />
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={7} sm={10} md={10}>
                  <Typography variant="h4">
                    คู่มือใช้งานเมนูรายชื่อลูกค้า
                  </Typography>
                  <Box mt={2} />
                  <Typography variant="subtitle2" style={{ color: '#687178' }}>
                    อธิบายวิธีการใช้งานหน้าจอ "รายชื่อลูกค้า"
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={2} md={2} style={{ textAlign: 'end' }}>
                  <ButtonSecondary label="ดาวน์โหลด" fullWidth size="small" onClick={onDownload2}/>
                </Grid>
              </Grid>
              <Box mt={2} />
              <Divider />
              <Box mt={2} />
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={7} sm={10} md={10}>
                  <Typography variant="h4">
                    คู่มือใช้งานเมนูสินค้าและอุปกรณ์
                  </Typography>
                  <Box mt={2} />
                  <Typography variant="subtitle2" style={{ color: '#687178' }}>
                    อธิบายวิธีการใช้งานหน้าจอ "สินค้าและอุปกรณ์"
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={2} md={2} style={{ textAlign: 'end' }}>
                  <ButtonSecondary label="ดาวน์โหลด" fullWidth size="small" />
                </Grid>
              </Grid>
              <Box mt={2} />
              <Divider />
              <Box mt={2} />
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={7} sm={10} md={10}>
                  <Typography variant="h4">
                    คู่มือใช้งานเมนูรายชื่อพนักงาน
                  </Typography>
                  <Box mt={2} />
                  <Typography variant="subtitle2" style={{ color: '#687178' }}>
                    อธิบายวิธีการใช้งานหน้าจอ "รายชื่อพนักงาน"
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={2} md={2} style={{ textAlign: 'end' }}>
                  <ButtonSecondary label="ดาวน์โหลด" fullWidth size="small" onClick={onDownload4}/>
                </Grid>
              </Grid>
              <Box mt={2} />
              <Divider />
               {/* <Box mt={2} />
             <Grid container item xs={12} spacing={2}>
                <Grid item xs={7} sm={10} md={10}>
                  <Typography variant="h4">
                    คู่มือใช้งานเมนูเพิ่มรายชื่อลูกค้า
                  </Typography>
                  <Box mt={2} />
                  <Typography variant="subtitle2" style={{ color: '#687178' }}>
                    อธิบายวิธีการใช้งานหน้าจอ "เพิ่มรายชื่อลูกค้า"
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={2} md={2} style={{ textAlign: 'end' }}>
                  <ButtonSecondary label="ดาวน์โหลด" fullWidth size="small" disabled/>
                </Grid>
              </Grid>
              <Box mt={2} />
              <Divider /> */}
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

DetailProfile.propTypes = {
  className: PropTypes.string
};

DetailProfile.defaultProps = {};

export default DetailProfile;
