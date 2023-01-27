import React, { useRef, useState } from 'react';
import SignaturePad from 'react-signature-canvas';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Typography,
  Box
} from '@material-ui/core';
import './Canvas.css';
import ButtonPramarys from 'src/components/keen/Buttonprimary';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
import { postImage, putImage } from 'src/views/keen/api/keeen/uploadimg';
const useStyles = makeStyles(theme => ({
  buttonclear: {
    color: '#3AA775'
  }
}));
export default function Signature(props) {
  const classes = useStyles();
  let sigpad = useRef({});
  let data = '';
  let dataFile = {};
  const [valueData, setValueData] = useState('');
  const clear = () => {
    sigpad.current.clear();
  };
  //return a promise that resolves with a File instance
  function urltoFile(url, filename, mimeType) {
    return fetch(url)
      .then(function(res) {
        return res.arrayBuffer();
      })
      .then(function(buf) {
        return new File([buf], filename, { type: mimeType });
      });
  }

  //Usage example:

  const save = () => {
    data = sigpad.current.toDataURL();
    dataFile = sigpad.current.toData();

    props.setPreImgSig(data);

    // setValueData(data);
    urltoFile(data, props.imgName + '.png', 'image/png').then(function(file) {
      console.log(file);
      console.log('id ใน DB'+props.ImgID);
      
      console.log('id ที่พึ่งแก้'+props.imgIdEdit);
      if (props.ImgID||props.imgIdEdit) {
        const formData = new FormData();
        if(props.imgIdEdit){
          formData.append('ImagesId', props.imgIdEdit);
        }else if(props.ImgID){
          formData.append('ImagesId', props.ImgID);
        }
        
        formData.append('JobId', props.job_ID);
        formData.append('Images', file);
        putImage(formData)
          .then(res => {
            // console.log(res);
            const imgresult = res.data.data;
             console.log(imgresult)
            if(props.imgIdEdit){
              props.handleBase64img(props.imgIdEdit);
            }else if(props.ImgID){
              props.handleBase64img(props.ImgID);
            }
          
            props.handleClose();
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        const formData = new FormData();
        formData.append('JobId', props.job_ID);
        formData.append('Images', file);
        postImage(formData)
          .then(res => {
            const imgresult = res.data.data;
             console.log(imgresult)
            props.handleBase64img(imgresult);
            props.setImgIdEdit(imgresult)
            props.handleClose();
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
    //console.log(dataFile);
  };
  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{"ลงชื่อเจ้าของร้าน"}</DialogTitle> */}
        <DialogContent>
          <Typography variant="h3">{props.title}</Typography>
          <Box mt={2} />

          <Grid sm={12} xs={12} md={12}>
            <SignaturePad
              style={{ backgroundColor: 'red' }}
              ref={sigpad}
              canvasProps={{
                style: { width: '100%', height: '200px' },
                className: 'sigCanvas'
              }}
            />
          </Grid>
          <Box mt={2} />
          <div>
            <label className={classes.buttonclear} onClick={clear}>
              ล้างลายเซ็นต์
            </label>
          </div>
          <Box mt={2} />
        </DialogContent>
        <DialogActions>
          <Box mt={2} />
          <Grid container justifyContent="center" xs={12} sm={12} md={12}>
            <Grid xs={3} sm={3} md={3} style={{ textAlign: 'end' }}>
              <ButtonSecondary
                label="ยกเลิก"
                fullWidth
                size="small"
                onClick={props.handleClose}
              />
            </Grid>
            <Box ml={2} />
            <Grid xs={3} sm={3} md={3} style={{ textAlign: 'start' }}>
              <ButtonPramarys
                label="บันทึก"
                onClick={save}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>

          {/* </Grid> */}
        </DialogActions>
        {/* <label>this url img = {valueData}</label> */}
        <Box mt={2} />
      </Dialog>
    </>
  );
}
