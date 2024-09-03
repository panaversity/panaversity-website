// export const studentPrograms = [
// ];
export const studentPrograms = [
  { programId: 1, programTitle: "Cloud Applied Generative AI Engineer" },
  { programId: 2, programTitle: "Blockchain Developer" },
  { programId: 3, programTitle: "Blockchain Developer" },
  { programId: 4, programTitle: "Blockchain Developer" },
  { programId: 5, programTitle: "Blockchain Developer" },

];

type PaymentStatus = "pending" | "not payable" | "paid";


export interface CoursePayment {
  courseTitle: string;
  courseNumber: number;
  batchNumber: number;
  feeAmount: number | null;
  paymentDeadline: string | null;
  paymentStatus: PaymentStatus;
}

export const initialCoursePayments: CoursePayment[] = [
  {
    courseTitle:
      "Fundamentals of Prompt Engineering, Docker, GitHub, and Modern Python Programming",
    courseNumber: 1,
    batchNumber: 1,
    feeAmount: null,
    paymentDeadline: null,
    paymentStatus: "paid",
  },
  {
    courseTitle:
      "Applied Generative AI Fundamentals: Prompt Engineering, Developing Custom GPTs and Multi AI Agent Systems:",
    courseNumber: 2,
    batchNumber: 1,
    feeAmount: 5000,
    paymentDeadline: "2023-12-01",
    paymentStatus: "pending",
  },
  {
    courseTitle:
      "Cloud Native AI Powered Microservices Design, Development, and Deployment",
    courseNumber: 3,
    batchNumber: 1,
    feeAmount: null,
    paymentDeadline: null,
    paymentStatus: "not payable",
  },
  {
    courseTitle: "Generative AI with PyTorch",
    courseNumber: 4,
    batchNumber: 1,
    feeAmount: null,
    paymentDeadline: null,
    paymentStatus: "not payable",
  },
  {
    courseTitle: "FaFine-Tuning Open-Source Large Language Modelsll",
    courseNumber: 5,
    batchNumber: 1,
    feeAmount: null,
    paymentDeadline: null,
    paymentStatus: "not payable",
  },
  {
    courseTitle: "Kubernetes and Advanced CNAI",
    courseNumber: 6,
    batchNumber: 1,
    feeAmount: null,
    paymentDeadline: null,
    paymentStatus: "not payable",
  },
  {
    courseTitle: "Physical AI and Humanoid Robotics Development",
    courseNumber: 7,
    batchNumber: 1,
    feeAmount: null,
    paymentDeadline: null,
    paymentStatus: "not payable",
  },
];
