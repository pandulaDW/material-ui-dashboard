import { Grid } from "@material-ui/core";
import { FormControl, FormLabel } from "@material-ui/core";
import { Input, RadioGroupCustom as RadioGroup } from "./Controls";
import { useForm, Form } from "./useForm";

enum gender {
  male = "male",
  female = "female",
  other = "other",
}

const initialFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: gender.male,
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  const { values, handleInputChange } = useForm(initialFieldValues);
  const radioOptions = Object.keys(gender).map((item) => ({
    id: item,
    title: item[0].toUpperCase() + item.slice(1),
  }));

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input
            label="Full Name"
            value={values.fullName}
            name="fullName"
            onChange={handleInputChange}
          />
          <Input
            label="Email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
              options={radioOptions}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
