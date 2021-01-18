import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import theme from '../Theme';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Image from '../assets/images/kom_logo.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerLink: {
    margin: '0 auto',
  },
  logo: {
    marginLeft: '5px',
    height: '70px',
    width: '85px',
    border: `2px solid black`,
    borderRadius: '5%',
    filter: 'invert(5%)',
  },
  appBar: {
    background: 'rgb(2,0,36)',
    background:
      'linear-gradient(0deg, rgba(2,0,36,1) 6%, rgba(219,149,92,1) 32%, rgba(167,151,101,1) 97%)',
    height: '25vh',
  },
  copyright: {
    textAlign: 'center',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position='static' className={classes.appBar}>
          <Toolbar>
            <Button style={{ backgroundColor: 'transparent' }}>
              <img className={classes.logo} src={Image} alt='Logo' />
            </Button>
            <Button className={classes.headerLink}>Blog</Button>
            <Button className={classes.headerLink}>Legal</Button>

            <Tooltip title='Health'>
              <IconButton className={classes.headerLink} aria-label='Health'>
                <FitnessCenterIcon></FitnessCenterIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title='Wealth'>
              <IconButton className={classes.headerLink} aria-label='Wealth'>
                <AttachMoneyIcon></AttachMoneyIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title='Wisdom'>
              <IconButton className={classes.headerLink} aria-label='Wisdom'>
                <MenuBookIcon></MenuBookIcon>
              </IconButton>
            </Tooltip>

            <Button className={classes.headerLink}>About</Button>

            <Button className={classes.headerLink}>Contact</Button>
            <Button style={{ backgroundColor: 'transparent' }}>
              <img className={classes.logo} src={Image} alt='Logo' />
            </Button>
          </Toolbar>
          <div className={classes.copyright}>
            <Typography variant='h4'>Knowledge of Man</Typography>

            <Typography variant='h5'>
              Copyright &copy; 2021 All Rights Reserved
            </Typography>
          </div>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
