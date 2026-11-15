import "./App.css";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app min-h-screen bg-slate-50">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
