import { useParams, Navigate } from "react-router";
import { useAtom } from "jotai";
import fechApi from "../context/fechApi";
import { Box, Card, CardContent, Typography } from "@mui/material";

const DetailsCharacters = () => {
  const { characterId } = useParams();

  const [data, setData] = useAtom(fechApi);

  const [dataFilter] = data.filter((character) => +character.id == characterId);
  if (!dataFilter) {
    return <Navigate to="/" replace />;
  }

  console.log(dataFilter)

  return (
    <>
    
      <Card sx={{ minWidth: 275, maxWidth:400, mx:"auto", position:"relative" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {dataFilter.firstName} {dataFilter.lastName}
        </Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Title: {dataFilter.title}
        </Typography>
        <Box component="img" sx={{height: "100%", width: 200}} src={dataFilter.imageUrl}/>
        <Typography variant="body2">
          Family: {dataFilter.family}
        </Typography>
      </CardContent>
    </Card>
    </>
  );
};

export default DetailsCharacters;
