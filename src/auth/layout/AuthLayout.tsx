import { Grid, Typography } from "@mui/material";
import React from "react";

interface IAuthLayout {
  children: React.ReactNode;
  title: string;
}

export const AuthLayout = ({ children, title = "" }: IAuthLayout) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          width: { sm: 500 },
          backgroundColor: "white",
          padding: 5,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
