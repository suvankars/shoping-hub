import React, { useState } from "react";
import FromInput from '../components/FormInput'
import Button from '../components/button'
const SignIn = () => {
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
    const name = e.target.getAttribute('name')

    setValues({
      ...values,
      [name]: value,
    });
   
  };

  return (
    <div style={{width: '30vw', display: 'flex', flexDirection: 'column'}}>
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
        <Button type="submit">
            Sign in
        </Button>
        
      </form>
    </div>
  );
};

export default SignIn;

