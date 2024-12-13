const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o Evento!.");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando Isso!</h1>;
    } else {
      return <h1>Também Posso Renderizando Isso!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui!</button>
      </div>
      <div>
        <button
          onClick={() => {
            if (true) {
              console.log("Isso não Deveria Existir :)");
            }
          }}
        >
          Clique Aqui Também!
        </button>
        <button className="side-button" onClick={() => console.log("Clicado!")}>
          Clique Aqui Também!
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
