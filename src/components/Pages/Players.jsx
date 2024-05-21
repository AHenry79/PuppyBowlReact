import { Link } from "react-router-dom";

function Players({ data }) {
  return (
    <>
      <Link to={"player/" + data.name}>
        <div className="block" key={data.id}>
          <h3>
            ID:
            {data.id}
          </h3>
          <div className="image-container">
            <img src={data.imageUrl} alt={data.name} />
          </div>
          <h3 className="name">{data.name}</h3>
          <h3>Breed: {data.breed}</h3>
        </div>
      </Link>
    </>
  );
}
export default Players;
