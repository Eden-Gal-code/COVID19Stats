import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import CountrySelect from "../components/CountrySelect";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Container from "@material-ui/core/Container";
import { ReactReduxContext } from "react-redux";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { getCountry } from "../API";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
const drawerWidth = 190;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    flexGrow: 1,
    display: "flex",
  },

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ackgroundColor: "#0392D0",
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
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    // overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    top: "200vh",
    // overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [selection, setSelection] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [indexN, setIndexN] = useState(1);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="absolute"
              className={clsx(classes.appBar, open && classes.appBarShift)}
            >
              <Toolbar className={classes.toolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  className={clsx(
                    classes.menuButton,
                    open && classes.menuButtonHidden
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  COVID 19 Stats
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: clsx(
                  classes.drawerPaper,
                  !open && classes.drawerPaperClose
                ),
              }}
              open={open}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <div className={classes.drawerContainer}>
                <List>
                  {["Global Stats", "Country Stats", "Country Compare"].map(
                    (text, index) => (
                      <ListItem
                        button
                        key={text}
                        onClick={() => {
                          setSelection(text);
                          store.dispatch({
                            type: "Change_Choice",
                            payload: { choice: text },
                          });
                          if (text === "Global Stats") {
                            getCountry("Global").then((arr) => {
                              store.dispatch({
                                type: "Select_One_Country",
                                payload: {
                                  countries: ["Global"],
                                  countryData: [arr],
                                },
                              });
                            });
                          }
                        }}
                      >
                        <ListItemText primary={text} />
                      </ListItem>
                    )
                  )}
                </List>
                <Divider />
                {selection === "Country Stats" && (
                  <List>
                    <ListItem>
                      <CountrySelect
                        item="countryDisplay"
                        list={props.list}
                        payload="Select_One_Country"
                        changeCountry={props.changeCountry}
                      />
                    </ListItem>
                  </List>
                )}
                {selection === "Country Compare" && (
                  <List>
                    <ListItem>
                      <CountrySelect
                        item="countryDisplay"
                        list={props.list}
                        payload="Select_One_Country"
                        id={0}
                      />
                    </ListItem>
                    <ListItem>
                      <CountrySelect
                        item="secondCountryDisplay"
                        list={props.list}
                        payload="Add_Country"
                        id={1}
                      />
                    </ListItem>
                    {indexN >= 2 && (
                      <ListItem>
                        <CountrySelect
                          item="secondCountryDisplay"
                          list={props.list}
                          payload="Add_Country"
                          id={2}
                        />
                      </ListItem>
                    )}
                    {indexN >= 3 && (
                      <ListItem>
                        <CountrySelect
                          item="secondCountryDisplay"
                          list={props.list}
                          payload="Add_Country"
                          id={3}
                        />
                      </ListItem>
                    )}
                    {indexN >= 4 && (
                      <ListItem>
                        <CountrySelect
                          item="secondCountryDisplay"
                          list={props.list}
                          payload="Add_Country"
                          id={4}
                        />
                      </ListItem>
                    )}
                    {indexN < 4 && (
                      <IconButton
                        color="primary"
                        onClick={() => {
                          setIndexN(indexN + 1);
                        }}
                      >
                        <AddCircleIcon />
                      </IconButton>
                    )}

                    {indexN > 1 && (
                      <IconButton
                        color="primary"
                        onClick={() => {
                          if (
                            indexN ===
                            store.getState().countries.length - 1
                          ) {
                            store.dispatch({ type: "Remove_Country" });
                          }
                          setIndexN(indexN - 1);
                        }}
                      >
                        <RemoveCircleIcon />
                      </IconButton>
                    )}
                  </List>
                )}
              </div>
            </Drawer>

            <div className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container className={classes.container}>
                {props.children}
              </Container>
            </div>
          </div>
        );
      }}
    </ReactReduxContext.Consumer>
  );
}
