import React, { useState } from "react";
import { useStyles } from "../styles/Employees";

export function useForm<T>(initalFieldValues: T) {
  const [values, setValues] = useState(initalFieldValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleInputChange };
}

export const Form: React.FC = (props) => {
  const classes = useStyles();
  return <form className={classes.rootForm}>{props.children}</form>;
};
