import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import validator from "validator";
import InputFloatingLabel from "../../common/components/Input/InputFloatingLabel";
import { SET_MESSAGE, CLEAR_MESSAGE } from "../../actions/types";
import { login } from "../../actions/auth";
import stringConstants from "../../common/constants/stringConstants";
import {
  Body,
  FormContainer,
  Form,
  SignInTitle,
  InputBox,
  Input,
  MessageContainer,
} from "./StyledComponents";
import routesContants from "../../common/constants/routesConstants";

const {
  SIGN_IN,
  LOGIN,
  EMAIL,
  PASSWORD,
  PASSWORD_CANNOT_BE_EMPTY,
  EMAIL_ERROR_MESSAGE,
  SUCCESS_BORDER_STYLE,
  ERROR_BORDER_STYLE,
} = stringConstants;

const { DASHBOARD_ROUTE } = routesContants;

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const handleEmailChange = (value) => {
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
        payload: EMAIL_ERROR_MESSAGE,
      });
      return;
    } else if (password === "") {
      setIsPasswordError(true);
      dispatch({
        type: SET_MESSAGE,
        payload: PASSWORD_CANNOT_BE_EMPTY,
      });
      return;
    }
    dispatch(login(email, password))
      .then(() => {
        props.history.push(DASHBOARD_ROUTE);
        window.location.reload();
      })
      .catch(() => {});
  };

  const overriddenStylesEmail = {
    input: {
      border: isEmailError ? SUCCESS_BORDER_STYLE : ERROR_BORDER_STYLE,
    },
  };

  const overriddenStylesPassword = {
    input: {
      border: isPasswordError ? SUCCESS_BORDER_STYLE : ERROR_BORDER_STYLE,
    },
  };

  if (isLoggedIn) {
    return <Redirect to={DASHBOARD_ROUTE} />;
  }

  return (
    <Body>
      <FormContainer>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <SignInTitle>{SIGN_IN}</SignInTitle>
          <InputBox>
            <InputFloatingLabel
              label={EMAIL}
              value={email}
              type="text"
              overriddenStyles={overriddenStylesEmail}
              onChange={(value) => handleEmailChange(value)}
            />
          </InputBox>
          <InputBox>
            <InputFloatingLabel
              label={PASSWORD}
              value={password}
              type="password"
              overriddenStyles={overriddenStylesPassword}
              onChange={(value) => handlePasswordChange(value)}
            />
          </InputBox>
          <InputBox>
            <Input type="submit" name="" value={LOGIN}></Input>
          </InputBox>
        </Form>
        <MessageContainer>{message}</MessageContainer>
      </FormContainer>
    </Body>
  );
};

export default Login;
