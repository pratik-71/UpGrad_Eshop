import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function Sign_up() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("Password");

  const send_data = (formData) => {
    console.log(formData);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            my: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(send_data)}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  error={!!errors?.firstName}
                  helperText={errors?.firstName && errors.firstName.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  error={!!errors?.lastName}
                  helperText={errors?.lastName && errors.lastName.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  required
                  fullWidth
                  label="Phone Number"
                  {...register("PhoneNumber", {
                    required: "Phone Number is required",
                    minLength: {
                      value: 10,
                      message:
                        "Phone Number must be at least 10 characters long",
                    },
                    maxLength: {
                      value: 10,
                      message:
                        "Phone Number must be exactly 10 characters long",
                    },
                  })}
                  error={!!errors?.PhoneNumber}
                  helperText={errors?.PhoneNumber && errors.PhoneNumber.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  required
                  fullWidth
                  label="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  error={!!errors?.email}
                  helperText={errors?.email && errors.email.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  {...register("Password", {
                    required: "Password is required",
                  })}
                  error={!!errors?.Password}
                  helperText={errors?.Password && errors.Password.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Confirm Password"
                  {...register("ConfirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password ||
                      "Confirm password should be same as Password",
                  })}
                  error={!!errors?.ConfirmPassword}
                  helperText={
                    errors?.ConfirmPassword && errors.ConfirmPassword.message
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
