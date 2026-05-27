"use client";

import { useRouter } from "next/navigation";
import { usePsyDataStore } from "@/store/store";

export default function ResultPage() {
  const router = useRouter();

  const totalValue = usePsyDataStore((state) => state.totalValue);
  const getResult = usePsyDataStore((state) => state.getResult);
  const resetQuiz = usePsyDataStore((state) => state.resetQuiz);

  const result = getResult();

  function restartQuiz() {
    resetQuiz();
    router.push("/");
  }

  function packBread() {
    alert("目前這顆按鈕是示意功能。之後可以加入 html2canvas，讓結果卡下載成圖片。");
  }

  return (
    <main className="result-page">
      <section className="result-card">
        <div className="result-visual">
          <span className="sparkle one">✦</span>
          <span className="sparkle two">✧</span>
          <span className="sparkle three">✦</span>

          <div className="result-bread"></div>
        </div>

        <div className="result-content">
          <p className="result-label">
            Bakery Diagnostic Card｜總分 {totalValue}
          </p>

          <h1 className="result-title">{result.title}</h1>

          <p className="result-subtitle">{result.subtitle}</p>

          <ul className="result-list">
            {result.description.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="result-bottom">
            <button className="save-button" onClick={packBread}>
              打包今日麵包
            </button>

            <div className="palette">
              <div className="color-block caramel"></div>
              <div className="color-block cream"></div>
              <div className="color-block butter"></div>
            </div>
          </div>
        </div>
      </section>

      <button className="restart-button" onClick={restartQuiz}>
        重新烘焙一次
      </button>
    </main>
  );
}