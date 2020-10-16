import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../../common/assets/images/background.jpg";
import InputFloatingLabel from "../../common/components/Input/InputFloatingLabel";

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

  return (
    <Body>
      <FormContainer>
        <Form>
          <SignInTitle>Sign In</SignInTitle>
          <InputBox>
            <InputFloatingLabel
              label="Email"
              value={email}
              overriddenStyles={{}}
              onChange={(value) => setEmail(value)}
            />
          </InputBox>
          <InputBox>
            <InputFloatingLabel
              label="Password"
              value={password}
              type="password"
              overriddenStyles={{}}
              onChange={(value) => setPassword(value)}
            />
          </InputBox>
          <InputBox>
            <Input type="text" name="" value="Login"></Input>
          </InputBox>
        </Form>
      </FormContainer>
    </Body>
  );
};

export default Login;
