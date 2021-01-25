
/** Rendering of the DogList component. 
 *  
 *  App -> DogList
 * */

function DogList({ dogs }) {
  const dog = dogs.map(dog => (
    <div className="DogList-Dog">
      <h3> {dog.name} </h3>
      <img
        src={dog.src + '.jpg'}
        alt={dog.name} />
      <div>
        <p>Age: {dog.age}</p>
        <ul>Facts:
            {dog.facts.map(f => (
              <li>{f}</li>
            ))}
        </ul>
      </div>
    </div>
  ));

  return (
    <div className="DogList-Container">
      <h1>Dogs</h1>
      {dog}
    </div>
  );
}

export default DogList;