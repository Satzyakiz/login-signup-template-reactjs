import React, {useState, useEffect} from 'react';
import Input from "./Input";
import CustomButton from "./Button";
import '../css/login.css';

const Login = (props) => {
    const [usernameErr, setUsernameErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        console.log(username);
        console.log(password);
    }
    return (
        <div className='loginMainDiv'>
            <Input type="input" label="Username"  errorText={usernameErr} onChange={setUsername} />
            <Input type="password" label="Password"  errorText={passwordErr} onChange={setPassword} />
            <CustomButton isLoading={false} variant="dark" btnText="Login" style={styles.btnStyle} btnDivStyle={styles.btnDivStyle} onClick={handleClick} />
        </div>
    );
}
const styles = {
    inputField: {
      marginBottom: '5px'
    },
    inputDivStyle: {
      justifyContent: 'center',
      width: '60vw',
    },
    btnStyle: {
        background: 'green',
        width: '30%',
        margin: '10px'
    },
    btnDivStyle: {
      display: 'flex',
      justifyContent: 'center'
    }
  }
export default Login;