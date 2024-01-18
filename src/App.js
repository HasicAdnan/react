import logo from './logo.svg';
import './App.css';
import {List} from "./List";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>This is my App</h1>
            <List key={"my-key"} title={"Hallo"} subtitle={"Du"}>
            <h3>Ein Kinddddd</h3>
            <h3>Noch Ein Kind</h3>
            </List>
        </header>
    </div>
  );
}

export default App;
