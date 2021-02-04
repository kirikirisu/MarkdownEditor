/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';

const PresetList = ({ presets, setCurrentPreset }) => {
  console.log('preInList', presets);
  const onClick = (index) => {
    setCurrentPreset(index);
  };

  useEffect(() => {
    setCurrentPreset(0);
  }, []);

  return (
    <div>
      {presets.map((pre, i) => (
        <div key={pre.title} onClick={() => onClick(i)}>{pre.title}</div>
      ))}
    </div>
  );
};

export default PresetList;
