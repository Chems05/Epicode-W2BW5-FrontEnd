import { useEffect, useState } from "react";
/* import { useDispatch, useSelector } from "react-redux";
import { setInvoices, deleteInvoice as deleteInvoiceAction } from "../Store/FattureSlice";
import { getInvoices, deleteInvoice } from "../api"; */

const FattureList = () => {
  /* const baseUrl = import.meta.env.VITE_APP_BASE_URL; */
  // const dispatch = useDispatch();
  /* const invoices = useSelector(state => state.invoices.list); */
  const [fatture, setFatture] = useState([]);

  /* useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const data = await getInvoices();
        dispatch(setInvoices(data));
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, [dispatch]); */

  const fetchFatture = () => {
    console.log("Fetching invoices...");
    fetch(`http://localhost:3001/fatture`, {
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
        setFatture(result.data);
      })
      .catch((error) => console.log("Fetch error:", error));
  };

  useEffect(() => {
    fetchFatture();
  }, []);

  /*  const handleDelete = async id => {
    try {
      await deleteInvoice(id);
      dispatch(deleteInvoiceAction(id));
    } catch (error) {
      console.error("Error deleting invoice:", error);
    }
  }; */

  return (
    <div>
      <h2>Fatture</h2>
      <ul>
        {fatture?.map((invoice) => (
          <li key={invoice.id}>
            {invoice.numero} - {invoice.importo} - {invoice.data} -{" "}
            {invoice.stato}
            {/* <button onClick={() => handleDelete(invoice.id)}>Elimina</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FattureList;
