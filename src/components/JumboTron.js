import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../images/greek_god.jpeg';
import CardMedia from '@material-ui/core/CardMedia';
import theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  jumboBtn: {
    margin: '0 auto',
  },
  media: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '75vh',
  },
}));

export default function Jumbotron() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card
        className={(classes.root, classes.media)}
        variant='outlined'
        align='center'
      >
        <CardContent>
          {/* <CardMedia
            component='img'
            alt='Contemplative Reptile'
            height='200'
            image={Image}
            title='Contemplative Reptile'
          /> */}
          <Typography variant='h2'>Knowledge of Man</Typography>
        </CardContent>
        <CardActions>
          <Button
            size='large'
            variant='contained'
            color='primary'
            className={classes.jumboBtn}
          >
            Contribute
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
