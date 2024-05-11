import React, { useContext } from 'react'
import { Dark } from '../../App'
import { Data } from './data'
import './team.css'

export default function Team() {
  const { dark } = useContext(Dark)

  const tableClass = `table trans-5 table-hover MyTable mx-auto ${dark ? "table-black bg-black" : ""}`;
  const cellClass = dark ? "bg-black text-white trans-5" : "trans-5";

  return (
    <table className={tableClass}>
      <thead>
        <tr className={cellClass}>
          <th className={cellClass} scope="col">ID</th>
          <th className={cellClass} scope="col">Name</th>
          <th className={cellClass} scope="col">E-mail</th>
          <th className={cellClass} scope="col">Age</th>
          <th className={cellClass} scope="col">Phone</th>
          <th className={cellClass} scope="col">Access</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((data) => (
          <tr key={data.id}>
            <th scope="row" className={cellClass}>{data.id}</th>
            <td className={cellClass}>{data.name}</td>
            <td className={cellClass}>{data.email}</td>
            <td className={cellClass}>{data.age}</td>
            <td className={cellClass}>{data.phone}</td>
            <td className={cellClass}>
              <button type="button" className={`d-flex justify-content-around  align-items-center btn btn-${data.access === "Admin" ? "info"
                : data.access === "Manager" ? "danger" : "success"}  p-2 btn-access ${dark ? " text-white" : " text-black"}`}>
                {
                  data.access === "Admin" ? <i className="fa-solid fa-shield mx-2 "></i>
                    : data.access === "Manager" ? <i className="fa-solid fa-user-shield mx-2 "></i>
                      : <i className="fa-solid fa-unlock  mx-2"></i>
                }
                <span >
                  {data.access}
                </span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
