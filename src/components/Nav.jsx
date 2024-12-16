import { Link } from "react-router";

// we are going to use the link in a similar manner to the way we used the <a> and href in multipage applications (when were only using html and css with no framework)
// you need to add the "to=" attribute to tell the Link where ti go and that needs to match one of the Routes in my router

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Welcome</div>
      </Link>
      <Link to="/pokelist">
        <div>Find a Pokemon</div>
      </Link>
    </div>
  );
}

export default Nav;
