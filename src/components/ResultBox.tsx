export default function ResultBox(props: { result: string }) {
  if (!props.result) {
    return <>No result!</>;
  }

  return <>{props.result}</>;
}
