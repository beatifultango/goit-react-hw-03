import React, { useState, useEffect } from "react";
import ContactForm from "./assets/components/ContactForm";
import SearchBox from "./assets/components/SearchBox";
import ContactList from "./assets/components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState(()=>{
    const saved=localStorage.getItem("contacts");
    return saved?JSON.parse(saved):[
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
  });


  const [search, setSearch] = useState("");

  const filteredList = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(search.toLowerCase());
  });

  const addContact = (newContact) => {
    const updated = [...contacts, newContact];
    setContacts(updated);
    localStorage.setItem("contacts", JSON.stringify(updated));
  };

  console.log(contacts);

  const handleDelete = (deleteItem) => {
    const updated = contacts.filter((contact) => contact.id !== deleteItem);
    setContacts(updated);
    localStorage.setItem("contacts", JSON.stringify(updated));

    console.log(deleteItem);
  };

  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts));

  },[contacts])

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={search} onChange={setSearch} />
      <ContactList contacts={filteredList} onDelete={handleDelete} />
    </>
  );
};

export default App;
