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
import { AlertCircle } from "lucide-react";

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

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

type PaymentStatus = "pending" | "not payable" | "paid";
const statusColors: Record<PaymentStatus, string> = {
  pending: "bg-yellow-500",
  "not payable": "bg-gray-500",
  paid: "bg-green-500",
};

export const ProgramPayments = () => {
  const [preferredDay, setPreferredDay] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  const handleSubmit = async (paymentMethod: string) => {
    if (paymentMethod == "Card") {
      const response = await fetch("/api/payments/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId: "price_1Pt9ZzJkhXgr5TBKDwJoygWN" }),
      });
  
      const session = await response.json();
  
      const stripe: any = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: session.id });
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
                                Fee : ${payment.feeAmount?.toLocaleString()}
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
                            className={`${statusColors[payment.paymentStatus]} w-full justify-center hover:${statusColors[payment.paymentStatus]}`}
                            aria-label={`Payment status: ${payment.paymentStatus}`}
                          >
                            {payment.paymentStatus}
                          </Badge>
                        </CardFooter>
                      </Card>
                    </DialogTrigger>
                  ) : (
                    <Card
                      className={`flex cursor-not-allowed flex-col`}
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
                          className={`${statusColors[payment.paymentStatus]} w-full justify-center hover:${statusColors[payment.paymentStatus]}`}
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
                            <p>Web Development Bootcamp</p>
                          </div>
                          <div>
                            <Label className="font-medium">Course</Label>
                            <p>Advanced React</p>
                          </div>
                          <div>
                            <Label className="font-medium">Course Number</Label>
                            <p>WD301</p>
                          </div>
                          <div>
                            <Label className="font-medium">Batch</Label>
                            <p>Batch 22</p>
                          </div>
                          <div>
                            <Label className="font-medium">Fee</Label>
                            <p>$999</p>
                          </div>
                          <div>
                            <Label className="font-medium">Due Date</Label>
                            <p>2023-12-31</p>
                          </div>
                        </div>

                        <div className="space-y-4">
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
                        </div>

                        <div className="flex items-center space-x-2 text-yellow-600">
                          <AlertCircle className="h-4 w-4" />
                          <p className="text-sm">
                            Please verify your selection. It cannot be changed
                            later.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button onClick={() => handleSubmit("Card")}>
                          Pay with Card
                        </Button>
                        <Button onClick={() => handleSubmit("KucikPay")}>
                          Pay with KucikPay
                        </Button>
                      </CardFooter>
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
