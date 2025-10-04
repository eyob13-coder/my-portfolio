import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
//implement title
export const metadata = {
  title: "Eyob | Full-Stack Developer Portfolio",
  description: "Explore the portfolio of Eyob, a modern full-stack (MERN) developer. View projects, experience, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Eyob | Full-Stack Developer Portfolio</title>
        <meta name="description" content="Explore the portfolio of Eyob, a modern full-stack (MERN) developer. View projects, experience, and contact information." />
      </Head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
