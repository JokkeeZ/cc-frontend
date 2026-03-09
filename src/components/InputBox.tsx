import { Activity, useState, type Dispatch, type SetStateAction } from "react";

export default function InputBox(props: {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  onResultReceived: (result: string) => void;
}) {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | undefined>();

  const responses = ["positive 😄", "neutral 😐", "negative 😡"];

  const onButtonClick = () => {
    setError(undefined);
    props.setLoading(true);

    setTimeout(() => {
      props.setLoading(false);
    }, 1000);

    // Random response
    const randomIndex = Math.floor(Math.random() * responses.length);
    props.onResultReceived(responses[randomIndex]);
    // fetch("...")
    //   .then((res) => res.json())
    //   .then((res) => props.onResultReceived(res))
    //   .catch((err) => setError(err))
    //   .finally(() => props.setLoading(false));
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
        Sentiment
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
