import { randomQuoteId } from "./Generator.ts";
import { useState } from "react";

export default function App() {
  const [quoteId, setQuoteId] = useState(0);
  const handleClick = () => {
    const newId = randomQuoteId();
    setQuoteId(newId);
  }
  return (
    <>
    <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center">
      <div>
        <h1 className="font-bold text-4xl text-slate-800 mb-8">
          ランダム名言ジェネレーター
        </h1>
        <p className="text-md text-slate-600 text-center">
          有名プログラマの格言がランダムに表示されます。
          <br />
          先人の知恵に触れてモチベーションを高めましょう！
        </p>
      </div>
      <button
        onClick={handleClick}
        className="px-8 py-4 bg-slate-800 text-white rounded-2xl mt-8 cursor-pointer hover:bg-slate-700"
      >
        Generate
      </button>
      <div id="result">結果(デバッグ): {quoteId}</div>
      <div className="bg-linear-90 from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl mt-8 py-24 px-8 flex flex-col items-center justify-center gap-16">
        <div className="quotes">
          <p>
            名言を言ってるよ。名言を言ってるよ。名言を言ってるよ。名言を言ってるよ。
          </p>
        </div>
        <div className="author">
          <p>作者名</p>
        </div>
      </div>
    </div>
    </>
  );
}
