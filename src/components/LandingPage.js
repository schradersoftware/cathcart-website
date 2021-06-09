import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import background from '../assets/background.jpg';
import chevron from '../assets/chevron-down.svg';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: 'auto',
    minWidth: '100vw',
  },
  container: {
    alignItems: 'center',
    margin: 'auto',
    maxWidth: '1080px',
    flex: '1',
  },
  backgroundMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    marginTop: '-7em',
  },
  chevron: {
    height: '6em',
    fill: 'white',
  },
  chevronButton: {
    '&:hover': {
      background: 'none',
      boxShadow: 'none',
    },
    '& .MuiTouchRipple-root span': {
      backgroundColor: 'none',
      borderRadius: '50%',
      opacity: 0.9,
    },
    '&:active': {
      boxShadow: 'none',
    },
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ height: '2600px' }}>
      <Grid
        container
        alignItems='center'
        justify='center'
        className={classes.background}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            textAlign: matchesSM ? 'center' : 'inherit',
          }}
        >
          <Grid container direction='column'>
            <Grid item>
              <IconButton
                disableRipple
                className={classes.chevronButton}
                href='#text-buttons'
                color='primary'
              >
                <img
                  className={classes.chevron}
                  src={chevron}
                  alt='down arrow'
                />
              </IconButton>

              <Grid
                container
                justify={matchesSM ? 'center' : undefined}
                item
              ></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
