import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "../common/media-card";

const useStyles = makeStyles({
  grid: {
    gridTemplateColumns: ({ numCols }) =>
      `repeat( ${numCols}, 20px, [col-start] )`,
  },
});

const Carousel = (config) => {
  const classes = useStyles({ numCols: config.length });
  return (
    <div className={classes.grid}>
      {config.map((card) => {
        return <MediaCard img={card.img} text={card.text} />;
      })}
    </div>
  );
};

export default Carousel;
