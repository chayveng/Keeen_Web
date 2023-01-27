import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  makeStyles,
  Grid,
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Search as SearchIcon } from 'react-feather';
import CreateTable from 'src/components/keen/createTable';
import { useDispatch, useSelector } from 'react-redux';


// import ButtonSecondary from 'src/components/robotel/ButtonSecondary';
// import Clock from 'src/components/robotel/Clock';
const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0
  },

  page: {
    display: 'flex'
  },
  imgResize: {
    width: 15,
    paddingLeft: 5
  },
  pl: {
    paddingLeft: 17,
    textAlign: 'end'
  },
  appbarSlide: {
    backgroundColor: 'transparent',
    minWidth: 0,
    padding: 0,
    marginLeft: 20
  },
  pb: { color: '#000' },
  colorPagination: {
    backgroundColor: '#fff',
    borderRadius: '2vh'
  }
}));

const headers = [
  { name: '#' },
  { name: 'ชื่อเครื่อง' },
  { name: 'รายละเอียด' },
  { name: '40.00 บาท' },
  { name: '50.00 บาท' },
  { name: '60.00 บาท' },
  { name: 'สถานะเครื่องซักผ้า' },
  { name: 'MAC Adress' },
  { name: 'ชื่ออุปกรณ์' },
  { name: 'สถานะเครื่องรับชำระเงิน' },
  { name: 'สถานะการทำงาน' },



];

const sampleItems = {
  currentPage: 1,
  hasNext: false,
  hasPrevious: false,
  items: [
    {
      
        count: '01',
        name: 'M01',
        tye: 'ซัก/อบ',
        count40: '1',
        count50: '1',
        count60: '1',
        status: 1,
        adress: "00:00:00:00:00:01",
        name2: 'PT01',
        status2: 2,
        status3: 2,
  
      },
    {
      count: '01',
      name: 'M01',
      tye: 'ซัก/อบ',
      count40: '1',
      count50: '1',
      count60: '1',
      status: 1,
      adress: "00:00:00:00:00:01",
      name2: 'PT01',
      status2: 2,
      status3: 2,

    },
    {
      count: '01',
      name: 'M01',
      tye: 'ซัก/อบ',
      count40: '1',
      count50: '1',
      count60: '1',
      status: 1,
      adress: "00:00:00:00:00:01",
      name2: 'PT01',
      status2: 2,
      status3: 2,

    },
    {
      count: '01',
      name: 'M01',
      tye: 'ซัก/อบ',
      count40: '1',
      count50: '1',
      count60: '1',
      status: 1,
      adress: "00:00:00:00:00:01",
      name2: 'PT01',
      status2: 2,
      status3: 2,

    },
    {
      count: '01',
      name: 'M01',
      tye: 'ซัก/อบ',
      count40: '1',
      count50: '1',
      count60: '1',
      status: 1,
      adress: "00:00:00:00:00:01",
      name2: 'PT01',
      status2: 2,
      status3: 2,

    },
    {
      count: '01',
      name: 'M01',
      tye: 'ซัก/อบ',
      count40: '1',
      count50: '1',
      count60: '1',
      status: 1,
      adress: "00:00:00:00:00:01",
      name2: 'PT01',
      status2: 2,
      status3: 2,

    },
    {
      count: '01',
      name: 'M01',
      tye: 'ซัก/อบ',
      count40: '1',
      count50: '1',
      count60: '1',
      status: 1,
      adress: "00:00:00:00:00:01",
      name2: 'PT01',
      status2: 2,
      status3: 2,

    },
  ],


  pageSize: 10,
  totalCount: 1,
  totalPages: 1
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`
  };
}
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
        // <Box p={3}>
        <Card>{children}</Card>
        // </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
const StatusComponent = props => {
  let colorStutus;
  let textStatus;
  if (props.status == 1) {
    colorStutus = '#7FB344';
    textStatus = 'ON';
  }
  
  if (props.status == 2) {
    colorStutus = '#D44848';
    textStatus = 'OFF';
  }

  return (
    <>
      <a style={{ color: colorStutus, verticalAlign: 'center' }}>
        {textStatus}
      </a>
    </>
  );
};
const StatusComponent2 = props => {
  let colorStutus;
  let textStatus;
  if (props.status2 == 1) {
    colorStutus = '#7FB344';
    textStatus = 'ON';
  }
  
  if (props.status2 == 2) {
    colorStutus = '#D44848';
    textStatus = 'OFF';
  }

  return (
    <>
      <a style={{ color: colorStutus, verticalAlign: 'center' }}>
        {textStatus}
      </a>
    </>
  );
};
const StatusComponent3 = props => {
  let colorStutus;
  let textStatus;
  if (props.status3 == 1) {
    colorStutus = '#7FB344';
    textStatus = 'ON';
  }
  
  if (props.status3 == 2) {
    colorStutus = '#D44848';
    textStatus = 'OFF';
  }

  return (
    <>
      <a style={{ color: colorStutus, verticalAlign: 'center' }}>
        {textStatus}
      </a>
    </>
  );
};

const Table = ({ className, ...rest }) => {
  const classes = useStyles();


  const [open, setOpen] = useState(false);

  const openHandle = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const openshow = () => {
    setShow(true);
  };
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();

  const [parameter, setParameter] = useState({
    Page: 1,
    PageSize: 10,
    Keyword: '',
    Status: '',
    Store: '',
    PaymentChannel: ''
  });
  const [items, setItems] = useState({});
  function refreshPage() {
    window.location.reload(false);
  }
  const [
    cells, ////ตัวแปร
    setCells ////ฟังก์ชั่น
  ] = useState([]);
  const [
    cells1, ////ตัวแปร
    setCells1 ////ฟังก์ชั่น
  ] = useState([]);
  const [
    cells2, ////ตัวแปร
    setCells2 ////ฟังก์ชั่น
  ] = useState([]);
  const [
    cells3, ////ตัวแปร
    setCells3 ////ฟังก์ชั่น
  ] = useState([]);

  useEffect(() => {
    setCells(renderCell(sampleItems.items || []));

  }, []);

  const renderCell = items => {
    let result = [];
    items.map(item => {
      let r = [
        item.count,
        item.name,
        item.tye,
        item.count40,
        item.count50,
        item.count60,
        () => <StatusComponent status={item.status} />,
        item.adress,
        item.name2,
        () => <StatusComponent2 status2={item.status2} />,
        () => <StatusComponent3 status3={item.status3} />,
      ];

      result.push(r);
    });
    return result;
  };




  const onChageSearch = e => {
    setParameter({
      ...parameter,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Card className={clsx(classes.root, className)} {...rest}>


        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{ display: 'inline' }}
          className={classes.pb}
        >
          <Box p={2}>
            <Typography variant='h2'>ภาพรวมประจำวันที่ 20 มีนาคม 2565</Typography>
            <Box mb={2} />


            
          </Box>
          <Box>


            <CreateTable
              headers={headers}
              items={cells}
              page={items}
              width="1000px"
              openshow={openshow}
              show={show}
            />

          </Box>
        </Grid>
      </Card>

      <Box mt={2} />
    </>
  );
};

Table.propTypes = {
  className: PropTypes.string
};

Table.defaultProps = {};

export default Table;
