import React, { useEffect, useRef } from "react";
import InputLabel from "../InputLabel";

import { TextInputWrapper } from "./styles";

const TextInput = ({
  source,
  iconName,
  label = "",
  labelDescription,
  placeholder,
  tabIndex,
  className = "",
  variant = "normal",
  type = "text",
  defaultValue,
  nestedinputerror,
  autofocus = false,
  required = false,
  disabled = false,
  disabledStyling = true,
  onInputChange,
  onInputBlur,
  onInputKeyDown,
}) => {
  const textInputRef = useRef();

  useEffect(() => {
    if (autofocus) textInputRef.current.focus();
  }, []);

  return (
    <TextInputWrapper
      variant={variant}
      className={className}
      required={required}
      type={type}
    >
      <InputLabel
        source={source}
        label={label}
        labelDescription={labelDescription}
        required={required}
      />

      <div
        className={
          disabled && disabledStyling
            ? "input-wrapper disabled"
            : "input-wrapper"
        }
      >
        <input
          id={source}
          name={source}
          tabIndex={tabIndex}
          type={"text"}
          ref={(e) => {
            textInputRef.current = e;
          }}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onInputChange}
          onBlur={onInputBlur}
          autoFocus={autofocus}
          autoComplete="new-password"
        />
      </div>

      {/* <ErrorMessage
        errors={errors}
        name={source}
        render={({ message }) => <p className="input-error">{message}</p>}
      /> */}
    </TextInputWrapper>
  );
};

export default TextInput;
