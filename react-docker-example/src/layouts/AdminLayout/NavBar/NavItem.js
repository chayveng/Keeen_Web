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
      color: "#014426"
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
    borderRadius: '5px',
    backgroundColor: '#028E4E ',
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium,
      color: '#fff'
    },
    '& $icon': {
      color: "#fff"
    },
    '&:hover': {
      backgroundColor: '#028E4E ',
      color: "#FFF",
      borderRadius: '5px'

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
          (
            (location.pathname.includes('/personnal') && href === '/personnal')
            || (location.pathname.includes('/detaileperson') && href === '/personnal')
            || (location.pathname.includes('/addPer') && href === '/personnal')

            || (location.pathname.includes('/customerlist') && href === '/customerlist')
            || (location.pathname.includes('/customerlist/customerdetail') && href === '/customerlist')
            || (location.pathname.includes('/addcustomer') && href === '/customerlist')
            || (location.pathname.includes('/joblist') && href === '/joblist')
            || (location.pathname.includes('/joblist/jobdetail') && href === '/joblist')
            || (location.pathname.includes('/youtube') && href === '/youtube')
            || (location.pathname.includes('/manual') && href === '/manual')
            || (location.pathname.includes('/product') && href === '/product')

            //   ||
            //   (location.pathname.includes('/editpass') && href === '/editpass') 
            //   // (location.pathname.includes('/detail') && href === '/merchant')   ||
            //   // (location.pathname.includes('/shopdata') && href === '/merchant') ||
            //   // (location.pathname.includes('/paymentTable') && href === '/paymentTable')
          ) ?
            clsx(classes.buttonLeaf, classes.active) :
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
            active={
              (
                (location.pathname.includes('/personnal') && href === '/personnal')
                || (location.pathname.includes('/addPer') && href === '/personnal')
                || (location.pathname.includes('/detaileperson') && href === '/personnal')
                || (location.pathname.includes('/joblist') && href === '/joblist')
                
                || (location.pathname.includes('/joblist/jobdetail') && href === '/joblist')
                || (location.pathname.includes('/customerlist') && href === '/customerlist')
                || (location.pathname.includes('/customerlist/customerdetail') && href === '/customerlist')
                || (location.pathname.includes('/addcustomer') && href === '/customerlist')
                || (location.pathname.includes('/youtube') && href === '/youtube')
                || (location.pathname.includes('/manual') && href === '/manual')
                || (location.pathname.includes('/product') && href === '/product')
                // ||
                // (location.pathname.includes('/editpass') && href === '/editpass') 
                // ||
                // (location.pathname.includes('/detail') && href === '/merchant')   ||
                // (location.pathname.includes('/shopdata') && href === '/merchant')||
                // (location.pathname.includes('/paymentTable') && href === '/paymentTable')

              ) ?
                true :
                false
            }
            size="20"
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
