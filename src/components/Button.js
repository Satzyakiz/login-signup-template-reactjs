import React, { Component, useState, useEffect }  from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const CustomButton = (props) => {
    const handleClick = () => {
        props.onClick();
    }
  return (
    <div style={props.btnDivStyle}>
        <Button onClick={handleClick}
                style={props.style} 
                variant={props.variant} 
                disabled={props.isLoading ? true : false}>
                    {props.isLoading ? <LoadingBtnText /> : props.btnText}
        </Button>{' '}
    </div>
  );
};

const LoadingBtnText = () => {
    return <Spinner animation="border" />;
}

export default CustomButton;
