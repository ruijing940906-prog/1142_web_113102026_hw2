"use client";

import { useRouter } from "next/navigation";
import { usePsyDataStore } from "@/store/store";

export default function QuestionPage() {
  const router = useRouter();

  const questionIndex = usePsyDataStore((state) => state.question);
  const questions = usePsyDataStore((state) => state.questions);
  const answerQuestion = usePsyDataStore((state) => state.answerQuestion);
  const previousQuestion = usePsyDataStore((state) => state.previousQuestion);

  const currentQuestion = questions[questionIndex];
  const progressPercent = (questionIndex / questions.length) * 100;

  function handleAnswer(answer: { label: string; text: string; type: string }) {
    answerQuestion(answer);

    if (questionIndex + 1 >= questions.length) {
      router.push("/loading-result");
    }
  }

  function handlePrevious() {
    previousQuestion();
  }

  if (!currentQuestion) {
    return (
      <main className="quiz-page">
        <section className="app-shell">
          <h1 className="question-title">麵包準備出爐中...</h1>
        </section>
      </main>
    );
  }

  return (
    <main className="quiz-page">
      <section className="app-shell">
      <div className="progress-text">
        <div className="progress-left">
          <span>
            Q{questionIndex + 1} / {questions.length}
          </span>

          <button
  className={`top-back-button ${questionIndex === 0 ? "is-hidden" : ""}`}
  onClick={handlePrevious}
  disabled={questionIndex === 0}
>
  返回上一題
</button>
        </div>

        <span>發酵進度</span>
      </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
       

        <div className="quiz-content">
          <div className="question-card">
            <p className="question-number">Q{questionIndex + 1}</p>

            <h1 className="question-title">
              {currentQuestion.question
                .split("\n")
                .map((line: string, index: number) => (
                  <span key={index}>
                    {line}
                    {index !== currentQuestion.question.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
            </h1>
          </div>

          <div className="option-side">
            {currentQuestion.options.map(
              (
                option: { label: string; text: string; type: string },
                index: number
              ) => (
                <button
                  key={index}
                  className="option-button"
                  onClick={() => handleAnswer(option)}
                >
                  <span className="option-label">{option.label}</span>
                  <span className="option-text">{option.text}</span>
                </button>
              )
            )}
          </div>
        </div>

        
      </section>
    </main>
  );
}