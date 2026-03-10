import type { ISentimentResponse } from "../ISentimentResponse";

export default function ResultBox(props: {
  result: ISentimentResponse | undefined;
}) {
  if (!props.result) {
    return <>No result!</>;
  }

  return (
    <p className="display-5">
      Result: <b>{props.result.sentiment}</b>
    </p>
  );
}
