import React, { useState } from 'react';
import {
  Box,
  makeStyles,
  Typography,
  Dialog,
  Button,
  Grid,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
// import Img from ''
import ButtonPramary from 'src/components/keen/Buttonprimary';
import ButtonSecondary from 'src/components/keen/ButtonSecondary';
const useStyles = makeStyles(theme => ({
  root: {
    // width: 600,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  dialog: {
    background: 'white',
    padding: 30
  },
  title: {
    color: '#014426',
    fontFamily: 'Prompt, sans-serif',
    textAlign: 'center',
    fontWeight: 900,
    fontSize: '28px'
  },
  img: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Prompt, sans-serif'
  }
}));

const DialogCancelJob = ({
  open,
  onClose,
  save,
  setJobDetailData,
  check1,
  check2,
  check3,
  checked,
  checked2,
  checked3,
  setChecked,
  setChecked2,
  setChecked3
}) => {
  const classes = useStyles();

  const handleChange = event => {
    const liqCheck = event.target.checked;
    console.log(liqCheck);
    setChecked(event.target.checked);
    if (liqCheck == true) {
      console.log('4');
      setJobDetailData(prevState => ({
        ...prevState,

        liquidDispenser: {
          ...prevState.liquidDispenser,
          status: 4
        }
      }));
    } else if (liqCheck == false) {
      console.log(check1);
      setJobDetailData(prevState => ({
        ...prevState,

        liquidDispenser: {
          ...prevState.liquidDispenser,
          status: check1
        }
      }));
    }
  };
  const handleChange2 = event => {
    const proCheck = event.target.checked;
    console.log(event.target.checked);
    setChecked2(event.target.checked);
    if (proCheck == true) {
      setJobDetailData(prevState => ({
        ...prevState,

        proSinkProMax: {
          ...prevState.proSinkProMax,
          status: 4
        }
      }));
    } else if (proCheck == false) {
      setJobDetailData(prevState => ({
        ...prevState,

        proSinkProMax: {
          ...prevState.proSinkProMax,
          status: check2
        }
      }));
    }
  };
  const handleChange3 = event => {
    const hydCheck = event.target.checked;

    console.log(event.target.checked);
    setChecked3(event.target.checked);
    if (hydCheck == true) {
      setJobDetailData(prevState => ({
        ...prevState,

        hydroMaster: {
          ...prevState.hydroMaster,
          status: 4
        }
      }));
    } else if (hydCheck == false) {
      setJobDetailData(prevState => ({
        ...prevState,

        hydroMaster: {
          ...prevState.hydroMaster,
          status: check3
        }
      }));
    }
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      className={classes.root}
    >
      <div className={classes.dialog}>
        <Box
          mb={2.5}
          justifyContent="space-between"
          display="flex"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              className={classes.title}
              color="secondary"
            >
              ?????????????????????????????????
            </Typography>
            <Box mt={2} />
            <Grid container>
              <Grid item xs={2}></Grid>
              <Grid item xs={10}>
                <Typography variant="h3">
                  ?????????????????????????????????????????????????????????????????????????????????????????????
                </Typography>{' '}
                <Box mt={1} />
                <Grid container>
                  <Grid item xs={12}>
                    {(() => {
                      switch (check1) {
                        case 0:
                          return (
                            <FormControlLabel
                              control={<Checkbox disabled name="N/A" />}
                              label="????????????????????????????????????????????????????????????????????????"
                            />
                          );
                        case 4:
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked}
                                  disabled
                                  name="????????????????????????????????????????????????????????????????????????"
                                />
                              }
                              label="????????????????????????????????????????????????????????????????????????"
                            />
                          );
                        default:
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked}
                                  onClick={handleChange}
                                  name="????????????????????????????????????????????????????????????????????????"
                                />
                              }
                              label="????????????????????????????????????????????????????????????????????????"
                            />
                          );
                      }
                    })()}
                    {/* {check1 == 0 ? (
                      <FormControlLabel
                        control={<Checkbox disabled name="N/A" />}
                        label="????????????????????????????????????????????????????????????????????????"
                      />
                    ) : (
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked}
                            onClick={handleChange}
                            name="????????????????????????????????????????????????????????????????????????"
                          />
                        }
                        label="????????????????????????????????????????????????????????????????????????"
                      />
                    )} */}
                  </Grid>
                  <Grid item xs={12}>
                  {(() => {
                      switch (check2) {
                        case 0:
                          return (
                            <FormControlLabel
                              control={<Checkbox disabled name="????????????????????????: ProSink / ProMAX" />}
                              label="????????????????????????: ProSink / ProMAX"
                            />
                          );
                        case 4:
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked2}
                                  disabled
                                  name="????????????????????????: ProSink / ProMAX"
                                />
                              }
                              label="????????????????????????: ProSink / ProMAX"
                            />
                          );
                        default:
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked2}
                                  onClick={handleChange2}
                                  name="????????????????????????: ProSink / ProMAX"
                                />
                              }
                              label="????????????????????????: ProSink / ProMAX"
                            />
                          );
                      }
                    })()}
                    {/* {check2 == 0 ? (
                      <FormControlLabel
                        control={<Checkbox disabled name="N/A" />}
                        label="????????????????????????: ProSink / ProMAX"
                      />
                    ) : (
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked2}
                            onClick={handleChange2}
                            name="????????????????????????: ProSink / ProMAX"
                          />
                        }
                        label="????????????????????????: ProSink / ProMAX"
                      />
                    )} */}
                  </Grid>
                  <Grid item xs={12}>
                  {(() => {
                      switch (check3) {
                        case 0:
                          return (
                            <FormControlLabel
                              control={<Checkbox disabled name="????????????????????????: Hydro Master" />}
                              label="????????????????????????: Hydro Master"
                            />
                          );
                        case 4:
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked3}
                                  disabled
                                  name="????????????????????????: Hydro Master"
                                />
                              }
                              label="????????????????????????: Hydro Master"
                            />
                          );
                        default:
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked3}
                                  onClick={handleChange3}
                                  name="????????????????????????: Hydro Master"
                                />
                              }
                              label="????????????????????????: Hydro Master"
                            />
                          );
                      }
                    })()}
                    {/* {check2 == 0 ? (
                      <FormControlLabel
                        control={<Checkbox disabled name="N/A" />}
                        label="????????????????????????: Hydro Master"
                      />
                    ) : (
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked3}
                            onClick={handleChange3}
                            name="????????????????????????: Hydro Master"
                          />
                        }
                        label="????????????????????????: Hydro Master"
                      />
                    )} */}
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox disabled name="N/A" />}
                      label="N/A"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid container justifyContent="center">
          <Grid xs={5} style={{ textAlign: 'end' }}>
            <ButtonSecondary
              label="??????????????????"
              fullWidth
              size="small"
              onClick={onClose}
            />
          </Grid>
          <Box ml={2} />
          <Grid xs={5} style={{ textAlign: 'start' }}>
            {checked || checked2 || checked3 ? (
              <ButtonPramary
                label="????????????"
                onClick={save}
                fullWidth
                size="small"
              />
            ) : (
              <ButtonPramary label="????????????" fullWidth size="small" disabled />
            )}
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
};

export default DialogCancelJob;
