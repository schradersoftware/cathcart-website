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
    display: "flex",
    marginTop: '3em',
    marginBottom: '5em',
    alignItems: "center",
    justifyContent: "center",
    maxWidth: '80%',
    flexWrap: "nowrap",
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      flexDirection: "column",
    },
  },
  card: {
    margin: '1rem',
    padding: "1.5rem",
    textAlign: "left",
    width: "30%",
    height: "85%",
    [theme.breakpoints.down('md')]: {
      margin: '2rem',
      width: "65%",
    },
    
  },
}));

export default function WhatWeDo({ whatWeDoObject }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <div id='whatwedo'></div>
      <Grid
        container
        direction='row'
        justify='center'
        
      >
        <SectionHeader
          title={whatWeDoObject.sectionHeader.title}
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
              <Card key={`${index}`} className={classes.card}>
                <CardActionArea>
                  <CardMedia
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
