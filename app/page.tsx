"use client";

import { useRouter } from "next/navigation";
import { usePsyDataStore } from "@/store/store";

export default function Home() {
  const router = useRouter();
  const resetQuiz = usePsyDataStore((state) => state.resetQuiz);

  function startQuiz() {
    resetQuiz();
    router.push("/question");
  }

  return (
    <main className="entrance-page">
      <section className="entrance-container">
      <div className="cover-kicker">✦ 今日靈魂出爐 ✦</div>

<h1 className="main-title">
  心靈麵包店
</h1>

        <div className="bakery-window" aria-label="心靈麵包店櫥窗">
          <div className="window-grid vertical"></div>
          <div className="window-grid horizontal"></div>
          <div className="flat-croissant"></div>
        </div>

        <button className="main-button" onClick={startQuiz}>
          拿取盤子，開始揉麵糰
        </button>
      </section>
    </main>
  );
}