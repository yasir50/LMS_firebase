import { Box, Paper, Button, Typography } from "@mui/material";
import Input from "../Input";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Auth/firebase";

export default function Registration() {
  const [registration, setSubjectsData] = useState({
    fullName: "",
    contact: "",
    class: "",
  });
  console.log(registration);
  const navigate = useNavigate();
  const handleClick = async () => {
    if (
      registration.fullName === "" ||
      registration.contact === "" ||
      registration.class === ""
    ) {
      alert("Empty Field");
      return;
    }

    // try {
    //   const docRef = await addDoc(collection(db, "SubjectsList"), {
    //     registration,
    //   });
    //   // console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
    // navigate("/dashboard/subjectList");
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
          School Registration{" "}
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
              setSubjectsData({ ...registration, fullName: e.target.value })
            }
          />

          <Input
            labelName="Contact"
            onChangeValue={(e) =>
              setSubjectsData({
                ...registration,
                contact: e.target.value,
              })
            }
          />

          <Input
            labelName="Class"
            onChangeValue={(e) =>
              setSubjectsData({
                ...registration,
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
            Add Student
          </Button>
        </div>
      </Paper>
    </Box>
  );
}
