import { AppBar, Avatar, createStyles, CssBaseline, Drawer, IconButton, Link, List, ListItem, ListItemAvatar, Theme, Toolbar, Typography, withStyles, WithStyles } from '@material-ui/core';
import MinimizeRoundedIcon from '@material-ui/icons/MinimizeRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import React from 'react';
import { Route, Switch, NavLink as RouterLink, Redirect } from 'react-router-dom';
import { routes, defaultRoute } from './App-Routes';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    '-webkit-user-select': 'none',
    '-webkit-app-region': 'drag',
    '& button': {
      '-webkit-app-region': 'no-drag',
    }
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    overflowX: 'hidden',
    width: theme.spacing(9),
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
  },
  appBarSpacer: theme.mixins.toolbar,
  navActive: {
    '& .avatar': {
      color: theme.palette.getContrastText(theme.palette.primary.main),
      backgroundColor: theme.palette.primary.main
    }
  },
});

interface Props extends WithStyles<typeof styles> { }

class App extends React.Component<Props> {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Among Us - Mod Manager
            </Typography>
            <IconButton edge="start" color="inherit" onClick={() => { window.api.ipcSend("minimize"); }} >
              <MinimizeRoundedIcon />
            </IconButton>
            <IconButton edge="end" color="inherit" onClick={() => { window.api.ipcSend("close"); }} >
              <CloseRoundedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent"
          open={false}
          classes={{
            paper: classes.drawerPaper,
          }}>
          <div className={classes.appBarSpacer} />
          <List style={{ height: '100%' }}>
            <ListItem button
              component={RouterLink}
              to="/home"
              activeClassName={classes.navActive}
              key="home">
              <ListItemAvatar>
                <Avatar className="avatar">
                  <HomeRoundedIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItem>
            <ListItem button
              component={RouterLink}
              to="/modlist"
              activeClassName={classes.navActive}
              key="modlist">
              <ListItemAvatar>
                <Avatar className="avatar">
                  <ViewListRoundedIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItem>
            <ListItem button
              component={RouterLink}
              to="/settings"
              activeClassName={classes.navActive}
              key="settings"
              style={{ position: 'absolute', bottom: 8 }}>
              <ListItemAvatar>
                <Avatar className="avatar">
                  <SettingsRoundedIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItem>
          </List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Switch>
            <Route exact path="/">
              <Redirect to={defaultRoute} />
            </Route>
            {
              routes.map((route, i) => (
                <Route key={i}
                  path={route.path}
                  render={props => (
                    <route.component {...props} />
                  )}
                />
              ))
            }
          </Switch>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
