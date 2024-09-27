import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import FormLogin from "./components/FormLogin";
import FattureList from "./components/FattureList"; // Importa il componente per le fatture
import AddFatture from "./components/AddFatture"; // Componente per aggiungere una fattura (da creare)
import EmailPage from "./components/EmailPage";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/fatture" element={<FattureList />} />
        <Route path="/fatture/add" element={<AddFatture />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
