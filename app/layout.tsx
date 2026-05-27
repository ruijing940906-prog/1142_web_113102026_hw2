import "./globals.css";

export const metadata = {
  title: "Internal Bakery｜心靈麵包店",
  description: "一個溫柔的心靈麵包心理測驗",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
