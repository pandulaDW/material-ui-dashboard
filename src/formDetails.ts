import axios from "axios";
import * as yup from "yup";

export enum Gender {
  male = "male",
  female = "female",
  other = "other",
}

export const radioOptions = Object.keys(Gender).map((item) => ({
  id: item,
  title: item[0].toUpperCase() + item.slice(1),
}));

export interface FormFields {
  id: number;
  fullName: string;
  email: string;
  mobile: string | undefined;
  city: string;
  gender: Gender;
  departmentId: number | undefined;
  hireDate: Date;
  isPermanent: boolean;
}

export const initialValues: FormFields = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: Gender.male,
  departmentId: 0,
  hireDate: new Date(),
  isPermanent: false,
};

type ValidationFields = Pick<
  FormFields,
  "fullName" | "email" | "mobile" | "departmentId"
>;

export const validationSchema: yup.SchemaOf<ValidationFields> = yup.object({
  fullName: yup.string().required("FullName is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  mobile: yup.string().min(9, "Enter a valid number"),
  departmentId: yup.number().moreThan(0, "Department must be specified"),
});

export const createEmployee = async (values: FormFields) => {
  await axios.post("http://localhost:3001/employees", values);
};
