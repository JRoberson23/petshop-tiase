import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PetShop Tia Se",
  description: "Banho, tosa e cuidados para seu pet com muito amor e dedicação. Agende pelo WhatsApp!",
  generator: "PetShop Tia Se",
  applicationName: "PetShop Tia Se",
  authors: [{ name: "Roberson Dev" }],
  keywords: ["petshop", "banho e tosa", "pet", "cuidados animais"],
  openGraph: {
    title: "PetShop Tia Se",
    description: "Banho, tosa e cuidados para seu pet com muito amor e dedicação",
    url: "https://petshop-tiase.vercel.app",
    siteName: "PetShop Tia Se",
    images: [
      {
        url: "https://petshop-tiase.vercel.app/images/img.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  verification: {
    google: "FvV2w6d_rE10Uq7EFfgvoXw5cs6yUfG3LROYsup6VLg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"  
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <head>
        {/* Google Analytics - PetShop Tia Se */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GY46S7X49P"
          strategy="afterInteractive"
        />
        <script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GY46S7X49P');
          `}
        </script>
        </head>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}