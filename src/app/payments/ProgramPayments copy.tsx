"use client";

import React, { useEffect, useRef } from "react";
import { studentPrograms } from "./dummyData";
import { initialCoursePayments } from "./dummyData";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PaymentStatus = "pending" | "not payable" | "paid";
const statusColors: Record<PaymentStatus, string> = {
  pending: "bg-yellow-500",
  "not payable": "bg-gray-500",
  paid: "bg-green-500",
};

export const ProgramPayments = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      {studentPrograms.map((program, programIndex) => {
        // Use a separate ref array for each program
        const cardsRef = useRef<HTMLDivElement[]>([]);

        useEffect(() => {
          const maxHeight = Math.max(
            ...cardsRef.current.map(card => card?.offsetHeight || 0)
          );
          cardsRef.current.forEach(card => {
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
                <Card
                  key={index}
                  className={`flex flex-col ${payment.paymentStatus === "pending" ? "cursor-pointer" : "cursor-not-allowed"}`}
                  ref={el => {
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
                          Fee : ${payment.feeAmount?.toLocaleString()}
                        </p>
                        <p className="text-right text-sm font-medium text-primary">
                          {payment.paymentDeadline &&
                            "Paid By : " +
                              new Date(payment.paymentDeadline).toLocaleDateString()}
                        </p>
                      </>
                    )}
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Badge
                      className={`${statusColors[payment.paymentStatus]} w-full justify-center hover:${statusColors[payment.paymentStatus]}`}
                      aria-label={`Payment status: ${payment.paymentStatus}`}
                    >
                      {payment.paymentStatus}
                    </Badge>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
