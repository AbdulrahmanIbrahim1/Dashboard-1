import { ResponsivePie } from '@nivo/pie'
import React, { useContext } from 'react'
import { Dark } from '../../App'

export default function Box({ data, title, type, increase, scheme ,icon }) {
  const { dark } = useContext(Dark)
  return (
    <div className='col-lg-3 col-md-6  '>
      <div className={`d-flex justify-content-between p-2 box trans-5 ${dark ? "" :"bg-light"}`}>
        <div className='left text-start'>
          <i className={`fa-solid ${icon} p-2`}></i>
          <p>{title}</p>
          <p>{type}</p>
        </div>
        <div className='right'>
          <div className='height-2'>
            <ResponsivePie
              data={data}
              colors={{ scheme: scheme }}
              margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              enableArcLinkLabels={false}
              enableArcLabels={false}
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [
                  [
                    'darker',
                    0.2
                  ]
                ]
              }}
              legends={[]}

            />
          </div>
          <p className='text-center'>{increase}</p>
        </div>
      </div>
    </div>

  )
}
