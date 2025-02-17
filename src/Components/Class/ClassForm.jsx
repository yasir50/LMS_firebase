import { Box, Paper, Button, Typography } from "@mui/material";
import Input from "../Input";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Auth/firebase";

export default function ClassForm() {
  const [classData, setClassData] = useState({
    className: "",
    classTeacher: "",
    grade: "",
  });
  console.log(classData);
  const navigate = useNavigate();
  const handleClick = async () => {
    if (
      classData.className === "" ||
      classData.classTeacher === "" ||
      classData.grade === ""
    ) {
      alert("Empty Field");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "classList"), {
        classData,
      });
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigate("/dashboard/classList");
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
          Add Class
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
            labelName="Class Name"
            onChangeValue={(e) =>
              setClassData({ ...classData, className: e.target.value })
            }
          />

          <Input
            labelName="Class Teacher"
            onChangeValue={(e) =>
              setClassData({
                ...classData,
                classTeacher: e.target.value,
              })
            }
          />

          <Input
            labelName="Grade"
            onChangeValue={(e) =>
              setClassData({
                ...classData,
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
            Add Class
          </Button>
        </div>
      </Paper>
    </Box>
  );
}
