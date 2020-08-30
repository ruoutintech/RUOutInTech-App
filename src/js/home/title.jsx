import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles( theme => ({
    root: {
        width: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        padding: theme.spacing( 5 )
    },
    header: {
        textShadow: `0px 2px 5px ${theme.palette.secondary.main}`,
    },
    subHeader: {
        color: 'white',
        textShadow: `0px 2px 5px ${theme.palette.secondary.main}`,
    }
}) )

const Title = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" color="primary" className={classes.header}>
        RU
      </Typography>
      <Typography variant="h1" className={classes.subHeader}> Out In Tech </Typography>
    </div>
  );
};

export default Title;
