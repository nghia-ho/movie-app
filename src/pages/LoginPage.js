import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormProvider, FTextField } from "../components/form";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { authAPI } from "../api/api";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
});
const defaultValues = {
  username: "",
  password: "",
};

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    let from = location.state?.from?.pathname || "/";
    let username = data.username;
    let password = data.password;
    const response = await authAPI.createRequestToken();
    const { request_token } = response.data;

    auth.login(username, password, request_token, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} sx={{ minWidth: "350px" }}>
        <Typography variant="h4" textAlign="center">
          Login
        </Typography>
        <FTextField name="username" label="Username" />
        <FTextField name="password" label="Password" />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Stack>
    </FormProvider>
  );
}

export default LoginPage;
