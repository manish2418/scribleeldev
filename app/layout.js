import ThemeRegistry from "./ThemeRegistry";
import SplashScreen from "./components/SplashScreen";
import ContentWrapper from "./components/ContentWrapper";
import CustomCursor from "./components/CustomCursor";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              cursor: none !important;
            }
          `
        }} />
      </head>
      <body>
        <ThemeRegistry>
          <CustomCursor />
          <SplashScreen />
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
