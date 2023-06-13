import Stripe from "stripe";
import { NextResponse } from "next/server";
//next response allows us to send json data to frontend

export async function GET(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const prices = await stripe.prices.list({
        limit: 1
        //we have only 1 item to checkout
    });

    return NextResponse.json(prices.data)
}