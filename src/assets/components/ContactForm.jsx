import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "Yup";

import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
    
  };

  let feedbackSchema = Yup.object().shape({
    name: Yup
      .string()
      .min(2, "Çok kısa!")
      .max(20, "çok uzun!")
      .required("Required"),
    number: Yup
      .string()
      .min(6, "Çok kısa!")
      
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={feedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field className={css.name} type="text" name="name" id={nameId}></Field>
        <ErrorMessage name="name" component="div" />
        <label htmlFor={numberId}>Number</label>
        <Field
          className={css.number}
          type="text"
          name="number"
          id={numberId}
        ></Field>
        <ErrorMessage name="number" component="div" />
        <button className={css.addBtn} type="submit">
          add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
