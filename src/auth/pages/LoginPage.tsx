import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";
import { AppDispatch } from "../../store";
import {
  authState,
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { status } = useSelector(authState);
  //@ts-ignore
  const { email, password, onInputChange } = useForm({
    email: "sebastian@gmail.com",
    password: "12345678",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(checkingAuthentication(email, password));
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn(email, password));
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
          ></TextField>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
          ></TextField>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button
              disabled={isAuthenticating}
              variant="contained"
              fullWidth
              type="submit"
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              disabled={isAuthenticating}
              variant="contained"
              fullWidth
              onClick={onGoogleSignIn}
            >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
          <Grid container direction={"row"} justifyContent="end" sx={{ mt: 2 }}>
            <Link component={RouterLink} color={"inherit"} to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
