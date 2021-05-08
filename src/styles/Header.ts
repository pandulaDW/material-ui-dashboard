import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.grey[100],
    },
    searchInput: {
      opacity: 0.6,
      padding: `0px ${theme.spacing(1)}px`,
      fontSize: "0.8rem",
      transition: "all 0.4s",
      "&:hover": {
        backgroundColor: theme.palette.grey[300],
      },
      "& .MuiSvgIcon-root": {
        marginRight: theme.spacing(1),
        cursor: "pointer",
      },
    },
  };
});
