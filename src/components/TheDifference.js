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
import Image from 'material-ui-image'

import whatwedo1 from '../assets/whatwedo1.jpeg';
import email from '../assets/email.svg';
import checklist from '../assets/checklist.svg';

const useStyles = makeStyles((theme) => ({

  // card: {
  //   width: '100vw',
  //   margin: 'auto',
  //   backgroundColor: color.background.default
  // },
  // container: {
  //   maxWidth: '1080px',
  //   padding: '5%',
  //   margin: 'auto',
  // },
  // root: {
  //   maxWidth: 320,
  // },
  parentContainer: {
    marginTop: '5em',
    marginBottom: '5em',

  },
  media: {
    aspectRatio: 1.25
  },
  cardContainer: {
    display: "flex",
    marginTop: '3em',
    marginBottom: '5em',
    alignItems: "center",
    justifyContent: "center",
    maxWidth: '80%',
    flexWrap: "wrap",
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: "column",
      flexWrap: 'nowrap'
    },
  },
  card: {
    margin: '1rem',
    padding: "1.5rem",
    textAlign: "left",
    width: "40%",
    height: "45%",
    [theme.breakpoints.down('md')]: {
      margin: '2rem',
      width: "65%",
    },
    [theme.breakpoints.down('sm')]: {
      margin: '2rem',
      width: "95%",
    },
    
  },
}));

export default function TheDifference({ theDifferenceObject }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <div id='thedifference' className={classes.parentContainer}>
        <Grid
          container
          direction='row'
          justify='center'
          
        >
          <SectionHeader
            title={theDifferenceObject.sectionHeader.title}
            barColor={theDifferenceObject.sectionHeader.barColor}
            titleColor={theDifferenceObject.sectionHeader.titleColor}
          />
          <Grid
            container
            xs={12}
            direction='row'
            justify='space-evenly'
            alignItems='center'
            className={classes.cardContainer}
          >
            {theDifferenceObject.cards.map((card, index) => {
              return (
                <Card key={`${index}`} className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={card.imageUrl}
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
      </div>
    </React.Fragment>
  );
}
