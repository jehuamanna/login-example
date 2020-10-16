import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import validator from "validator";
import BackgroundImage from "../../common/assets/images/background.jpg";
import InputFloatingLabel from "../../common/components/Input/InputFloatingLabel";

import { login } from "../../actions/auth";

const Body = styled.div`
  background: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -25%;
    width: 50%;
    height: 100%;
    background: #03a9f4;
    opacity: 0.8;
  }
`;

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  width: 350px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
  padding: 50px;
`;
const Form = styled.form``;
const SignInTitle = styled.h2`
  color: #777;
  margin: 0 0 40px;
  padding: 0px;
`;
const InputBox = styled.div`
  position: relative;
  margin: 20px 0px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  height: 44px;
  padding: 0px;
  text-align: center;
  background: #03a9f4;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const dispatch = useDispatch();

  const handleEmailChange = (value) => {
    console.log(value);
    setEmail(value);
    setIsEmailError(false);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
    setIsPasswordError(false);
  };

  const handleSubmit = (e) => {
    if (!validator.isEmail(email)) {
      setIsEmailError(true);
      return;
    } else if (password === "") {
      setIsPasswordError(true);
      return;
    }
    dispatch(login(email, password))
      .then(() => {
        props.history.push("/dashboard");
        window.location.reload();
      })
      .catch(() => {});
    e.preventDefault();
  };

  return (
    <Body>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <SignInTitle>Sign In</SignInTitle>
          <InputBox>
            <InputFloatingLabel
              label="Email"
              value={email}
              overriddenStyles={{
                input: {
                  border: isEmailError
                    ? "solid 1px #f0380a"
                    : "solid 1px #7e91a5",
                },
              }}
              onChange={(value) => handleEmailChange(value)}
            />
          </InputBox>
          <InputBox>
            <InputFloatingLabel
              label="Password"
              value={password}
              type="password"
              overriddenStyles={{
                input: {
                  border: isPasswordError
                    ? "solid 1px #f0380a"
                    : "solid 1px #7e91a5",
                },
              }}
              onChange={(value) => handlePasswordChange(value)}
            />
          </InputBox>
          <InputBox>
            <Input type="submit" name="" value="Login"></Input>
          </InputBox>
        </Form>
      </FormContainer>
    </Body>
  );
};

export default Login;
