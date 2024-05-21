import { useSelector } from "react-redux";
import Players from "./Players";

function PlayersPage() {
  const puppy = useSelector((state) => state.puppy.data.players);
  return (
    <div className="render">
      {puppy.length < 1 ? (
        <h1 className="notavail">No available puppies...</h1>
      ) : (
        puppy.map((i) => <Players key={i.id} data={i} />)
      )}
    </div>
  );
}
export default PlayersPage;
