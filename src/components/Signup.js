import React, {useState, useEffect} from 'react';
import Input from "./Input";
import CustomButton from "./Button";
import '../css/signup.css';

let emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
let passwordRegex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    

    const [usernameErr, setUsernameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [firstnameErr, setFirstnameErr] = useState('');
    const [lastnameErr, setLastnameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [cpasswordErr, setCpasswordErr] = useState('');

    const [btnloading, setBtnloading] = useState(false);
    

    const handleClick = () => {
        setUsernameErr('');
        setEmailErr('');
        setFirstnameErr('');
        setLastnameErr('');
        setPasswordErr('');
        setCpasswordErr('');
        var anyErr = false;
        if(username.length < 5){ //Username already exists
            setUsernameErr("Please change the username");
            anyErr = true;
        }
        if(firstname.length === 0){
            setFirstnameErr("Firstname cannot be empty");
            anyErr = true;
        }
        if(lastname.length === 0){
            setLastnameErr("Firstname cannot be empty");
            anyErr = true;
        }
        if(!emailRegex.test(email)){ //Email already exists
            setEmailErr("Error with email id");
            anyErr = true;
        }

        if(!passwordRegex.test(password)){
            setPasswordErr("Please enter a strong password");
            anyErr = true;
        }

        if(cpassword !== password){
            setCpasswordErr("Passwords dont match");
            anyErr = true;
        }

        if(anyErr)
            return;
        //POST Request
    }

    return (
        <div className='signupMainDiv'>
            <Input type="input" label="Username" errorText={usernameErr} onChange={setUsername} />
            <Input type="email" label="Email ID" errorText={emailErr} onChange={setEmail} />
            <Input type="input" label="Firstname" errorText={firstnameErr} onChange={setFirstname} />
            <Input type="input" label="Lastname" errorText={lastnameErr} onChange={setLastname} />
            <Input type="password" label="Password" errorText={passwordErr} onChange={setPassword} />
            <Input type="password" label="Confirm Password" errorText={cpasswordErr} onChange={setCpassword} />
            <CustomButton isLoading={btnloading} variant="dark" btnText="Signup" style={styles.btnStyle} btnDivStyle={styles.btnDivStyle} onClick={handleClick} />
        </div>
    );
}

export default Signup;

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