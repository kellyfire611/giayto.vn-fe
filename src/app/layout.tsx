import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
// ‼️ import nprogress styles after core package styles
import "@mantine/nprogress/styles.css";
import "@mantine/notifications/styles.css";
import 'mantine-datatable/styles.layer.css';
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hệ thống các Giấy tờ hành chính, Biểu mẫu, Tờ đơn Việt Nam",
  description: "Hệ thống các Giấy tờ hành chính, Biểu mẫu, Tờ đơn Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider>
          <NavigationProgress color="red" size={3} />
          <Notifications />
          <ModalsProvider>
            <ClientLayout>{children}</ClientLayout>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
