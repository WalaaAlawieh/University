import React, { useState, useContext } from "react";

import { SignInWrapper } from "./styles";
import { TextInput, Button } from "../inputs";

const SignInForm = () => {
  const [loginLoading, setLoginLoading] = useState(false);

  return (
    <SignInWrapper inputBorderColor="#ef4444">
      <div>
        <TextInput
          source="username"
          placeholder="Username"
          variant="outlined"
          className="text-input"
        />

        <TextInput
          source="password"
          placeholder="Password"
          type="password"
          iconName="padlock"
          variant="outlined"
          className="text-input"
        />

        {/* <span className="error-message">{backendErrors}</span> */}

        <div className="submit-wrapper">
          <Button
            type="submit"
            // loading={loginLoading}
            className="sign-in-btn"
          >
            Sign In
          </Button>
        </div>
      </div>
    </SignInWrapper>
  );
};

export default SignInForm;
