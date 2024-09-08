import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DropMenu.css';


function DropMenu( {name, items} ) {
  const entries = Object.entries(items);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-toggle">
       {name}
      </Dropdown.Toggle>


      <Dropdown.Menu >
        {entries.map(([item, action]) => (
            <Dropdown.Item key={item} className="dropdown-item"
            onClick={() => navigator.clipboard.writeText(action)}>
              {item}</Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropMenu;