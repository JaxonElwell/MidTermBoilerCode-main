
import { useNavigate } from 'react-router-dom';
const QuizPage = () => {

  const navigate = useNavigate();

  const goToWelcomePage = () => {
    navigate('/welcome'); // Navigate to the Welcome page
  };
 
    return (
      <div>
        <h1>Take Quiz to Qualify</h1>
        <p>Welcome to the qualifier quiz</p>
        <button onClick={goToWelcomePage}>Submit Quiz</button>
      </div>
    );
  };
  
  export default QuizPage;
  
  