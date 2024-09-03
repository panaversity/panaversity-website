"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export default function Pricing() {
  const handleCheckout: any = async () => {
    const response = await fetch("/api/stripe-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId: "price_1Pt9ZzJkhXgr5TBKDwJoygWN" }),
    });

    const session = await response.json();

    const stripe: any = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button
        onClick={handleCheckout}
        className="rounded-lg bg-blue-500 text-white text-center px-3 py-2 transition-all duration-150 hover:shadow-lg hover:shadow-gray-600 hover:bg-black"
      >
        Subscribe Now
      </button>
    </div>
  );
}