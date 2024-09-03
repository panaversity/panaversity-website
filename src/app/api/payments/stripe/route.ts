import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(request: Request) {
  try {
    const { priceId } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${request.headers.get(
        "origin",
      )}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("origin")}/cancel?session_id={CHECKOUT_SESSION_ID}`,
      billing_address_collection: "required", // Require address
      shipping_address_collection: {
        allowed_countries: ["US", "CA"], // Specify allowed countries
      },
      metadata: {
        userId: "user_123", // Pass real user ID here
        packageId: "package_123", // Pass real package ID here
        programName: "Program Name", // Pass real program name here
        courses: "course1,course2,course3", // Pass real courses here, comma-separated
        batchNo: "batch_456", // Pass real batch number here
      },
    });

    return NextResponse.json({ id: session.id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
