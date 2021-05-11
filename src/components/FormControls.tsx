import React from "react";
import {
  InputLabel,
  TextField,
  Select as MuiSelect,
  MenuItem,
  Checkbox as MuiCheckBox,
  FormHelperText,
} from "@material-ui/core";
import { Radio, RadioGroup as MuiRadioGroup } from "@material-ui/core";
import { FormControl, FormLabel, FormControlLabel } from "@material-ui/core";
import { useStyles } from "../styles/Employees";

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = (props) => {
  const classes = useStyles();
  const { handleSubmit } = props;

  return (
    <form className={classes.rootForm} onSubmit={handleSubmit}>
      {props.children}
    </form>
  );
};

interface InputControlProps {
  label?: string;
  value?: string | number;
  name: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  error?: boolean;
  helperText?: string | boolean;
}

export const Input: React.FC<InputControlProps> = (props) => {
  const { label, value, name, error, helperText, handleChange } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      name={name}
      onChange={handleChange}
      error={error}
      helperText={helperText}
    />
  );
};

interface RadioGroupProps extends InputControlProps {
  options: Array<{ id: string; title: string }>;
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { name, value, handleChange: onChange, options } = props;

  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.id}
            value={option.id}
            control={<Radio />}
            label={option.title}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

interface SelectProps extends InputControlProps {
  options: Array<{ id: number; title: string }>;
}

export const Select: React.FC<SelectProps> = (props) => {
  const { name, label, value, handleChange, options, error, helperText } =
    props;

  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        onChange={handleChange}
        value={value}
        {...(error && { error: true })}
      >
        <MenuItem value={0}>None</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.title}
          </MenuItem>
        ))}
      </MuiSelect>
      <FormHelperText error>{helperText}</FormHelperText>
    </FormControl>
  );
};

interface CheckBoxProps extends InputControlProps {
  checked: boolean;
}

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const { label, checked, name, handleChange } = props;
  return (
    <FormControlLabel
      control={
        <MuiCheckBox checked={checked} name={name} onChange={handleChange} />
      }
      label={label}
    />
  );
};
