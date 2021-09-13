import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SectionHeader from './ui/SectionHeader';

import cathcartHeadshot from '../assets/cathcart.jpg';
import groupPhoto from '../assets/about-us.png';

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    backgroundColor: '#22261A',
  },
  sectionContainer: {
    paddingLeft: '25%',
    justifyContent: 'center',
  },
  sectionContainerItem: {
    alignItems: 'flex-end',
    paddingLeft: '25% !important',
  },
  headshotContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  personImage: {
    width: '90%',
    height: '90%',
    borderRadius: '47%',
  },
  personImageMobile: {
    width: '90%',
    height: '90%',
    borderRadius: '47%',
  },
  infoText: {
    color: '#716b5f',
  },
}));

export default function WhoWeAre({ whoWeAreObject }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>
      <div id='whoweare' className={classes.parentContainer}>
        <Grid container direction='row' spacing={1}>
          <Grid
            item
            xs={matchesSM ? false : 6}
            className={classes.sectionContainer}
            style={{
              paddingTop: '5em',
              paddingLeft: '10%',
              paddingRight: '5%',
              paddingBottom: '5em',
              backgroundColor: '#FFEECB',
            }}
          >
            <SectionHeader
              title='WHO WE ARE'
              barColor={whoWeAreObject.sectionHeader.barColor}
              titleColor={whoWeAreObject.sectionHeader.titleColor}
              alignItems='start'
              barWidth='25%'
            />
            <>
              <Typography
                variant='body1'
                gutterBottom
                className={classes.infoText}
              >
                <strong>
                  Ohio Apartment Brokers is a division of Lokal Real Estate.
                </strong>
                <br />
                Headquartered in Cleveland, Ohio. We are licensed real estate
                agents and have been involved in the sale of hundreds of
                multifamily units over the last several years.
              </Typography>
              <br />
              <Typography variant='body1' className={classes.infoText}>
                While many real estate companies are focused on single family
                homes,
                <strong>
                  {' '}
                  Ohio Apartment Brokers is uniquely positioned in the
                  multifamily and apartment building space.
                </strong>{' '}
                Our knowledge and experience with these transactions means that
                our clients have experts working on their behalf to get their
                properties sold for a great price.
              </Typography>
            </>
          </Grid>
          <Grid
            item
            xs={matchesSM ? 12 : 6}
            className={classes.headshotContainer}
            style={{
              backgroundColor: '#2F4858',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
          >
            <Grid
              container
              align='center'
              alignContent='center'
              justify='center'
              style={{ height: '100%' }}
            >
              <div
                className={classes.headshotContainer}
                style={{
                  margin: 'auto',
                  height: 'auto',
                  display: 'flex',
                  resize: 'vertical',
                }}
              >
                <img
                  className={
                    matchesSM ? classes.personImageMobile : classes.personImage
                  }
                  src={groupPhoto}
                  alt='Steven Cathcart Headshot'
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
