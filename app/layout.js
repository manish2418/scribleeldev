"use client"

import ThemeRegistry from "./ThemeRegistry";
import SplashScreen from "./components/SplashScreen";
import ContentWrapper from "./components/ContentWrapper";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bricolage",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable}`}>
      <body>
        <ThemeRegistry>
          <SplashScreen />
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
