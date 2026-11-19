import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "院内制剂效期管理",
  description: "院内制剂效期管理系统入口",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
