/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  Typography,
  makeStyles
} from '@material-ui/core';
import IconHome from 'src/components/keen/icon/iconHome';
import IconDoc from 'src/components/keen/icon/iconDoc';
import IconCus from 'src/components/keen/icon/addCus';
import IconPer from 'src/components/keen/icon/iconPer';
import IconYou from 'src/components/keen/icon/youTube';
import IconEm from 'src/components/keen/icon/iconEm';
import IconProd from 'src/components/keen/icon/iconProduct';

import useAuth from 'src/hooks/useAuth';
import NavItem from './NavItem';
// import IconCash from 'src/components/merchant/iconCash';

const sample = [
  {
    groupName: '',
    menuItem: [
      // { title: "ข้อมูลส่วนตัว", icon: IconMer, href: "/profile", open: false },
      // { title: "Username/Password", icon: IconList, href: "/editpass", open: true, },
      { title: "รายการตรวจเช็ค", icon: IconHome, href: "/joblist", open: true, },
      { title: "รายชื่อลูกค้า", icon: IconEm, href: "/customerlist", open: true, },
      { title: "สินค้าและอุปกรณ์", icon: IconProd, href: "/product", open: true, },
      { title: "YouTube Channel", icon: IconYou,href:'/youtube',open: true,  },
      { title: "รายชื่อพนักงาน", icon: IconPer, href: "/personnal", open: true, },
      // { title: "เพิ่มข้อมูลลูกค้า", icon: IconCus, href: "/empoyee", open: true, },
      { title: "คู่มือการใช้งาน", icon: IconDoc, href: "/manual", open: true, },

    ]//https://www.youtube.com/channel/UC8YSdw0nsSL9mLyujfkXhtw
  },

]



function renderNavItems({ items, pathname, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}

      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}

      />
    );
  }

  return acc;
}

const useStyles = makeStyles(theme => ({
  mobileDrawer: {
    width: 300
  },
  desktopDrawer: {
    width: 300,
    top: 46,
    height: 'calc(100% - 64px)',
    marginTop: theme.spacing(1)
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
  title: {
    color: theme.palette.primary.dark
  },
  headerNav: {
    textAlign: 'center',
    fontFamily: 'Prompt, sans-serif'
  },
  subNav: {
    // textAlign:'center',
    fontFamily: 'Prompt, sans-serif',
    fontSize: '1.8vh',
    color: '#687178',
    padding: theme.spacing(0)
  },
  logo: {
    width: 100,
    textAlign: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      style={{
        borderRight: '1px solid #D4DDE3',
        padding: '2vh'
      }}
    >
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Box style={{ textAlign: 'center' }} mt={2} mb={2} onClick={()=> history.push('/joblist')}>
          <img src="/static/images/Logo_keen.svg" className={classes.logo} />
        </Box>
        {/* 
        <Box>
          <Typography variant="h1" className={classes.headerNav}>
          ดิว จิรวรรตน์
          </Typography>
        </Box> */}
        <Box p={0}>
          {/* ใส่โล้โก้ */}

          {//  (location.pathname.includes('/payment')
          // )?

          // merchantnev.map((section) => {
          //   return (
          //     <List
          //       key={section.groupName}
          //       subheader={(
          //         <ListSubheader
          //           className={classes.subNav}
          //           disableGutters
          //           disableSticky

          //         >
          //           {section.groupName}
          //         </ListSubheader>
          //       )}
          //     >
          //       {renderNavItems({
          //         items: section.menuItem,
          //         pathname: location.pathname
          //       })}
          //     </List>
          //   )
          // })
          // :
          sample.map(section => {
            return (
              <>
                <List
                  key={section.groupName}
                  subheader={
                    <ListSubheader
                      className={classes.subNav}
                      disableGutters
                      disableSticky
                    >
                      {section.groupName}
                    </ListSubheader>
                  }
                >
                  {renderNavItems({
                    items: section.menuItem,
                    pathname: location.pathname
                  })}
                </List>
              </>
            );
          })}
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
        <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
