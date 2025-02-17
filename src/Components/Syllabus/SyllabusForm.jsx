import { Box, Paper, Button, Typography } from "@mui/material";
import Input from "../Input";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Auth/firebase";

export default function SyllabusForm() {
  const [syllabus, setSyllabus] = useState({
    subjectName: "",
    class: "",
  });
  console.log(syllabus);
  const navigate = useNavigate();
  const handleClick = async () => {
    if (syllabus.subjectName === "" || syllabus.class === "") {
      alert("Empty Field");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "SyllabusList"), {
        syllabus,
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigate("/dashboard/syllabusList");
  };
  console.log(syllabus);

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
          Syllabus Form
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
              setSyllabus({ ...syllabus, subjectName: e.target.value })
            }
          />

          <Input
            labelName="class"
            onChangeValue={(e) =>
              setSyllabus({
                ...syllabus,
                class: e.target.value,
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
            Add Syllabus
          </Button>
        </div>
      </Paper>
    </Box>
  );
}
