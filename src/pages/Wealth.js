import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Title from '../components/Title';
import theme from '../Theme';

import Image from '../assets/images/wealth_bg.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    background:
      'linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(255,173,106,1) 6%, rgba(215,204,169,1) 91%)',
    backgroundSize: 'contain',
    minHeight: '100vh',
  },
  paperContainer: {
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(255,173,106,1) 6%, rgba(215,204,169,1) 91%)',
  },
  card: {
    background: `url(${Image}) no-repeat center center fixed `,
    backgroundSize: 'contain',
    minWidth: '75%',
    height: '75vh',
    textAlign: 'left',
  },
}));

export default function Wealth() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Title />
      <div className={classes.root}>
        <Paper className={classes.paperContainer} elevation={3}>
          <Card className={classes.card}></Card>
        </Paper>
      </div>
    </ThemeProvider>
  );
}
