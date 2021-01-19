import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Image from '../assets/images/letter_parchment.webp';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: '#7F3300',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionTitle: {
    background:
      'linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(255,173,106,1) 6%, rgba(215,204,169,1) 91%)',
  },
  accordionDetails: {
    background: `url(${Image}) no-repeat center center fixed `,
    backgroundSize: 'cover',
    color: 'black',
    padding: '25px',
  },
  accordionIcon: {
    color: '#ff911c',
  },
}));

const ValuesAccordion = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          className={classes.accordionTitle}
          expandIcon={
            <FitnessCenterIcon
              className={classes.accordionIcon}
              fontSize='large'
            />
          }
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>Health</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography fontWeight='fontWeightBold'>
            <Typography component={'span'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              impedit corporis maiores vitae esse quisquam nobis laborum
              repellat at porro, provident tenetur odit nemo rem unde soluta?
              Veritatis tenetur optio, saepe deserunt earum eos dignissimos nam
              dolore tempore rem doloribus porro laborum aliquid laboriosam
              minus officia assumenda! Similique voluptatibus aut harum nisi at
              labore nam? Explicabo alias reprehenderit at voluptatem molestiae
              illum facere ipsa dolorem expedita ipsam asperiores enim voluptas
              tenetur id voluptates quis dignissimos ad, quae temporibus. Aut,
              ut asperiores
            </Typography>
            <Typography component={'span'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              impedit corporis maiores vitae esse quisquam nobis laborum
              repellat at porro, provident tenetur odit nemo rem unde soluta?
              Veritatis tenetur optio, saepe deserunt earum eos dignissimos nam
              dolore tempore rem doloribus porro laborum aliquid laboriosam
              minus officia assumenda! Similique voluptatibus aut harum nisi at
              labore nam? Explicabo alias reprehenderit at voluptatem molestiae
              illum facere ipsa dolorem expedita ipsam asperiores enim voluptas
              tenetur id voluptates quis dignissimos ad, quae temporibus. Aut,
              ut asperiores
            </Typography>
            <Typography component={'span'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              impedit corporis maiores vitae esse quisquam nobis laborum
              repellat at porro, provident tenetur odit nemo rem unde soluta?
              Veritatis tenetur optio, saepe deserunt earum eos dignissimos nam
              dolore tempore rem doloribus porro laborum aliquid laboriosam
              minus officia assumenda! Similique voluptatibus aut harum nisi at
              labore nam? Explicabo alias reprehenderit at voluptatem molestiae
              illum facere ipsa dolorem expedita ipsam asperiores enim voluptas
              tenetur id voluptates quis dignissimos ad, quae temporibus. Aut,
              ut asperiores
            </Typography>
            <Typography component={'span'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              impedit corporis maiores vitae esse quisquam nobis laborum
              repellat at porro, provident tenetur odit nemo rem unde soluta?
              Veritatis tenetur optio, saepe deserunt earum eos dignissimos nam
              dolore tempore rem doloribus porro laborum aliquid laboriosam
              minus officia assumenda! Similique voluptatibus aut harum nisi at
              labore nam? Explicabo alias reprehenderit at voluptatem molestiae
              illum facere ipsa dolorem expedita ipsam asperiores enim voluptas
              tenetur id voluptates quis dignissimos ad, quae temporibus. Aut,
              ut asperiores
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.accordionTitle}
          expandIcon={
            <AttachMoneyIcon
              className={classes.accordionIcon}
              fontSize='large'
            />
          }
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.heading}>Wealth</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography fontWeight='fontWeightBold'>
            <Typography component={'span'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              impedit corporis maiores vitae esse quisquam nobis laborum
              repellat at porro, provident tenetur odit nemo rem unde soluta?
              Veritatis tenetur optio, saepe deserunt earum eos dignissimos nam
              dolore tempore rem doloribus porro laborum aliquid laboriosam
              minus officia assumenda! Similique voluptatibus aut harum nisi at
              labore nam? Explicabo alias reprehenderit at voluptatem molestiae
              illum facere ipsa dolorem expedita ipsam asperiores enim voluptas
              tenetur id voluptates quis dignissimos ad, quae temporibus. Aut,
              ut asperiores
            </Typography>
            <Typography component={'span'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              impedit corporis maiores vitae esse quisquam nobis laborum
              repellat at porro, provident tenetur odit nemo rem unde soluta?
              Veritatis tenetur optio, saepe deserunt earum eos dignissimos nam
              dolore tempore rem doloribus porro laborum aliquid laboriosam
              minus officia assumenda! Similique voluptatibus aut harum nisi at
              labore nam? Explicabo alias reprehenderit at voluptatem molestiae
              illum facere ipsa dolorem expedita ipsam asperiores enim voluptas
              tenetur id voluptates quis dignissimos ad, quae temporibus. Aut,
              ut asperiores
            </Typography>
            <Typography component={'span'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              impedit corporis maiores vitae esse quisquam nobis laborum
              repellat at porro, provident tenetur odit nemo rem unde soluta?
              Veritatis tenetur optio, saepe deserunt earum eos dignissimos nam
              dolore tempore rem doloribus porro laborum aliquid laboriosam
              minus officia assumenda! Similique voluptatibus aut harum nisi at
              labore nam? Explicabo alias reprehenderit at voluptatem molestiae
              illum facere ipsa dolorem expedita ipsam asperiores enim voluptas
              tenetur id voluptates quis dignissimos ad, quae temporibus. Aut,
              ut asperiores
            </Typography>
            <Typography component={'span'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              impedit corporis maiores vitae esse quisquam nobis laborum
              repellat at porro, provident tenetur odit nemo rem unde soluta?
              Veritatis tenetur optio, saepe deserunt earum eos dignissimos nam
              dolore tempore rem doloribus porro laborum aliquid laboriosam
              minus officia assumenda! Similique voluptatibus aut harum nisi at
              labore nam? Explicabo alias reprehenderit at voluptatem molestiae
              illum facere ipsa dolorem expedita ipsam asperiores enim voluptas
              tenetur id voluptates quis dignissimos ad, quae temporibus. Aut,
              ut asperiores
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.accordionTitle}
          expandIcon={
            <MenuBookIcon className={classes.accordionIcon} fontSize='large' />
          }
          aria-controls='panel3a-content'
          id='panel3a-header'
        >
          <Typography className={classes.heading}>Wisdom</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography fontWeight='fontWeightBold'>
            <Typography component={'span'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              impedit corporis maiores vitae esse quisquam nobis laborum
              repellat at porro, provident tenetur odit nemo rem unde soluta?
              Veritatis tenetur optio, saepe deserunt earum eos dignissimos nam
              dolore tempore rem doloribus porro laborum aliquid laboriosam
              minus officia assumenda! Similique voluptatibus aut harum nisi at
              labore nam? Explicabo alias reprehenderit at voluptatem molestiae
              illum facere ipsa dolorem expedita ipsam asperiores enim voluptas
              tenetur id voluptates quis dignissimos ad, quae temporibus. Aut,
              ut asperiores
            </Typography>
            <Typography component={'span'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              impedit corporis maiores vitae esse quisquam nobis laborum
              repellat at porro, provident tenetur odit nemo rem unde soluta?
              Veritatis tenetur optio, saepe deserunt earum eos dignissimos nam
              dolore tempore rem doloribus porro laborum aliquid laboriosam
              minus officia assumenda! Similique voluptatibus aut harum nisi at
              labore nam? Explicabo alias reprehenderit at voluptatem molestiae
              illum facere ipsa dolorem expedita ipsam asperiores enim voluptas
              tenetur id voluptates quis dignissimos ad, quae temporibus. Aut,
              ut asperiores
            </Typography>
            <Typography component={'span'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              impedit corporis maiores vitae esse quisquam nobis laborum
              repellat at porro, provident tenetur odit nemo rem unde soluta?
              Veritatis tenetur optio, saepe deserunt earum eos dignissimos nam
              dolore tempore rem doloribus porro laborum aliquid laboriosam
              minus officia assumenda! Similique voluptatibus aut harum nisi at
              labore nam? Explicabo alias reprehenderit at voluptatem molestiae
              illum facere ipsa dolorem expedita ipsam asperiores enim voluptas
              tenetur id voluptates quis dignissimos ad, quae temporibus. Aut,
              ut asperiores
            </Typography>
            <Typography component={'span'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              impedit corporis maiores vitae esse quisquam nobis laborum
              repellat at porro, provident tenetur odit nemo rem unde soluta?
              Veritatis tenetur optio, saepe deserunt earum eos dignissimos nam
              dolore tempore rem doloribus porro laborum aliquid laboriosam
              minus officia assumenda! Similique voluptatibus aut harum nisi at
              labore nam? Explicabo alias reprehenderit at voluptatem molestiae
              illum facere ipsa dolorem expedita ipsam asperiores enim voluptas
              tenetur id voluptates quis dignissimos ad, quae temporibus. Aut,
              ut asperiores
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default ValuesAccordion;
