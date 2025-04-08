"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBackground = !isScrolled ? "bg-transparent" : "bg-white shadow-md";
  const textColor = !isScrolled ? "text-white" : "text-black";

  const linkClass = (href: string) =>
    `hover:text-darkyellow transition-colors ${
      pathname === href ? "border-b-2 border-darkyellow" : ""
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground} backdrop-blur-sm py-2`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="QX Tech It Company Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${textColor}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav
          className={`hidden md:flex items-center space-x-8 ${textColor}`}
        >
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/services" className={linkClass("/services")}>
            Services
          </Link>
          <Link href="/showcase" className={linkClass("/showcase")}>
            Showcase
          </Link>
          <Link href="/blog" className={linkClass("/blog")}>
            Blog
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            About Us
          </Link>
          <Link href="/?redirect=off" className={linkClass("/?redirect=off")}>
            EN
          </Link>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className={`md:hidden ${navBackground} ${textColor} px-4 py-4 space-y-4 `}>
          <Link href="/" className="block" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link
            href="/services"
            className="block"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/showcase"
            className="block"
            onClick={() => setIsMenuOpen(false)}
          >
            Showcase
          </Link>
          <Link
            href="/blog"
            className="block"
            onClick={() => setIsMenuOpen(false)}
          >
            Collaboration
          </Link>
          <Link
            href="/contact"
            className="block"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/?redirect=off"
            className="block"
            onClick={() => setIsMenuOpen(false)}
          >
            EN
          </Link>
        </div>
      )}
    </header>
  );
}
