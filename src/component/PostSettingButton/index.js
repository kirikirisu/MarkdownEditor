/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './style.css';

const PostSettingButton = ({ toggle }) => (
  <div className="button" onClick={() => toggle()} />
);

export default PostSettingButton;
