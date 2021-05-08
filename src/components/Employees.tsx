import { Paper } from "@material-ui/core";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "./PageHeader";
import { useStyles } from "../styles/Employees";

const Employees = () => {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="Page Header"
        subtitle="Page Description"
        icon={<PeopleOutlinedIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
};

export default Employees;
