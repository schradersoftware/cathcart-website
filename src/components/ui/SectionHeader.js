import React from "react";
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  titleSlideBox: {
    width: "100%",
    marginTop: "5%",
  },

}));

export default function SectionHeader({title}) {
  const classes = useStyles();
  return (
    <div className={classes.titleSlideBox}>
      <Typography
        variant="h5"
        >
        {title} 
      </Typography> 
      <hr/>
    </div>

  )
}