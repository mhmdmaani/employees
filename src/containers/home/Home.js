import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  useEffect(() => {}, []);
  return (
    <div>
      <h3> Home </h3>
      <div>
        <Link to='/companies'>
          <div style={{ margin: 10 }}>companies</div>
        </Link>
        <Link to='/employees'>
          <div style={{ margin: 10 }}>employees</div>
        </Link>
        <Link to='/move'>
          <div style={{ margin: 10 }}>move employees</div>
        </Link>
      </div>
    </div>
  );
}
