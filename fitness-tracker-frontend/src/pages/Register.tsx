import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid, Paper, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const schema = yup
   .object({
       firstName: yup.string().required("First name is required"),
       lastName: yup.string().required("Last name is required"),
       email: yup.string().email().required("Email is required"),
       password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
   })
   .required()

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: yupResolver(schema)
     })
     

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    const onSubmit = (data: RegisterFormData) => {
        console.log(data)
    }
    

    return (
        <Paper elevation={3} sx={{ maxWidth: "360px", padding: 3, mx: "auto", mt: 10 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" 
                    sx={{ mt: "5px", width: '100%' }} 
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextField
                        margin="normal"
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoComplete="given-name"
                        {...register("firstName")}
                        autoFocus
                        error={!!errors.firstName}
                        helperText={errors.firstName ? errors.firstName.message : ""}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        autoComplete="family-name"
                        {...register("lastName")}
                        error={!!errors.lastName}
                        helperText={errors.lastName ? errors.lastName.message : ""}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ""}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : ""}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: '#72A1BF' }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Link variant="body2" href="/login">
                                Already have an account? Login
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Paper>
    );
}

export default Register;
