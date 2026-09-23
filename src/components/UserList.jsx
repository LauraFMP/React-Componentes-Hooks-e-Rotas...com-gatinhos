import { useState } from "react";

const membrosIniciais = [
  { id: 1, nome: "Luna", cargo: "rainha do teclado", emoji: "🐈" },
  { id: 2, nome: "Nina", cargo: "caçadora de sombras", emoji: "🐾" },
  { id: 3, nome: "Mia", cargo: "auditora de petiscos", emoji: "😺" }
];

export default function UserList({ title }) {
  const [membros, setMembros] = useState(membrosIniciais);
  const [proximoId, setProximoId] = useState(4);

  function adicionarMembro() {
    const novoMembro = { id: proximoId, nome: `Membro ${proximoId}`, cargo: "especialista em cochilos", emoji: "🐱" };
    setMembros([...membros, novoMembro]);
    setProximoId(proximoId + 1);
  }

  function removerMembro(id) {
    setMembros(membros.filter((membro) => membro.id !== id));
  }

  return (
    <section className="content-page list-page">
      <p className="eyebrow">useState + map + key</p>
      <div className="list-heading"><div><h1>{title}</h1><p>Há {membros.length} membros recebendo ordens de gatos.</p></div><button className="pixel-button" onClick={adicionarMembro}>adicionar +</button></div>
      <div className="member-list">
        {membros.map((membro) => (
          <article className="member-card" key={membro.id}>
            <span className="member-emoji">{membro.emoji}</span>
            <h2>{membro.nome}</h2>
            <p>{membro.cargo}</p>
            <button className="remove-button" onClick={() => removerMembro(membro.id)}>remover</button>
          </article>
        ))}
      </div>
    </section>
  );
}
