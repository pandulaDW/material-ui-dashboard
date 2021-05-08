import { TextField } from "@material-ui/core";
import React from "react";

interface TextInputProps {
  label: string;
  value: string;
  name: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<TextInputProps> = (props) => {
  const { label, value, name, handleInputChange } = props;

  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      name={name}
      onChange={handleInputChange}
    />
  );
};
