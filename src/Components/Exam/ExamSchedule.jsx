import React from "react";
import {
  Box,
  Paper,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ExamScheduleData = ({ schedule }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Paper sx={{ width: "600px", padding: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          School Name
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          textAlign="center"
        >
          Examination Schedule
        </Typography>
        <Divider sx={{ my: 2 }} />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell align="center">
                  <strong>Subject</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Date</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Time</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((exam, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{exam.subject}</TableCell>
                  <TableCell align="center">{exam.date}</TableCell>
                  <TableCell align="center">{exam.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default function ExamSchedule() {
  const examData = [
    {
      subject: "Mathematics",
      date: "March 10, 2025",
      time: "10:00 AM - 12:00 PM",
    },
    { subject: "English", date: "March 12, 2025", time: "10:00 AM - 12:00 PM" },
    { subject: "Science", date: "March 14, 2025", time: "10:00 AM - 12:00 PM" },
    {
      subject: "Social Studies",
      date: "March 16, 2025",
      time: "10:00 AM - 12:00 PM",
    },
  ];

  return <ExamScheduleData schedule={examData} />;
}
