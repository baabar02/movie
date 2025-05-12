import "./globals.css";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Header } from "./_components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header /> */}
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
