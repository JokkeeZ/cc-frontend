export default function ResultBox(props: { result: string }) {
  if (!props.result) {
    return <>No result!</>;
  }

  return (
    <p className="display-5">
      Result: <b>{props.result}</b>
    </p>
  );
}
