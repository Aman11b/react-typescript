import { useQuery } from "@tanstack/react-query";
import { fetchTours } from "./types";

function Component() {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });

  if (isPending) return <h2>Loading...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;
  return (
    <div>
      <h2
        className="
    mb-1"
      >
        {tours.map((tour) => {
          return <p key={tour.id}>{tour.name}</p>;
        })}
      </h2>
    </div>
  );
}
export default Component;
