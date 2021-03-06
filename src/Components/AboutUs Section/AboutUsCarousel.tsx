import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import IconButton from '@material-ui/core/IconButton'
import Slide1 from './../../assets/Slide1.webp';
import Slide3 from './../../assets/slide3.jpg';
import LeftArrowIcon from '../../assets/RightArrow.js';
import RightArrowIcon from '../../assets/LeftArrow.js';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slides = [
  {
    label: 'iOS Critique poster',
    img: Slide1
  },
  {
    label: '2021 Trends Forecast',
    img: Slide3
  }
];

const useStyles = makeStyles({
  carouselContainer: {
    flexGrow: 1,
    maxWidth: 500,
    position: "relative",
    height: "max-content"
  },
  img: {
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    borderRadius: 8
  },
  aspectRatioBoxOuter: {
    width: "inherit",
    height: 0,
    overflow: "hidden",
    paddingTop: "52.25%",
    position: "relative"
  },
  aspectRatioBoxInner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  button: {
    position: "absolute",
    color: "white",
    top: "calc(50% - 24px)",
    opacity: .5,
    '&:hover': {
      opacity: 1
  },
  }
});

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [slideCount] = React.useState(slides.length);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % slideCount);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1) % slideCount);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.carouselContainer}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {slides.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.img} alt={step.label} />
              ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <IconButton aria-label="previous slide" className={classes.button} onClick={handleBack} style={{left:0}}>
        <LeftArrowIcon/>
      </IconButton>
      <IconButton aria-label="next slide" className={classes.button} onClick={handleNext} style={{right:0}}>
        <RightArrowIcon/>
      </IconButton>
    </div>
  );
}

export default SwipeableTextMobileStepper;
