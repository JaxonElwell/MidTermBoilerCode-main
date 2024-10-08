/*
  Quiz page
    - all questions must be answered correctly to proceed
    - key: True, False, True
*/

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Optional for styling

const QuizPage = () => {
  const navigate = useNavigate();
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  const [answer3, setAnswer3] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // correct answers
  const correctAnswers = {
    answer1: true,
    answer2: false,
    answer3: true,
  };

  // check if all answers are correct
  const handleInputChange = (answer, value) => {
    if (answer === 'answer1') setAnswer1(value);
    if (answer === 'answer2') setAnswer2(value);
    if (answer === 'answer3') setAnswer3(value);
  };

  const checkAnswers = () => {
    const isCorrect = 
      answer1 === correctAnswers.answer1 && 
      answer2 === correctAnswers.answer2 && 
      answer3 === correctAnswers.answer3;
    if (isCorrect) {
      navigate('/welcome'); // Navigate to the welcome page
    } else {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // render the quiz page
  return (
    <div className="center-container">
      <h1>Quiz Page</h1>
      <p>Answer the following questions correctly to proceed.</p>
      <div>
        <label>Question 1: Routing can be handled via react-router-dom</label>
        <div>
          <button
            onClick={() => handleInputChange('answer1', true)}
            style={{ backgroundColor: answer1 === true ? 'green' : 'initial' }}
          >
            True
          </button>
          <button
            onClick={() => handleInputChange('answer1', false)}
            style={{ backgroundColor: answer1 === false ? 'red' : 'initial' }}
          >
            False
          </button>
        </div>
      </div>
      <div>
        <label>Question 2: Bootstrap and Tailwind are different names for the same thing</label>
        <div>
          <button
            onClick={() => handleInputChange('answer2', true)}
            style={{ backgroundColor: answer2 === true ? 'green' : 'initial' }}
          >
            True
          </button>
          <button
            onClick={() => handleInputChange('answer2', false)}
            style={{ backgroundColor: answer2 === false ? 'red' : 'initial' }}
          >
            False
          </button>
        </div>
      </div>
      <div>
        <label>Question 3: A button can only be created through a style sheet</label>
        <div>
          <button
            onClick={() => handleInputChange('answer3', true)}
            style={{ backgroundColor: answer3 === true ? 'green' : 'initial' }}
          >
            True
          </button>
          <button
            onClick={() => handleInputChange('answer3', false)}
            style={{ backgroundColor: answer3 === false ? 'red' : 'initial' }}
          >
            False
          </button>
        </div>
      </div>
      <br />
      <button onClick={checkAnswers}>
        Submit Quiz
      </button>
      {showPopup && (
        <div className="popup">
          <p>Wrong answer, please try again.</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;