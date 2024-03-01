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

const Address = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();



  // ------------------------------- fetch request for Sign Up starts ---------------------------------
  const send_data = async (formData) => {
    console.log("Form Data Object:", formData);

    try {
        const authToken = localStorage.getItem("Auth-Token");

      const response = await fetch("http://localhost:3001/api/v1/addresses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":authToken
        },
        body: JSON.stringify({
          name: formData.name,
          contactNumber: formData.PhoneNumber,
          city:formData.city,
          landmark:formData.landmark,
          street:formData.Street,
          state:formData.State,
          zipCode:formData.Zipcode
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
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };
  // ---------------------------------- fetch request for Sign Up ends ----------------------------



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
          <Typography component="h1" variant="h5">
            Enter Your Address
          </Typography>

          {/* --------------------------- sign up form starts ----------------------------- */}

          <Box
            component="form"
            onSubmit={handleSubmit(send_data)}
            noValidate
            sx={{ mt: 3 }}
          >
            {/* name */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  label="name"
                  autoFocus
                  {...register("name", {
                    required: " Name is required",
                  })}
                  error={!!errors?.name}
                  helperText={errors?.name && errors.name.message}
                />
              </Grid>

              {/* Phone Number */}
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
                      message: "Phone Number must be at least 10 digits long",
                    },
                    maxLength: {
                      value: 10,
                      message: "Phone Number must be exactly 10 digits long",
                    },
                    min: {
                      value: 1000000000,
                      message: "Phone Number must be at least 10 digits long",
                    },
                    max: {
                      value: 9999999999,
                      message: "Phone Number must not exceed 10 digits",
                    },
                  })}
                  error={!!errors?.PhoneNumber}
                  helperText={errors?.PhoneNumber && errors.PhoneNumber.message}
                />
              </Grid>

              {/* City */}
              <Grid item xs={12}>
                <TextField
                  type="text"
                  required
                  fullWidth
                  label="City"
                  {...register("city", {
                    required: "city is required",
                  })}
                  error={!!errors?.city}
                  helperText={errors?.city && errors.city.message}
                />
              </Grid>

              {/* landmark */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Landmark"
                  {...register("Landmark")}
                />
              </Grid>

              {/* Street */}
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  required
                  fullWidth
                  label="Street"
                  {...register("Street", {
                    required: "Street is required",
                  })}
                  error={!!errors?.Street}
                  helperText={errors?.Street && errors.Street.message}
                />
              </Grid>


              {/* State */}
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  required
                  fullWidth
                  label="State"
                  {...register("State", {
                    required: "State is required",
                  })}
                  error={!!errors?.State}
                  helperText={errors?.State && errors.State.message}
                />
              </Grid>


              {/* ZipCode */}
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  required
                  fullWidth
                  label="Zipcode"
                  {...register("Zipcode", {
                    required: "Zipcode is required",
                  })}
                  error={!!errors?.Zipcode}
                  helperText={errors?.Zipcode && errors.Zipcode.message}
                />
              </Grid>
            </Grid>

            {/* Sign up Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Place Order
            </Button>
          </Box>
        </Box>

        {/* --------------------------- sign up form ends ----------------------------- */}

        {/* ---------------------------- Display error messege here ------------------ */}
        <p style={{ fontSize: "14px", color: "red", textAlign: "center" }}>
          {errorMessage}
        </p>
      </Container>
    </ThemeProvider>
  );
};

export default Address;
