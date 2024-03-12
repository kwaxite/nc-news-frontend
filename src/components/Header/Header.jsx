import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "../Header/Header.css";

export default function Header() {
  return (
    <>
      <nav className="navBar">
        <Logo />
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
      </nav>
    </>
  );
}
