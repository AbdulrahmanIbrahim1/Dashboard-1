import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'

export default function Dashboard() {
  return (
    <div>
      <div className='text-end'>
        <button type="" className='btn btn-info flex-end'>
          <i className="fa-solid fa-download px-3"></i>
          Download Reports
        </button>
      </div>
      <Row1 />
      <Row2/>
      <Row3/>
    </div>
  )
}
