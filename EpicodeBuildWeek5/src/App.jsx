import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import FormLogin from "./components/FormLogin";
import FattureList from "./components/FattureList"; // Importa il componente per le fatture
import AddFatture from "./components/AddFatture"; // Componente per aggiungere una fattura (da creare)
import EmailPage from "./components/EmailPage";
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";
import Province from "./components/Province";
import Comuni from "./components/Comuni";
import Indirizzi from "./components/Indirizzi";
import ClientiList from "./components/ClientiList";

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
        <Route path="/users" element={<UserList />} />
        <Route path="/province" element={<Province />} />
        <Route path="/comuni" element={<Comuni />} />
        <Route path="/indirizzi" element={<Indirizzi />} />
        <Route path="/clienti" element={<ClientiList />} />
      </Routes>
    </Router>
  );
};

export default App;
