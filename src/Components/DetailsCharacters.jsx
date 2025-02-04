import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import GetDetailsCharacters from "../Api/GetDetailsCharacters";

const DetailsCharacters = () => {
  const { characterId } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["GetDetailsCharacters", characterId],
    queryFn: () => 
      GetDetailsCharacters(characterId)
    
  });

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  if (error) {
    return <h1>No se han encontrado nada =(</h1>;
  }
  console.log(data)

  return (
    <>
      <h1>{data.firstName}</h1>
    </>
  );
};

export default DetailsCharacters;
