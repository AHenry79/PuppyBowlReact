import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import PlayersPage from "./components/Pages/PlayersPage";
import { useGetPlayersQuery } from "./api";

function App() {
  const { isLoading } = useGetPlayersQuery();
  return (
    <>
      <Nav />
      {isLoading ? (
        <h1 className="load">Loading puppies...</h1>
      ) : (
        <Routes>
          <Route index element={<PlayersPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
