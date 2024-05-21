import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

function SinglePlayerPage() {
  const puppyGet = useSelector((state) => state.puppy.data.players);
  const params = useParams();
  const chosenPuppy = puppyGet.find((i) => i.name === params.name);

  return (
    <div className="block-ext" key={chosenPuppy.id}>
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
      <button className="delButton">Delete Player</button>
    </div>
  );
}
export default SinglePlayerPage;
