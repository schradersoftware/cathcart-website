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
    justifyContent: 'space-around',
    [theme.breakpoints.only('xs')]: {
      marginBottom: '2em',
      height: '145vh',
    },
    [theme.breakpoints.only('sm')]: {
      marginBottom: '2em',
      height: '145vh',
    },
    [theme.breakpoints.only('md')]: {
      marginBottom: '2em',
      height: '145vh',
      width: '65vw',
    },
    [theme.breakpoints.only('lg')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.only('xl')]: {
      marginBottom: '2em',
    },
  },
  contentContainer: {
    marginTop: '4em',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
}));

const whatWeDoObject = {
  barColor: 'teal',
  titleColor: 'teal',
};

export default function WhatWeDo({ whatWeDoObject }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Grid
        container
        direction='row'
        justify='center'
        className={classes.contentContainer}
      >
        <SectionHeader
          title='WHAT WE DO'
          barColor={whatWeDoObject.sectionHeader.barColor}
          titleColor={whatWeDoObject.sectionHeader.titleColor}
        />
        <Grid
          container
          xs={12}
          direction='row'
          justify='space-evenly'
          alignItems='center'
          className={classes.cardContainer}
        >
          {whatWeDoObject.cards.map((card, index) => {
            return (
              <Card key={`${index}`} className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    // style={{ height: '20px', paddingTop: '56%' }}
                    className={classes.media}
                    image={email}
                    title={card.imageTitle}
                  />

                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {card.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {card.copy}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
