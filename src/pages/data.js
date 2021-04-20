import React, { Component, useState } from "react";
import LineGraph from "../components/LineGraph";
import Button from "../components/utils/Button";

const Data = () => {
  const [dataSet, setDataSet] = useState([
    {
      id: "colombia",
      color: "hsl(65, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 164,
        },
        {
          x: "helicopter",
          y: 213,
        },
        {
          x: "boat",
          y: 244,
        },
        {
          x: "train",
          y: 113,
        },
        {
          x: "subway",
          y: 200,
        },
        {
          x: "bus",
          y: 113,
        },
        {
          x: "car",
          y: 72,
        },
        {
          x: "moto",
          y: 51,
        },
        {
          x: "bicycle",
          y: 219,
        },
        {
          x: "horse",
          y: 112,
        },
        {
          x: "skateboard",
          y: 128,
        },
        {
          x: "others",
          y: 104,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(109, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 268,
        },
        {
          x: "helicopter",
          y: 287,
        },
        {
          x: "boat",
          y: 284,
        },
        {
          x: "train",
          y: 174,
        },
        {
          x: "subway",
          y: 121,
        },
        {
          x: "bus",
          y: 175,
        },
        {
          x: "car",
          y: 234,
        },
        {
          x: "moto",
          y: 276,
        },
        {
          x: "bicycle",
          y: 145,
        },
        {
          x: "horse",
          y: 35,
        },
        {
          x: "skateboard",
          y: 54,
        },
        {
          x: "others",
          y: 290,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(219, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 218,
        },
        {
          x: "helicopter",
          y: 137,
        },
        {
          x: "boat",
          y: 97,
        },
        {
          x: "train",
          y: 147,
        },
        {
          x: "subway",
          y: 166,
        },
        {
          x: "bus",
          y: 105,
        },
        {
          x: "car",
          y: 6,
        },
        {
          x: "moto",
          y: 69,
        },
        {
          x: "bicycle",
          y: 230,
        },
        {
          x: "horse",
          y: 78,
        },
        {
          x: "skateboard",
          y: 68,
        },
        {
          x: "others",
          y: 139,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(100, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 150,
        },
        {
          x: "helicopter",
          y: 159,
        },
        {
          x: "boat",
          y: 15,
        },
        {
          x: "train",
          y: 243,
        },
        {
          x: "subway",
          y: 66,
        },
        {
          x: "bus",
          y: 65,
        },
        {
          x: "car",
          y: 203,
        },
        {
          x: "moto",
          y: 112,
        },
        {
          x: "bicycle",
          y: 250,
        },
        {
          x: "horse",
          y: 16,
        },
        {
          x: "skateboard",
          y: 81,
        },
        {
          x: "others",
          y: 60,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(26, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 167,
        },
        {
          x: "helicopter",
          y: 250,
        },
        {
          x: "boat",
          y: 143,
        },
        {
          x: "train",
          y: 44,
        },
        {
          x: "subway",
          y: 145,
        },
        {
          x: "bus",
          y: 42,
        },
        {
          x: "car",
          y: 86,
        },
        {
          x: "moto",
          y: 195,
        },
        {
          x: "bicycle",
          y: 84,
        },
        {
          x: "horse",
          y: 215,
        },
        {
          x: "skateboard",
          y: 299,
        },
        {
          x: "others",
          y: 126,
        },
      ],
    },
  ]);

  const resetQuiz = () => {
		setDataSet([
      {
        id: "colombia",
        color: "hsl(65, 70%, 50%)",
        data: [
          {
            x: "plane",
            y: 164,
          },
          {
            x: "helicopter",
            y: 213,
          },
          {
            x: "boat",
            y: 244,
          },
          {
            x: "train",
            y: 113,
          },
          {
            x: "subway",
            y: 200,
          },
          {
            x: "bus",
            y: 113,
          },
          {
            x: "car",
            y: 72,
          },
          {
            x: "moto",
            y: 51,
          },
          {
            x: "bicycle",
            y: 219,
          },
          {
            x: "horse",
            y: 112,
          },
          {
            x: "skateboard",
            y: 128,
          },
          {
            x: "others",
            y: 104,
          },
        ],
      },
      {
        id: "france",
        color: "hsl(109, 70%, 50%)",
        data: [
          {
            x: "plane",
            y: 268,
          },
          {
            x: "helicopter",
            y: 287,
          },
          {
            x: "boat",
            y: 284,
          },
          {
            x: "train",
            y: 174,
          },
          {
            x: "subway",
            y: 121,
          },
          {
            x: "bus",
            y: 175,
          },
          {
            x: "car",
            y: 234,
          },
          {
            x: "moto",
            y: 276,
          },
          {
            x: "bicycle",
            y: 145,
          },
          {
            x: "horse",
            y: 35,
          },
          {
            x: "skateboard",
            y: 54,
          },
          {
            x: "others",
            y: 290,
          },
        ],
      },
      {
        id: "us",
        color: "hsl(219, 70%, 50%)",
        data: [
          {
            x: "plane",
            y: 218,
          },
          {
            x: "helicopter",
            y: 137,
          },
          {
            x: "boat",
            y: 97,
          },
          {
            x: "train",
            y: 147,
          },
          {
            x: "subway",
            y: 166,
          },
          {
            x: "bus",
            y: 105,
          },
          {
            x: "car",
            y: 6,
          },
          {
            x: "moto",
            y: 69,
          },
          {
            x: "bicycle",
            y: 230,
          },
          {
            x: "horse",
            y: 78,
          },
          {
            x: "skateboard",
            y: 68,
          },
          {
            x: "others",
            y: 139,
          },
        ],
      },
    ])
	};

  return (
    <div>
      <Button styleBtn="primary quiz-btn" text="Play Again" onClick={() => resetQuiz()} />
      <LineGraph dataSet={dataSet} />;
    </div>
  )
}

export default Data






