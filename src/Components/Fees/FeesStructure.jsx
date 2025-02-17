import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

const feeStructure = [
  {
    grade: "Nursery",
    admissionFee: "10,000",
    monthlyFee: "5,000",
    annualFee: "2,000",
  },
  {
    grade: "KG",
    admissionFee: "12,000",
    monthlyFee: "6,000",
    annualFee: "2,500",
  },
  {
    grade: "1st",
    admissionFee: "15,000",
    monthlyFee: "7,000",
    annualFee: "3,000",
  },
  {
    grade: "2nd",
    admissionFee: "18,000",
    monthlyFee: "7,500",
    annualFee: "3,500",
  },
  {
    grade: "3rd",
    admissionFee: "20,000",
    monthlyFee: "8,000",
    annualFee: "4,000",
  },
];

const FeesStructure = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography variant="h5" textAlign="center" fontWeight="bold" mb={3}>
        Fee Structure
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {feeStructure.map((fee, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {fee.grade} Grade
                </Typography>
                <Typography variant="body1">
                  Admission Fee: Rs {fee.admissionFee}
                </Typography>
                <Typography variant="body1">
                  Monthly Fee: Rs {fee.monthlyFee}
                </Typography>
                <Typography variant="body1">
                  Annual Fee: Rs {fee.annualFee}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeesStructure;
