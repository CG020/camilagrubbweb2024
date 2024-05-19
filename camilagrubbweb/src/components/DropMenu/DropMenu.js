import Dropdown from 'react-bootstrap/Dropdown';
import './DropMenu.css';

function DropMenu( {name, items} ) {
  const entries = Object.entries(items);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       {name}
      </Dropdown.Toggle>


      <Dropdown.Menu>
        {entries.map(([item, action]) => (
            <Dropdown.Item href={action} key={item}>{item}</Dropdown.Item>
          ))};
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropMenu;