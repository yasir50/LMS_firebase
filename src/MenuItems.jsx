import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";
import {
  SchoolOutlined,
  SupervisorAccountOutlined,
  SubjectOutlined,
  ArticleOutlined,
  PaymentsOutlined,
  AdminPanelSettingsOutlined,
  DescriptionOutlined,
} from "@mui/icons-material";

export const items = [
  {
    label: "Students",
    icon: <UserOutlined />,
    children: [
      {
        label: "Add Student",
        route: "/dashboard/studentAddEdit",
      },
      {
        label: "Students List",
        route: "/dashboard/studentlist",
      },
    ],
  },

  {
    label: "Teachers",
    icon: <SupervisorAccountOutlined />,
    children: [
      {
        label: "Add Teachers",
        route: "/dashboard/teacherAddEdit",
      },
      {
        label: "Teachers List",
        route: "/dashboard/teacherList",
      },
    ],
  },
  {
    label: "Subjects",
    icon: <SubjectOutlined />,
    children: [
      { label: "Add Subjects", route: "/dashboard/addSubject" },
      { label: "Subjects List", route: "/dashboard/subjectList" },
    ],
  },
  {
    label: "School",
    icon: <SchoolOutlined />,
    children: [
      { label: "Registration", route: "/dashboard/schoolRegistration" },
    ],
  },
  {
    label: "Syllabus",
    icon: <ArticleOutlined />,
    children: [
      { label: "Syllabus Form", route: "/dashboard/syllabusForm" },
      { label: "Syllabus List", route: "/dashboard/syllabusList" },
    ],
  },
  {
    label: "Class",
    icon: <AppstoreOutlined />,
    children: [
      { label: "Class Form", route: "/dashboard/classForm" },
      { label: "Class List", route: "/dashboard/classList" },
    ],
  },
  {
    label: "Fees",
    icon: <PaymentsOutlined />,
    children: [
      { label: "Fee Structure", route: "/dashboard/feeStructure" },
      { label: "Fee Submission", route: "/dashboard/feeSubmission" },
      { label: "Fee Voucher", route: "/dashboard/feeVoucher" },
    ],
  },
  {
    label: "Admission",
    icon: <AdminPanelSettingsOutlined />,
    children: [{ label: "Admission Screen", route: "/dashboard/admission" }],
  },
  {
    label: "Exam",
    icon: <DescriptionOutlined />,
    children: [
      { label: "Exam Schedule", route: "/dashboard/examSchedule" },
      { label: "Exam Result", route: "/dashboard/examResult" },
    ],
  },
];
