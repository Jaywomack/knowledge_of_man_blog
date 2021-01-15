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
}));

export default function CardsContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography>I'm in the Paper Component</Typography>
      </Paper>
      <Paper elevation={3}>
        <Typography>I'm in the Paper Component</Typography>
      </Paper>
      <Paper elevation={3}>
        <Typography>I'm in the Paper Component</Typography>
      </Paper>
    </div>
  );
}
