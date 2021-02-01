import React from 'react';
import { Transition } from 'react-transition-group';

const defaultStyle = {
  transition: 'all 0.4s ease-in',
  position: 'absolute',
  right: '0px',
  bottom: '0px',
  width: '0px',
  height: '100%',
  backgroundColor: 'red',
};

const transitionStyles = {
  entering: {
    width: '80%',
  },
  entered: {
    width: '80%',
  },
  exiting: {
    width: '0px',
  },
  exited: {
    width: '0px',
  },
};

const SettingSlide = ({ show }) => (
  <Transition in={show} timeout={400}>
    {(state) => (
      <div style={{ ...defaultStyle, ...transitionStyles[state] }} />
    )}
  </Transition>
);

export default SettingSlide;
