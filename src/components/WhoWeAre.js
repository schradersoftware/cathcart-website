import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SectionHeader from './ui/SectionHeader';
import Image from 'material-ui-image';

import cathcartHeadshot from '../assets/cathcart.jpg';

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    marginTop: '2em',
  },
  headshotContainer: {
    height: '20em',
    width: '20em',
  },
}));

export default function WhoWeAre({ whoWeAreObject }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div id='whoweare' style={{ height: '700px', backgroundColor: '#2f2f30' }}>
      {console.log(whoWeAreObject)}
      <Grid container direction='row' spacing={1}>
        <Grid item xs={6} className={classes.sectionContainer}>
          <SectionHeader
            title='WHO WE ARE'
            barColor={whoWeAreObject.sectionHeader.barColor}
            titleColor={whoWeAreObject.sectionHeader.titleColor}
          />
          <Typography variant='body1' gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper variant='outlined' className={classes.headshotContainer}>
            <Image src={cathcartHeadshot} alt='Steven Cathcart Headshot' />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper variant='outlined' className={classes.headshotContainer}>
            <Image src={cathcartHeadshot} alt='Steven Cathcart Headshot' />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
