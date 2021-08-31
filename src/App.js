import './css/main.css';
import Todos  from "./components/Todos";
import DisplayTodos from "./components/DisplayItem";

function App() {
  return (
    <div className="App">
      <h1>TODO App</h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
