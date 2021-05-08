import React from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";

interface TextInputProps {
  label: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: Array<{ id: string; title: string }>;
}

export const Input: React.FC<TextInputProps> = (props) => {
  const { label, value, name, onChange } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export const RadioGroupCustom: React.FC<RadioGroupProps> = (props) => {
  const { name, value, onChange, options } = props;

  return (
    <RadioGroup row name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <FormControlLabel
          value={option.id}
          control={<Radio />}
          label={option.title}
        />
      ))}
    </RadioGroup>
  );
};
