import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme, withTheme } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    ...theme.typography.title,
  },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'None',
    fontWeight: 600,
    fontSize: '4rem',
    [theme.breakpoints.only('md')]: {
      fontSize: '3.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem'
    },
  },

}));

export default function SectionHeader({ title, barColor, titleColor }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <Grid container>
      <Grid item className={classes.titleContainer}>
        <Typography
          variant='h3'
          className={classes.title}
          style={{
            color: titleColor,
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        className={classes.titleContainer}
      >
        <hr
          style={{
            backgroundColor: barColor,
            border: 'none',
            width: '9%',
            marginTop: '25px',
            height: matchesXS ? '.5em' : '1em',
          }}
        />
      </Grid>
    </Grid>
  );
}
