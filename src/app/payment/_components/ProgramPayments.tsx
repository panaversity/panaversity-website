"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AlertCircle, MousePointerClick } from "lucide-react";

import React, { useEffect, useRef } from "react";
import { studentPrograms } from "./dummyData";
import { initialCoursePayments } from "./dummyData";
import KP_Logo from "@/../public/kpk/kp_logo.png";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type PaymentStatus = "pending" | "locked" | "paid";
const statusColors: Record<PaymentStatus, string> = {
  pending: "bg-yellow-500",
  locked: "bg-gray-500",
  paid: "bg-green-500",
};

interface ProgramPaymentsProps {
  fee_amount: number;
  currency: string;
}

export const ProgramPayments: React.FC<ProgramPaymentsProps> = ({
  fee_amount,
  currency,
}) => {
  const [preferredDay, setPreferredDay] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const router = useRouter();
  const country = Cookies.get("country") || "NA";

  const handleSubmit = async (paymentMethod: string) => {
    if (paymentMethod == "Card") {
      const response = await fetch("./api/payment/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          batch_no: "62",
          course_id: "6fa459ea-ee8a-3ca4-894e-db77e160355e",
          course_name: "Python for Beginners",
          program_id: "123e4567-e89b-12d3-a456-426614174000",
          user_id: "3",
        }),
      });

      const data = await response.json();

      if (data.redirectUrl) {
        // redirect to the URL stored in data
        router.push(data.redirectUrl);
      } else {
        console.log("error");
      }
    } else {
      console.log({
        programName: "Web Development Bootcamp",
        courseName: "Advanced React",
        courseNumber: "WD301",
        batchNumber: "Batch 22",
        fee: 999,
        dueDate: "2023-12-31",
        preferredDay,
        preferredTime,
        paymentMethod,
      });
    }
  };
  return (
    <div className="flex w-full flex-col gap-8">
      {studentPrograms.map((program, programIndex) => {
        // Use a separate ref array for each program
        const cardsRef = useRef<HTMLDivElement[]>([]);

        useEffect(() => {
          const maxHeight = Math.max(
            ...cardsRef.current.map((card) => card?.offsetHeight || 0),
          );
          cardsRef.current.forEach((card) => {
            if (card) {
              card.style.height = `${maxHeight}px`;
            }
          });
        }, []);

        return (
          <div key={programIndex} className="space-y-4 p-2">
            <h3 className="text-2xl font-semibold sm:text-3xl">
              {program.programTitle}
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {initialCoursePayments.map((payment, index) => (
                <Dialog key={index}>
                  {payment.paymentStatus === "pending" ? (
                    <DialogTrigger asChild disabled>
                      <Card
                        className={`flex flex-col ${payment.paymentStatus === "pending" ? "cursor-pointer" : "cursor-not-allowed"}`}
                        ref={(el) => {
                          if (el) cardsRef.current[index] = el;
                        }}
                      >
                        <CardHeader className="flex-grow pb-2">
                          <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                            <p>Course {payment.courseNumber}</p>
                            <p>Batch {payment.batchNumber}</p>
                          </div>
                          <CardTitle className="text-lg">
                            {payment.courseTitle}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          {payment.paymentStatus === "pending" && (
                            <>
                              <p className="mb-2 text-right font-semibold">
                                Fee : {fee_amount} {currency}
                              </p>
                              <p className="text-right text-sm font-medium text-primary">
                                {payment.paymentDeadline &&
                                  "Paid By : " +
                                    new Date(
                                      payment.paymentDeadline,
                                    ).toLocaleDateString()}
                              </p>
                            </>
                          )}
                        </CardContent>
                        <CardFooter className="pt-2">
                          <Badge
                            className={`${statusColors[payment.paymentStatus]} w-full justify-center hover:${statusColors[payment.paymentStatus]} text-md h-8 space-x-3`}
                            aria-label={`Payment status: ${payment.paymentStatus}`}
                          >
                            <p>{payment.paymentStatus}</p>
                            <MousePointerClick />
                          </Badge>
                        </CardFooter>
                      </Card>
                    </DialogTrigger>
                  ) : (
                    <Card
                      className={`flex cursor-not-allowed flex-col bg-slate-50`}
                      ref={(el) => {
                        if (el) cardsRef.current[index] = el;
                      }}
                    >
                      <CardHeader className="flex-grow pb-2">
                        <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                          <p>Course {payment.courseNumber}</p>
                          <p>Batch {payment.batchNumber}</p>
                        </div>
                        <CardTitle className="text-lg">
                          {payment.courseTitle}
                        </CardTitle>
                      </CardHeader>
                      <CardFooter className="pt-2">
                        <Badge
                          className={`${statusColors[payment.paymentStatus]} w-full justify-center hover:${statusColors[payment.paymentStatus]} text-md h-8`}
                          aria-label={`Payment status: ${payment.paymentStatus}`}
                        >
                          {payment.paymentStatus}
                        </Badge>
                      </CardFooter>
                    </Card>
                  )}

                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="mx-auto">
                        <Image
                          width={100}
                          height={100}
                          className="h-28 w-auto outline-none"
                          src={KP_Logo}
                          alt="KPK GOV LOGO"
                        />
                      </DialogTitle>
                    </DialogHeader>
                    <Card className="mx-auto w-full max-w-md">
                      <CardHeader>
                        <CardTitle className="text-center">
                          Course Payment
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <Label className="font-medium">Program</Label>
                            <p>Cloud Applied Generative AI Engineer</p>
                          </div>
                          <div>
                            <Label className="font-medium">Course</Label>
                            <p>Applied Generative AI Fundamentals</p>
                          </div>
                          <div>
                            <Label className="font-medium">Course Number</Label>
                            <p>2</p>
                          </div>
                          <div>
                            <Label className="font-medium">Batch</Label>
                            <p>Batch 01</p>
                          </div>
                          <div>
                            <Label className="font-medium">Fee</Label>
                            <p>
                              {fee_amount} {currency}
                            </p>
                          </div>
                          <div>
                            <Label className="font-medium">Due Date</Label>
                            <p>2025-01-01</p>
                          </div>
                        </div>

                        {/* <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="preferredDay">Preferred Day</Label>
                            <Select
                              value={preferredDay}
                              onValueChange={setPreferredDay}
                            >
                              <SelectTrigger id="preferredDay">
                                <SelectValue placeholder="Select a day" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="monday">Monday</SelectItem>
                                <SelectItem value="tuesday">Tuesday</SelectItem>
                                <SelectItem value="wednesday">
                                  Wednesday
                                </SelectItem>
                                <SelectItem value="thursday">
                                  Thursday
                                </SelectItem>
                                <SelectItem value="friday">Friday</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="preferredTime">
                              Preferred Time Slot
                            </Label>
                            <Select
                              value={preferredTime}
                              onValueChange={setPreferredTime}
                            >
                              <SelectTrigger id="preferredTime">
                                <SelectValue placeholder="Select a time slot" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="morning">Morning</SelectItem>
                                <SelectItem value="afternoon">
                                  Afternoon
                                </SelectItem>
                                <SelectItem value="evening">Evening</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div> */}

                        <div className="flex items-center space-x-2 text-yellow-600">
                          <AlertCircle className="h-4 w-4" />
                          <p className="text-sm">
                            Online Zoom classes schedule will be shared through
                            Email
                          </p>
                        </div>
                      </CardContent>
                      {country === "PK" ? (
                        <CardFooter className="flex justify-between">
                          <Button onClick={() => handleSubmit("Card")}>
                            Pay with Card
                          </Button>
                          <Button onClick={() => handleSubmit("KucikPay")}>
                            Pay with KucikPay
                          </Button>
                        </CardFooter>
                      ) : (
                        <CardFooter className="flex items-center justify-center">
                          <Button onClick={() => handleSubmit("Card")}>
                            Pay with Card
                          </Button>
                        </CardFooter>
                      )}
                    </Card>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
