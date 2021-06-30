import React, { useEffect, useState } from 'react';
import Item from '../../components/Item';
import Select from 'react-select';

import EmployeeForm from '../../components/EmployeeForm';

import './employeesStyle.css';

export default function Employees(props) {
  const [employees, setEmployees] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState({
    value: 'all',
    label: 'All',
  });

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const savedCompanies = JSON.parse(localStorage.getItem('companies')) || [];
    setEmployees(savedEmployees);
    setCompanies(savedCompanies);
  }, []);

  useEffect(() => {
    if (employees.length > 0) {
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  }, [employees]);

  const onAdd = (name, company) => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        name,
        company: company.value,
      },
    ]);
  };

  const onDelete = (id) => {
    setEmployees(employees.filter((c) => c.id !== id));
  };
  return (
    <div>
      <div className='form-container'>
        <EmployeeForm companies={companies} onSave={onAdd} />
      </div>
      <div className='select-container'>
        <h3>Employees </h3>
        <label for='select'>Select company</label>
        <Select
          id='select'
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e)}
          options={[
            { value: 'all', label: 'All' },
            { value: 0, label: 'No company' },
            ...companies.map((c) => ({ value: c.id, label: c.name })),
          ]}
        />
      </div>
      <table className='employees-table'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {selectedCompany.value === 'all' ? (
            <>
              {employees.map((company) => (
                <Item key={company.id} item={company} onDelete={onDelete} />
              ))}
            </>
          ) : (
            <>
              {employees
                .filter(
                  (employee) => employee.company === selectedCompany.value
                )
                .map((company) => (
                  <Item key={company.id} item={company} onDelete={onDelete} />
                ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
