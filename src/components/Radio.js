export default function Radio({ value, handleRadio }) {
  return (
    <>
      <input
        className="radio"
        type="radio"
        name="gender"
        value={value}
        onChange={handleRadio}
      />{" "}
      {value}
    </>
  );
}
