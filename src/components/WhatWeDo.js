import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SectionHeader from './ui/SectionHeader';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import whatwedo1 from '../assets/whatwedo1.jpeg';
import email from '../assets/email.svg';
import checklist from '../assets/checklist.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
  },
  media: {
    height: 300,
  },
  cardContainer: {
    marginTop: '4em',
    maxWidth: '65vw',

    [theme.breakpoints.down('xs')]: {
      marginBottom: '2em',
      height: "1400px",
    },
    [theme.breakpoints.up('xs')]: {
      marginTop: '2.5em'
    },
  },
  contentContainer: {
    marginTop: '8em',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
      
    },
  }
}));

const whatWeDoObject = {
  barColor: 'teal',
  titleColor: 'teal',
};

export default function WhatWeDo(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" className={classes.contentContainer}>
      <SectionHeader
        title='WHAT WE DO'
        barColor={whatWeDoObject.barColor}
        titleColor={whatWeDoObject.titleColor}
      />

      <Grid container direction='row' justify='space-evenly' alignItems='center' className={classes.cardContainer}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={whatwedo1}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Evaluation
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Cleveland Apartment Brokers specializes in multifamily &
                apartment building sales in the state of Ohio.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={email}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Marketing
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                We work with our clients to develop a customized plan to help sell their properties on the open market for the best price.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={checklist}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Negotiation
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                There are no upfront costs to our services. Our competitive commission structure ensures that our team will work tirelessly.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
        </Grid>
    </React.Fragment>
  );
}
