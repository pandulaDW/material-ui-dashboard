import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      margin: theme.spacing(0.5),
    },
    label: {
      textTransform: "none",
    },
  };
});

interface Props {
  text: string;
  size?: "small" | "medium" | "large" | undefined;
  color?: "inherit" | "primary" | "secondary" | "default" | undefined;
  variant?: "text" | "outlined" | "contained" | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = (props) => {
  const { text, size, color, variant, handleClick, type } = props;
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={handleClick}
      type={type || "button"}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
