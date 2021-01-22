import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  jumboHeader: {
    fontFamily: 'Cinzel Decorative',
    background:
      'linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(255,173,106,1) 6%, rgba(215,204,169,1) 91%)',
    marginBottom: 0,
    paddingBottom: 0,
    display: 'block',
  },

  pillarsImage: {
    width: '75%',
  },
}));

export default function Title() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.media} align='center'>
        <Typography variant='h1' className={classes.jumboHeader}>
          The Knowledge of Man
        </Typography>
      </Card>
    </ThemeProvider>
  );
}
