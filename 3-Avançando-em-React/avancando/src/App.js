// Other Imports.
import { useState } from "react";
import "./App.css";

// Components Import.
import ManagerData from "./components/ManagerData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Component from "./components/Component";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";
import UserDetails from "./components/UserDetails";

// Imagens Import.
import Imagem2 from "./assets/images/Imagem2.jpg";

function App() {
  // const name = "Luiz";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", km: 10000, color: "Vermelho", newCar: true },
    { id: 2, brand: "Toyota", km: 50000, color: "Preto", newCar: false },
    { id: 3, brand: "BMW", km: 30000, color: "Branco", newCar: false },
    { id: 4, brand: "Audi", km: 8000, color: "Azul", newCar: true },
    { id: 5, brand: "Chevrolet", km: 45000, color: "Prata", newCar: false },
  ];

  function showMessage() {
    console.log("Evento do Componente Pai.");
  }

  const [message, setMessage] = useState();

  const handleMessage = (newMessage) => {
    setMessage(newMessage);
  };

  const users = [
    { id: 1, name: "Luiz Henrique", job: "Programmer", age: 19 },
    { id: 2, name: "Ana Clara", job: "Designer", age: 25 },
    { id: 3, name: "João Pedro", job: "Data Analyst", age: 12 },
    { id: 4, name: "Mariana Silva", job: "Product Manager", age: 28 },
    { id: 5, name: "Carlos Eduardo", job: "DevOps Engineer", age: 35 },
  ];

  return (
    <div className="App">
      <h1 className="title">Avançando em React:</h1>

      {/* Imagem em Public. */}
      <div>
        <img src="/imagem1.jpg" alt="Imagem Meramente Ilustrativa." />
      </div>

      {/* Imagem em Assets. */}
      <div>
        <img src={Imagem2} alt="Imagem Meramente Ilustrativa." />
      </div>

      <hr />

      <h1 className="title">Manager Data:</h1>
      <ManagerData />

      <hr />

      <h1 className="title">List Render:</h1>
      <ListRender />

      <hr />

      <h1 className="title">Conditional Render:</h1>
      <ConditionalRender />

      <hr />

      {/* Props. */}
      <h1 className="title">Conditional Render:</h1>
      <ShowUserName nameUser={userName} />

      {/* Destructuring. */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={true} />

      {/* Reaproveitamento. */}
      <CarDetails brand="Ford" km={0} color="Preto" newCar={false} />

      <CarDetails brand="Fiat" km={45000} color="Vermelho" newCar={false} />

      {/* Loop em Array de Objetos. */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}

      <hr />

      <h1>Fragment: </h1>
      <Fragment />

      <hr />

      <h1>Children: </h1>
      <Component myValue="teste">
        <p>E este é o Conteúdo.</p>
      </Component>

      <Component myValue="teste">
        <h5>Testando o Container.</h5>
      </Component>

      <hr />

      <h1>Execute Function: </h1>
      <ExecuteFunction myFunction={showMessage} />

      <hr />

      <h1>State Lift: </h1>
      <Message message={message} />
      <ChangeMessage handleMessage={handleMessage} />

      <hr />

      <h2>User Details:</h2>
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
        />
      ))}
    </div>
  );
}

export default App;
