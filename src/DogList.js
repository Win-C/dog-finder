import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


// import DogDetails from "./DogDetails";

/** Rendering of the DogList component. 
 *  
 *  App -> DogList
 * */

function DogList({ dogs }) {
  
  const dogsArray = dogs.map(dog => (
    <div className="DogList-Dog">

      <h3> {dog.name} </h3>
      <Link to={`/dogs/${dog.name}`}>
        <img
          src={dog.src}
          alt={dog.name} />
      </Link>
      <div>
        <p>Age: {dog.age}</p>
      </div>
    </div>
  ));


  return (
    <div className="DogList-Container">
      <h1>Dogs</h1>
      {dogsArray}
    </div>
  );
}

export default DogList;