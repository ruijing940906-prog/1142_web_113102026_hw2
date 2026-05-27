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
        <p className="small-label">Internal Bakery</p>

        <h1 className="main-title">
          今日靈魂出爐：
          <br />
          心靈麵包店
        </h1>

        <p className="subtitle">
          歡迎光臨心靈麵包店。請拿起你的盤子，讓我們看看今天的你，會烤成哪一種靈魂麵包。
        </p>

        <div className="bakery-window" aria-label="bakery window illustration">
          <div className="awning"></div>
          <div className="croissant"></div>
        </div>

        <button className="start-button" onClick={startQuiz}>
          拿取盤子，開始揉麵糰
        </button>
      </section>
    </main>
  );
}
