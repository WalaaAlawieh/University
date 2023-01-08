import styled, { css } from "styled-components";
import tw from "twin.macro";

export const InputLabelWrapper = styled("label")`
  ${tw`text-sm font-bold`}
  color: ${({ theme }) => theme.primaryGrey};

  &::after {
    ${({ required }) =>
      required &&
      css`
        content: "*";
        color: red;
        margin-left: 3px;
      `};
  }
`;
