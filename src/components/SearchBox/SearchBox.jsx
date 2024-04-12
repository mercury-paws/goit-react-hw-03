import css from "./SearchBox.module.css";

export default function SearchBox() {
  // const handleInput = (event) => {
  //   console.log({
  //     contactSearch: event.target.value,
  //   });
  // };
  const handleSearch = (event) => {
    console.log({ contactSearch: event.target.value });
  };
  return (
    <>
      <label>Find contacts by name</label>
      <input type="text" name="search" onChange={handleSearch}></input>
    </>
  );
}
