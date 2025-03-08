import { Geist, Geist_Mono } from "next/font/google";
import "./[lng]/globals.css";
import { dir } from 'i18next'
import { languages } from './i18n/settings'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spich",
  description: "Spich next js application",
};

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({ children, params }) {
  const { lng } = await params;
  return (
    <html lang={lng} dir="ltr">
      <body className={'main'}>
        {children}
      </body>
    </html>
  );
}
