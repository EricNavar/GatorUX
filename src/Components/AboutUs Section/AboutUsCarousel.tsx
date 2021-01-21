import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import IconButton from '@material-ui/core/IconButton'
import Slide1 from './../../assets/Slide1.webp';
import Slide2 from './../../assets/Slide2.webp';
import LeftArrowIcon from '../../assets/RightArrow.js';
import RightArrowIcon from '../../assets/LeftArrow.js';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'iOS Critique poster',
    img: Slide1
  },
  {
    label: 'Club Banner',
    img: Slide2
  }
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 450
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
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        maxSteps={maxSteps}
      >
        <div className={classes.aspectRatioBoxOuter}>
          <div className={classes.aspectRatioBoxInner}>
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img className={classes.img} src={step.img} alt={step.label} />
                  ) : null}
              </div>
            ))}
            <IconButton className={classes.button} onClick={handleBack} style={{left:0}}>
              <LeftArrowIcon/>
            </IconButton>
            <IconButton className={classes.button} onClick={handleNext} style={{right:0}}>
              <RightArrowIcon/>
            </IconButton>
          </div>
        </div>
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default SwipeableTextMobileStepper;
