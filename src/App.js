import './App.css';
import ToDoComp from './Component/Todo/ToDoComp';
function App() {
  return (
   <div className="app-container">
      <h1 className="main-heading">Assignment-2 To Do App</h1>
      <div className="row">
        <ToDoComp/>
      </div>
    </div>
  );
}

export default App;
