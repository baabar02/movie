import "./globals.css";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Header } from "./_components/header";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NuqsAdapter>
          <NextThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </NextThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
