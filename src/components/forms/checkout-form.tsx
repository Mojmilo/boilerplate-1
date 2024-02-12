'use client';

import {Input} from "@/components/maxvzl-ui/input";
import {Textarea} from "@/components/maxvzl-ui/textarea";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {ArrowRightCircleIcon} from "lucide-react";
import * as React from "react";
import {useState} from "react";
import {
    useElements,
    useStripe,
    PaymentElement,
} from '@stripe/react-stripe-js';
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {createPaymentIntent} from "@/lib/actions";

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name is too short",
    }),
    lastName: z.string().min(2, {
        message: "Last name is too short",
    }),
    companyName: z.string().min(2, {
        message: "Company name is too short",
    }),
    country: z.string().min(2, {
        message: "Country is too short",
    }),
    city: z.string().min(2, {
        message: "City is too short",
    }),
    stateProvince: z.string().min(2, {
        message: "State / Province is too short",
    }),
    address: z.string().min(2, {
        message: "Address is too short",
    }),
    postcode: z.string().min(2, {
        message: "Postcode is too short",
    }),
    phone: z.string().min(2, {
        message: "Phone is too short",
    }),
    email: z.string().email({
        message: "Invalid email",
    }),
    orderNotes: z.string().min(2, {
        message: "Order notes is too short",
    }),
})

export default function CheckoutForm() {
    const [paymentMethod, setPaymentMethod] = useState('card-payments');

    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            companyName: "",
            country: "",
            city: "",
            stateProvince: "",
            address: "",
            postcode: "",
            phone: "",
            email: "",
            orderNotes: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (stripe == null || elements == null) {
            return;
        }

        const {error: submitError} = await elements.submit();
        if (submitError) {
            setErrorMessage(submitError.message);
            return;
        }

        const clientSecret = await createPaymentIntent(10);

        if (clientSecret == null) {
            return;
        }

        try {
            const {error} = await stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: window.location.origin,
                    payment_method_data: {
                        billing_details: {
                            name: `${values.firstName} ${values.lastName}`,
                            email: values.email,
                            phone: values.phone,
                            address: {
                                city: values.city,
                                country: values.country,
                                line1: values.address,
                                postal_code: values.postcode,
                                state: values.stateProvince,
                            },
                        }
                    }
                }
            });

            if (error) {
                setErrorMessage(error.message);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={'flex flex-col justify-between items-start space-y-8'}>
                <span className={'text-2xl font-semibold'}>Billing details</span>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 w-full">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="First name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Last name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Company name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Country" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="City" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="stateProvince"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="State / Province" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="postcode"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Postcode" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Phone" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <span className={'text-2xl font-semibold'}>Additional information</span>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <FormField
                            control={form.control}
                            name="orderNotes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea placeholder="Order notes" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <span className={'text-2xl font-semibold'}>Payment method</span>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value)}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="card-payments" id="r1" />
                                <Label htmlFor="r1">Card payments</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="paypal-payments" id="r2" disabled />
                                <Label htmlFor="r2">Paypal payments</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </div>
                {paymentMethod === 'card-payments' && (
                    <div className="w-full space-y-2">
                        <div className="w-full" id="card-element">
                            <PaymentElement />
                        </div>
                        {errorMessage && <div className={'text-xs text-destructive'}>{errorMessage}</div>}
                    </div>
                )}
                <Button type={'submit'} className={'gap-4 px-5 py-7'} disabled={!stripe || !elements}>
                    <ArrowRightCircleIcon size={24} />
                    <span>Place order</span>
                </Button>
            </form>
        </Form>
    )
}