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
}));

export default function CardsContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={6}>
        <Typography>Wealth</Typography>
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
