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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {},
  headerLink: {
    marginLeft: 'auto',
  },
  logo: {
    marginLeft: '15px',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position='static' color='transparent'>
          <Toolbar>
            <Button className={classes.logo}>Logo</Button>
            <Tooltip title='Health'>
              <IconButton className={classes.headerLink} aria-label='Health'>
                <FitnessCenterIcon color='inherit'></FitnessCenterIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title='Wealth'>
              <IconButton className={classes.headerLink} aria-label='Wealth'>
                <AttachMoneyIcon color='inherit'></AttachMoneyIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title='Wisdom'>
              <IconButton className={classes.headerLink} aria-label='Wisdom'>
                <MenuBookIcon color='inherit'></MenuBookIcon>
              </IconButton>
            </Tooltip>

            <Button className={classes.headerLink}>About</Button>

            <Button className={classes.headerLink}>Contact</Button>

            <Button className={classes.headerLink}>Blog</Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
