"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="shadow-md sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo/logo.webp"
            alt="AgroEssence Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-green-900 font-medium items-center">

          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>

          {/* Products Dropdown */}
<div className="relative group">

<Link href="/products" className="hover:text-green-600">
  Products ▾
</Link>

{/* Hover Bridge (Prevents Closing) */}
<div className="absolute left-0 top-6 h-6 w-full"></div>

{/* Dropdown Menu */}
<div
  className="
  absolute top-10 left-0
  bg-white shadow-2xl
  rounded-xl
  p-3
  w-72
  border
  opacity-0 invisible
  group-hover:opacity-100
  group-hover:visible
  transition duration-200
  z-50
  "
>

  <Link href="/products"
    className="block px-3 py-2 rounded-lg hover:bg-green-50">
    All Products
  </Link>

  <Link href="/products#soil-manure"
    className="block px-3 py-2 rounded-lg hover:bg-green-50">
    Soil and Manure
  </Link>

  <Link href="/products#plant-nutrition"
    className="block px-3 py-2 rounded-lg hover:bg-green-50">
    Plant Nutrition and Fertilizers
  </Link>

  <Link href="/products#plant-protection"
    className="block px-3 py-2 rounded-lg hover:bg-green-50">
    Plant Protection and Bio-Solutions
  </Link>

  <Link href="/products#soil-media"
    className="block px-3 py-2 rounded-lg hover:bg-green-50">
    Soil Media and Potting Mix Components
  </Link>

  <Link href="/products#garden-tools"
    className="block px-3 py-2 rounded-lg hover:bg-green-50">
    Garden Tools and Accessories
  </Link>

</div>

</div>
          <Link href="/about" className="hover:text-green-600 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-green-600 transition">
            Contact
          </Link>

        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-0.5 w-6 bg-green-800 transition ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`} />

          <span className={`h-0.5 w-6 bg-green-800 transition ${
            open ? "opacity-0" : ""
          }`} />

          <span className={`h-0.5 w-6 bg-green-800 transition ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`} />
        </button>
      </div>


      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-3 px-6 text-green-800 font-medium">

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          {/* Mobile Products */}
          <div>

            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="w-full text-left"
            >
              Products ▾
            </button>

            {productsOpen && (
              <div className="pl-4 mt-2 flex flex-col space-y-2 text-green-700">

                <Link href="/products" onClick={() => setOpen(false)}>
                  All Products
                </Link>

                <Link href="/products#soil-manure" onClick={() => setOpen(false)}>
                  Soil and Manure
                </Link>

                <Link href="/products#plant-nutrition" onClick={() => setOpen(false)}>
                  Plant Nutrition
                </Link>

                <Link href="/products#plant-protection" onClick={() => setOpen(false)}>
                  Plant Protection
                </Link>

                <Link href="/products#soil-media" onClick={() => setOpen(false)}>
                  Soil Media
                </Link>

                <Link href="/products#garden-tools" onClick={() => setOpen(false)}>
                  Garden Tools
                </Link>

              </div>
            )}

          </div>

          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

        </div>
      </div>

    </header>
  );
}