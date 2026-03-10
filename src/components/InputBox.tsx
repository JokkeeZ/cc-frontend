import { Activity, useState, type Dispatch, type SetStateAction } from "react";
import type { ISentimentResponse } from "../ISentimentResponse";

export default function InputBox(props: {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  onResultReceived: (result: ISentimentResponse) => void;
}) {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | undefined>();

  const onButtonClick = () => {
    setError(undefined);
    props.setLoading(true);

    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sentiment: input,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
        console.log(data);
        props.onResultReceived(data);
      })
      .catch((err) => setError(err.toString()))
      .finally(() => props.setLoading(false));
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        disabled={props.loading}
        value={input}
        onChange={(v) => setInput(v.target.value)}
      />

      <button
        type="button"
        disabled={props.loading}
        className="btn btn-primary"
        onClick={onButtonClick}
      >
        {props.loading ? (
          <>
            <span
              className="spinner-border spinner-border-sm"
              aria-hidden="true"
            ></span>
            <span role="status">Loading...</span>
          </>
        ) : (
          <>Sentiment</>
        )}
      </button>

      <Activity mode={error ? "visible" : "hidden"}>
        <div>
          <h3>An error occurred!</h3>
          <p>{error}</p>
        </div>
      </Activity>
    </>
  );
}
