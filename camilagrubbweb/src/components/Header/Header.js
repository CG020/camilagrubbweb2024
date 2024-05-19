import React from 'react';  
import './Header.css';
import './DropMenu.css';
import DropMenu from '../DropMenu/DropMenu';

function Header() {   
    return (
        <div className="Header">
          <h1><i><b>Camila Grubb</b></i></h1>
          <DropMenu name='contact me' items={{email:'camilagrubb@gmail.com',
            phone:'5203609985', LinkedIn: 'www.linkedin.com/in/camila-grubb-8ab00b240', 
            GitHub: 'https://github.com/CG020'}}></DropMenu>
        </div>
      );
}

export default Header;