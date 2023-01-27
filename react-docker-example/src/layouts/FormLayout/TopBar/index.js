import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon,
  Typography
} from '@material-ui/core';
import { Menu as MenuIcon } from 'react-feather';
import Logo from 'src/components/Logo';
import { THEMES } from 'src/constants';
import Account from './Account';
import Contacts from './Contacts';
// import Notifications from './Notifications';
import Search from './Search';
import Settings from './Settings';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    // ...theme.name === THEMES.LIGHT ? {
    //   boxShadow: 'none',
    //   backgroundColor: theme.palette.primary.light
    // } : {},
    // ...theme.name === THEMES.ONE_DARK ? {
    //   backgroundColor: theme.palette.background.default
    // } : {}
    backgroundColor:"#fff",

  },
  toolbar: {
    minHeight: 50
  },
  title: {
    color: theme.palette.white
  },
  qr: {
    color: 'white',
  },
  qrActive: {
    color: '#DAF4D9',
  },
  version: {
    color: theme.palette.white,
    display: 'inline-block',
    marginLeft: 10
  },
  logo:{
    width:'4vh',
    height:'5vh'
  }
}));


const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {

  const classes = useStyles();
  const history = useHistory();
  const [isTmsRoute, setIsTmsRoute] = useState(false);

  return (

    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
       
        <Box
          ml={2}
          flexGrow={1}
        />
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
    // <AppBar
    //   className={clsx(classes.root, className)}
    //   {...rest}
    // >
    //   <Toolbar className={classes.toolbar}>
    //     <Box
    //       ml={2}
    //       flexGrow={1}
    //     />
    
    //     <Box ml={20} mr={8}>
    //       <Account />
    //     </Box>
    //   </Toolbar>
    // </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

TopBar.defaultProps = {
  onMobileNavOpen: () => { }
};

export default TopBar;
