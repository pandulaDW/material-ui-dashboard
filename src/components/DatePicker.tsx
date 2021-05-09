import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

interface Props {
  value: Date;
  label: string;
  handleChange: (date: Date | null) => void;
}

const DatePicker: React.FC<Props> = (props) => {
  const { value, label, handleChange } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        autoOk
        format="MMM/dd/yyyy"
        variant="inline"
        inputVariant="outlined"
        value={value}
        label={label}
        onChange={handleChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
