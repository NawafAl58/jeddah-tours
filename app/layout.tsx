import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "روّق | تجارب جدة السياحية - Rawaq Jeddah Tours",
  description: "اكتشف أفضل التجارب السياحية والبحرية والتراثية في جدة. احجز جولتك البحرية في أبحر أو جولة جدة التاريخية بسهولة ومباشرة عبر الواتساب.",
  keywords: ["جدة", "توريسم جدة", "غوص أبحر", "جدة التاريخية", "البلد", "تجارب سياحية", "سياحة السعودية", "Jeddah Tours", "Rawaq"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className="antialiased bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
