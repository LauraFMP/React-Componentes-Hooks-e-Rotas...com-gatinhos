export default function About() {
  return (
    <section className="content-page">
      <p className="eyebrow">sobre o projeto</p>
      <h1>React em modo ronronar.</h1>
      <div className="info-grid">
        <article><h2>Componentes</h2><p>Cada pedaço da interface tem sua própria função: cabeçalho, rodapé, início e lista. Isso deixa o código organizado e reutilizável.</p></article>
        <article><h2>Rotas</h2><p>O menu troca de página sem recarregar o navegador. É uma navegação rápida, suave e aprovada pelos felinos.</p></article>
        <article><h2>Estado</h2><p>A lista guarda os membros no useState. Quando ela muda, o React atualiza apenas o que precisa aparecer na tela.</p></article>
      </div>
    </section>
  );
}
