import React from "react";
import ContactList from "./ContactList";
import Contact from "./Contact";

const SearchBox = ({ value,onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
