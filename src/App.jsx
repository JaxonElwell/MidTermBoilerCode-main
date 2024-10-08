/*
  App
    - welcome page
    - i am not sure what our company name is so i am leaving it ambiguous.
*/
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Optional for styling

const App = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <div className="center-container">
      <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Welcome To Our Company!</div>
                <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <button onClick={goToLoginPage}>Go to Login Page</button>
            </div>
        </header>
      
    </div>
  );
};

export default App;
