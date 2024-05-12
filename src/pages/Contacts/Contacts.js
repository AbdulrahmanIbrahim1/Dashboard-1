import React, { useContext, useState } from 'react'
import { Dark } from '../../App'
import { Data } from './data';
import Body from './Body';





export default function Contacts() {
  const { dark } = useContext(Dark)
  const [filter, showfilter] = useState(true)
  const valueFilters = {
    column: "",
    operator: "",
    value: 1,
  }

  const showFilters = (value) => {
    return Data.filter((data) => {
      if (value.column === "age") {
        if (value.operator === ">") {
          return data.age > value.value;
        }
        if (value.operator === "<") {
          return data.age < value.value;
        }
      }
      return false;
    });
  };

  // const showFilters = (value) => {
  //   const newData = []
  //   // <>
  //   return  Data.map((data) => {
  //           if(value.column === "age"){
  //             if (value.operator === ">") {
  //               if (data.age > value.value) {
  //                 newData.push(data)
  //                 console.log(newData);
  //               }
  //             }
  //             if (value.operator === "<") {
  //               if (data.age < value.value) {
  //                 newData.push(data)
  //                 console.log(newData);
  //               }
  //             }
  //           }
  //         })
  //       }

  // {/* <tr key={newData.id}>
  //   <th scope="row" className={cellClass}>{newData.id}</th>
  //   <td className={cellClass}>{newData.registrarId}</td>
  //   <td className={cellClass}>{newData.name}</td>
  //   <td className={cellClass}>{newData.age}</td>
  //   <td className={cellClass}>{newData.phone}</td>
  //   <td className={cellClass}>{newData.email}</td>
  //   <td className={cellClass}>{newData.Address}</td>
  //   <td className={cellClass}>{newData.city}</td>
  //   <td className={cellClass}>{newData.zipCode}</td>
  // </tr> */}



  const tableClass = `table trans-5 table-hover MyTable mx-auto ${dark ? "table-black bg-black" : ""}`;
  const cellClass = dark ? "bg-black text-white trans-5" : "trans-5";

  return (<>
    <div className='text-info d-flex'>
      <span>COLUMNS </span>
      <button type="" className='' onClick={() => { showfilter(!filter) }}>
        FILTERS
      </button>

    </div>
    <div className={`container text-center bg-secondary position-absolute0 ${filter ? " " : "d-none"}`}>
      <div className="row">
        <div className="col">
          COLUMNS
          <select className="form-select" aria-label="Default select example" onChange={(e) => {
            valueFilters.column = e.target.value;
          }}>
            <option defaultValue>...</option>
            <option value="id">Id</option>
            <option value="age">Age</option>
            <option value="phone">Phone</option>
          </select>
        </div>

        <div className="col">
          OPERATOR
          <select className="form-select" aria-label="Default select example" onChange={(e) => {
            valueFilters.operator = e.target.value;
          }}>
            <option defaultValue>...</option>
            {/* > */}
            <option value="<">&lt;</option>
            {/* < */}
            <option value=">">&gt;</option>
            <option value="===">=</option>
          </select>
        </div>
        <div className="col">
          Filter Value
          <input type="number" onChange={(e) => {
            valueFilters.value = e.target.value;
            console.log(showFilters(valueFilters));
          }} />
        </div>
      </div>
    </div>
    <table className={tableClass}>
      <thead>
        <tr className={cellClass}>
          <th className={cellClass} scope="col">ID</th>
          <th className={cellClass} scope="col">Registrar Id</th>
          <th className={cellClass} scope="col">Name</th>
          <th className={cellClass} scope="col">Age</th>
          <th className={cellClass} scope="col">Phone</th>
          <th className={cellClass} scope="col">E-mail</th>
          <th className={cellClass} scope="col">Address</th>
          <th className={cellClass} scope="col">City</th>
          <th className={cellClass} scope="col">Zip Code</th>
        </tr>
      </thead>
      <tbody>
        {showFilters(valueFilters)}
        <Body cellClass={cellClass} Data={Data} />
      </tbody>
    </table>
  </>
  )
}
