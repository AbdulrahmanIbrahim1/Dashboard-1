import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { ResponsivePie } from '@nivo/pie'
import { Dark } from '../../App'
import BarChart from '../bar/BarChart'
import Geography from '../geography/Geography'

const data = [
  {
    "id": "ruby",
    "label": "ruby",
    "value": 537,
    "color": "hsl(226, 70%, 50%)"
  },
  {
    "id": "javascript",
    "label": "javascript",
    "value": 329,
    "color": "hsl(35, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 311,
    "color": "hsl(239, 70%, 50%)"
  },
  {
    "id": "stylus",
    "label": "stylus",
    "value": 511,
    "color": "hsl(43, 70%, 50%)"
  },
  {
    "id": "scala",
    "label": "scala",
    "value": 401,
    "color": "hsl(273, 70%, 50%)"
  }
]



export default function Row3() {
  const { dark } = useContext(Dark)
  return (
    <Row>
      <div className='col-lg-4 '>
        <div className='box p-2 text-center'>
          <h2 className='col-common text-start'>Campaign</h2>
          <div className=' height-3 m-auto my-2'>
            <ResponsivePie
              data={data}
              theme={
                {
                  "text": {
                    "fontSize": 11,
                    "fill": "#333333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                  },
                  "axis": {
                    "domain": {
                      "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                      }
                    },
                    "legend": {
                      "text": {
                        "fontSize": 12,
                        "fill": `${dark ? "white" : ""}`,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                      }
                    },
                    "ticks": {
                      "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                      },
                      "text": {
                        "fontSize": 11,
                        "fill": `${dark ? "white" : ""}`,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                      }
                    }
                  },
                  "grid": {
                    "line": {
                      "stroke": "#dddddd",
                      "strokeWidth": 1
                    }
                  },
                  "legends": {
                    "title": {
                      "text": {
                        "fontSize": 11,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                      }
                    },
                    "text": {
                      "fontSize": 11,
                      "fill": `${dark ? "white" : ""}`,
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                    },
                    "ticks": {
                      "line": {},
                      "text": {
                        "fontSize": 10,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                      }
                    }
                  },
                  "annotations": {
                    "text": {
                      "fontSize": 13,
                      "fill": "#333333",
                      "outlineWidth": 2,
                      "outlineColor": "#ffffff",
                      "outlineOpacity": 1
                    },
                    "link": {
                      "stroke": "#000000",
                      "strokeWidth": 1,
                      "outlineWidth": 2,
                      "outlineColor": "#ffffff",
                      "outlineOpacity": 1
                    },
                    "outline": {
                      "stroke": "#000000",
                      "strokeWidth": 2,
                      "outlineWidth": 2,
                      "outlineColor": "#ffffff",
                      "outlineOpacity": 1
                    },
                    "symbol": {
                      "fill": "#000000",
                      "outlineWidth": 2,
                      "outlineColor": "#ffffff",
                      "outlineOpacity": 1
                    }
                  },
                  "tooltip": {
                    "wrapper": {},
                    "container": {
                      "background": "#ffffff",
                      "color": "#333333",
                      "fontSize": 12
                    },
                    "basic": {},
                    "chip": {},
                    "table": {},
                    "tableCell": {},
                    "tableCellValue": {}
                  }
                }
              }
              colors={{ scheme: 'blues' }}
              margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
              innerRadius={0.7}
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
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
                }
              ]}
            />
          </div>
          <h3>$48,352 revenue generated</h3>
          <h5>Includes extra misc expenditures and costs</h5>
        </div>
      </div>

      <div className='col-lg-4 '>
        <div className='box  '>
          <h2 className='col-common'>Sales Quantity</h2>
          <BarChart bardash={true} />
        </div>
      </div>
      <div className='col-lg-4 p-2'>
        <div className='box box-geo-dash'>
          <Geography geodash={true} />
        </div>
      </div>
    </Row>
  )
}
