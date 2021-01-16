import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Image from '../images/pillars_of_character.png';
import theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  media: {
    height: '30vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'center',
  },
  jumboHeader: {
    fontFamily: 'Cinzel Decorative',
    marginBottom: 0,
    paddingBottom: 0,
    display: 'block',
  },

  pillarsImage: {
    width: '75%',
  },
}));

export default function Jumbotron() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.media} variant='outlined' align='center'>
        <Typography variant='h1' className={classes.jumboHeader}>
          Knowledge of Man
        </Typography>
        <img className={classes.pillarsImage} src={Image} alt='' />
      </Card>
    </ThemeProvider>
  );
}
