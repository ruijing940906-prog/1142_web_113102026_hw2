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
      {/* <body>
  <div className="bakery-bg-marquee" aria-hidden="true">
    <div className="bg-bread-row bg-bread-row-top">
      <div className="bg-bread-track bg-bread-track-left">
        <img src="/image/01.png" alt="" />
        <img src="/image/02.png" alt="" />
        <img src="/image/03.png" alt="" />
        <img src="/image/04.png" alt="" />
        <img src="/image/05.png" alt="" />
        <img src="/image/06.png" alt="" />

        <img src="/image/01.png" alt="" />
        <img src="/image/02.png" alt="" />
        <img src="/image/03.png" alt="" />
        <img src="/image/04.png" alt="" />
        <img src="/image/05.png" alt="" />
        <img src="/image/06.png" alt="" />
      </div>
    </div>

    <div className="bg-bread-row bg-bread-row-bottom">
      <div className="bg-bread-track bg-bread-track-right">
        <img src="/image/04.png" alt="" />
        <img src="/image/05.png" alt="" />
        <img src="/image/06.png" alt="" />
        <img src="/image/01.png" alt="" />
        <img src="/image/02.png" alt="" />
        <img src="/image/03.png" alt="" />

        <img src="/image/04.png" alt="" />
        <img src="/image/05.png" alt="" />
        <img src="/image/06.png" alt="" />
        <img src="/image/01.png" alt="" />
        <img src="/image/02.png" alt="" />
        <img src="/image/03.png" alt="" />
      </div>
    </div>
  </div>

  {children}
</body> */}
    </html>
  );
}
