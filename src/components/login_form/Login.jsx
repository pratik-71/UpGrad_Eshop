import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setisAdmin, setisAuthenticated } from '../../redux/reducer_functions/AuthSlice';
import { useNavigate } from 'react-router-dom';




const defaultTheme = createTheme();

export default function Login() {

  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = React.useState("");
  const { register,handleSubmit,formState: { errors }} = useForm();
  const navigate = useNavigate();



  // ------------------------------- fetch request for Sign in starts --------------------------------
  const send_data = async(formData) => {
    
    try {
      const response = await fetch("http://localhost:3001/api/v1/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        setErrorMessage(errorMessage);

        setTimeout(() => {
          setErrorMessage("");
        }, 4000);
        return;
      }

      const responsedata = await response.json();
      console.log("hello")
    if (responsedata.isAuthenticated) {
      const token = response.headers.get("X-Auth-Token")
      localStorage.setItem('Auth-Token',token)
      if(token.endsWith("1@3456Qw-")){
        dispatch(setisAdmin(true))
      }
      dispatch(setisAuthenticated(true))
      navigate('/')
    } else {
      console.log("User is not authenticated");
    }


    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  }

  // ------------------------------- fetch request for Sign Up ends --------------------------------



  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          {/* --------------------------- Sign In form starts -------------------------------*/}


          <Box component="form"  onSubmit={handleSubmit(send_data)} noValidate sx={{ mt: 1 }}>

                                {/* Email */}

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

                                      {/* password */}

            <TextField
            type="password"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              autoComplete="current-password"
              {...register("password", {
                required: "password is required",
              })}
              error={!!errors?.password}
              helperText={errors?.password && errors.password.message}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

                                    {/* Sign in button */}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Sign_up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>

          {/* --------------------------- Sign In form ends -------------------------------*/}


        </Box>
        <p style={{ fontSize: "14px", color: "red", textAlign: "center" }}>
          {errorMessage}
        </p>
      </Container>
    </ThemeProvider>
  );
}