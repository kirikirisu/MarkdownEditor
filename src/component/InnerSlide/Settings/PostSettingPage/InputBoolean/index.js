import React, { useState } from 'react';

const InputBoolean = ({
  id, field, fieldName, setPostValues, postValues,
}) => {
  const [check, setCheck] = useState(false);

  const onChange = (e) => {
    const v = e.target.checked;
    setCheck(v);

    const val = {};
    val[fieldName] = v;

    const newVals = { ...postValues, [id]: val };
    setPostValues(newVals);
  };

  return (
    <input
      type="checkbox"
      onChange={(e) => onChange(e)}
      checked={check}
    />
  );
};

export default InputBoolean;
