import "./App.css";
import Home from "./pages/Home";
import { LuNotebookPen } from "react-icons/lu";

function App() {
    return (
        <div className="flex flex-col min-h-screen p-2 md:p-4 bg-slate-200">
            <h1 className="text-center font-bold text-2xl mb-3 mt-2">
                My To-Do List <LuNotebookPen className="inline" />
            </h1>
            <Home />
        </div>
    );
}

export default App;
