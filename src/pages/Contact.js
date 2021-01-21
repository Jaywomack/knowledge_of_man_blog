import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Title from '../components/Title';
import theme from '../Theme';

import Image from '../assets/images/rotary_phone.png';

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
  formFields: {
    padding: '15px',
  },
  textArea: {
    background: 'rgba(215,204,169,1)',
    marginBottom: '15px',
    marginLeft: '15px',
  },
  formButton: {
    marginLeft: '15px',
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Title />
      <div className={classes.root}>
        <Paper className={classes.paperContainer} elevation={3}>
          <Card className={classes.card}>
            <Typography variant='h5' component='h2'>
              Drop Us A line
            </Typography>
            <FormControl margin='normal' focused>
              <TextField
                className={classes.formFields}
                variant='outlined'
                required
                id='firstName'
                label='Required'
                defaultValue='First Name'
              />
              <TextField
                className={classes.formFields}
                variant='outlined'
                required
                id='lastName'
                label='Required'
                defaultValue='Last Name'
              />
              <TextField
                className={classes.formFields}
                variant='outlined'
                required
                id='email'
                label='Required'
                defaultValue='Email'
              />
              <TextareaAutosize
                className={classes.textArea}
                rowsMin={5}
                variant='outlined'
                required
                id='message'
                label='Required'
                defaultValue='Enter Your Message Here'
              />
              <Button className={classes.formButton} variant='outlined'>
                Submit
              </Button>
            </FormControl>
          </Card>
        </Paper>
      </div>
    </ThemeProvider>
  );
}
