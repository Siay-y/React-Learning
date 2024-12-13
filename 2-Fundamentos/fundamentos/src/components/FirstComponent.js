// Components.
import MyComponent from "./MyComponent";

const FirstComponent = () => {
  // Essa função faz isso.

  /* 
    Multi Line.
  */

  return (
    <div>
      {/* Algum Comentário. */}

      <h1>Meu Primeiro Componente!</h1>
      <p className="teste">Meu Texto</p>

      <MyComponent />
    </div>
  );
};

export default FirstComponent;
