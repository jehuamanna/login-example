import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import validator from "validator";
import InputFloatingLabel from "../../common/components/Input/InputFloatingLabel";
import { SET_MESSAGE, CLEAR_MESSAGE } from "../../actions/types";
import { login } from "../../actions/auth";
import constants from "../../common/constants/constants";
import {
  Body,
  FormContainer,
  Form,
  SignInTitle,
  InputBox,
  Input,
  MessageContainer,
} from "./StyledComponents";

const { SIGN_IN } = constants;

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const handleEmailChange = (value) => {
    console.log(value);
    setEmail(value);
    setIsEmailError(false);
    dispatch({
      type: CLEAR_MESSAGE,
    });
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
    setIsPasswordError(false);
    dispatch({
      type: CLEAR_MESSAGE,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      setIsEmailError(true);
      dispatch({
        type: SET_MESSAGE,
        payload: "Invalid Email",
      });
      return;
    } else if (password === "") {
      setIsPasswordError(true);
      dispatch({
        type: SET_MESSAGE,
        payload: "Password cannot be empty",
      });
      return;
    }
    dispatch(login(email, password))
      .then(() => {
        props.history.push("/dashboard");
        window.location.reload();
      })
      .catch(() => {});
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Body>
      <FormContainer>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <SignInTitle>{SIGN_IN}</SignInTitle>
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
        <MessageContainer>{message}</MessageContainer>
      </FormContainer>
    </Body>
  );
};

export default Login;
