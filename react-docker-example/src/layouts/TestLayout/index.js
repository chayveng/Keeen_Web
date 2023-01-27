import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import clsx from 'clsx';
const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#f4f6f8',
    padding: theme.spacing(2)
  },
  logo: {
    width: 100,
    textAlign: 'center',

  },
  subNav: {
    // textAlign:'center',
    fontFamily: "Prompt, sans-serif",
    fontSize: '1.8vh',
    color: '#687178',
    padding: theme.spacing(0),

  },
  // active: {
  //   color: '#FFF',
  //   borderRadius: '5px',
  //   backgroundColor: '#028E4E ',
  //   '& $title': {
  //     fontWeight: theme.typography.fontWeightMedium,
  //     color: '#fff'
  //   },
  //   '& $icon': {
  //     color: "#fff"
  //   },
  //   '&:hover': {
  //     backgroundColor: '#028E4E ',
  //     color: "#FFF",
  //     borderRadius: '5px'

  //   }
  // },
}));

const sample = [ 
      { title: "กลับสู่หน้าหลัก", icon: '',href: "/datalist", open: true, },
      { title: "Inbox", icon: '',href: "/datalist", open: true, },
      { title: "Inbox", icon: '',href: "/datalist", open: true, },
      { title: "Inbox", icon: '',href: "/datalist", open: true, },


    
  
]
export default function App({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = React.useState(false);
  document.body.style.backgroundColor = "green";
  const toggleDrawer = event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };
  return (
    <div className={classes.root} style={{backgroundColor:'blue'}}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive Drawer Example
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant={isMdUp ? "permanent" : "temporary"}
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <div className={classes.toolbar} />
        <Divider />
        <Box style={{textAlign:'center'}} mt={2} mb={2}>
          <img src="/static/images/Logo_keen.svg" className={classes.logo} />
        </Box>
        <List className={classes.subNav}>
          {sample.map((text, index) => (
              
            <ListItem button component={Link} to={text.href}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {sample.map((key,value)=>{
            console.log(key.href);
            // console.log(value);
        })}
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content} style={{backgroundColor:'#f4f6f8'}}>
      {/* <div style={{marginTop:'50px'}}>
          {children}
      </div> */}
      </main>
    </div>
  );
}
