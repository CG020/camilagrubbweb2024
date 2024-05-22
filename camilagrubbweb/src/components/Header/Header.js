import React from 'react';  
import './Header.css';
import DropMenu from '../DropMenu/DropMenu';
import Navbar from '../Navbar/Navbar';

function Header() {   
    return (
        <div>
        <Navbar message='welcome' tabs={['bio','projects','involvement','gallery']}/>
        <div className="Header">
          <h1><i><b>Camila Grubb</b></i></h1>
          <DropMenu name='contact me' items={{email:'camilagrubb@gmail.com',
            phone:'5203609985', LinkedIn: 'www.linkedin.com/in/camila-grubb-8ab00b240', 
            GitHub: 'https://github.com/CG020'}}></DropMenu>
        </div>
      </div>
      );
}

export default Header;