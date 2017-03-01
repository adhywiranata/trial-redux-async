import React from 'react';
import { connect } from 'react-redux';

import QuestionItem from './QuestionItem';
import styles from './styles.css';

const QuestionsList = props => (
  <div className={styles.questionsList}>
    { props.questions.map(item => (<QuestionItem key={item.id} {...item} />)) }
  </div>
);

const mapStateToProps = state => ({
  questions: state.questions
});

export default connect(mapStateToProps)(QuestionsList);
