import React from 'react'

export default function Box2Row({title,name,date,price}) {
  return (
      <div className='box p-2 px-4 d-flex justify-content-between align-items-center'>
        <div className='right py-3'>
        <p className='mb-0'>{title}</p>
        <p className='mb-0'>{name}</p>
        </div>
        <div className='center'>
          {date}
        </div>
        <div className='left'>
          <button type="" className='btn btn-danger'>
          {price}
          </button>
        </div>
    </div>
  )
}
