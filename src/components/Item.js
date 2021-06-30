import React, { useEffect, useState } from 'react';
import './styles.css';
export default function Item({ item, onDelete, ...props }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>
        {onDelete && <button onClick={() => onDelete(item.id)}>delete</button>}
      </td>
    </tr>
  );
}
