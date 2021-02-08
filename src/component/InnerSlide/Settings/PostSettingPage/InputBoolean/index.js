import React, { useState, useEffect } from 'react';

const InputBoolean = ({ setPostValues, fieldName, postValues }) => {
  const [check, setCheck] = useState();
  console.log('check', check);

  useEffect(() => {
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
