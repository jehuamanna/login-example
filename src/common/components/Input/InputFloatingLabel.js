import React from "react";
import styled, { css } from "styled-components";

const OuterContainer = styled.div`
  padding: ${(props) => props.outerContainer.padding};
  background: ${(props) => props.outerContainer.background};
`;

OuterContainer.defaultProps = {
  outerContainer: {
    padding: "0rem",
  },
};

const Card = styled.div`
  background: ${(props) => props.card.background || "#fff"};
  position: relative;
`;

Card.defaultProps = {
  card: {},
};

const Input = styled.input`
  /* padding: 10px 0px; */
  padding: ${(props) => props.input.padding || "0px 24px"};
  width: ${(props) => props.input.width || "100%"};
  font-family: ${(props) => props.input.fontFamily || "Roboto"};
  font-size: ${(props) => props.input.fontSize || "17px"};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.input.color || "#2a2a2a"};
  box-sizing: border-box;
  box-shadow: none;
  outline: none;
  border: none;
  height: ${(props) => props.input.height || "44px"};
  border-radius: 4px;
  border: ${(props) => props.input.border || "solid 1px #7e91a5"};
  background-color: ${(props) => props.input.background || "white"};
  position: relative;
  &:focus ~ label {
    top: -5px;
    left: 15px;
    width: fit-content;
    padding: ${(props) => props.labelOnFocus.padding || "0px 10px"};
    height: ${(props) => props.labelOnFocus.height || "15px"};
    background: ${(props) => props.labelOnFocus.background || "white"};
    color: ${(props) => props.labelOnFocus.color || "#7e91a5"};
    font-size: ${(props) => props.labelOnFocus.fontSize || "12px"};
    font-weight: bold;
  }
  ${(props) =>
    props.value &&
    css`
      ~ label {
        top: -5px;
        left: 15px;
        width: fit-content;
        padding: ${(props) => props.labelOnFocus.padding || "0px 10px"};
        height: ${(props) => props.labelOnFocus.height || "15px"};
        background: ${(props) => props.labelOnFocus.background || "white"};
        color: ${(props) => props.labelOnFocus.color || "#7e91a5"};
        font-size: ${(props) => props.labelOnFocus.fontSize || "12px"};
        font-weight: bold;
      }
    `}
  &:focus {
  }
`;

Input.defaultProps = {
  input: {},
  labelOnFocus: {},
};

const Label = styled.label`
  position: absolute;
  top: ${(props) => props.top || "13px"};
  pointer-events: none;
  left: 15px;
  color: ${(props) => props.label.color || "#2a2a2a"};
  transition: 0.5s;
  font-family: ${(props) => props.label.fontFamily || "Roboto"};
  font-size: ${(props) => props.label.fontSize || "17px"};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: normal;
  text-align: left;
`;

Label.defaultProps = {
  label: {},
};

const InputFloatingLabel = (props) => {
  const { label, value, type, required, onChange, overriddenStyles } = props;
  return (
    <OuterContainer
      outerContainer={
        overriddenStyles ? overriddenStyles.outerContainer : undefined
      }
    >
      <Card card={overriddenStyles ? overriddenStyles.card : undefined}>
        <Input
          type={type}
          name=""
          onChange={(e) => onChange(e.target.value)}
          value={value}
          required={required}
          input={overriddenStyles ? overriddenStyles.input : undefined}
          labelOnFocus={
            overriddenStyles ? overriddenStyles.labelOnFocus : undefined
          }
        />
        <Label
          top={
            overriddenStyles
              ? overriddenStyles.input
                ? overriddenStyles.input.height
                  ? overriddenStyles.input.height.slice(0, -2) / 4 + "px"
                  : "13px"
                : undefined
              : undefined
          }
          label={overriddenStyles ? overriddenStyles.label : undefined}
        >
          {label}
        </Label>
      </Card>
    </OuterContainer>
  );
};

export default InputFloatingLabel;
