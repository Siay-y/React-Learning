function UserDetails({ name, job, age }) {
  return (
    <>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age >= 18 ? <p>Pode Dirigir.</p> : <p>Não Pode Dirigir!</p>}
    </>
  );
}

export default UserDetails;
