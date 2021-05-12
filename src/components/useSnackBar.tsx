import { useState } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

const Alert: React.FC<AlertProps> = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useSnackBar = () => {
  const [open, setOpen] = useState(false);

  const SnackBarComponent = (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      autoHideDuration={1500}
      onClose={() => setOpen(false)}
    >
      <Alert severity="success">Employee successfully created!</Alert>
    </Snackbar>
  );

  return { setOpen, SnackBarComponent };
};

export default useSnackBar;
