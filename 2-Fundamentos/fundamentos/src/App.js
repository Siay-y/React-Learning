// Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpression";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

// Css
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React:</h1>
      <FirstComponent />

      <hr />

      <h1 className="title">Templates Expression:</h1>
      <TemplateExpression />
      <MyComponent />

      <hr />

      <h1 className="title">Events.</h1>
      <Events />

      <hr />

      <h1 className="title">Challenge:</h1>
      <Challenge />
    </div>
  );
}

export default App;
