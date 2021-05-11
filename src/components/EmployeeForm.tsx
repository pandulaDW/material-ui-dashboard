import { Grid } from "@material-ui/core";
import { useFormik } from "formik";
import { Form, Input, RadioGroup, Select, CheckBox } from "./FormControls";
import {
  radioOptions,
  initialValues,
  validationSchema,
  FormFields,
} from "../formDetails";
import DatePicker from "./DatePicker";
import { getDepartmentCollection } from "../services/employeeService";
import Button from "./Button";

const EmployeeForm = () => {
  const handleSubmit = (values: FormFields) => {
    alert(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Form handleSubmit={formik.handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Input
            label="Full Name"
            value={formik.values.fullName}
            name="fullName"
            handleChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
          <Input
            label="Email"
            value={formik.values.email}
            name="email"
            handleChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Input
            label="Mobile"
            value={formik.values.mobile}
            name="mobile"
            handleChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
          <Input
            label="City"
            value={formik.values.city}
            name="city"
            handleChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <RadioGroup
            name="gender"
            value={formik.values.gender}
            handleChange={formik.handleChange}
            options={radioOptions}
          />
          <Select
            name="departmentId"
            label="Department"
            value={formik.values.departmentId}
            handleChange={formik.handleChange}
            options={getDepartmentCollection()}
            error={
              formik.touched.departmentId && Boolean(formik.errors.departmentId)
            }
            helperText={
              formik.touched.departmentId && formik.errors.departmentId
            }
          />
          <DatePicker
            value={formik.values.hireDate}
            label="Hire Date"
            handleChange={(date) => {
              if (date) formik.setValues({ ...formik.values, hireDate: date });
            }}
          />
          <CheckBox
            checked={formik.values.isPermanent}
            name={"isPermanent"}
            label="Permanent Employee"
            handleChange={formik.handleChange}
          />
          <div>
            <Button text="Submit" type="submit" />
            <Button
              text="Reset"
              color="default"
              handleClick={formik.handleReset}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
