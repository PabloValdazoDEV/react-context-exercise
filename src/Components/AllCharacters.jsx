import { useQuery } from "@tanstack/react-query";
import GetAllCharacters from "../Api/GetAllCharacters";
import LinkCharacters from "./LinkCharacters";
import { useAtom } from "jotai";
import fechApi from "../context/fechApi";
import { useEffect } from "react";

const AllCharacters = () => {
  const [dataApi, setDataApi] = useAtom(fechApi);
  const { isLoading, data, error } = useQuery({
    queryKey: ["GetAllCharacters"],
    queryFn: GetAllCharacters,
  });

  useEffect(() => {
    setDataApi(data);
    console.log(dataApi);
  }, [data]);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  if (error) {
    return <h1>No se han encontrado nada =(</h1>;
  }
  if(dataApi){

    return (
      <>
      <h1>All Characters</h1>
      {dataApi.map((details) => {
        return <LinkCharacters key={details.id} details={details} />;
      })}
    </>
  );
}
};

export default AllCharacters;
