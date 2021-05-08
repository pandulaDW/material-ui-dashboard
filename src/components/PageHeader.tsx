import React from "react";
import { Paper, Card, Typography } from "@material-ui/core";
import { useStyles } from "../styles/PageHeader";

interface Props {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}

const PageHeader: React.FC<Props> = (props) => {
  const { title, subtitle, icon } = props;
  const classes = useStyles();

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
