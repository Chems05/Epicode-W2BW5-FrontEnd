import { useEffect, useState } from "react";

const ClientiList = () => {
  const [indirizzi, setIndirizzi] = useState([]);

  const fetchUserList = () => {
    fetch(`http://localhost:3001/clienti`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        console.log("Response received:", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero delle fatture");
        }
      })
      .then((result) => {
        console.log("Fatture fetched:", result.content);
        setIndirizzi(result.content);
      })
      .catch((error) => console.log("Fetch error:", error));
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <div>
      <h2>ClientiList</h2>
      <ul>
        {indirizzi?.map((invoice) => (
          <li key={invoice.id}>
            {invoice.nomeSocieta} - {invoice.partitaIva} - {invoice.email} -{" "}
            {invoice.dataInserimento} - {invoice.dataUltimoContatto} -{" "}
            {invoice.fatturatoAnnuale} - {invoice.pec} - {invoice.telefono} -{" "}
            {invoice.emailContatto} - {invoice.nomeContatto} - {invoice.cognome}{" "}
            - {invoice.telefonoContatto} - {invoice.logoAziendale}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientiList;
