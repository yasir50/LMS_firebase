import { Box, Paper, Button, Typography } from "@mui/material";
import Input from "../Input";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Auth/firebase";

export default function TeachersAddEdit() {
  const [teachersData, setTeachersData] = useState({
    fullName: "",
    subject: "",
    contact: "",
  });
  console.log(teachersData);
  const navigate = useNavigate();
  const handleClick = async () => {
    if (
      teachersData.fullName === "" ||
      teachersData.subject === "" ||
      teachersData.contact === ""
    ) {
      alert("Empty Field");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "TeachersList"), {
        teachersData,
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigate("/dashboard/teacherList");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          width: "50vw",
          height: "85vh",
          margin: "auto",
        },
      }}
    >
      <Paper elevation={1}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            mt: 6,
            fontWeight: "bold",
            mb: 10,
          }}
        >
          Add Teachers
        </Typography>
        <Box
          sx={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Input
            labelName="Full Name"
            onChangeValue={(e) =>
              setTeachersData({ ...teachersData, fullName: e.target.value })
            }
          />

          <Input
            labelName="Subject"
            onChangeValue={(e) =>
              setTeachersData({ ...teachersData, subject: e.target.value })
            }
          />

          <Input
            labelName="Contact"
            onChangeValue={(e) =>
              setTeachersData({
                ...teachersData,
                contact: e.target.value,
              })
            }
          />
        </Box>

        <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{ width: "80%", mt: "60px", borderRadius: 0 }}
            onClick={handleClick}
          >
            Add Teacher
          </Button>
        </div>
      </Paper>
    </Box>
  );
}
