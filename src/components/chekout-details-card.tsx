'use client';

import * as React from "react"

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {loadStripe} from '@stripe/stripe-js';
import {
    Elements,
} from '@stripe/react-stripe-js';
import CheckoutForm from "@/components/forms/checkout-form";

export function ChekoutDetailsCard() {
    const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY as string);

    return (
        <Card className="w-full border-none shadow-[0px_0px_8px_-2px_rgba(0,0,0,.1)] pt-5">
            <CardContent>
                <Elements stripe={stripePromise} options={{
                    mode: 'payment',
                    amount: 1000,
                    currency: 'usd',
                }}>
                    <CheckoutForm />
                </Elements>
            </CardContent>
        </Card>
    )
}
