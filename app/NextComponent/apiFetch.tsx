// 'use client'
import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import { FaArrowRight } from "react-icons/fa";
async function fetchProducts() {
  const res = await fetch("https://jsonserver.reactbd.com/phone");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
interface productData {
    _id:number;
    image: string;
    title : string;
    price : number ;
    category : string;
    previousPrice:string
}
export default async function FetchProduct() {
  const products = await fetchProducts();

  return (
    <div className="flex flex-wrap justify-center items-center gap-20 mt-2">
      {products.map((product: productData) => (
        <Link href={`/product/${product._id}`} key={product._id}>
         <Card className="shadow-2xl">
              <CardHeader>
                <Image
                  src={product?.image}
                  alt={product.title}
                  width={300}
                  height={200}
                />
              </CardHeader>
              <CardTitle className="text-gray-600 ml-5">
                {product?.title}
              </CardTitle>
              <CardFooter className="font-bold mt-4 justify-between">
                ${product?.price}
                <del>${product.previousPrice}</del>
              </CardFooter>
              <CardFooter className="flex justify-between">
                <span className="text-gray-800 font-medium">Add to cart</span>
                <span className="flex text-gray-900 font-bold">
                  More Info <FaArrowRight className="text-blue-600 mt-1 ml-1" />
                </span>
              </CardFooter>
            </Card>
            </Link>
      ))}
    </div>
  );
}
