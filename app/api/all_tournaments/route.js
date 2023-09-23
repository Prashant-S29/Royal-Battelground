import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const all_tournaments = await stripe.prices.list();
  return NextResponse.json(all_tournaments.data)
}
