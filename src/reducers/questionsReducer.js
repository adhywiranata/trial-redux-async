const initialState = [
  {
    id: 1,
    question: 'What is Redux Thunk?',
    description: 'I really want to know',
  },
  {
    id: 2,
    question: 'What is React?',
    description: 'I really want to know',
  }
];

const questionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_QUESTIONS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

export default questionsReducer;
