import Stripe from "stripe";
import { NextRequest,NextResponse } from "next/server";

export async function POST(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    //in next js 13 request.body is replaced by rqst.json
   let data = await request.json();
   let priceId = data.priceId
   // this session method is given to us by stripe ,this session is stripe checkout session it will open prebuilt 
   //stripe payment page
   //the code written below is prewritten on stripe document
   const session = await stripe.checkout.sessions.create({
    line_items: [
        {
            price:priceId,
            quantity:1
        }
    ],
    mode:"payment",
    success_url: "https://galenaai.vercel.app/success",
    cancel_url:"https://galenaai.vercel.app/cancel"
   })
return NextResponse.json(session.url)
}