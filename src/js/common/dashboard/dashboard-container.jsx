import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import rutgersPhoto4x from "../../../assets/Rutgers-Photo-@-4x.jpg";
import rutgersPhoto from "../../../assets/Rutgers-Photo.jpg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    overflow: 'auto'
  },
  bg: {
    background: `url(${rutgersPhoto4x}) no-repeat center`,
    backgroundSize: "2000px",
    height: "70vh",
  },
}));

const DashboardContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.bg}>{children}</div>
    </div>
  );
};

export default DashboardContainer;
