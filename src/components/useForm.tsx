import React, { useState } from "react";
import { useStyles } from "../styles/Employees";

export function useForm<T, U>(initialFieldValues: T) {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState<U>();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | { name?: string | undefined; value: unknown }
    >
  ) => {
    const { name, value } = e.target;
    if (!name) return;

    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    setErrors(undefined);
  };

  return { values, setValues, handleInputChange, errors, setErrors, resetForm };
}

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { handleSubmit } = props;

  return (
    <form className={classes.rootForm} onSubmit={handleSubmit}>
      {props.children}
    </form>
  );
};
