import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Optional for styling

const QuizPage = () => {
  const navigate = useNavigate();
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  const [answer3, setAnswer3] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const correctAnswers = {
    answer1: true,
    answer2: false,
    answer3: false,
  };

  const handleInputChange = () => {
    const isCorrect = 
      answer1 === correctAnswers.answer1 && 
      answer2 === correctAnswers.answer2 && 
      answer3 === correctAnswers.answer3;
    setIsButtonDisabled(!isCorrect);
  };

  const goToWelcomePage = () => {
    navigate('/welcome'); // Navigate to the welcome page
  };

  return (
    <div className="center-container">
      <h1>Quiz Page</h1>
      <p>Answer the following questions correctly to proceed.</p>
      <div>
        <label>Question 1: Routing can be handled via react-router-dom</label>
        <div>
          <button
            onClick={() => {
              setAnswer1(true);
              handleInputChange();
            }}
            style={{ backgroundColor: answer1 === true ? 'green' : 'initial' }}
          >
            True
          </button>
          <button
            onClick={() => {
              setAnswer1(false);
              handleInputChange();
            }}
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
            onClick={() => {
              setAnswer2(true);
              handleInputChange();
            }}
            style={{ backgroundColor: answer2 === true ? 'green' : 'initial' }}
          >
            True
          </button>
          <button
            onClick={() => {
              setAnswer2(false);
              handleInputChange();
            }}
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
            onClick={() => {
              setAnswer3(true);
              handleInputChange();
            }}
            style={{ backgroundColor: answer3 === true ? 'green' : 'initial' }}
          >
            True
          </button>
          <button
            onClick={() => {
              setAnswer3(false);
              handleInputChange();
            }}
            style={{ backgroundColor: answer3 === false ? 'red' : 'initial' }}
          >
            False
          </button>
        </div>
      </div>
      <br />
      <button onClick={goToWelcomePage} disabled={isButtonDisabled}>
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizPage;