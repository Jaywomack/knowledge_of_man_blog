import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../images/greek_god.jpeg';
import theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  media: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'primary',
    height: '45vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    textAlign: 'center',
  },
  jumboBtn: {
    backgroundColor: 'primary',
    marginTop: '2rem',
  },
  btnContainer: {
    display: 'flex',
    width: '200px',
    margin: '0 auto',
  },
}));

export default function Jumbotron() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.media} variant='outlined' align='center'>
        <CardContent>
          <Typography variant='h1'>Knowledge of Man</Typography>
          <CardActions className={classes.btnContainer}>
            <Button
              variant='contained'
              size='large'
              color='secondary'
              className={classes.jumboBtn}
            >
              Lend To The Cause
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
