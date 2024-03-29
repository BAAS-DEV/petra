import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import BigCard from "@/components/BAAS/Cards/BigCard"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"

import { useCartContext } from "../../Context/CartContext"
import CartItem from "../CartItem"

export default function CheckoutPT1({ form }) {
  const { CartObject, setCartObject } = useCartContext()

  return (
    <div className="mx-auto mt-8 flex w-full flex-wrap items-center justify-center gap-2  ">
      <div className="h-full w-full">
        <PricingSection form={form} />
      </div>
      <div className="w-full space-y-2  overflow-y-scroll border">
        {CartObject.items.map((item, i) => {
          return <CartItem data={item} />
        })}
      </div>
    </div>
  )
}

function PricingSection({ form }) {
  const { CartObject } = useCartContext()

  function GetSubtotal(): number {
    let subtotal = 0
    CartObject.items.forEach((item, i) => {
      subtotal = subtotal + item.Price
    })
    return subtotal
  }

  function GetTaxAmount(): number {
    let tax = 0.0825

    let sub = GetSubtotal()

    sub = sub * tax

    return sub
  }
  function GetTotal(): number {
    let res = GetSubtotal() + GetTaxAmount()
    res.toFixed(2)
    return res
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl">Order Pricing</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="w-full space-y-4 text-left">
          <div className="flex w-full justify-between">
            <Label className="text-xl font-light">Sub Total</Label>
            <Label className="text-xl font-semibold">${GetSubtotal()}</Label>
          </div>
          <div className="flex w-full justify-between">
            <Label className="text-xl font-light">Tax</Label>
            <Label className="text-xl font-semibold">
              ${GetTaxAmount().toFixed(2)}
            </Label>
          </div>
          <div className="flex w-full justify-between ">
            <Label className="text-2xl font-light">Total:</Label>
            <Label className="text-2xl font-semibold">
              ${GetTotal().toFixed(2)}
            </Label>
          </div>
          <Separator />

          <div className="flex items-center justify-between">
            <TextInput
              form={form}
              options={{
                name: "couponCode",
                description: "Enter Discount Code if You Have One",
                placeholder: "deal123",
                label: "Enter Coupon Code",
              }}
            />
            <Button>Update</Button>
          </div>
          {/* <Separator /> */}
        </div>
      </CardContent>
      {/* <CardFooter>
        <Button className="text-xl w-full">Continue</Button>
      </CardFooter> */}
    </Card>
  )
}
