import React, { useContext } from 'react'
import { Dark } from '../../App'

export default function Team() {
  const { dark } = useContext(Dark)
  return (
    <table className={`table trans-5  table-hover MyTable ${dark ?  "table-dark" : ""}`}>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Age</th>
          <th scope="col">Phone</th>
          <th scope="col">Access</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>mark@md.com</td>
          <td>20</td>
          <td>0101010101</td>
          <td>
            <button type="">
              click
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  )
}
