import React from 'react'
import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    "id": "japan",
    "color": "hsl(55, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 10
      },
      {
        "x": "helicopter",
        "y": 276
      },
      {
        "x": "boat",
        "y": 140
      },
      {
        "x": "train",
        "y": 59
      },
      {
        "x": "subway",
        "y": 186
      },
      {
        "x": "bus",
        "y": 231
      },
      {
        "x": "car",
        "y": 265
      },
      {
        "x": "moto",
        "y": 213
      },
      {
        "x": "bicycle",
        "y": 246
      },
      {
        "x": "horse",
        "y": 13
      },
      {
        "x": "skateboard",
        "y": 285
      },
      {
        "x": "others",
        "y": 281
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(320, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 276
      },
      {
        "x": "helicopter",
        "y": 88
      },
      {
        "x": "boat",
        "y": 282
      },
      {
        "x": "train",
        "y": 177
      },
      {
        "x": "subway",
        "y": 130
      },
      {
        "x": "bus",
        "y": 252
      },
      {
        "x": "car",
        "y": 274
      },
      {
        "x": "moto",
        "y": 243
      },
      {
        "x": "bicycle",
        "y": 60
      },
      {
        "x": "horse",
        "y": 137
      },
      {
        "x": "skateboard",
        "y": 217
      },
      {
        "x": "others",
        "y": 27
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(321, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 122
      },
      {
        "x": "helicopter",
        "y": 113
      },
      {
        "x": "boat",
        "y": 58
      },
      {
        "x": "train",
        "y": 103
      },
      {
        "x": "subway",
        "y": 275
      },
      {
        "x": "bus",
        "y": 119
      },
      {
        "x": "car",
        "y": 138
      },
      {
        "x": "moto",
        "y": 276
      },
      {
        "x": "bicycle",
        "y": 65
      },
      {
        "x": "horse",
        "y": 126
      },
      {
        "x": "skateboard",
        "y": 194
      },
      {
        "x": "others",
        "y": 283
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(276, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 219
      },
      {
        "x": "helicopter",
        "y": 299
      },
      {
        "x": "boat",
        "y": 136
      },
      {
        "x": "train",
        "y": 278
      },
      {
        "x": "subway",
        "y": 22
      },
      {
        "x": "bus",
        "y": 255
      },
      {
        "x": "car",
        "y": 115
      },
      {
        "x": "moto",
        "y": 9
      },
      {
        "x": "bicycle",
        "y": 229
      },
      {
        "x": "horse",
        "y": 252
      },
      {
        "x": "skateboard",
        "y": 165
      },
      {
        "x": "others",
        "y": 78
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(349, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 287
      },
      {
        "x": "helicopter",
        "y": 83
      },
      {
        "x": "boat",
        "y": 204
      },
      {
        "x": "train",
        "y": 173
      },
      {
        "x": "subway",
        "y": 101
      },
      {
        "x": "bus",
        "y": 138
      },
      {
        "x": "car",
        "y": 85
      },
      {
        "x": "moto",
        "y": 147
      },
      {
        "x": "bicycle",
        "y": 123
      },
      {
        "x": "horse",
        "y": 148
      },
      {
        "x": "skateboard",
        "y": 78
      },
      {
        "x": "others",
        "y": 196
      }
    ]
  }
]

export default function Line() {
  return (
    <div className='char-parent'>
      <ResponsiveLine
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
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
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
        legends={[
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
