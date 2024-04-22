import { Link } from "react-router-dom";
import Search from "./Search";
Link

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Chima</h1>
        </Link>
       <Search/>
        <nav className="flex gap-2">
          <Link to="/profile" >Profile</Link>
          <Link to="/singlepage" >Single-page</Link>
          <Link to="/" >Home</Link>
         
        </nav>
      </div>
    </header>
  );
}
