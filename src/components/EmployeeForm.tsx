import { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { useStyles } from "../styles/Employees";

const initalFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermenant: false,
};

const EmployeeForm = () => {
  const [values, setValues] = useState(initalFieldValues);
  const classes = useStyles();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form className={classes.rootForm}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Full Name"
            value={values.fullName}
            name="fullName"
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="Email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </form>
  );
};

export default EmployeeForm;
