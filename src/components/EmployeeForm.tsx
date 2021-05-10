import { Grid } from "@material-ui/core";
import { Input, RadioGroup, Select, CheckBox } from "./Controls";
import { useForm, Form } from "./useForm";
import DatePicker from "./DatePicker";
import { getDepartmentCollection } from "../services/employeeService";
import Button from "./Button";

enum gender {
  // noinspection JSUnusedGlobalSymbols
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

type Fields = typeof initialFieldValues;

const EmployeeForm = () => {
  const { values, setValues, errors, setErrors, handleInputChange } = useForm(
    initialFieldValues
  );
  const radioOptions = Object.keys(gender).map((item) => ({
    id: item,
    title: item[0].toUpperCase() + item.slice(1),
  }));

  const validate = () => {
    let temp: Pick<Fields, "fullName" | "email" | "mobile" | "departmentId"> = {
      fullName: values.fullName ? "" : "This field is required",
      email: /$|.+@.+..+/.test(values.email) ? "" : "Email is not valid",
      mobile: values.mobile.length > 9 ? "" : "Minimum 10 numbers required",
      departmentId:
        values.departmentId.length !== 0 ? "" : "This field is required",
    };
    setErrors({ ...temp });

    return Object.values(temp).every((item) => item === "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("hitting");
    }
  };

  return (
    <Form handleSubmit={handleSubmit}>
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
          <div>
            <Button text="Submit" type="submit" />
            <Button text="Reset" color="default" handleClick={(e) => e} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
