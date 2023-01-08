import React from "react";
import { LayoutWrapper } from "./styles";

const SignInLayout = ({
  children,
  description,
  logoSrc,
  bannerImageSrc,
  backgroundColor,
}) => (
  <LayoutWrapper backgroundColor={backgroundColor}>
    <div className="banner-wrapper">
      <div className="banner-inner-wrapper">
        {/* <img src={logoSrc} alt="logo" className="logo-mobile" /> */}
        <p className="description">{description}</p>
      </div>
      <img className="banner-image" src={bannerImageSrc} alt="banner" />
    </div>
    <div className="form-wrapper">
      {/* <img src={logoSrc} alt="logo" className="logo-desktop" /> */}

      <div className="form">
        <div className="form-content">
          <div className="title-wrapper">
            <p className="description">{description}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  </LayoutWrapper>
);

export default SignInLayout;
