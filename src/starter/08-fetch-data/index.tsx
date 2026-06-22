import { useState, useEffect } from "react";
const url = "https://www.course-api.com/react-tours-project";
import { tourSchema, type Tour } from "./types";
function Component() {
  // tours

  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDate = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed tp fetch tours`);
        }
        const rawDate: Tour[] = await response.json();
        const result = tourSchema.array().safeParse(rawDate);

        if (!result.success) {
          console.log(result.error.message);
          throw new Error("failed to parse tours");
        }
        setTours(result.data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "there was an error";
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDate();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error... {isError}</h3>;
  }
  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => {
        return <p key={tour.id}>{tour.name}</p>;
      })}
    </div>
  );
}
export default Component;
