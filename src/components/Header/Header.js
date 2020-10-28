import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.css';

const Header = () => {
      return (
            <Navbar bg="dark" variant="dark" className={'justify-content-md-center'}>
                  <img alt="" src={process.env.PUBLIC_URL + '/logo192.png'} width="50" height="50" className="d-inline-block align-top" />
                  <Navbar.Brand href="/" className={styles.headerText}>
                        Presidential News
                  </Navbar.Brand>
            </Navbar>
      );
};

export default Header;
