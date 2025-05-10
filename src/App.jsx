import React, { useState } from "react";
import ContactForm from "./assets/components/ContactForm";
import SearchBox from "./assets/components/SearchBox";
import ContactList from "./assets/components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [search, setSearch] = useState("");
  const filteredList = contacts.filter((contact) => {
    contact.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={search} onChange={setSearch} />
      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
