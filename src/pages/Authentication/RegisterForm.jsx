import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Auth/auth.action";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});



function RegistrationForm() {
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "male",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    dispatch(registerUser(values))
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="firstName"
                // label="First Name"
                placeholder="First Name"
                variant="outlined"
                fullWidth
                
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="lastName"
                placeholder="Last Name"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
  <RadioGroup row name="gender" aria-label="gender">
  <FormControlLabel
  value="male"
  control={<Radio />}
  label={<span style={{ color: 'cyan' }}>Male</span>}
/>
<FormControlLabel
  value="female"
  control={<Radio />}
  label={<span style={{ color: 'cyan' }}>Female</span>}
/>

  </RadioGroup>
  <ErrorMessage
    name="gender"
    component="div"
    className="text-red-500"
  />
</div>
          </div>
          <Button
  sx={{ padding: ".8rem 0rem", backgroundColor: 'cyan', color: 'white' }}
  fullWidth
  type="submit"
  variant="contained"
  color="primary"
>
  Register
</Button>

        </Form>
      </Formik>
     <div className="flex items-center space-x-1 mt-5 justify-center">
  <p style={{ color: 'cyan' }}>if you have already account ?</p>
  <Button onClick={() => navigate("/login")} size="small" style={{ color: 'cyan' }}>
  Login
</Button>

      </div>
      <div className="flex justify-center mt-5">
      <Button
  onClick={() => navigate("/reset-password-req")}
  fullWidth
  variant="outlined"
  sx={{ padding: ".8rem 0rem", color: 'cyan' }}
>
  Forgot Password
</Button>

      </div>
    </>
  );
}

export default RegistrationForm;
