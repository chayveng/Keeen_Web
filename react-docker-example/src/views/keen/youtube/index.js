import React, { useEffect } from 'react';
import { Text } from '@material-ui/core/styles';
import Page from 'src/components/Page';
import { makeStyles, Typography, Grid,Card } from '@material-ui/core';

const URL = 'https://www.youtube.com/channel/UC8YSdw0nsSL9mLyujfkXhtw';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
  },
}));
const App = () => {
  const classes = useStyles();
  function NewTab() {
    window.open(
      URL, "_blank");
      
  }

  useEffect(() => {
    NewTab()
  });

  return (
    <Page className={classes.root} title="Youtube">
      <Card
        className={classes.root}
        >
        <Grid items xs={12} sm={12} md={8} style={{ textAlign: 'center', margin: 'auto', padding: 40 }}>
          <img src='static/images/Group 7026.png' width='50%' />
          <Typography variant="h2" className={classes.pb}>
            คุณได้ไปยังหน้า YouTube Channel ของ Keeen แล้ว{' '}
          </Typography>
        </Grid>
      </Card>
    </Page>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

export default App;