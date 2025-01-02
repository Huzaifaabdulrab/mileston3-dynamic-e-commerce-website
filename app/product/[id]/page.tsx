'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { IoIosStarOutline, IoMdStar } from "react-icons/io";

interface Product {
  _id: number;
  title: string;
  price: number;
  previousPrice?: number;
  description: string;
  category: string;
  image: string;
  brand: string;
}

async function fetchProduct(id: string) {
  const res = await fetch(`https://jsonserver.reactbd.com/phone/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

const generateRandomStar = () => {
  const totalStar: number = 5;
  const filledStar = Math.floor(Math.random() * (totalStar + 1));
  const outlineStar = totalStar - filledStar;
  const stars = [];
  for (let i = 0; i < filledStar; i++) {
    stars.push(<IoMdStar key={i} className="text-yellow-400 mt-1 text-lg" />);
  }
  for (let i = 0; i < outlineStar; i++) {
    stars.push(<IoIosStarOutline key={i} className="text-yellow-400 mt-1 " />);
  }
  return stars;
};

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [product, setProduct] = useState<Product | null>(null);
  const [heart, setHeart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProduct(params.id);
      setProduct(data);
    };
    
    fetchData();
  }, [params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {product?.title}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-gray-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                {product?.description}
              </a>
            </div>
            <a className="flex py-3 text-lg  px-1">
              Reviews {generateRandomStar()}
            </a>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Brand</span>
              <span className="ml-auto text-gray-900">{product?.brand}</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Quantity</span>
            </div>

            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Previous Price</span>
              <span className="ml-auto text-gray-900">
                <del>{product?.previousPrice}$</del>
              </span>
            </div>
            <div className="flex mb-2 border-t border-b border-gray-200 py-2">
              <span className="text-gray-500">Latest Price</span>
              <span className="ml-auto text-gray-900 ">{product?.price}$</span>
            </div>
            <div className="flex mt-2 ">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Order
              </button>
              <button
                className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                onClick={() => setHeart(!heart)}
              >
                {heart ? (
                  <FaHeart className="text-pink-500" />
                ) : (
                  <FaHeart className="text-gray-500" />
                )}
              </button>
            </div>
          </div>
          <Image
            alt={product?.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product?.image}
            width={500} // Specify a width
            height={500} // Specify a height
            priority={true} // Optional: Optimizes loading
          />
        </div>
      </div>
    </section>
  );
}
