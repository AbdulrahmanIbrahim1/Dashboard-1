import React, { useContext } from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Dark } from '../../App'
import { data } from './data'



export default function Line({isDash = false}) {
  const { dark } = useContext(Dark)
  return (
    <div className='char-parent' dash={`${isDash}`}>
      <ResponsiveLine
        theme={
          {
            // "background": `${dark ? " " : "#eee"}`,
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
                "strokeWidth": 0
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
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: `${isDash ? " " : "transportation"}`,
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: `${isDash ? " " : "Count"}`,
          legendOffset: -45,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
      leg  ends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}
