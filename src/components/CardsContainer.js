import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

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
  papers: {
    backgroundColor: 'orange',
    color: 'white',
    height: '15vh',
    width: '15vw',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function CardsContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.papers} elevation={6}>
        <Typography>Health</Typography>
      </Paper>
      <Paper className={classes.papers} elevation={6}>
        <Typography>Wealth</Typography>
      </Paper>
      <Paper className={classes.papers} elevation={6}>
        <Typography>Wisdom</Typography>
      </Paper>
    </div>
  );
}
