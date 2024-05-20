import Dropdown from 'react-bootstrap/Dropdown';
import './DropMenu.css';

function DropMenu( {name, items} ) {
  const entries = Object.entries(items);

  return (
    <Dropdown data-bs-theme="dark">
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-toggle">
       {name}
      </Dropdown.Toggle>


      <Dropdown.Menu>
        {entries.map(([item, action]) => (
            <Dropdown.Item href={action} key={item} className="dropdown-item">
              {item}</Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropMenu;