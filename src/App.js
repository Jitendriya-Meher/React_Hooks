import "./App.css";
import UseCallback from "./Hooks/UseCallback/UseCallback";
import UseEffect from "./Hooks/UseEffect";
import UseMemo from "./Hooks/UseMemo";
import UseRef from "./Hooks/UseRef";
import UseState from "./Hooks/UseState";

function App() {
  return (
   <div className="">
    
    <UseState></UseState>

    <UseEffect></UseEffect>

    <UseRef></UseRef>

    <UseMemo></UseMemo>

    <UseCallback></UseCallback>

   </div>
  );
}

export default App;
