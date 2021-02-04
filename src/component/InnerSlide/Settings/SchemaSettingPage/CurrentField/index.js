/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './style.module.css';

const CurrentField = ({
  fieldName, category, sfn, sc,
}) => (
  <div className={styles.container}>
    <div className={styles.fieldName}>
      <div className={styles.labels}>フィールド名</div>
      <input type="text" value={fieldName} onChange={(e) => sfn(e.target.value)} />
    </div>
    <div>
      <div className={styles.labels}>種類</div>
      <div classNa={styles.selectbox}>
        <select name="category" value={category} onChange={(e) => sc(e.target.value)}>
          <option value="text">テキスト</option>
          <option value="date">日時</option>
          <option value="boolean">真偽値</option>
          <option value="markdown">マークダウン</option>
        </select>
      </div>
    </div>
  </div>
);

export default CurrentField;
