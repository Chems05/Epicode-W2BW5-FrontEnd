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
          {/* User */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Visualizza User</h5>
                <p className="card-text">
                  Visualizza l&apos;elenco di tutti i Users
                </p>
                <Link to="/users" className="btn btn-success">
                  Vai a clienti
                </Link>
              </div>
            </div>
          </div>
          {/* Provice */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Visualizza Province</h5>
                <p className="card-text">
                  Visualizza l&apos;elenco di tutti i province
                </p>
                <Link to="/province" className="btn btn-success">
                  Vai a clienti
                </Link>
              </div>
            </div>
          </div>
          {/* Comuni */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Visualizza Comuni</h5>
                <p className="card-text">
                  Visualizza l&apos;elenco di tutti i comuni
                </p>
                <Link to="/comuni" className="btn btn-success">
                  Vai a clienti
                </Link>
              </div>
            </div>
          </div>
          {/* Indirizzi */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Visualizza Indirizzi</h5>
                <p className="card-text">
                  Visualizza l&apos;elenco di tutti i indirizzi
                </p>
                <Link to="/indirizzi" className="btn btn-success">
                  Vai a clienti
                </Link>
              </div>
            </div>
          </div>
          {/* Clienti */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Visualizza clienti</h5>
                <p className="card-text">
                  Visualizza l&apos;elenco di tutti i clienti
                </p>
                <Link to="/clienti" className="btn btn-success">
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
