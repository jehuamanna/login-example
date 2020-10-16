import styled from "styled-components";
import BackgroundImage from "../../common/assets/images/background.jpg";

export const Body = styled.div`
  background: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -25%;
    width: 50%;
    height: 100%;
    background: #009879;
    opacity: 0.8;
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  width: 25vw;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
  padding: 50px;
  @media (min-width: 320px) and (max-width: 500px) {
    left: 50%;
    width: 50vw;
  }
`;
export const Form = styled.form``;
export const SignInTitle = styled.h2`
  color: #777;
  margin: 0 0 40px;
  padding: 0px;
`;
export const InputBox = styled.div`
  position: relative;
  margin: 20px 0px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  height: 44px;
  padding: 0px;
  text-align: center;
  background: #009879;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: 44px;
  text-align: center;
  color: #f0380a;
`;
