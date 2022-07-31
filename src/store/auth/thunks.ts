import { checkingCredentials, login, logout } from ".";
import {
  signInWithGoogle,
  registerUserWithEmailPassword,
  loginWithEmailPassword,
  logoutFirebase,
} from "../../firebase/providers";
import { AppDispatch } from "../store";

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials({}));
  };
};

export const startGoogleSignIn = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials({}));
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials({}));
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials({}));
    const result = await loginWithEmailPassword({ email, password });
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch: AppDispatch) => {
    await logoutFirebase();
    dispatch(logout({}));
  };
};
