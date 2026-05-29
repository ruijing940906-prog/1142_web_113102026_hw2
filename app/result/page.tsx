"use client";

import { useRef } from "react";
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

  function restartQuiz() {
    resetQuiz();
    router.push("/");
  }

  async function downloadCard() {
    if (!cardRef.current) return;

    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: "#FDFBF7",
      scale: 2,
    });

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

          <div className="result-visual">
            <span className="sparkle one">✦</span>
            <span className="sparkle two">✧</span>
            <span className="sparkle three">✦</span>

            <img
              src={resultImage}
              alt={result.title}
              className="result-bread-image"
            />
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