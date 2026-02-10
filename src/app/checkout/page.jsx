import Link from "next/link";
import phone from "@/assets/cart1.jpg";
import laptop from "@/assets/cart2.jpg";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import bkash from "@/assets/payment/bkash.png";
import visa from "@/assets/payment/visa.png";
import mastercard from "@/assets/payment/mastercard.png";
import nagad from "@/assets/payment/nagad.png";
import CartFrom from "@/components/CartForm";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";

const CartPage = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="bg-chart-2/5 p-5 my-8">
        Returnin to customer ?{" "}
        <Link href={"/login"} className="text-primary hover:text-chart-1">
          Click Here to Login
        </Link>
      </div>

      <form className="flex flex-col md:flex-row gap-10 my-5">
        <CartFrom />

        {/* right */}
        <div className="flex-1 flex flex-col justify-between gap-5">
          {/* items */}
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={phone} alt="phone" className="w-15" />
                <span className="font-medium">iphone 17pro max</span>
              </div>
              <span className="font-medium">$799</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={laptop} alt="laptop" className="w-15" />
                <span className="font-medium">iphone 17pro max</span>
              </div>
              <span className="font-medium">$1200</span>
            </div>
          </div>

          {/* total */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b-2 pb-2">
              <p>SubTotal:</p>
              <span>$1899</span>
            </div>

            <div className="flex items-center justify-between border-b-2 pb-2">
              <p>Shipping:</p>
              <span>Free</span>
            </div>

            <div className="flex items-center justify-between">
              <p>Total:</p>
              <span>$1899</span>
            </div>
          </div>

          {/* payment method */}
          <div>
            <p className="text-sm font-semibold mb-3">Choose Payment Method</p>

            <div>
              <RadioGroup defaultValue="Pay with Card">
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    className="h-6 w-6 border-2 border-black"
                    value="Pay with Card"
                    id="Pay with Card"
                  />
                  <Label
                    htmlFor="Pay with Card"
                    className="flex items-center justify-between w-full text-base font-normal"
                  >
                    <p>Pay with Card</p>
                    <div className="flex items-center gap-1">
                      <Image src={bkash} alt="bkash" className="w-15" />
                      <Image src={visa} alt="visa" className="w-10" />
                      <Image
                        src={mastercard}
                        alt="mastercard"
                        className="w-10"
                      />
                      <Image src={nagad} alt="nagad" className="w-15" />
                    </div>
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    className="h-6 w-6 border-2 border-black "
                    value="Cash on delivery"
                    id="Cash on delivery"
                  />
                  <Label htmlFor="Cash on delivery">Cash on delivery</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Coupon */}
          <div className="space-y-3">
            <p>Have Coupon / Voucher?</p>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border border-black h-12 pl-3 rounded flex-1/2"
              />
              <Button className="rounded h-12 flex-1">Apply Coupon</Button>
            </div>
          </div>
          <Button className="rounded w-full h-12">Place Order</Button>
        </div>
      </form>

      <Field orientation="horizontal" className="my-10">
        <Checkbox
          id="terms-checkbox-basic"
          name="terms-checkbox-basic"
          className="w-5 h-5 border-black"
        />
        <FieldLabel
          htmlFor="terms-checkbox-basic"
          className="text-lg font-normal"
        >
          Save this information for faster check-out next time
        </FieldLabel>
      </Field>
    </div>
  );
};

export default CartPage;
