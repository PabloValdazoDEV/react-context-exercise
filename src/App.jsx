import { Routes, Route } from "react-router";
import "./App.css";
import AllCharacters from "./Components/AllCharacters";
import NavBar from "./Components/NavBar";
import DetailsCharacters from "./Components/DetailsCharacters";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
        <Route path="" element={<AllCharacters/>}/>
        <Route path="details/:characterId" element={<DetailsCharacters />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
