import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppNav from './app-nav/app-nav';
import DashboardContainer from './common/dashboard/dashboard-container';
import HomeContainer from './home/home-container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const RUOutInTechRoutes = ( { match } ) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppNav />
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <Switch>
                <Route
                    routName="home"
                    render={() => <HomeContainer />}
                    path={`${match.path}home`}
                />
                <Route
                    routName="events"
                    componenent={DashboardContainer}
                    render={() => <DashboardContainer text={'Hello from events'} />}
                    exact
                    path={`${match.path}events`}
                />
                <Route
                    routName="outreach"
                    componenent={DashboardContainer}
                    render={() => <DashboardContainer text={'Hello from outreach'} />}
                    exact
                    path={`${match.path}outreach`}
                />
                <Route
                    component={() => <Redirect to={`${match.path}home`} />}
                />
            </Switch>
      </main>
    </div>
  );
}

export default withRouter(RUOutInTechRoutes);
