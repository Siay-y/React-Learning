import "../App.css";

function CarDetails({ brand, km, color, newCar }) {
  return (
    <div>
      <h1 className="title">Car Details:</h1>

      <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </ul>

      {newCar && (
        <p>
          <strong>Este Carro é Novo!</strong>
        </p>
      )}
    </div>
  );
}

export default CarDetails;
