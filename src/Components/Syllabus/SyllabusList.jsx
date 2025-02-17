import TableList from "../Table";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Auth/firebase";
import { Typography } from "@mui/material";

export default function SyllabusList() {
  const [firestoreData, setFirestoreData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let arr = [];
    try {
      const querySnapshot = await getDocs(collection(db, "SyllabusList"));
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data().syllabus, id: doc.id, key: doc.id });
        setFirestoreData([...arr]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(firestoreData);
  const defaultColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Subject Name",
      dataIndex: "subjectName",
    },
    {
      title: "Class",
      dataIndex: "class",
    },
  ];
  return (
    <>
      <Typography
        sx={{
          textShadow: "3px 3px 0px rgba(0, 0, 0, 0.4)",
        }}
        variant="h4"
        fontWeight={"bold"}
        align="center"
        marginBottom={10}
        marginTop={8}
      >
        SYLLABUS LIST
      </Typography>
      <TableList dataSource={firestoreData} defaultColumns={defaultColumns} />
    </>
  );
}
