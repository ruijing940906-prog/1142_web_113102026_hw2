"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { usePsyDataStore } from "@/store/store";

const resultImageMap: Record<string, string> = {
  choco: "/image/11.png",
  mochi: "/image/22.png",
  puff: "/image/33.png",
  nut: "/image/44.png",
};

export default function ResultPage() {
  const router = useRouter();
  const cardRef = useRef<HTMLElement | null>(null);

  const getResult = usePsyDataStore((state) => state.getResult);
  const resetQuiz = usePsyDataStore((state) => state.resetQuiz);

  const result = getResult();
  const resultImage = resultImageMap[result.key] || resultImageMap.choco;

  const [tongOpen, setTongOpen] = useState(true);
  const [tongClicked, setTongClicked] = useState(false);
  const [breadPop, setBreadPop] = useState(false);

  // 夾子自動開合
  useEffect(() => {
    if (tongClicked) return;

    const tongTimer = setInterval(() => {
      setTongOpen((prev) => !prev);
    }, 650);

    return () => clearInterval(tongTimer);
  }, [tongClicked]);

  function restartQuiz() {
    resetQuiz();
    router.push("/");
  }

  function handleBreadClick() {
    setBreadPop(false);

    setTimeout(() => {
      setBreadPop(true);
    }, 10);

    setTimeout(() => {
      setBreadPop(false);
    }, 380);
  }

  function handleTongClick() {
    setTongClicked(true);

    setTongOpen(false);

    setTimeout(() => {
      setTongOpen(true);
    }, 160);

    setTimeout(() => {
      setTongOpen(false);
    }, 320);

    setTimeout(() => {
      setTongOpen(true);
      setTongClicked(false);
    }, 520);

    handleBreadClick();
  }

  async function downloadCard() {
    if (!cardRef.current) return;
  
    const html2canvas = (await import("html2canvas")).default;
  
    // 下載時只暫停動畫，不改位置
    cardRef.current.classList.add("is-capturing");
  
    await new Promise((resolve) => setTimeout(resolve, 200));
  
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: "#FDFBF7",
      scale: 2,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      width: cardRef.current.offsetWidth,
      height: cardRef.current.offsetHeight,
    });
  
    cardRef.current.classList.remove("is-capturing");
  
    const link = document.createElement("a");
    link.download = `${result.title}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }
  return (
    <main className="result-page">
      <section ref={cardRef} className="app-shell result-card">
        <div className="result-content">
          <p className="result-label">你的靈魂麵包是...</p>

          <div className="result-visual result-visual-animated">
            

            {/* 烤盤 */}
            <img
              src="/image/plate1.png"
              alt="烤盤"
              className="tray-image"
            />

            {/* 夾子 */}
            <img
              src={tongOpen ? "/image/open.png" : "/image/close.png"}
              alt="點擊夾子"
              className={`tongs-image ${tongClicked ? "is-clicked" : ""}`}
              onClick={handleTongClick}
            />

            {/* 麵包 */}
            <img
              src={resultImage}
              alt={result.title}
              className={`result-bread-image bread-float ${
                breadPop ? "bread-pop" : ""
              }`}
              onClick={handleBreadClick}
            />

            {/* 小星星裝飾 */}
            <span className="sparkle one">✦</span>
            <span className="sparkle two">✧</span>
            <span className="sparkle three">✦</span>
          </div>

          <h1 className="result-title">{result.title}</h1>

          <p className="result-tag">{result.tag}</p>

          <p className="result-description">{result.description}</p>

          <div className="color-palette">
            <p className="palette-title">今日烘焙核心色卡</p>

            <div className="palette-row">
              {result.colors.map((color: string, index: number) => (
                <div className="palette-item" key={color}>
                  <span
                    className="palette-block"
                    style={{ backgroundColor: color }}
                  ></span>
                  <span>{result.colorNames[index]}</span>
                  <small>{color}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="result-bottom">
            <button className="main-button" onClick={downloadCard}>
              打包今日麵包
            </button>

            <button className="sub-button" onClick={restartQuiz}>
              重新烘焙一次
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}