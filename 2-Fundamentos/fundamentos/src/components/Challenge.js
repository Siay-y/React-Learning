const Challenge = () => {
  const a = 10;
  const b = 15;

  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>

      <div>
        <button onClick={() => console.log(a + b)}>Somar Números</button>
      </div>
    </div>
  );
};

export default Challenge;
