import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Management",
  description: "Task Management Improve Your Skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#191D26] font-[Inter] text-white">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
