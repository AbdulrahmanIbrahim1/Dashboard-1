import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Dark } from '../../App'
import Line from '../line/Line'
import Box2Row from './Box2Row'

export default function Row2() {
  const { dark } = useContext(Dark)

  return (
    <Row>
      <div className='col-lg-8 my-2'>
        <div className={`big-box box trans-5 ${dark ? "" : "bg-light"} `} >

          <div className={`top d-flex justify-content-between p-3  trans-5 ${dark ? "" : "bg-light"} `}>
            <div className='left text-start'>
              <h2 className='col-common'>Revenue Generated</h2>
              <p>$59,342.32</p>
            </div>

            <div className='right d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-download fs-2"></i>
            </div>
          </div>

          <div className='bottom'>
            <Line isDash={true} />
          </div>
        </div>
      </div>
      {/*  =========*/}
      <div className='col-lg-4 box-row2  my-2'>
        <div className='box  p-2'>
          <h2 className='col-common'>
            Recent Transactions
          </h2>
        </div>
        {/* here */}
        <Box2Row title={"01e4dsaewf"} name={"johndoe"} date={"2021-09-01"} price={"$43.91"} />
        <Box2Row title={"0315dsaaef"} name={"jackdower"} date={"2022-04-01"} price={"$133.45"} />
        <Box2Row title={"01e4dsaef"} name={"aberdohnny"} date={"2021-09-01"} price={"$43.95"} />
        <Box2Row title={"51034szvfew"} name={"goodmanave"} date={"2022-11-05"} price={"$200.95"} />
        <Box2Row title={"0a123sb"} name={"stevebower"} date={"2022-11-02"} price={"$13.55"} />
        <Box2Row title={"aberdohnny"} name={"2021-09-01"} date={"2021-09-01"} price={"$43.95"} />
        <Box2Row title={"0a123sb"} name={"stevebower"} date={"2022-11-02"} price={"$13.55"} />
        <Box2Row title={"aberdohnny"} name={"2021-09-01"} date={"2021-09-01"} price={"$43.95"} />
        <Box2Row title={"0a123sb"} name={"stevebower"} date={"2022-11-02"} price={"$13.55"} />
        <Box2Row title={"aberdohnny"} name={"2021-09-01"} date={"2021-09-01"} price={"$43.95"} />
      </div>
    </Row>
  )
}
