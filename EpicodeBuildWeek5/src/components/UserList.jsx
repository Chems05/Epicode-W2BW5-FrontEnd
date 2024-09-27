import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api"; // Dovresti avere queste funzioni nell'API

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id); // Chiamata API per eliminare l'utente
      // Filtra l'utente eliminato dall'array
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return <div></div>;
};

export default UserList;
