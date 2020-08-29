import React from "react";

import { NavLink } from 'react-router-dom';

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const AppNav = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const topNavOptions = [
    {
      id: 13131313,
      icon: <HomeIcon />,
      text: "Home",
      url: '/home'
    },
    {
      id: 12121212,
      icon: <DateRangeIcon />,
      text: "Events",
      url: '/events'
    },
  ];

  const bottomNavOptions = [
    {
      id: 1515151,
      icon: <AccountCircleIcon />,
      text: "Outreach ",
      url: '/outreach'
    },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Out in Tech RU
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            topNavOptions.map((cur, index) => {
              const Icon = cur.icon;
              const url = cur.url;
              const NavLinkWithRef = React.forwardRef(
                ( props, ref ) => (
                  <div ref={ref}> 
                    <NavLink { ...props } exact />
                  </div>
                )
              )
              return(
                <div key={url}>
                  <ListItem 
                      button={true}
                      component={NavLinkWithRef}
                      key={cur.text}
                      to={url}
                  >
                    <ListItemIcon>
                      {Icon}
                    </ListItemIcon>
                    <ListItemText primary={cur.text} />
                  </ListItem>
                </div>
              )
            } )
          }
        </List>
        <Divider />
        <List>
          {
            bottomNavOptions.map((cur, index) => {
              const Icon = cur.icon;
              const url = cur.url;
              const NavLinkWithRef = React.forwardRef(
                ( props, ref ) => (
                  <div ref={ref}> 
                    <NavLink { ...props } exact />
                  </div>
                )
              )
              return(
                <div key={url}>
                  <ListItem 
                      button={true}
                      component={NavLinkWithRef}
                      key={cur.text}
                      to={url}
                  >
                    <ListItemIcon>
                      {Icon}
                    </ListItemIcon>
                    <ListItemText primary={cur.text} />
                  </ListItem>
                </div>
              )
            } )
          }
        </List>
      </Drawer>
    </>
  );
}

export default AppNav;