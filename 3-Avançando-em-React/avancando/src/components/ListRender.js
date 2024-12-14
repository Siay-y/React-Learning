import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Luiz", age: 19 },
    { id: 2, name: "Matheus", age: 15 },
    { id: 3, name: "Maria", age: 22 },
    { id: 4, name: "José", age: 36 },
  ]);

  const handleDeleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * users.length);

    setUsers((prevUser) => {
      console.log(prevUser);
      return prevUser.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((users) => (
          <li key={users.id}>
            {users.name} - {users.age}
          </li>
        ))}
      </ul>

      <button onClick={handleDeleteRandom}>Delete Random User</button>
    </div>
  );
};

export default ListRender;
