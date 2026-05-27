"use client";

import { useRouter } from "next/navigation";
import { usePsyDataStore } from "@/store/store";

export default function QuestionPage() {
  const router = useRouter();

  const questionIndex = usePsyDataStore((state) => state.question);
  const questions = usePsyDataStore((state) => state.questions);
  const answerQuestion = usePsyDataStore((state) => state.answerQuestion);

  const currentQuestion = questions[questionIndex];
  const progressPercent = (questionIndex / questions.length) * 100;

  function handleAnswer(value: number) {
    answerQuestion(value);

    if (questionIndex + 1 >= questions.length) {
      router.push("/result");
    }
  }

  if (!currentQuestion) {
    return (
      <main className="quiz-page">
        <section className="question-card">
          <p className="small-label">麵糰已經烤好了</p>
          <h1 className="question-title">測驗已完成</h1>
          <button className="start-button" onClick={() => router.push("/result")}>
            查看我的出爐結果
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="quiz-page">
      <section className="quiz-wrapper">
        <div className="progress-area">
          <div className="progress-text">
            <span>
              Q{questionIndex + 1} / {questions.length}
            </span>
            <span>麵糰發酵中...</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        <div className="quiz-layout">
          <div className="question-panel">
            <div>
              <p className="question-number">Q{questionIndex + 1}</p>
              <h1 className="question-title">
  {currentQuestion.question.split("\n").map((line: string, index: number) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))}
</h1>
            </div>

            <div className="bowl-illustration">
              <div className="water-drop"></div>
              <div className="water-drop small"></div>
              <div className="bowl"></div>
            </div>
          </div>

          <div className="options-panel">
  {currentQuestion.options.map(
    (option: { text: string; value: number }, index: number) => (
      <button
        key={index}
        className="option-button"
        onClick={() => handleAnswer(option.value)}
      >
        {option.text}
      </button>
    )
  )}
</div>
        </div>
      </section>
    </main>
  );
}