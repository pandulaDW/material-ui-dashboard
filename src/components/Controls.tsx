import React from "react";
import {
  InputLabel,
  TextField,
  Select as MuiSelect,
  MenuItem,
  Checkbox as MuiCheckBox,
} from "@material-ui/core";
import { Radio, RadioGroup as MuiRadioGroup } from "@material-ui/core";
import { FormControl, FormLabel, FormControlLabel } from "@material-ui/core";

interface ControlProps {
  label?: string;
  value?: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | { name?: string | undefined; value: unknown }
    >
  ) => void;
  error?: string;
}

export const Input: React.FC<ControlProps> = (props) => {
  const { label, value, name, error, onChange } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
};

interface RadioGroupProps extends ControlProps {
  options: Array<{ id: string; title: string }>;
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { name, value, onChange, options } = props;

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

interface SelectProps extends ControlProps {
  options: Array<{ id: number; title: string }>;
}

export const Select: React.FC<SelectProps> = (props) => {
  const { name, label, value, onChange, options } = props;
  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} onChange={onChange} value={value}>
        <MenuItem value="">None</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

interface CheckBoxProps extends ControlProps {
  checked: boolean;
}

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const { label, checked, name, onChange } = props;
  return (
    <FormControlLabel
      control={
        <MuiCheckBox checked={checked} name={name} onChange={onChange} />
      }
      label={label}
    />
  );
};
