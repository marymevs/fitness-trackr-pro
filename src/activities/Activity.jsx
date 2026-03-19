import { useParams } from "react-router";

export default function Activity() {
  const { activityName } = useParams();
  return (
    <>
      <h1>{activityName}</h1>
    </>
  );
}
