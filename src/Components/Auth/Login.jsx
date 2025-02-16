import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        localStorage.setItem("uid", userCredentials.user.uid);

        console.log(user);
        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
        });
        navigate("/dashboard");
      })
      .catch((err) => {
        Swal.fire({
          title: "Something went wrong!",
          text: err.code,
          icon: "error",
        });
      });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            padding: "26px",
            borderRadius: "0px",
            boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Sign In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#36454F",
                "&:hover": { backgroundColor: "#018749" },
              }}
            >
              Sign In
            </Button>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              Don't have an account?{" "}
              <Link
                to="/signup"
                variant="body2"
                style={{ color: "#1976d2", textDecoration: "none" }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Login;
