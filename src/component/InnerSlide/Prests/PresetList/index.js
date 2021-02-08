/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';

const PresetList = ({ presets, setCurrentPreset }) => {
  console.log('preInList', presets);
  const onClick = (index) => {
    setCurrentPreset(index);
  };

  // initialize
  useEffect(() => {
    setCurrentPreset(0);
  }, []);

  return (
    <div>
      {presets.map((val, i) => (
        <div key={val.title} onClick={() => onClick(i)}>{val.title}</div>
      ))}
    </div>
  );
};

export default PresetList;
