import { Header } from "@/widgets";
import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

const fira_code = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Byster",
  description: "Лучший сайт",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={fira_code.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
