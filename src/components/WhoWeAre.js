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
import personBg from '../assets/person_background.jpg';

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    // backgroundColor: "black",
    backgroundColor: '#22261A',
  },
  sectionContainer: {
    paddingLeft: '25%',
  },
  sectionContainerItem: {
    alignItems: 'flex-end',
    paddingLeft: '25% !important',
  },
  headshotContainer: {
    height: '20em',
    width: '20em',
  },
  personImage: {
    width: '250px',
    height: '250px',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: '20px',
    verticalAlign: 'middle',
  },
  personImageMobile: {
    width: '150px',
    height: '150',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: '20px',
    marginLeft: '20px',
    verticalAlign: 'middle',
  },
  infoText: {
    color: 'white',
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
              backgroundColor: '#22261A',
            }}
          >
            <SectionHeader
              // className={classes.sectionContainerItem}
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate.
              </Typography>
              <Typography variant='body1' className={classes.infoText}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </Typography>
              <Typography className={classes.infoText}>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet.
              </Typography>
            </>
          </Grid>
          <Grid
            item
            xs={matchesSM ? 12 : 6}
            className={classes.sectionContainer}
            style={{
              height: matchesSM ? '500px' : '100% !important', //500px for mobile
              backgroundImage: `url(${personBg})`,
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
                  src={cathcartHeadshot}
                  alt='Steven Cathcart Headshot'
                />
                <img
                  className={
                    matchesSM ? classes.personImageMobile : classes.personImage
                  }
                  src={cathcartHeadshot}
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
