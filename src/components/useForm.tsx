import React, { useState } from "react";
import { useStyles } from "../styles/Employees";

export function useForm<T>(initialFieldValues: T) {
  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | { name?: string | undefined; value: unknown }
    >
  ) => {
    const { name, value } = e.target;
    if (name) setValues({ ...values, [name]: value });
  };

  return { values, handleInputChange };
}

export const Form: React.FC = (props) => {
  const classes = useStyles();
  return <form className={classes.rootForm}>{props.children}</form>;
};
