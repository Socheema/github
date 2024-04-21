import { Link } from "react-router-dom";
import Search from "./Search";
Link

export default function Header() {
  return (
    <header>
      <div className="flex justify-between bg-green-500  text-white px-4 align-center py-2">
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
