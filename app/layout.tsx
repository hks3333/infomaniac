import type { Metadata } from "next";
import { Silkscreen, Della_Respira, Open_Sans } from "next/font/google";
import "./globals.css";

const slkscreen = Silkscreen({
  variable: "--font-silk",
  subsets: ["latin"],
  weight: "400"
}); 

const della = Della_Respira({
  variable: "--font-della",
  subsets: ["latin"],
  weight: "400"
});

const opensans = Open_Sans({
  variable: "--font-open",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "infomaniac",
  description: "Info For Everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${slkscreen.variable} ${della.variable} ${opensans.variable} antialiased px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12`}
      >
        {children}
      </body>
    </html>
  );
}
