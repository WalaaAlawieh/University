import React from "react";
import { SignInLayout, SignInForm, SEO } from "../component";

const SignIn = () => {
  const bannerImageSrc = "/images/loginlogo.svg";

  // const backgroundColor = theme.secondaryLight;

  return (
    <>
      <SEO title="Sign In" description="description" />
      <SignInLayout
        bannerImageSrc={bannerImageSrc}
        backgroundColor={"#fafafa"}
        description={"Enter your credentials to sign in."}
      >
        <SignInForm />
      </SignInLayout>
    </>
  );
};

export default SignIn;
