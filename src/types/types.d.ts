export type Child = {
  type: 'text' | 'video' | 'link';
  pointer?: string;
  text: string;
  url?: string;
  children?: Child[];
};

export type Outline = {
  title: string;
  children: Child[];
};

export type CourseData = {
  id: number;
  mainTitle: string;
  quarter?: string;
  description: string[];
  outline: Outline[];
};

export type EntranceCardT = {
  fullName: string;
  fatherName: string;
  cnic: string;
  dateOfRegistration: Date | string;
  studentId: string;
};

export type EntranceCardRequirementsT = {
  email: string;
  cnic: string;
};

export type ResultT = {
  status: string;
  id: number;
  exam_date: string;
  name: string;
};

export type QcardsT = {
  LevelTitle: string;
  // LevelDesc: string;
  courses: {
    id: number;
    title: string;
    href: string;
    imageUrl: StaticImageData;
    quarter: string;
    duration: string;
  }[];
};
