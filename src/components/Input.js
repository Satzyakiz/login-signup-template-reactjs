import React, { Component }  from 'react';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Input = (props) => {

    const handleChange = (e) => {
        props.onChange(e.target.value);
    }
  return (
    <div style={styles.inputDivStyle}>
      <FloatingLabel
        controlId="floatingInput"
        label={props.label}
        className="mb-3"
      >
            <Form.Control style={styles.inputField} type={props.type} placeholder={props.label} onChange={handleChange} required />
            {(props.errorText && props.errorText.length) ? <span style={styles.errorText}>{props.errorText}</span> : <></>}
      </FloatingLabel>
      
    </div>
  );
};

const styles = {
    errorText: {
        color: 'rgba(255,255,255)',
    },
    inputField: {
        marginBottom: '5px',
        minWidth: '60vw'
      },
      inputDivStyle: {
        display: 'flex',
        justifyContent: 'center',
        minWidth: '60vw',
      },
}

export default Input;
