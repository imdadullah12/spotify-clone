'use client'
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { TooltipProvider } from "@radix-ui/react-tooltip";

const font = Montserrat({
  weight: ['300', '500'],
  subsets: ['latin'],
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class"
          defaultTheme="dark"
          enableSystem>
          <ProgressBar height="3px" color="#fffd00" options={{ showSpinner: false }} />
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
