import React from "react";
import styled from "styled-components";

interface FormInputProps {
  handleChange: any;
  label: string;
  name: string,
  type: string,
  value: string
  required: boolean
}
const FormInput = ({ handleChange, name, label, type}: FormInputProps) => {
  return (
    <GroupWraper>
      <FormInputWraper onChange={handleChange} name={name} type={type}/>
      <FormInputLabel>{label}</FormInputLabel>
    </GroupWraper>
  );
};

const GroupWraper = styled.div`
  position: relative;
  margin: 45px 0;
`;

const FormInputWraper = styled.input`
  background: none;
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    @include shrinkLabel();
  }
`;

const FormInputLabel = styled.label`
    color: grey;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all
`;
export default FormInput;
