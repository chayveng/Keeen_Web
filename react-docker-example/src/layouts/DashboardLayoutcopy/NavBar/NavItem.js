import React, { useState } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  ListItem,
  makeStyles
  
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
    
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    borderRadius: 0,
    '&:hover': {
      borderRadius: 0,
    }
  },
  buttonLeaf: {
    color: "#014426",
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium,
      color:"#014426"
    },
    '&.depth-0': {
      '& $title': {
        fontWeight: theme.typography.fontWeightMedium
      }
    }
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(0.5)
  },
  title: {
    marginRight: 'auto',
    color: theme.palette.primary.main,
    marginLeft: 10,
    ...theme.typography.body2,
    fontFamily: "Prompt, sans-serif"

  },
  active: {
    color: '#FFF',
    borderRadius:'5px',
    backgroundColor: '#00336E',
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium,
      color: '#fff'
    },
    '& $icon': {
      color: "#fff"
    },
    '&:hover': {
      backgroundColor: '#00336E',
      color:"#FFF",
      borderRadius:'5px'

    }
  },

}));

const NavItem = ({
  children,
  className,
  depth,
  href,
  icon: Icon,
  info: Info,
  open: openProp,
  title,
  ...rest
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(openProp);
  const location = useLocation();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = { paddingLeft };

  // if (children) {
  //   return (
  //     <ListItem
  //       className={clsx(classes.item, className)}
  //       disableGutters
  //       key={title}
  //       {...rest}
  //     >
  //       <Button
  //         className={classes.button}
  //         onClick={handleToggle}
  //         style={style}
  //       >
  //         {Icon && (
  //           <Icon
  //             className={classes.icon}
  //             size="20"
  //           />
  //         )}
  //         {/* <span className={classes.title}>
  //           {title}
  //         </span> */}
  //         {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
  //       </Button>
  //       <Collapse in={open}>
  //         {children}
  //       </Collapse>
  //     </ListItem>
  //   );
  // }

  // console.log(href, exact);

  return (
    <ListItem
      className={clsx(classes.itemLeaf, className)}
      disableGutters
      key={title}
      {...rest}
    >
      <Button
        // activeClassName={classes.active}
        // className={clsx(classes.buttonLeaf, `depth-${depth}`)}
        className={
          // (   
          //   (location.pathname.includes('/profile') && href === '/profile') 
          //   ||
          //   (location.pathname.includes('/editpass') && href === '/editpass') 
          //   // (location.pathname.includes('/detail') && href === '/merchant')   ||
          //   // (location.pathname.includes('/shopdata') && href === '/merchant') ||
          //   // (location.pathname.includes('/paymentTable') && href === '/paymentTable')
          // ) ? 
          // clsx(classes.buttonLeaf, classes.active) : 
          classes.buttonLeaf
        }
        component={RouterLink}
        exact
        style={style}
        to={href}
      >
        {Icon && (
          <Icon
            className={classes.icon}
            // active={
            //   (   
            //     (location.pathname.includes('/profile') && href === '/profile') ||
            //     (location.pathname.includes('/editpass') && href === '/editpass') 
            //     // ||
            //     // (location.pathname.includes('/detail') && href === '/merchant')   ||
            //     // (location.pathname.includes('/shopdata') && href === '/merchant')||
            //     // (location.pathname.includes('/paymentTable') && href === '/paymentTable')

            //   ) ? 
            //   true : 
            //   false
            // }
            // size="20"
          />
         )} 
        <span className={classes.title}>
          {title}
        </span>
        {Info && <Info />}
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  info: PropTypes.elementType,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  open: false
};

export default NavItem;
