import React, { useEffect, useState } from 'react';
import './styles.css';
import Select from 'react-select';

export default function EmployeeForm({ onSave, companies, ...props }) {
  const [name, setName] = useState();
  const [selectedCompany, setSelectedCompany] = useState('');

  const onSaveForm = () => {
    onSave(name, selectedCompany);
    setName('');
    setSelectedCompany('');
  };
  return (
    <>
      <h3>Add new Employee</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Employee name'
      />
      <Select
        value={selectedCompany}
        onChange={(evt) => {
          setSelectedCompany(evt);
        }}
        options={[
          { label: 'No company', value: 0 },
          ...companies.map((company) => ({
            value: company.id,
            label: company.name,
          })),
        ]}
      />
      <button onClick={onSaveForm}>Save</button>
    </>
  );
}
