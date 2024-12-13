const TemplateExpression = () => {
  const name = "Luiz Henrique";
  const data = {
    age: 31,
    job: "Programmer.",
  };

  return (
    <div>
      <h2>Olá {name}, Tudo Bem?</h2>
      <p>
        Você Atua Como: {data.job} e Tem {data.age} Anos.
      </p>
      <p>{4 + 4}</p>
      <p>{console.log("Jsx React.")}</p>
    </div>
  );
};

export default TemplateExpression;
