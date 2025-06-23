export default function RememberMeCheckbox({ checked, onChange }) {
  return (
    <div className="input-remember">
      <input
        type="checkbox"
        id="remember-me"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="remember-me">Remember me</label>
    </div>
  );
}
