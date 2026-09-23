import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="top-header">
        <Link className="logo" to="/">MiAU<span>.exe</span></Link>
        <p className="tagline">uma comunidade para humanos escolhidos</p>
      </header>
      <nav className="main-menu" aria-label="Menu principal">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/lista">Lista</NavLink>
      </nav>
    </>
  );
}
