import { Box, Paper, Button, Typography } from "@mui/material";
import Input from "../Input";
import styles from "./Students.module.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Auth/firebase";

export default function StudentAddEdit() {
  const [studentsData, setStudentsData] = useState({
    fullName: "",
    class: "",
    parentContact: "",
  });
  console.log(studentsData);
  const navigate = useNavigate();
  const handleClick = async () => {
    if (
      studentsData.fullName === "" ||
      studentsData.class === "" ||
      studentsData.parentContact === ""
    ) {
      alert("Empty Field");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "StudentList"), {
        studentsData,
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigate("/dashboard/studentlist");
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
          Students Add
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
              setStudentsData({ ...studentsData, fullName: e.target.value })
            }
          />

          <Input
            labelName="Class"
            onChangeValue={(e) =>
              setStudentsData({ ...studentsData, class: e.target.value })
            }
          />

          <Input
            labelName="Parent Contact"
            onChangeValue={(e) =>
              setStudentsData({
                ...studentsData,
                parentContact: e.target.value,
              })
            }
          />
        </Box>

        <div className={styles.btn}>
          <Button
            variant="contained"
            sx={{ width: "80%", mt: "60px", borderRadius: 0 }}
            onClick={handleClick}
          >
            Add Student
          </Button>
        </div>
      </Paper>
    </Box>
  );
}
