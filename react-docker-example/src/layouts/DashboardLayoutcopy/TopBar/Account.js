import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
  Divider,
  SvgIcon
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import { ChevronDown as ChevronDownIcon } from 'react-feather';
import { Tune } from '@material-ui/icons';
import DialogLogOut from 'src/components/keen/DialogLogout'

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
    background: '#1F8F5B '
  },
  popover: {
    width: 200
  },
  textColor:{
    color:"#000",
    fontFamily: "Prompt, sans-serif",

  }

}));

const Account = () => {
  const classes = useStyles();
  const history = useHistory();
  const ref = useRef(null);
  const { user, logout } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [history.location])

  const handleLogout = async () => {
    // try {
    //   handleClose();
    //   await logout();
    //   history.push('/login');
    // } catch (err) {
    //   console.error(err);
    //   enqueueSnackbar('Unable to logout', {
    //     variant: 'error'
    //   });
    // }
    setOpenDialog(true);

  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
};

  const handleProfile = () => {
    history.push('/profile');
  }

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <Avatar
          alt="User"
          className={classes.avatar}
          // src={user.avatar}
        />
        <Hidden smDown>
          <Typography
            variant="body2"
            className={classes.textColor}
          >
            {/* {user?.email || ''} */}
            ดิว จิรวรรตน์

          </Typography>
          <SvgIcon fontSize="small" style={{ marginLeft: 10 ,color:"#000"}}>
            <ChevronDownIcon   />
          </SvgIcon>
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
        style={{ padding: 0 }}
      >
        <MenuItem onClick={handleProfile}>
          โปรไฟล์
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          ออกจากระบบ
        </MenuItem>
      </Menu>

      <DialogLogOut
                                    open={openDialog}
                                    onClose={handleCloseDialog} />
    </>
  );
}

export default Account;
