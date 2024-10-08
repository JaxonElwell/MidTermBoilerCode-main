
/*
  Landing page
    - the first page that the user sees when they visit the website.
*/
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Optional for styling
const LandingPage = () => {

  const navigate = useNavigate();

  const goToQuizPage = () => {
    navigate('/quiz'); // Navigate to the Quiz page
  };
 
    return (
      <div className="center-container">
        <h1>You have landed</h1>
        <p>Welcome Potential Hackers</p>
        <button onClick={goToQuizPage}>Go to Quiz Page</button>
      </div>
    );
  };
  
  export default LandingPage;