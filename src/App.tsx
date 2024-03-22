import AddTodos from "./components/AddTodos";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import "./App.css"

const App = () => {
  return (
    <main>
      <h1 style={{marginBottom: "30px", color: 'GrayText'}}>TODO APP WITH TYPESCRIPT</h1>
      <Navbar />
      <AddTodos />
      <Todos />
    </main>
  );
};

export default App;
