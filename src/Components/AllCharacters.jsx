import { useQuery } from "@tanstack/react-query";
import GetAllCharacters from "../Api/GetAllCharacters";
import LinkCharacters from "./LinkCharacters";

const AllCharacters = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["GetAllCharacters"],
    queryFn: GetAllCharacters,
  });

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  if (error) {
    return <h1>No se han encontrado nada =(</h1>;
  }
  return (
    <>
      <h1>All Characters</h1>
      {data.map((details) => {
        return <LinkCharacters key={details.id} details={details}/>
      })}
      
    </>
  );
};

export default AllCharacters;
