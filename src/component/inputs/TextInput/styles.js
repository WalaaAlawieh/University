import styled, { css } from "styled-components";
import tw from "twin.macro";

export const TextInputWrapper = styled("div")`
  ${tw`my-1 flex flex-col justify-end`}

  flex: 0 0 20%;
  min-width: 9rem;

  .input-wrapper {
    ${tw`flex items-center`}

    margin-top: 0.3rem;

    padding: ${({ type }) => "0.6rem 0.8rem"};

    border-width: 1px;
    border-radius: 8px;

    ${tw`bg-white border-solid`}

    border-color: #d1d5db;

    &:focus-within {
      border-color: #dcfce7;
    }

    input {
      ${tw`w-full flex-1 focus:outline-none text-sm font-semibold bg-transparent`}
      border-color: #dcfce7;
      &::placeholder {
        color: ${({ theme }) => theme.secondaryGrey};
      }

      &::-ms-reveal,
      &::-ms-clear {
        display: none;
      }
    }

    .show-password-icon-wrapper {
      ${tw`cursor-pointer rounded`}
      padding:0.4rem;
      background-color: #edf0f49c;

      .password-icon {
        ${tw`w-4 h-4`}
        color: ${({ theme }) => theme.secondaryGrey};
      }
    }

    .input-icon {
      ${tw`w-4 h-4 ml-3`}

      color: ${({ formError, theme }) =>
        formError ? theme.errorRed : theme.secondaryGrey};
    }
  }

  .disabled {
    background-color: #f8f8f8;
    color: #cfcfcf;
    border-color: ${({ theme }) => theme.outline};

    &:focus-within {
      border-color: ${({ theme }) => theme.outline};
    }

    input {
      &::placeholder {
        color: ${({ theme }) => theme.secondaryGrey};
      }
    }
  }

  .input-error {
    ${tw`mt-1 text-sm`}
    color: ${({ theme }) => theme.errorRed};
  }
`;
