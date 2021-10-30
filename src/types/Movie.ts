import NullString from "./NullString";

type Movie = {
  id: number;
  name: string;
  year?: string;
  score?: number;
  summary?: NullString;
};

export default Movie;
