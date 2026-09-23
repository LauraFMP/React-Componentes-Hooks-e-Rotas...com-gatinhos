import { Link } from "react-router-dom";

export default function NotFound() {
  return <section className="not-found"><p className="eyebrow">erro_404</p><h1>Esse novelo sumiu.</h1><p>A página que você procurou não existe — talvez o gato tenha sentado em cima dela.</p><Link className="pixel-button" to="/">voltar ao início</Link></section>;
}
