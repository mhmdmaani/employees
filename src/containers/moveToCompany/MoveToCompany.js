import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Item from '../../components/Item';
import './style.css';

export default function MoveToCompany(props) {
  const [companies, setCompanies] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState({
    value: 0,
    label: 'No company',
  });

  useEffect(() => {
    const savedCompanies = JSON.parse(localStorage.getItem('companies')) || [];
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setCompanies(savedCompanies);
    setEmployees(savedEmployees);
  }, []);

  useEffect(() => {
    if (employees.length > 0) {
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  }, [employees]);

  const onMove = () => {
    const toMoveEmployees = employees.filter((emp) => emp.company === 0);

    const newEmployees = employees.map((employee) => {
      if (toMoveEmployees.filter((emp) => emp.id === employee.id).length > 0) {
        employee.company = selectedCompany.value;
      }
      return employee;
    });

    setEmployees(newEmployees);
  };

  return (
    <div>
      <div className='form-container'>
        <label>Move these users to company</label>
        <Select
          value={selectedCompany}
          onChange={(option) => setSelectedCompany(option)}
          options={companies.map((co) => ({ value: co.id, label: co.name }))}
        />
        <button onClick={onMove}>Move</button>
      </div>
      <table className='employees-table'>
        <tr>
          <th>id</th>
          <th>name</th>
          <th></th>
        </tr>
        <tbody>
          {employees
            .filter((c) => c.company === 0)
            .map((employee) => (
              <Item key={employee.id} item={employee} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
