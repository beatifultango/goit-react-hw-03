import React from "react";
import css from "./Contact.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";

const Contact = ({ id, name, number }) => {
  return (
    <li className={css.contactItem} id={id}>
      <div>
        <div className={css.contactInfo} >
        <IoPersonCircleOutline />
        <p >{name}</p>
      </div>
      <div className={css.contactInfo}>
        <BiSolidPhoneCall />
        <p>{number}</p>
      </div>
      </div>
      

      <button className={css.deleteBtn}>delete</button>
    </li>
  );
};

export default Contact;
