import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/maxvzl-ui/input"
import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/maxvzl-ui/textarea";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {ArrowRightCircleIcon} from "lucide-react";

export function BillingDetailsCard() {
    return (
        <Card className="w-full border-none shadow-[0px_0px_8px_-2px_rgba(0,0,0,.1)]">
            <CardHeader>
                <CardTitle>Billing details</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 w-full">
                        <Input id="first-name" name="first-name" placeholder="First name" />
                        <Input id="last-name" name="last-name" placeholder="Last name" />
                        <Input id="company-name" name="company-name" placeholder="Company name" />
                        <Input id="country" name="country" placeholder="Country" />
                        <Input id="city" name="city" placeholder="City" />
                        <Input id="state-province" name="state-province" placeholder="State / Province" />
                        <Input id="address" name="address" placeholder="Address" />
                        <Input id="postcode" name="postcode" placeholder="Postcode" />
                        <Input id="phone" name="phone" placeholder="Phone" />
                        <Input id="email" name="email" placeholder="Email" />
                    </div>
                </form>
            </CardContent>

            <CardHeader>
                <CardTitle>Additional information</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Textarea id="order-notes" name="order-notes" placeholder="Order notes" />
                        </div>
                    </div>
                </form>
            </CardContent>

            <CardHeader>
                <CardTitle>Payment method</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <RadioGroup defaultValue="comfortable">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label htmlFor="r1">Default</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label htmlFor="r2">Comfortable</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label htmlFor="r3">Compact</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex justify-between">
                <Button className={'gap-4 px-5 py-7'}>
                    <ArrowRightCircleIcon size={24} />
                    <span>Place order</span>
                </Button>
            </CardFooter>
        </Card>
    )
}
