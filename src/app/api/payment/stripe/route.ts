import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await fetch(
      "https://silence-denial-previous-offered.trycloudflare.com/api/v1/payment/stripe/payment-link",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    const data = await result.json();

    if (data.checkout_url) {
      return NextResponse.json({ redirectUrl: data.checkout_url });
    } else {
      return NextResponse.json({ error: "not found" }, { status: 204 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
