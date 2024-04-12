import css from "./SearchBox.module.css";

export default function SearchBox() {
  const handleInput = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="search" onChange={handleInput}></input>
    </>
  );
}
