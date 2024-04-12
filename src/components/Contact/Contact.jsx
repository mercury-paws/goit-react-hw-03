import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const handleClick = () => {
    console.log(contact.id);
  };

  return (
    <div className={css.contactInfo}>
      <div>
        <p className={css.text}>{contact.name}</p>
        <p className={css.text}>{contact.number}</p>
      </div>
      <button className={css.deleteBtn} type="button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
