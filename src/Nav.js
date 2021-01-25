
/** Rendering of the Nav component. 
 * 
 *  Prop:
 *  - dogNames: array of dog names ["Whiskey", "Duke", "Perry", "Tubby"]
 *  
 *  App -> Nav
 * */

function Nav({ dogNames }) {
  const navBar = dogNames.map(name => (
    <NavLink exact to={`/dogs/${name}`}>
      {name}
    </NavLink>
  ));

  return (
    <nav className="NavBar">
      {navBar}
    </nav>
  );
}

export default Nav;