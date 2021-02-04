import React, { useState, useEffect } from 'react';
import { updatePostValues } from '../InputText';

const InputBoolean = ({ setPostValues, fieldName, postValues }) => {
  const [check, setCheck] = useState();
  console.log('check', check);

  useEffect(() => {
    updatePostValues(postValues, fieldName, check, setPostValues);
  }, [check]);

  return (
    <input
      type="checkbox"
      onChange={(e) => setCheck(e.target.checked)}
      checked={check}
    />
  );
};

export default InputBoolean;
