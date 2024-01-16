import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid, Paper } from '@mui/material';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export type LoginFormData = {
    email: string;
    password: string;
  }
  
  const schema = yup
    .object({
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required")
    })
    .required()

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: LoginFormData) => {
        console.log(data)
    }

    return (
        <Paper elevation={3} sx={{ maxWidth: "360px", padding: 3, mx: "auto" }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5">
                    Sign in
                </Typography>
                <Box component="form" sx={{ mt: "5px", width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ""}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : ""}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: '#72A1BF' }}
                    >
                        Sign In
                    </Button>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                Don't have an account? Register
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Paper>
    );
}

export default Login;
