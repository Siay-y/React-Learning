import React, { useState } from "react";

function ConditionalRender() {
  const [x] = useState(true);

  const [name, setname] = useState("Luiz");

  return (
    <div>
      <h1>Isso Será Exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é False!</p>}

      <h1>If Ternário.</h1>
      {name === "Luiz" ? (
        <div>
          <p>Seu Nome é Luiz.</p>
        </div>
      ) : (
        <div>
          <p>Nome Não Encontrado!</p>
        </div>
      )}
      <button onClick={() => setname("Matheus")}>Alterar Nome</button>
    </div>
  );
}

export default ConditionalRender;
