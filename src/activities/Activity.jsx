import { useParams } from "react-router";

export default function Activity() {
  const { clickedActivity } = useParams();
  return (
    <>
      <h1>{clickedActivity}</h1>
    </>
  );
}
