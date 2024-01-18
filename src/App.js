import logo from './logo.svg';
import './App.css';
import {List} from "./List";
import { NumberInput } from './NumberInput';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>This is my App</h1>
            <NumberInput/>
            <List key={"my-key"} title={"My List"} subtitle={"Du"}>
            <h3>Ein Kind</h3>
            <h3>Noch Ein Kind</h3>
            </List>
        </header>
    </div>
  );
}

export default App;
