import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Title from '../components/Title';
import theme from '../Theme';

import Image from '../assets/images/greek_god.jpeg';

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
    height: '100vh',
    textAlign: 'left',
    padding: '4%',
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Title />
      <div className={classes.root}>
        <Paper className={classes.paperContainer}>
          <Card className={classes.card}>
            <Typography variant='h2' align='center'>
              About Us
            </Typography>
            <Typography className='aboutP' paragraph align='left'>
              We are in the business of building people to be the best that they
              can be. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis odio numquam corporis dicta perferendis minus
              similique. Sint deserunt temporibus impedit, culpa explicabo
              delectus minus totam obcaecati sapiente eaque nemo veniam rerum
              harum quaerat expedita esse asperiores ratione aperiam odit
              tenetur dolorem? Illum voluptatibus ab repellendus, unde deleniti
              porro delectus. Minima distinctio voluptatem, numquam temporibus
              architecto, perferendis ipsam ea dignissimos omnis quod ab rem
              inventore quis facere, consequuntur sit. Excepturi rem tenetur cum
              incidunt animi mollitia officia fuga dolorem illo nostrum, quaerat
              nobis minus nam, dignissimos soluta, maiores aliquam accusamus
              laboriosam modi? Unde reprehenderit doloremque officia ea aperiam
              est architecto cumque cum molestiae asperiores numquam,
              repudiandae nisi, officiis ipsa voluptatum culpa praesentium quia
              saepe quod minima! Ipsum in deserunt iure temporibus iste
              blanditiis quia nesciunt sit velit. Eum aperiam, placeat quae et
              enim blanditiis explicabo? Exercitationem ipsam repellat harum
              esse sed nam sit quaerat reprehenderit fugiat porro, dolorum
              praesentium, repellendus provident.
            </Typography>
            <Typography className='aboutP' paragraph align='left'>
              We are in the business of building people to be the best that they
              can be. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis odio numquam corporis dicta perferendis minus
              similique. Sint deserunt temporibus impedit, culpa explicabo
              delectus minus totam obcaecati sapiente eaque nemo veniam rerum
              harum quaerat expedita esse asperiores ratione aperiam odit
              tenetur dolorem? Illum voluptatibus ab repellendus, unde deleniti
              porro delectus. Minima distinctio voluptatem, numquam temporibus
              architecto, perferendis ipsam ea dignissimos omnis quod ab rem
              inventore quis facere, consequuntur sit. Excepturi rem tenetur cum
              incidunt animi mollitia officia fuga dolorem illo nostrum, quaerat
              nobis minus nam, dignissimos soluta, maiores aliquam accusamus
              laboriosam modi? Unde reprehenderit doloremque officia ea aperiam
              est architecto cumque cum molestiae asperiores numquam,
              repudiandae nisi, officiis ipsa voluptatum culpa praesentium quia
              saepe quod minima! Ipsum in deserunt iure temporibus iste
              blanditiis quia nesciunt sit velit. Eum aperiam, placeat quae et
              enim blanditiis explicabo? Exercitationem ipsam repellat harum
              esse sed nam sit quaerat reprehenderit fugiat porro, dolorum
              praesentium, repellendus provident.
            </Typography>
            <Typography className='aboutP' paragraph align='left'>
              We are in the business of building people to be the best that they
              can be. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis odio numquam corporis dicta perferendis minus
              similique. Sint deserunt temporibus impedit, culpa explicabo
              delectus minus totam obcaecati sapiente eaque nemo veniam rerum
              harum quaerat expedita esse asperiores ratione aperiam odit
              tenetur dolorem? Illum voluptatibus ab repellendus, unde deleniti
              porro delectus. Minima distinctio voluptatem, numquam temporibus
              architecto, perferendis ipsam ea dignissimos omnis quod ab rem
              inventore quis facere, consequuntur sit. Excepturi rem tenetur cum
              incidunt animi mollitia officia fuga dolorem illo nostrum, quaerat
              nobis minus nam, dignissimos soluta, maiores aliquam accusamus
              laboriosam modi? Unde reprehenderit doloremque officia ea aperiam
              est architecto cumque cum molestiae asperiores numquam,
              repudiandae nisi, officiis ipsa voluptatum culpa praesentium quia
              saepe quod minima! Ipsum in deserunt iure temporibus iste
              blanditiis quia nesciunt sit velit. Eum aperiam, placeat quae et
              enim blanditiis explicabo? Exercitationem ipsam repellat harum
              esse sed nam sit quaerat reprehenderit fugiat porro, dolorum
              praesentium, repellendus provident.
            </Typography>
          </Card>
        </Paper>
      </div>
    </ThemeProvider>
  );
}
