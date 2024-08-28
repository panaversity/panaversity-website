import { z } from "zod";

const otpRegex = /^\d{6}$/;
const regNoRegex = /^\d{1,9}$/;
const cnicRegex = /^\d{13}$/;
const phoneNumberRegex = /^0\d{10}$/;
export const RegistrationFormSchema = z.object({
  fullName: z
    .string()
    .min(3, "Please enter more than 3 characters")
    .max(100, "Character limit reached, maximum allowed characters is 100."),
  fatherName: z
    .string()
    .min(3, "Please enter more than 3 characters")
    .max(100, "Character limit reached, maximum allowed characters is 100."),
  cnic: z
    .string()
    .length(13, "CNIC must be 13 digits long")
    .regex(cnicRegex, "CNIC must be 13 digits only"),
  phoneNumber: z
    .string()
    .length(11, "Phone Number must be 11 digits")
    .regex(phoneNumberRegex, "Phone Number must be in the format 0XXXXXXXXXX"),
  city: z
    .string()
    .min(2, "Please select your City")
    .max(45, "Character limit reached, maximum allowed characters is 45."),
  email: z.string().email("Invalid email format"),
  otp: z
    .string()
    .trim()
    .length(6, "OTP must be 6 digits")
    .regex(otpRegex, "OTP must be 6 digits"),
  dateOfBirth: z
    .date()
    .max(new Date(), "Invalid date of birth")
    .refine((value) => {
      const currentDate = new Date();
      const userDate = new Date(value);
      const age = currentDate.getFullYear() - userDate.getFullYear();
      return age >= 12;
    }, "You must be at least 12 years old"),
  gender: z.enum(["male", "female"]),
  highestQualification: z.enum([
    "Matric / O Levels",
    "Intermediate / A Levels",
    "Undergraduate (Bachelor's)",
    "Graduate (Master's)",
    "Post-Graduate (PhD)",
  ]),
});

export const admitCardRequirementsSchema = z.object({
  email: z.string().email("Invalid email format"),
  otp: z
    .string()
    .trim()
    .length(6, "OTP must be 6 digits")
    .regex(otpRegex, "OTP must be 6 digits"),
});

export const ResultRequirementsSchema = z.object({
  id: z.string().regex(regNoRegex, "Registration Number is not valid"),
  cnic: z
    .string()
    .length(13, "CNIC must be 13 digits long")
    .regex(cnicRegex, "CNIC must be 13 digits only"),
});
export type EntranceCardT = {
  fullName: string;
  fatherName: string;
  cnic: string;
  dateOfRegistration: any;
  studentId: string;
};

export const EntranceCardRequirementsSchema = z.object({
  email: z.string().email("Invalid email format"),
  cnic: z
    .string()
    .length(13, "CNIC must be 13 digits long")
    .regex(cnicRegex, "CNIC must be 13 digits only"),
});
