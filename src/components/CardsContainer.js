import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider, Typography } from '@material-ui/core';
import Image from '../images/parchment.png';

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '1rem',
    placeItems: 'center',
    backgroundColor: '#F5F5EF',
    height: '75vh',
    justifyContent: 'space-around',
    background: `url(${Image}) no-repeat center center fixed `,
    backgroundSize: 'cover',
  },
  card: {
    background:
      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,173,106,1) 6%, rgba(214,204,169,1) 91%)',
    boxShadow:
      '0 1px 1px rgba(0,0,0,0.15), 0 10px 0 -5px #db955c,0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px #db955c,0 20px 1px -9px rgba(0,0,0,0.15)',
    padding: '30px',
    width: '22vw',
  },
}));

export default function CardsContainer() {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <div className={classes.paperContainer}>
        <Paper className={classes.card} elevation={6}>
          <Typography variant='h3'>Health</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            vero mollitia quae delectus fuga cumque quaerat. Dolore fugit cum
            tenetur, assumenda reiciendis dolorem delectus sapiente quisquam.
            Sit laboriosam eligendi molestiae mollitia amet, cupiditate
            asperiores laudantium, non suscipit delectus, aliquam quas
            perspiciatis a? Voluptatem corporis laudantium autem id architecto
            aperiam accusamus.
          </Typography>
        </Paper>
        <Paper className={classes.card} elevation={6}>
          <Typography variant='h3'>Wealth</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            vero mollitia quae delectus fuga cumque quaerat. Dolore fugit cum
            tenetur, assumenda reiciendis dolorem delectus sapiente quisquam.
            Sit laboriosam eligendi molestiae mollitia amet, cupiditate
            asperiores laudantium, non suscipit delectus, aliquam quas
            perspiciatis a? Voluptatem corporis laudantium autem id architecto
            aperiam accusamus.
          </Typography>
        </Paper>
        <Paper className={classes.card} elevation={6}>
          <Typography variant='h3'>Wisdom</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            vero mollitia quae delectus fuga cumque quaerat. Dolore fugit cum
            tenetur, assumenda reiciendis dolorem delectus sapiente quisquam.
            Sit laboriosam eligendi molestiae mollitia amet, cupiditate
            asperiores laudantium, non suscipit delectus, aliquam quas
            perspiciatis a? Voluptatem corporis laudantium autem id architecto
            aperiam accusamus.
          </Typography>
        </Paper>
      </div>
    </ThemeProvider>
  );
}
