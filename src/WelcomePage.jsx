/*
  Welcome page
  - this page is displayed after the user has successfully logged in
  - the user is required to enter their username, email, first name, and last name
  - the user can send their information to the admin by clicking the "Send Information" button
  - the user can navigate back to the home page by clicking the "HOME" button

  note
  - i didn't have enough time to signup for an emailJS or twilio account to send the emai
    so i used the mailto link to send the email. With more time i would implement emailJS or twilio
*/
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Optional for styling

const WelcomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = () => {
    setIsButtonDisabled(!(username && email && firstname && lastname));
  };

  const sendInformation = () => {
    const mailtoLink = `mailto:jowen22@murraystate.edu?subject=User Information&body=Username: ${username}%0AEmail: ${email}%0AFirst Name: ${firstname}%0ALast Name: ${lastname}`;
    window.location.href = mailtoLink;
  };

  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="center-container">
      <h1>Welcome to HackerCon</h1>
      <p>Welcome SuperHacker You Are Inz</p>
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
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          handleInputChange();
        }}
      />
      <input
        type="text"
        placeholder="First Name"
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
          handleInputChange();
        }}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => {
          setLastname(e.target.value);
          handleInputChange();
        }}
      />
      <br />
      <button onClick={sendInformation} disabled={isButtonDisabled}>
        Send Information
      </button>
      <br />
      <button onClick={goToHomePage}>HOME</button>
    </div>
  );
};

export default WelcomePage;