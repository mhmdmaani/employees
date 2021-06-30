import React, { useEffect, useState } from 'react';
import CompanyForm from '../../components/CompanyForm';

import Item from '../../components/Item';
import './companiesStyle.css';
export default function Companies(props) {
  const [companies, setCompanies] = useState([]);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const savedCompanies = JSON.parse(localStorage.getItem('companies')) || [];
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setCompanies(savedCompanies);
    setEmployees(savedEmployees);
  }, []);

  useEffect(() => {
    if (companies.length > 0) {
      localStorage.setItem('companies', JSON.stringify(companies));
    }
  }, [companies]);

  const onAdd = (name) => {
    setCompanies([...companies, { id: companies.length + 1, name }]);
  };
  const onDelete = (id) => {
    if (employees.filter((emp) => emp.company === id).length > 0) {
      alert(
        'you can not delete this company because it related with employees'
      );
    } else {
      setCompanies(companies.filter((c) => c.id !== id));
    }
  };
  return (
    <div>
      <div className='form-container'>
        <h3>Companies</h3>
        <CompanyForm onSave={onAdd} />
      </div>
      <table className='employees-table'>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>delete</th>
        </tr>
        <tbody>
          {companies.map((company) => (
            <Item key={company.id} item={company} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
