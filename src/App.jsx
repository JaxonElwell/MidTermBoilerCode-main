import { useNavigate } from 'react-router-dom';
import './styles.css'; // Optional for styling

const App = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <div className="center-container">
      <h1>Home Page</h1>
      <p>Welcome to the homepage!</p>
      <button onClick={goToLoginPage}>Go to Login Page</button>
    </div>
  );
};

export default App;
