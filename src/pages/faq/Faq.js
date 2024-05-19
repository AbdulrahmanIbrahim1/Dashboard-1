import React, { useContext } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Dark } from '../../App';
import './faq.css'

export default function Faq() {
  const { dark } = useContext(Dark)
  return (
    <Accordion defaultActiveKey="0" className='row gap-3'>
      <Accordion.Item eventKey="0" className={`trans-5 ${dark? "bg-black": ""}`}>
        <Accordion.Header dark="true" className={`trans-5 ${dark? "true": ""}`} >General setting</Accordion.Header> 
        <Accordion.Body className={`trans-5 ${dark ? "text-light" : ""}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className={`trans-5 ${dark ? "bg-black" : ""}`}>
        <Accordion.Header dark="true" className={`trans-5 ${dark ? "true" : ""}`} >Users </Accordion.Header>
        <Accordion.Body className={`trans-5 ${dark ? "text-light" : ""}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="2" className={`trans-5 ${dark ? "bg-black" : ""}`}>
        <Accordion.Header dark="true" className={`trans-5 ${dark ? "true" : ""}`}  >Advanced setting </Accordion.Header>
        <Accordion.Body className={`trans-5 ${dark ? "text-light" : ""}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="3" className={`trans-5 ${dark ? "bg-black" : ""}`}>
        <Accordion.Header dark="true" className={`trans-5 ${dark ? "true" : ""}`} >Personal data</Accordion.Header>
        <Accordion.Body className={`trans-5 ${dark ? "text-light" : ""}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className={`trans-5 ${dark ? "bg-black" : ""}`}>
        <Accordion.Header dark="true" className={`trans-5 ${dark ? "true" : ""}`} >Users </Accordion.Header>
        <Accordion.Body className={`trans-5 ${dark ? "text-light" : ""}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="5" className={`trans-5 ${dark ? "bg-black" : ""}`}>
        <Accordion.Header dark="true" className={`trans-5 ${dark ? "true" : ""}`} >Advanced setting </Accordion.Header>
        <Accordion.Body className={`trans-5 ${dark ? "text-light" : ""}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="6" className={`trans-5 ${dark ? "bg-black" : ""}`}>
        <Accordion.Header dark="true" className={`trans-5 ${dark ? "true" : ""}`} >Personal data</Accordion.Header>
        <Accordion.Body className={`trans-5 ${dark ? "text-light" : ""}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  )
}
