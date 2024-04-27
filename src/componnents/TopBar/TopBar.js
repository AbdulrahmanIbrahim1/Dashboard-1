import React from 'react'
import './TopBar.css'
import { Form, InputGroup, Navbar } from 'react-bootstrap'
import { DisplaySide, Dark } from '../.././App'
import { useContext } from 'react';


/* <i className="fa-solid fa-list"></i> */
export default function TopBar() {
  const { display, setTrue } = useContext(DisplaySide)
  const { dark, setDark } = useContext(Dark)
  //======

  const renderIcon = () => {
    const toggleDarkMode = () => {
      const newDarkMode = !dark;
      setDark(newDarkMode);
      localStorage.setItem('Dark', JSON.stringify(newDarkMode));

    };

    return dark ? (
      <i className="fa-solid fa-moon" onClick={toggleDarkMode}></i>
    ) : (
      <i className="fa-regular fa-sun" onClick={toggleDarkMode}></i>
    );
  };
  return (
    // <div className='TopBar' >

    <Navbar className={`tertiary justify-content-between MyTopBar ${dark ? "bg-dark text-white-50" : ""}`}>
      <i className={`fa-solid fa-list fs-2 ${display ? "ms-100" : ""}`} onClick={() => { setTrue(true) }} ></i>
      <Form >
        <InputGroup>
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            // aria-describedby="basic-addon1"
            className={dark ? "search-dark" : ""}
          />
        </InputGroup>
      </Form>
      <div className='icons'>
        {
          renderIcon()
        }
        <i className="fa-regular fa-bell"></i>
        <i className="fa-solid fa-gear"></i>
        <i className="fa-regular fa-user"></i>
      </div>
    </Navbar>
    // </div>
  )
}
