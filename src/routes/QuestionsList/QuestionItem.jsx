import React from 'react';

import styles from './styles.css';

const QuestionItem = props => (
  <div className={styles.questionItem}>
    <h2>{props.question}</h2>
    <p>{props.description}</p>
  </div>
);

export default QuestionItem;
