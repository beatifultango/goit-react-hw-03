import React from "react";
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
// import * as yup from "yup";

import css from "./ContactForm.module.css";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Formik
      
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>Name</label>
        <Field className={css.name} type="text" name="name" id={nameId}></Field>
        <label>Number</label>
        <Field className={css.number} type="text" name="number" id={numberId}></Field>
        <button className={css.addBtn} type="submit">add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
