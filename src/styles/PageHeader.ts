import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(2),
    alignItems: "center",
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: 0.6,
    },
  },
}));
