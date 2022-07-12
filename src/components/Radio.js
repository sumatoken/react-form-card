export default function Radio({ value, checked, handleRadio }) {
  return (
    <>
      <input
        checked={checked}
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
