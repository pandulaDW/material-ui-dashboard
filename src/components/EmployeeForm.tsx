import { Grid } from "@material-ui/core";
import { Input, RadioGroup, Select, CheckBox } from "./Controls";
import { useForm, Form } from "./useForm";
import DatePicker from "./DatePicker";
import { getDepartmentCollection } from "../services/employeeService";

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
  const { values, setValues, handleInputChange } = useForm(initialFieldValues);
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
          <Input
            label="Mobile"
            value={values.mobile}
            name="mobile"
            onChange={handleInputChange}
          />
          <Input
            label="City"
            value={values.city}
            name="city"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <RadioGroup
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
            options={radioOptions}
          />
          <Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={getDepartmentCollection()}
          />
          <DatePicker
            value={values.hireDate}
            label="Hire Date"
            handleChange={(date) => {
              if (date) setValues({ ...values, hireDate: date });
            }}
          />
          <CheckBox
            checked={values.isPermanent}
            name={"isPermanent"}
            label="Permanent Employee"
            onChange={() => {
              setValues({ ...values, isPermanent: !values.isPermanent });
            }}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
