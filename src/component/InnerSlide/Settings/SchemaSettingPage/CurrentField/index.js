/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const CurrentField = ({
  fieldName, category, sfn, sc,
}) => (
  <div>
    <label>フィールド名</label>
    <input type="text" value={fieldName} onChange={(e) => sfn(e.target.value)} />
    <label>種類</label>
    <select name="category" value={category} onChange={(e) => sc(e.target.value)}>
      <option value="text">テキスト</option>
      <option value="date">日時</option>
      <option value="boolean">真偽値</option>
    </select>
  </div>
);

export default CurrentField;
