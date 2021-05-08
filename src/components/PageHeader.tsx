import React from "react";
import { Paper, Card, Typography } from "@material-ui/core";

interface Props {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}

const PageHeader: React.FC<Props> = (props) => {
  const { title, subtitle, icon } = props;

  return (
    <Paper elevation={0} square>
      <div>
        <Card>{icon}</Card>
        <div>
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
