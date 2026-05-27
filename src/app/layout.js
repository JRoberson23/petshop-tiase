import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://petshop-tiase.vercel.app"),
  title: "PetShop Tia Se | Banho e Tosa em São Paulo",
  icons: {
    icon: "/favicon.png",
  },
  description: "Banho, tosa, hidratação, tosa higiênica e cuidados especiais para cães e gatos em São Paulo. Agende pelo WhatsApp.",
  generator: "PetShop Tia Se",
  applicationName: "PetShop Tia Se",
  authors: [{ name: "Roberson Dev" }],
  keywords: [
    "pet shop são paulo",
    "banho e tosa são paulo",
    "petshop tia se",
    "hidratação pet",
    "tosa higiênica",
    "estética animal",
    "remoção de nós",
    "pet shop jardim são josé",
  ],
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
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KS7VFS2Z06"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KS7VFS2Z06');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}