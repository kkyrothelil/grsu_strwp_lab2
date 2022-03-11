import CreateTodo from "./components/CreateTodo";
import Header from "./components/header/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="_container">
        <Header/>
        <main className="main">
          <TodoList/>
          <CreateTodo/>
        </main>
      </div>
    </div>
  );
}

export default App;
