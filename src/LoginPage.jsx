/*
  Login page
    - the page where the user logs in to the website.
    - defualt username and password is 'username' and 'password'
*/
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Optional for styling

const LoginPage = () => {
  // useNavigate hook to navigate to different pages
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // handle input change
  const handleInputChange = () => {
    setIsButtonDisabled(!(username && password));
  };

  // verify user credentials
  const verifyUser = (username, password) => {
    // replace this with actual verification logic
    return username === 'username' && password === 'password';
  };

  // navigate to the landing page if verified, otherwise show error
  const goToLoginPage = () => {
    if (verifyUser(username, password)) {
      navigate('/landing'); // Navigate to the Login page
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="center-container">
      <h1>Login Here</h1>
      <p>Welcome to the Login Page.</p>
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
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <br />
      <button onClick={goToLoginPage} disabled={isButtonDisabled}>
        Take Qualifier Quiz
      </button>
    </div>
  );
};

export default LoginPage;