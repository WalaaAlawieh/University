import styled, { css } from "styled-components";
import tw from "twin.macro";

export const ButtonWrapper = styled("button")`
  ${tw`px-12 py-2 rounded-md font-bold focus:outline-none `}

  font-size: 14px;
  border-color: ${({ outlined, textColor, theme, backgroundColor }) =>
    outlined
      ? backgroundColor
        ? backgroundColor
        : theme.primaryRed
      : textColor
      ? textColor
      : "#f8fafc"};
  color: ${({ outlined, textColor, theme, backgroundColor }) =>
    outlined
      ? backgroundColor
        ? backgroundColor
        : theme.primaryRed
      : textColor
      ? textColor
      : "#f8fafc"};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.primaryRed};

  ${({ outlined, backgroundColor, theme }) =>
    outlined && backgroundColor
      ? css`
          box-shadow: 0px 0px 0px 2px ${backgroundColor} inset;
          -webkit-box-shadow: 0px 0px 0px 2px ${backgroundColor} inset;
          -moz-box-shadow: 0px 0px 0px 2px ${backgroundColor} inset;

          background-color: transparent;
        `
      : outlined &&
        css`
          box-shadow: 0px 0px 0px 2px ${theme.primaryRed} inset;
          -webkit-box-shadow: 0px 0px 0px 2px ${theme.primaryRed} inset;
          -moz-box-shadow: 0px 0px 0px 2px ${theme.primaryRed} inset;

          background-color: transparent;
        `}

  ${({ disabled }) =>
    disabled ? tw`cursor-default` : tw`hover:opacity-50 cursor-pointer`}

  &.disabled {
    background-color: ${({ theme, backgroundColor }) =>
      backgroundColor == "transparent" ? backgroundColor : theme.disabledGrey};
  }

  margin: 4px 4px 0px 4px;
  min-width: 40px;
  min-height: 40px;

  min-width: ${(props) => {
    if (props.className?.includes("medium")) return "40px";
  }};
  max-width: ${(props) => {
    if (props.className?.includes("small")) return "40px";
  }};
  max-height: ${(props) => {
    if (props.className?.includes("small")) return "40px";
  }};
  padding: ${(props) => {
    if (props.className?.includes("small")) return "0px 13px";
    if (props.className?.includes("medium")) return "0 0.5rem";
  }};
  margin: ${(props) => {
    if (props.className?.includes("small")) return "4px";
  }};
`;
