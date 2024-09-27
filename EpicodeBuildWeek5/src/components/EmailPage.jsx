import { useState } from "react";
import { Link } from "react-router-dom"; // Se necessario per aggiungere link

const EmailPage = () => {
  // Stato per gestire i dati del modulo
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    description: "",
  });

  // Funzione per gestire il cambiamento degli input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Funzione per gestire l'invio del modulo
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene il comportamento predefinito del form

    try {
      const response = await axios.post(
        "http://localhost:3001/api/email",
        formData
      ); // Modifica l'URL in base alla tua configurazione
      console.log(response.data); // Gestisci la risposta del server
      // Qui puoi anche aggiungere una notifica di successo o reindirizzare l'utente
    } catch (error) {
      console.error("Errore nell'invio della richiesta:", error);
      // Gestisci eventuali errori
    }
  };

  return (
    <div>
      <section
        className="head text-white text-center py-4"
        style={{ backgroundColor: "#9931cc" }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Richiedi un preventivo</h1>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-white text-center mb-5">
            Compila il modulo sottostante
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card p-4">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Inserisci il tuo nome"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      className="form-control"
                      placeholder="Inserisci il tuo cognome"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Inserisci la tua email"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      id="description"
                      name="description"
                      className="form-control"
                      placeholder="Vuoi delle informazioni aggiuntive? Inseriscile qui!"
                      rows="4"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning btn-lg w-100"
                  >
                    Invia richiesta
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailPage;
