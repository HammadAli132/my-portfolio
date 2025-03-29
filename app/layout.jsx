import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Hammad's Portfolio",
  description: "Get your dream website built with Hammad",
  keywords: "Hammad, Portfolio, Web Development, Web Design",
  authors: [
    {
      name: "Hammad",
      url: "",
    },
  ],
  creator: "Hammad",
  publisher: "Hammad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
