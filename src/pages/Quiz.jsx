import React, { useState } from "react";

const SAMPLE_QUESTIONS = [
  { id: 1, q: "Jika a=3 dan b=4, berapa c?", choices: ["5", "6", "4.5"], ans: "5" },
  { id: 2, q: "Jika c=13 dan a=5, berapa b?", choices: ["12", "10", "8"], ans: "12" },
  { id: 3, q: "Pythagoras berlaku untuk segitiga...", choices: ["siku-siku", "sama sisi", "tumpul"], ans: "siku-siku" },
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function answer(choice) {
    if (finished) return;
    const q = SAMPLE_QUESTIONS[index];
    if (choice === q.ans) setScore((s) => s + 1);
    if (index + 1 === SAMPLE_QUESTIONS.length) setFinished(true);
    else setIndex((i) => i + 1);
  }

  return (
    <div>
      <h2 className="text-2xl mb-3">Quick Quiz</h2>

      {finished ? (
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="font-medium">
            Selesai! Skor: {score}/{SAMPLE_QUESTIONS.length}
          </div>
          <div className="mt-2 text-xs opacity-70">
            Screenshot this result for your LKTI report 😄
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="text-sm mb-3">{SAMPLE_QUESTIONS[index].q}</div>
          <div className="flex flex-col gap-2">
            {SAMPLE_QUESTIONS[index].choices.map((c) => (
              <button
                key={c}
                onClick={() => answer(c)}
                className="p-2 rounded border text-left hover:bg-gray-100"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
