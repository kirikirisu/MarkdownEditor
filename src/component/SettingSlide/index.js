import React from 'react';
import { Transition } from 'react-transition-group';
import InnerSlide from '../InnerSlide';

const defaultStyle = {
  transition: 'all 0.4s ease-in',
  position: 'absolute',
  right: '0px',
  bottom: '0px',
  width: '0px',
  height: '100%',
};

const transitionStyles = {
  entering: {
    width: '70%',
  },
  entered: {
    width: '70%',
  },
  exiting: {
    width: '0px',
  },
  exited: {
    width: '0px',
  },
};

const SettingSlide = ({ show }) => (
  <Transition in={show} timeout={400} appear>
    {(state) => (
      <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
        <InnerSlide state={state} />
      </div>
    )}
  </Transition>
);

export default SettingSlide;
