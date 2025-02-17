import React from "react";
import { Box, Paper, Typography, Divider, Button } from "@mui/material";

const FeeVoucher = ({ student }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Paper
        sx={{
          width: "400px",
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          School Name
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Fee Voucher
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Typography variant="body1">
          <strong>Student Name:</strong> {student.name}
        </Typography>
        <Typography variant="body1">
          <strong>Grade:</strong> {student.grade}
        </Typography>
        <Typography variant="body1">
          <strong>Roll No:</strong> {student.rollNo}
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Typography variant="body1">
          <strong>Admission Fee:</strong> Rs {student.admissionFee}
        </Typography>
        <Typography variant="body1">
          <strong>Monthly Fee:</strong> Rs {student.monthlyFee}
        </Typography>
        <Typography variant="body1">
          <strong>Annual Charges:</strong> Rs {student.annualFee}
        </Typography>
        <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }}>
          Total Payable: Rs{" "}
          {student.admissionFee + student.monthlyFee + student.annualFee}
        </Typography>

        <Divider sx={{ my: 2 }} />
        <Button variant="contained" color="primary" fullWidth>
          Download Voucher
        </Button>
      </Paper>
    </Box>
  );
};

export default function FeesVoucher() {
  const studentData = {
    name: "ahmed",
    grade: "5th",
    rollNo: "A123",
    admissionFee: 10000,
    monthlyFee: 5000,
    annualFee: 2000,
  };

  return <FeeVoucher student={studentData} />;
}
