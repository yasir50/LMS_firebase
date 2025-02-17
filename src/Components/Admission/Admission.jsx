import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

const Admission = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    guardianName: "",
    guardianContact: "",
    classApplyingFor: "",
    previousSchool: "",
  });

  const classes = ["Nursery", "KG", "1st", "2nd", "3rd", "4th", "5th"]; // Add more if needed

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Box
      sx={{
        width: "50%",
        margin: "auto",
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        mt: 5,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h5" textAlign="center" fontWeight="bold" mb={2}>
        School Admission Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Student Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          fullWidth
          label="Guardian Name"
          name="guardianName"
          value={formData.guardianName}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Guardian Contact"
          name="guardianContact"
          type="tel"
          value={formData.guardianContact}
          onChange={handleChange}
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Class Applying For</InputLabel>
          <Select
            name="classApplyingFor"
            value={formData.classApplyingFor}
            onChange={handleChange}
            required
          >
            {classes.map((cls) => (
              <MenuItem key={cls} value={cls}>
                {cls}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Previous School (if any)"
          name="previousSchool"
          value={formData.previousSchool}
          onChange={handleChange}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: "100%" }}
        >
          Submit Admission
        </Button>
      </form>
    </Box>
  );
};

export default Admission;
