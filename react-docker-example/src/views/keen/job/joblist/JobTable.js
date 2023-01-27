import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Job1 from './Job1';
import Job5 from './Job5';
import Job2 from './Job2';
import Job6 from './Job6';
import { useEffect } from 'react';
import Job3 from './Job3';
import Job4 from './Job4';

const AntTabs = withStyles({
  root: {
    borderBottom: '10px solid #F5F5F5',
    backgroundColor: '#F5F5F5'
  },
  indicator: {
    backgroundColor: '#028E4E'
  }
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"'
    // ].join(','),
    '&:hover': {
      color: '#000000',
      opacity: 1
    },
    '&$selected': {
      color: '#000000',
      fontWeight: 600
    },
    '&:focus': {
      color: '#000000'
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0
  }
}));

export default function JobTable(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (props.search != '') {
      setValue(5);
    }
  }, [props.search]);
  return (
    <div className={classes.root}>
      <AntTabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            height: '5px'
          }
        }}
        aria-label="simple tabs example"
        variant="scrollable"
        scrollButtons="auto"
      >
        <AntTab label="ตารางการทำงาน" {...a11yProps(0)} />
        <AntTab label="ทำเสร็จแล้ว" {...a11yProps(1)} />
        <AntTab label="ทำแล้วบางส่วน" {...a11yProps(2)} />
        <AntTab label="ยกเลิก" {...a11yProps(3)} />
        <AntTab label="ทั้งหมด" {...a11yProps(4)} />
        {props.search ? <AntTab label="รายการค้นหา" {...a11yProps(5)} />: null}
        
      </AntTabs>

      <TabPanel value={value} index={0}>
        <Job1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Job2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Job3/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Job4/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Job5 />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Job6 search={props.search} />
      </TabPanel>
    </div>
  );
}
