import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PublicIcon from '@material-ui/icons/Public';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function FooterNav() {
  const classes = useStyles();

  return (
    <BottomNavigation
      showLabels
      className={classes.root}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Out In Tech" icon={<PublicIcon />} />
      <BottomNavigationAction label="Rutgers Studnet Affairs" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}