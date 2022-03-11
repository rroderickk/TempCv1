import React from "react"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);
import "./index.scss";

const fadeImages = [
  "https://images.pexels.com/photos/3460595/pexels-photo-3460595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/9119782/pexels-photo-9119782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/9119781/pexels-photo-9119781.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-9119781.jpg&fm=jpg",
  "https://images.pexels.com/photos/9143965/pexels-photo-9143965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/5615795/pexels-photo-5615795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/9119738/pexels-photo-9119738.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-9119738.jpg&fm=jpg",
];

const Awesome =()=> { return (  <>
<div className="awesome-img--container">
  <div className="img--container" >
    <AutoplaySlider
      fillParent={true}
      play={true}
      infinite={true}
      transitionDelay={100}
      delay={100}
      organicArrows={false}
      buttons={false}
      bullets={false}
      cssModule={AwesomeSliderStyles}
    >
      <div data-src={fadeImages[0]} />
      <div data-src={fadeImages[1]} />
      <div data-src={fadeImages[2]} />
      <div data-src={fadeImages[3]} />
    </AutoplaySlider>
  </div>
</div>
</> ) }; export default Awesome;