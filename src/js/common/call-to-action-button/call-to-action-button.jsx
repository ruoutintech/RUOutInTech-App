import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    width: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    padding: theme.spacing( 5 )
  },
  button: {
    width: 'fit-content',
    height: 'auto',
  }
}));

export default function CallToActionButton( {
    text, 
    handleClick,
    color,
} ) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color={color} onClick={handleClick} className={classes.button}>
        <Typography variant="h3" >
          {text}
        </Typography>
      </Button>
    </div>
  );
}