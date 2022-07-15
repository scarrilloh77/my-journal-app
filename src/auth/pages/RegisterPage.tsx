import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";
import { AppDispatch } from "../../store";
import { AuthLayout } from "../layout/AuthLayout";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  email: [
    (value: string) => value.includes("@"),
    "El correo debe de tener un @",
  ],
  password: [
    (value: string) => value.length >= 6,
    "La contraseña debe tener más de 6 letras",
  ],
  displayName: [
    (value: string) => value.length >= 1,
    "El nombre es obligatorio",
  ],
};

export const RegisterPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState,
    //@ts-ignore
    displayName,
    //@ts-ignore
    email,
    //@ts-ignore
    password,
    onInputChange,
    //@ts-ignore
    displayNameValid,
    //@ts-ignore
    emailValid,
    //@ts-ignore
    passwordValid,
    isFormValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Nombre completo"
            type="text"
            placeholder="Nombre completo"
            fullWidth
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            error={!!displayNameValid && formSubmitted}
            helperText={displayNameValid}
          ></TextField>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
            error={!!emailValid && formSubmitted}
            helperText={emailValid}
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
            error={!!passwordValid && formSubmitted}
            helperText={passwordValid}
          ></TextField>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth type="submit">
              Crear cuenta
            </Button>
          </Grid>

          <Grid container direction={"row"} justifyContent="end" sx={{ mt: 2 }}>
            <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color={"inherit"} to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
