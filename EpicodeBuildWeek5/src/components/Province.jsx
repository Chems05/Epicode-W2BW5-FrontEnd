import { useEffect, useState } from "react";

const Province = () => {
  const [indirizzi, setIndirizzi] = useState([]);

  const fetchUserList = () => {
    fetch(`http://localhost:3001/province`, {
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
      <h2>Province</h2>
      <ul>
        {indirizzi?.map((invoice) => (
          <li key={invoice.id}>
            {invoice.idProvincia} - {invoice.nome} - {invoice.sigla} -{" "}
            {invoice.regione}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Province;
