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
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredetials) => {
        const user = userCredetials.user;

        Swal.fire({
          title: "Sign up Success!",
          icon: "success",
        });
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          title: "Something went wrong!",
          text: err.code,
          icon: "error",
        });
      });
  };

  return (
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
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
            fullWidth
            id="text"
            label="Full Name"
            name="Name"
            // autoComplete="email"
            autoFocus
            sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            // autoComplete="email"
            autoFocus
            sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
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
            Sign Up
          </Button>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Link
              to="/login"
              variant="body2"
              style={{ color: "#1976d2", textDecoration: "none" }}
            >
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Signup;
