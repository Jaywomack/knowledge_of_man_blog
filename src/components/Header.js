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
import Image from '../images/kom_logo.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {},
  headerLink: {
    marginLeft: 'auto',
  },
  logo: {
    marginLeft: '5px',
    height: '70px',
    width: '85px',
    border: `2px solid #87240f`,
    borderRadius: '5%',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position='static' color='primary'>
          <Toolbar>
            <Button style={{ backgroundColor: 'transparent' }}>
              <img className={classes.logo} src={Image} alt='Logo' />
            </Button>
            <Button className={classes.headerLink} color='secondary'>
              Blog
            </Button>

            <Tooltip title='Health'>
              <IconButton className={classes.headerLink} aria-label='Health'>
                <FitnessCenterIcon color='secondary'></FitnessCenterIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title='Wealth'>
              <IconButton className={classes.headerLink} aria-label='Wealth'>
                <AttachMoneyIcon color='secondary'></AttachMoneyIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title='Wisdom'>
              <IconButton className={classes.headerLink} aria-label='Wisdom'>
                <MenuBookIcon color='secondary'></MenuBookIcon>
              </IconButton>
            </Tooltip>

            <Button className={classes.headerLink} color='secondary'>
              About
            </Button>

            <Button className={classes.headerLink} color='secondary'>
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
