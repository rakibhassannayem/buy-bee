"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import phone from "@/assets/cart1.jpg";
import laptop from "@/assets/cart2.jpg";
import headphone from "@/assets/cart3.jpg";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const initialProducts = [
  {
    id: 1,
    image: phone,
    quantity: 1,
    price: 799,
    total: 799,
  },
  {
    id: 2,
    image: laptop,
    quantity: 1,
    price: 500,
    total: 1000,
  },
  {
    id: 3,
    image: headphone,
    quantity: 1,
    price: 250,
    total: 250,
  },
];

const CartPage = () => {
  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (id: number, delta: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) }
          : product,
      ),
    );
  };

  return (
    <div className="container mx-auto px-3">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-10 my-10">
        <div className="lg:col-span-9 mb-4 lg:mb-0">
          <Table className="border-separate border-spacing-y-4">
            <TableHeader>
              <TableRow>
                <TableHead className="w-60 text-2xl font-bold">
                  Product Details
                </TableHead>
                <TableHead className="text-2xl font-bold">Quantity</TableHead>
                <TableHead className="text-2xl font-bold">Price</TableHead>
                <TableHead className="text-2xl font-bold">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium first:rounded-l last:rounded border-y-2 border-l-2 border-black">
                    <Image
                      src={product.image}
                      alt={product.id.toString()}
                      className="w-16"
                    />
                  </TableCell>
                  <TableCell className="border-y-2 border-black">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon-xs"
                        onClick={() => updateQuantity(product.id, -1)}
                        disabled={product.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-center font-semibold border-2 border-black rounded px-4 py-2">
                        {product.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon-xs"
                        onClick={() => updateQuantity(product.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="border-y-2 border-black">
                    ${product.price}
                  </TableCell>
                  <TableCell className="border-y-2 border-black">
                    ${product.price * product.quantity}
                  </TableCell>
                  <TableCell className="border-y-2 border-r-2 border-black text-red-500 cursor-pointer font-bold first:rounded-l-lg last:rounded-r">
                    x
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Checkout Sidebar */}
        <div className="col-span-12 lg:col-span-3 border p-6 rounded h-fit border-black">
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

          <div className="flex items-center justify-center mt-8">
            <Button className="rounded font-normal p-5">
              <Link href={"/checkout"}>Process to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-8">
        <Button className="rounded p-5">Return To Shop</Button>
        <Button className="rounded p-5">Update Cart</Button>
      </div>
    </div>
  );
};

export default CartPage;
