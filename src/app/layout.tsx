import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "./providers/store-provider";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AI Insurance Assistant",
  description: "Project by Subhash Nayak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className} antialiased`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
