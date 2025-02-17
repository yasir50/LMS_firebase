import TableList from "../Table";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Auth/firebase";
import { Typography } from "@mui/material";

export default function ClassList() {
  const [firestoreData, setFirestoreData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let arr = [];
    try {
      const querySnapshot = await getDocs(collection(db, "classList"));
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data().classData, id: doc.id, key: doc.id });
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
      title: "Class Name",
      dataIndex: "className",
    },
    {
      title: "Grade",
      dataIndex: "grade",
    },
    {
      title: "Teacher Name",
      dataIndex: "classTeacher",
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
        CLASS LIST
      </Typography>
      <TableList dataSource={firestoreData} defaultColumns={defaultColumns} />
    </>
  );
}
