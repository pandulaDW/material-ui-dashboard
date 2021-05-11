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
  mobile: string;
  city: string;
  gender: Gender;
  departmentId: string;
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
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export const validationSchema = yup.object({
  fullName: yup.string().required("FullName is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  mobile: yup.string().length(10, "Enter a valid number"),
  departmentId: yup.string().length(1, "DepartmentId is required"),
  hireDate: yup.date(),
});
