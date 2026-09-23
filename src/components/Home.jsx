import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">&gt; aula_04 / react</p>
        <h1>A comunidade que os gatos programariam.</h1>
        <p>Este pequeno site usa componentes, rotas e estados para conectar humanos que vivem sob a supervisão de patinhas muito fofas.</p>
        <Link className="pixel-button" to="/lista">explorar membros ↓</Link>
      </div>
      <div className="pixel-cat" aria-label="Gatinho pixelado" role="img">
        <span className="cat-ears" /><span className="cat-face"><i /><i /><b /></span><span className="cat-body" />
      </div>
    </section>
  );
}
