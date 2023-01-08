import React from "react";
// styles
import { ButtonWrapper } from "./styles";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Button = ({
  children,
  className = "",
  type = "button",
  textColor,
  backgroundColor,
  outlined,
  disabled = false,
  loading = false,
  onClick = () => null,
  title,
  buttonId,
  shouldBeDisabled,
}) => {
  return (
    <ButtonWrapper
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={disabled ? "disabled " + className : className}
      textColor={textColor}
      backgroundColor={backgroundColor}
      outlined={outlined}
    >
      {/* {loading ? (
        <div className="px-8">
          <Loader type="Puff" color={textColor} height={24} width={24} />
        </div>
      ) : ( */}
      <>{title || children}</>
      {/* // )} */}
    </ButtonWrapper>
  );
};

export default Button;
