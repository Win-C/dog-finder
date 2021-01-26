import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

/** Rendering of the DogDetails component.
 *
 *  App -> DogDetails
 * */

function DogDetails({ dog }) {
  const { name } = useParams();

  return (
    <div>
      <h2>{`${dog.name} - age: ${dog.age}`}</h2>
      <img src={`${dog.src}.jpg`} alt={dog.name} />
      <ul>
        Facts:
        {dog.facts.map((f) => (
          <li>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
