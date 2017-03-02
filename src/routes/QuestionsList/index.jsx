import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionItem from './QuestionItem';
import { fetchQuestionsSuccess, fetchQuestions } from '../../actions';
import styles from './styles.css';

class QuestionsList extends Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
    <div className={styles.questionsList}>
      { this.props.questions.map(item => (<QuestionItem key={item.id} {...item} />)) }
    </div>
    );
  }
};

const mapStateToProps = state => ({
  questions: state.questions
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
