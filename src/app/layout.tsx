import type { Metadata } from "next";
import { Jost, Hanalei_Fill, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import ClarityScript from "@/components/text/ClarityScript";

export const hanalei_fill = Hanalei_Fill({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400",
});

const jost = Jost({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const josefinSans = Josefin_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jaroscak.com"),
  title: "Maximilian Jaroscak",
  description: "Welcome to my personal portfolio website.",
  openGraph: {
    images: ["/mj.png"],
    title: "Maximilian Jaroscak",
  },
  twitter: {
    images: ["/mj.png"],
    title: "Maximilian Jaroscak",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-HXXEG0YDB9" />
      <GoogleTagManager gtmId="GTM-NQ85V8DW" />

      <Script
        id="matomo"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://www.rowbox.com/matomo/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '6']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();`,
        }}
      />

      <body className={`${jost.className} antialiased `}>
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQ85V8DW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}
        <ClarityScript projectId="rco6kahdk4" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
