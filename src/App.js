import "./App.css";
import { Quotes } from "./Component/Quotes";

function App() {
  return (
   <div className=" w-screen h-screen bg-slate-700 flex justify-center items-center">
      <div className="appDiv w-[45%] h-[50%] bg-slate-200 shadow-2xl border rounded-md">
         <Quotes/>
      </div>
   </div>
  );
}

export default App;
