import React from "react";
import ContactList from "./ContactList";
import Contact from "./Contact";

const SearchBox = ({ value,onChange }) => {

 

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={(e) => {
    onChange(e.target.value)}} />
    </div>
  );
};

export default SearchBox;
