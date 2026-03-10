import { useState } from "react";
import InputBox from "./components/InputBox";
import ResultBox from "./components/ResultBox";
import type { ISentimentResponse } from "./ISentimentResponse";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ISentimentResponse>();

  return (
    <div className="container">
      <div className="d-flex justify-content-center flex-column mt-5">
        <div className="d-flex justify-content-center mb-5">
          <h1>Sentiment things</h1>
        </div>
        <div className="d-flex gap-2 mb-5">
          <InputBox
            loading={loading}
            setLoading={setLoading}
            onResultReceived={(res) => setResult(res)}
          />
        </div>
        <div className="d-flex justify-content-center mb-5">
          <ResultBox result={result} />
        </div>
      </div>
    </div>
  );
}
