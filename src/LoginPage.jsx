import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Optional for styling

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = () => {
    setIsButtonDisabled(!(username && password));
  };

  const goToLoginPage = () => {
    navigate('/landing'); // Navigate to the Login page
  };

  return (
    <div className="center-container">
      <h1>Login Here</h1>
      <p>This is the Login Page.</p>
      <p>Enter your username and password</p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          handleInputChange();
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          handleInputChange();
        }}
      />
      <br />
      <button onClick={goToLoginPage} disabled={isButtonDisabled}>
        Take Qualifier Quiz
      </button>
    </div>
  );
};

export default LoginPage;