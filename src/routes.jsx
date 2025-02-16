import StudentAddEdit from "./Components/Students/StudentAddEdit";
import StudentsList from "./Components/Students/StudentList";
import TeacherAddEdit from "./Components/Teacher/TeacherAddEdit";
import TeacherList from "./Components/Teacher/TeacherList";
import Registration from "./Components/School/Registration";
import SubjectAddEdit from "./Components/Subjects/SubjectsAddEdit";
import SubjectList from "./Components/Subjects/SubjectList";
import SyllabusForm from "./Components/Syllabus/SyllabusForm";
import SyllabusList from "./Components/Syllabus/SyllabusList";
import ClassForm from "./Components/Class/ClassForm";
import ClassList from "./Components/Class/ClassList";
import FeeStructure from "./Components/Fees/FeesStructure";
import FeesSubmit from "./Components/Fees/FeesSubmit";
import FeesVoucher from "./Components/Fees/FeesVoucher";
import Admission from "./Components/Admission/Admission";
import ExamShedule from "./Components/Exam/ExamSchedule";
import ExamResult from "./Components/Exam/ExamResult";

const routes = [
  { path: "/studentAddEdit", element: <StudentAddEdit /> },
  { path: "/studentList", element: <StudentsList /> },
  { path: "/teacherAddEdit", element: <TeacherAddEdit /> },
  { path: "/teacherList", element: <TeacherList /> },
  { path: "/addSubject", element: <SubjectAddEdit /> },
  { path: "/subjectList", element: <SubjectList /> },
  { path: "/schoolRegistration", element: <Registration /> },
  { path: "/syllabusForm", element: <SyllabusForm /> },
  { path: "/syllabusList", element: <SyllabusList /> },
  { path: "/classForm", element: <ClassForm /> },
  { path: "/classList", element: <ClassList /> },
  { path: "/feeStructure", element: <FeeStructure /> },
  { path: "/feeSubmission", element: <FeesSubmit /> },
  { path: "/feeVoucher", element: <FeesVoucher /> },
  { path: "/admission", element: <Admission /> },
  { path: "/examSchedule", element: <ExamShedule /> },
  { path: "/examResult", element: <ExamResult /> },
];
export { routes };
