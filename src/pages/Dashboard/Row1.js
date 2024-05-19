import React from 'react'
import { Row } from 'react-bootstrap'
import './row1.css'
import { data1, data2, data3, data4 } from './data'
import Box from './Box'


export default function Row1() {
  return (
    <Row className='py-3' >
      <Box data={data1} title={"12,361"} type={"Email Sent"} increase={"+14%"} scheme={"category10"} icon={"fa-envelope"} />
      <Box data={data2} title={"431,225"} type={"Sales Obtained"} increase={"+21%"} scheme={"nivo"} icon={ "fa-sack-dollar"} />
      <Box data={data3} title={"32,441"} type={"New Clients"} increase={"+5%"} scheme={"dark2"} icon={"fa-user-plus"} />
      <Box data={data4} title={"1,325,134"} type={"Traffic Received"} increase={"+43%"} scheme={"set1"} icon={"fa-traffic-light"} />
    </Row>
  )
}
