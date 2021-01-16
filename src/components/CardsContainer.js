import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Image from '../images/pillars_of_character.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },

  pillarsImage: {
    height: '100%',
    width: '100%',
  },
  pillarsContainer: {
    height: '50vh',
    width: '100%',
  },
}));

export default function CardsContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.pillarsContainer} elevation={6}>
        <img src={Image} alt='' className={classes.pillarsImage} />
      </Paper>

      <Paper elevation={6}>
        <Typography>Wealth</Typography>
      </Paper>

      <Paper elevation={6}>
        <Typography>Wisdom</Typography>
      </Paper>
    </div>
  );
}
