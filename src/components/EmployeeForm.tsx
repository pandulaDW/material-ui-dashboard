import { Grid, Radio, RadioGroup } from "@material-ui/core";
import { FormControl, FormLabel, FormControlLabel } from "@material-ui/core";
import { Input } from "./Controls";
import { useForm, Form } from "./useForm";

enum gender {
  male = "male",
  female = "female",
  other = "other",
}

const initalFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: gender.male,
  departmentId: "",
  hireDate: new Date(),
  isPermenant: false,
};

const EmployeeForm = () => {
  const { values, handleInputChange } = useForm(initalFieldValues);
  console.log(values.gender);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input
            label="Full Name"
            value={values.fullName}
            name="fullName"
            handleInputChange={handleInputChange}
          />
          <Input
            label="Email"
            value={values.email}
            name="email"
            handleInputChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value={gender.male}
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value={gender.female}
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value={gender.other}
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
