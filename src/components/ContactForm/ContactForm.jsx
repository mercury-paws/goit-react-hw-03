import css from "./ContactForm.module.css";
import { Formik, Form } from "formik";

export default function ContactForm() {
  const handleSubmit = (event) => {
    console.log({
      name: event.target.value,
      number: event.target.elements.number.value,
    });
  };

  return (
    <>
      <Formik
        initialValues={{ name: "name", number: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Name</label>
          <Field type="text" name="name" />
          <label>Number</label>
          <Field type="number" name="number" />
          <button onSubmit={handleSubmit} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
