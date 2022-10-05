import { StarIcon } from "@chakra-ui/icons";

export default function Star({ rating }) {
  const arr = [1, 2, 3];

  return (
    <>
      {arr.map((el, i) => {
        return <StarIcon color={rating < 3 ? "pink" : "orange"} />;
      })}
    </>
  );
}
