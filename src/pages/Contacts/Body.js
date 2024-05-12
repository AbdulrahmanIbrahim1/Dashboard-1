import React from 'react'


export default function Body({Data , cellClass }) {
  return (
    <>
      {Data.map((data) => (
        <tr key={data.id}>
          <th scope="row" className={cellClass}>{data.id}</th>
          <td className={cellClass}>{data.registrarId}</td>
          <td className={cellClass}>{data.name}</td>
          <td className={cellClass}>{data.age}</td>
          <td className={cellClass}>{data.phone}</td>
          <td className={cellClass}>{data.email}</td>
          <td className={cellClass}>{data.Address}</td>
          <td className={cellClass}>{data.city}</td>
          <td className={cellClass}>{data.zipCode}</td>
        </tr>
      ))}
    </>
  )
}
