import React from 'react';
import { withRouter } from 'react-router-dom';
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

const Footer = (props) => {
  const { history } = props;
  const classes = useStyles();
  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position='static' className={classes.appBar}>
          <Toolbar>
            <Button
              onClick={() => handleMenuClick('/')}
              style={{ backgroundColor: 'transparent' }}
            >
              <img className={classes.logo} src={Image} alt='Logo' />
            </Button>
            <Button
              onClick={() => handleMenuClick('/blog')}
              className={classes.headerLink}
            >
              Blog
            </Button>
            <Button
              onClick={() => handleMenuClick('/legal')}
              className={classes.headerLink}
            >
              Legal
            </Button>

            <Tooltip title='Health'>
              <IconButton
                onClick={() => handleMenuClick('/health')}
                className={classes.headerLink}
                aria-label='Health'
              >
                <FitnessCenterIcon></FitnessCenterIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title='Wealth'>
              <IconButton
                onClick={() => handleMenuClick('/wealth')}
                className={classes.headerLink}
                aria-label='Wealth'
              >
                <AttachMoneyIcon></AttachMoneyIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title='Wisdom'>
              <IconButton
                onClick={() => handleMenuClick('/wisdom')}
                className={classes.headerLink}
                aria-label='Wisdom'
              >
                <MenuBookIcon></MenuBookIcon>
              </IconButton>
            </Tooltip>

            <Button
              onClick={() => handleMenuClick('/about')}
              className={classes.headerLink}
            >
              About
            </Button>

            <Button
              onClick={() => handleMenuClick('/contact')}
              className={classes.headerLink}
            >
              Contact
            </Button>
            <Button
              onClick={() => handleMenuClick('/')}
              style={{ backgroundColor: 'transparent' }}
            >
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
};

export default withRouter(Footer);
