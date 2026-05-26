import { randomQuoteId } from "./Generator.ts";
import { useState } from "react";

interface Quote {
  id: number;
  quote: string;
  author: string;
}
export default function App() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const fetchQuote = async (targetId: number) => {
    const response = await fetch("/quotes.json");
    const allQuotes = (await response.json()) as Quote[];
    const target = allQuotes.find((item) => item.id === targetId);
    setQuote(target || null);
  };

  const handleClick = () => {
    const targetId = randomQuoteId();
    fetchQuote(targetId);
  };

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
        <div className="w-full max-w-2xl bg-linear-90  h-[320px]   from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl mt-8 p-12 flex flex-col items-center justify-center gap-16">
          <div className="flex-1 flex items-center justify-center overflow-y-auto">
            <p className="text-lg italic text-center">{quote?.quote}</p>
          </div>
          <div className="mt-6 mb-4">
            <p className="font-bold">{quote?.author}</p>
          </div>
        </div>
      </div>
    </>
  );
}
