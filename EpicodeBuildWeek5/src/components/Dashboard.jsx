import { Link } from "react-router-dom";
import "../App.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="container mt-5">
        <h1 className="text-center mb-4">Pannello di Controllo</h1>

        <div className="alert alert-info text-center" role="alert">
          Benvenuto nella dashboard! Seleziona un opzione per iniziare.
        </div>

        <div className="row">
          {/* Card: Visualizza Fatture */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Visualizza Fatture</h5>
                <p className="card-text">
                  Guarda la lista delle fatture e gestisci i tuoi pagamenti.
                </p>
                <Link to="/fatture" className="btn btn-success">
                  Vai alle Fatture
                </Link>
              </div>
            </div>
          </div>
          {/* Clienti */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Visualizza Clienti</h5>
                <p className="card-text">
                  Visualizza l&apos;elenco di tutti i clienti
                </p>
                <Link to="/users" className="btn btn-success">
                  Vai a clienti
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
