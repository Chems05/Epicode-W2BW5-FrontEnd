import { useEffect, useState } from "react";

const Indirizzi = () => {
  const [indirizzi, setIndirizzi] = useState([]);

  const fetchUserList = () => {
    fetch(`http://localhost:3001/indirizzi`, {
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
      <h2>Indirizzi</h2>
      <ul>
        {indirizzi?.map((invoice) => (
          <li key={invoice.id}>
            {invoice.numero} - {invoice.importo} - {invoice.data} -{" "}
            {invoice.stato}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Indirizzi;
