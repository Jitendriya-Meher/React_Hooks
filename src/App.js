import "./App.css";
import CustomHook from "./Hooks/CustomHook/CustomHook";
import UseCallback from "./Hooks/UseCallback/UseCallback";
import UseContext from "./Hooks/UseContext/UseContext";
import UseEffect from "./Hooks/UseEffect";
import UseLayoutEffect from "./Hooks/UseLayoutEffect/UseLayoutEffect";
import UseMemo from "./Hooks/UseMemo";
import UseReducer from "./Hooks/UseReducer/UseReducer";
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

    <UseContext></UseContext>

    <UseReducer></UseReducer>

    <CustomHook></CustomHook>

    <UseLayoutEffect></UseLayoutEffect>

   </div>
  );
}

export default App;
