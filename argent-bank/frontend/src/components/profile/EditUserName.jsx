import { useState } from "react";

export default function EditUserName({ currentName, onSave, onCancel }) {
  const [first, setFirst] = useState(currentName.first);
  const [last, setLast] = useState(currentName.last);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ first, last });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="edit-inputs">
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          required
        />
        <input
          type="text"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          required
        />
      </div>
      <div className="edit-buttons">
        <button type="submit" className="edit-button">
          Save
        </button>
        <button type="button" className="edit-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
