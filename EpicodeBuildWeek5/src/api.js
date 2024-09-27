const baseUrl = import.meta.env.VITE_APP_BASE_URL;

// Funzione per la registrazione
export const register = async data => {
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error("Errore durante la registrazione");
  }
  return response.json();
};

// Funzione per il login
export const login = async data => {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error("Errore durante il login");
  }
  return response.json();
};

// Funzione per ottenere le fatture
export const getInvoices = async () => {
  const response = await fetch(`${baseUrl}/fatture`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}` // Aggiungere il token
    }
  });
  if (!response.ok) {
    throw new Error("Errore nel recupero delle fatture");
  }
  return response.json();
};

// Funzione per aggiungere una fattura
export const addInvoice = async invoice => {
  const response = await fetch(`${baseUrl}/invoices`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(invoice)
  });
  if (!response.ok) {
    throw new Error("Errore nell'aggiunta della fattura");
  }
  return response.json();
};

// Funzione per modificare una fattura
export const updateInvoice = async (id, invoice) => {
  const response = await fetch(`${baseUrl}/invoices/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(invoice)
  });
  if (!response.ok) {
    throw new Error("Errore nella modifica della fattura");
  }
  return response.json();
};

// Funzione per eliminare una fattura
export const deleteInvoice = async id => {
  const response = await fetch(`${baseUrl}/invoices/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
  if (!response.ok) {
    throw new Error("Errore nell'eliminazione della fattura");
  }
  return response.json();
};
