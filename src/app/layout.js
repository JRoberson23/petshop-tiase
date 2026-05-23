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
  // Adicione essas linhas para melhorar o compartilhamento
  generator: "PetShop Tia Se",
  applicationName: "PetShop Tia Se",
  authors: [{ name: "Seu Nome" }],
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"  // Mude de "en" para "pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}