'use server';

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: "2023-10-16",
});

export async function createPaymentMethod(number: string, exp_month: number, exp_year: number, cvc: string) {
    try {
        const paymentMethod = await stripe.paymentMethods.create({
            type: "card",
            card: {
                number: number,
                exp_month: exp_month,
                exp_year: exp_year,
                cvc: cvc,
            },
        });
        return paymentMethod.id;
    } catch (error) {
        return null;
    }
}

export async function createPaymentIntent(amount: number) {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: "USD",
        });
        return paymentIntent.client_secret;
    } catch (error) {
        return null;
    }
}

export async function createSession(amount: number, baseUrl: string) {
    try {
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            currency: "usd",
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "Test",
                        },
                        unit_amount: amount * 100,
                    },
                    quantity: 1,
                },
            ],
            success_url: `${baseUrl}/shop/checkout/success`,
            cancel_url: `${baseUrl}/shop/checkout/cancel`,
        });
        return session.id;
    } catch (error) {
        return null;
    }
}