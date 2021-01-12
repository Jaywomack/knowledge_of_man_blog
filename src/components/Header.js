import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: theme.palette.secondary,
  },
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
        <AppBar position='static' className='AppBar'>
          <Toolbar>
            <Typography variant='h6' className={classes.logo}>
              Logo
            </Typography>
            <Typography variant='h6' className={classes.headerLink}>
              HWW
            </Typography>
            <Typography variant='h6' className={classes.headerLink}>
              About
            </Typography>
            <Typography variant='h6' className={classes.headerLink}>
              Contact
            </Typography>
            <Typography variant='h6' className={classes.headerLink}>
              Blog
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
