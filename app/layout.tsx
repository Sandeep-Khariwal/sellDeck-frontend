"use client"
import { Geist, Geist_Mono } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { Provider } from 'react-redux'
import { store } from "@/redux/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider>
          <Provider store={store} >

          {children}
          </Provider>
          </MantineProvider>
      </body>
    </html>
  );
}
