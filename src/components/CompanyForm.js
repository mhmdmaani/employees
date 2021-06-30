import React, { useEffect, useState } from 'react';
import './styles.css';
export default function CompanyForm({ onSave, ...props }) {
  const [name, setName] = useState();
  const onSaveForm = () => {
    onSave(name);
    setName('');
  };
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Company name to create'
      />
      <button onClick={onSaveForm}>Create</button>
    </div>
  );
}
