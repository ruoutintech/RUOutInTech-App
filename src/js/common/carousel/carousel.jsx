import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "../media-card/media-card";

const useStyles = makeStyles( theme => ({
  grid: ({ numCols }) => ({
    display: 'grid',
    justifyItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: `repeat( autofill, 350px)`,
      gridGap: theme.spacing( 3 ),
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: `repeat( ${numCols}, 350px)`,
      gridGap: theme.spacing( 8 ),
    },
  })
}));

const Carousel = ( {config} ) => {
  const classes = useStyles({ numCols: config.length });
  return (
    <div className={classes.grid}>
      {config.map((card) => {
        return <MediaCard img={card.img} text={card.text} title={card.title} key={card.img} />;
      })}
    </div>
  );
};

export default Carousel;
