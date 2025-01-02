import Link from "next/link";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="lg:block hidden mt-20 text-gray-600 body-font bg-gray-50">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="tex text-2xl font-semibold">M</span>
          <span className="text-gray-500">arket</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          &copy; {currentYear} Market. All rights reserved. @HuzaifaCompany
        </p>
        <span className="inline-flex gap-7 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href={""} className="text-gray-500">
            <Twitter />
          </Link>
          <Link href={""} className="text-gray-500">
            <Facebook />
          </Link>
          <Link href={""} className="text-gray-500">
            <Instagram />
          </Link>
          <Link href={""} className="text-gray-500">
            <Linkedin />
          </Link>
        </span>
      </div>
    </footer>
  );
}