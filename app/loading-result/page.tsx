"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { usePsyDataStore } from "@/store/store";

const resultRevealImageMap: Record<string, string> = {
  choco: "/image/ans_1.png",
  mochi: "/image/ans_2.png",
  puff: "/image/ans_3.png",
  nut: "/image/ans_4.png",
};

const ovenFrames = [
  "/image/oven1.png",
  "/image/oven2.png",
  "/image/oven3.png",
  "/image/oven4.png",
];

export default function LoadingResultPage() {
  const router = useRouter();
  const getResult = usePsyDataStore((state) => state.getResult);

  const result = getResult();

  const frames = useMemo(() => {
    const revealImage =
      resultRevealImageMap[result.key] || resultRevealImageMap.choco;

    return [...ovenFrames, revealImage];
  }, [result.key]);

  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const frameTimer = setInterval(() => {
      setFrameIndex((prev) => {
        if (prev >= frames.length - 1) {
          return prev;
        }

        return prev + 1;
      });
    }, 420);

    const pageTimer = setTimeout(() => {
      router.replace("/result");
    }, 2700);

    return () => {
      clearInterval(frameTimer);
      clearTimeout(pageTimer);
    };
  }, [frames.length, router]);

  return (
    <main className="loading-page">
      <section className="loading-card">
        <div className="loading-scene">
          <img
            src={frames[frameIndex]}
            alt="靈魂麵包出爐動畫"
            className="oven-frame-image"
          />
        </div>

        <p className="typing-text">叮！麵糰正在發酵膨脹中...</p>
      </section>
    </main>
  );
}