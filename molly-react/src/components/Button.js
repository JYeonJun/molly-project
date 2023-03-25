import React from 'react';
import styled from 'styled-components';
import { MdNavigateNext } from 'react-icons/md';


let CustomButton = styled.button`
  background-color: #B27910;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 800;
  padding: 8px 10px 5px 10px;
  margin: 10px;
`;

const NextButton = (props) => {
  return (
    <CustomButton>
      <span style={{
        fontSize: "15px", 
        paddingRight: "5px", 
        position:"relative",
        left:"5px", 
        bottom:"4px"}}>{props.name}</span>
      <MdNavigateNext size="18px" color="white"/>
    </CustomButton>
  );
};

const Button = (props) => {
  return (
    <CustomButton onClick={props.onClick}>
      <h4 style={{ fontSize: "14px", margin:"0.5px 4px 4px" }}>{props.name}</h4>
    </CustomButton>
  );
};

export {NextButton, Button};