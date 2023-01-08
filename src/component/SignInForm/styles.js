import styled from "styled-components";
import tw from "twin.macro";

export const SignInWrapper = styled("form")`
  .text-input {
    ${tw`my-4 relative rounded border-0`}

    &:before {
      content: "";
      ${tw`absolute h-full`}
      width: 4px;
      background: ${({ theme, inputBorderColor }) =>
        inputBorderColor ? inputBorderColor : "#d1d5db"};
    }

    .input-wrapper {
      border-radius: 0;
      border: 0;
      background-color: #f7f6fb; // TODO: theme

      input {
        color: #d1d5db;
      }
    }

    .input-error {
      ${tw`mx-3`}
    }
  }

  .checkbox-reset-wrapper {
    ${tw`flex justify-between items-center`}

    .remember-me {
      margin: 0.5rem 0 0.5rem 0;

      label {
        ${tw`font-bold`}
        color: #d1d5db;
      }
    }

    .reset-password {
      a {
        color: #d1d5db;
        ${tw`underline font-bold`}
      }
    }
  }

  .error-message {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.errorRed};
  }

  .submit-wrapper {
    ${tw`w-full flex flex-col items-center`}

    .sign-in-btn {
      ${tw`w-full mt-6`}

      background-color: #60a5fa;
    }
  }
`;
