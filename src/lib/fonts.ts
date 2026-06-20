import { Inter } from "next/font/google";

// All fonts: Inter — Clean Swiss Minimal design system
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Use bodyFont as headingFont too — all Inter
export const headingFont = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});
