import { Box, Paper, Button, Typography } from "@mui/material";
import Input from "../Input";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Auth/firebase";

export default function SubjectsAddEdit() {
  const [subjectsData, setSubjectsData] = useState({
    subjectName: "",
    teacherAssigned: "",
    grade: "",
  });
  console.log(subjectsData);
  const navigate = useNavigate();
  const handleClick = async () => {
    if (
      subjectsData.subjectName === "" ||
      subjectsData.teacherAssigned === "" ||
      subjectsData.grade === ""
    ) {
      alert("Empty Field");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "SubjectsList"), {
        subjectsData,
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigate("/dashboard/subjectList");
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
          Add Subjects
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
            labelName="Subject Name"
            onChangeValue={(e) =>
              setSubjectsData({ ...subjectsData, subjectName: e.target.value })
            }
          />

          <Input
            labelName="Teacher Assigned"
            onChangeValue={(e) =>
              setSubjectsData({
                ...subjectsData,
                teacherAssigned: e.target.value,
              })
            }
          />

          <Input
            labelName="Grade"
            onChangeValue={(e) =>
              setSubjectsData({
                ...subjectsData,
                grade: e.target.value,
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
            Add Subject
          </Button>
        </div>
      </Paper>
    </Box>
  );
}
