/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import styles from './style.module.css';

const CurrentField = ({
  setN, setC, n, c,
}) => (
  <div className={styles.container}>
    <div className={styles.fieldName}>
      <div className={styles.labels}>フィールド名</div>
      <input type="text" value={n} onChange={(e) => setN(e.target.value)} />
    </div>
    <div>
      <div className={styles.labels}>種類</div>
      <div className={styles.selectbox}>
        <select name="category" value={c} onChange={(e) => setC(e.target.value)}>
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
