import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUserList = () => {
    console.log("Fetching invoices...");
    fetch(`http://localhost:3001/users`, {
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
        console.log("Fatture fetched:", result.data);
        setUsers(result.data);
      })
      .catch((error) => console.log("Fetch error:", error));
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <div>
      <h2>Fatture</h2>
      <ul>
        {users.map((invoice) => (
          <li key={invoice.id}>
            {invoice.numero} - {invoice.importo} - {invoice.data} -{" "}
            {invoice.stato}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
