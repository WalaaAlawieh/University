import React from "react";
import { InputLabelWrapper } from "./styles";

const InputLabel = ({
  source,
  label,
  labelDescription,
  required,
  className,
}) => {
  return label ? (
    <InputLabelWrapper
      htmlFor={source}
      required={required}
      className={className}
    >
      {label}
      {labelDescription}
    </InputLabelWrapper>
  ) : null;
};

export default InputLabel;
