import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetPlayerQuery } from "../../api";
import { useDeletePlayerMutation } from "../../api";

function SinglePlayerPage() {
  const puppyGet = useSelector((state) => state.puppy.data.players);
  const params = useParams();
  const id = params.id;
  const { isLoading } = useGetPlayerQuery(id);
  const [deletePlayer] = useDeletePlayerMutation();
  const chosenPuppy = puppyGet.find((i) => i.name === params.name);

  return (
    <div className="block-ext" key={chosenPuppy.id}>
      {isLoading ? (
        <h1 className="load">Loading...</h1>
      ) : (
        <>
          <h3>
            ID:
            {chosenPuppy.id}
          </h3>
          <div className="image-container">
            <img src={chosenPuppy.imageUrl} alt={chosenPuppy.name} />
          </div>
          <h3 className="name">{chosenPuppy.name}</h3>
          <h3>Breed: {chosenPuppy.breed}</h3>
          <h3>Status: {chosenPuppy.status}</h3>
          <h3>Team ID: {chosenPuppy.teamId}</h3>
          <button className="delButton" onClick={() => deletePlayer(id)}>
            Delete Player
          </button>
        </>
      )}
    </div>
  );
}
export default SinglePlayerPage;
