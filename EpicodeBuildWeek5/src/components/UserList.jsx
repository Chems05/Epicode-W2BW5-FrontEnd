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
        console.log("Fatture fetched:", result.content);
        setUsers(result.content);
      })
      .catch((error) => console.log("Fetch error:", error));
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users?.map((invoice) => (
          <li key={invoice.id}>
            {invoice.id} - {invoice.nome} - {invoice.cognome} - {invoice.email}{" "}
            - {invoice.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
