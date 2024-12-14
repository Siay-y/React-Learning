function Component({ children, myValue }) {
  return (
    <>
      <h2>Este é o Título do Container.</h2>
      {children}
      <p>O Valor é: {myValue}</p>
    </>
  );
}

export default Component;
