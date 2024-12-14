const ChangeMessage = ({ handleMessage }) => {
  const messages = ["Oi", "Olá", "Tudo bem?", "Como Está?"];

  return (
    <>
      <button onClick={() => handleMessage(messages[0])}>1</button>
      <button onClick={() => handleMessage(messages[1])}>2</button>
      <button onClick={() => handleMessage(messages[2])}>3</button>
      <button onClick={() => handleMessage(messages[3])}>4</button>
    </>
  );
};

export default ChangeMessage;
