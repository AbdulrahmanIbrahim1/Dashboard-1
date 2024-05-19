import React, { useContext } from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { data } from './data'
import { geo } from './world_countries'
import { Dark } from '../../App'

export default function Geography() {
  const { dark } = useContext(Dark)
  return (
    <div className={`char-parent border  ${dark ? "border-white" : "border-black"}`} >
      <ResponsiveChoropleth
        data={data}
        features={geo.features} 
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="spectral"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionType="mercator" // Add the projectionType property
        projectionScale={150} // Add the projectionScale property
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        theme={
          {
            "background": `${dark ? " " : "#eee"}`,
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
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          },
          {
            id: 'gradient',
            type: 'linearGradient',
            colors: [
              {
                offset: 0,
                color: '#000'
              },
              {
                offset: 100,
                color: 'inherit'
              }
            ]
          }
        ]}
        fill={[
          {
            match: {
              id: 'CAN'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'CHN'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'ATA'
            },
            id: 'gradient'
          }
        ]}

        legends={[
          {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 20,
            translateY: -25,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: `${dark? "white":"black"}`,
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#2196f3',
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
