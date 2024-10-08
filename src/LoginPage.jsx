
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/landing'); // Navigate to the Login page
  };

    return (
      <div>
        <h1>Login Here</h1>
        <p>This is the Login Page.</p>
        <button onClick={goToLoginPage}>Take Qualifier Quiz</button>
      </div>
    );
  };
  
  export default LoginPage;
  