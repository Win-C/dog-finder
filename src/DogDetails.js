import { Redirect, useParams } from "react-router-dom";

/** Rendering of the DogDetails component.
 *
 *  App -> DogDetails
 * */
function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase())

  if (!dog) return <Redirect to="/dogs" />

  return (
    <div>
      <h2>{`${dog.name}`}
        <small>
          {` - age: ${dog.age}`}
        </small>
      </h2>
      <img src={dog.src} alt={dog.name} />
      <ul> Facts:
        {dog.facts.map((f) => (
          <li>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
