import React, { useState } from "react";
import FromInput from "../components/FormInput";
import Button from "../components/button";
import { signinWithGoogle } from "../../src/firebase/firebase.utils";
import styled from "styled-components";
const SignIn = ({ currentUser }: any) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setValues({ email: "", password: "" });
  };

  const onChangeHandler = (e: any) => {
    e.preventDefault();
    const { value } = e.target;
    const name = e.target.getAttribute("name");

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div style={{ width: "30vw", display: "flex", flexDirection: "column" }}>
      <form onSubmit={onSubmitHandler}>
        <FromInput
          name="email"
          type="email"
          value={values.email}
          handleChange={onChangeHandler}
          label="Email"
          required
        />
        <FromInput
          handleChange={onChangeHandler}
          name="password"
          type="password"
          label="Password"
          value={values.password}
          required
        />
        {currentUser.currentUser ? (
          <div />
        ) : (
          <ButtonWraper>
            <Button type="submit">Sign in</Button>
            <Button onClick={signinWithGoogle}>Sign in With Google</Button>
          </ButtonWraper>
        )}
      </form>
    </div>
  );
};

export const ButtonWraper = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  .title {
    margin: 10px 0;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;
export default SignIn;
