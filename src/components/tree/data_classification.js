export default {
    name: 'litter',
    children: [
      {
        name: 'glass',
        children: [
          { name: 'glass1', 
          children: [
            {
              name: 'C11',
            },
            {
              name: 'D11',
              children: [
                {
                  name: 'D111',
                },
                {
                  name: 'D21',
                },
                {
                  name: 'D31',
                },
              ],
            },
          ],},
          { name: 'glass2' },
          { name: 'A3' },
          {
            name: 'C',
            children: [
              {
                name: 'C1',
              },
              {
                name: 'D',
                children: [
                  {
                    name: 'D1',
                  },
                  {
                    name: 'D2',
                  },
                  {
                    name: 'D3',
                  },
                ],
              },
            ],
          },
        ],
      },
      { name: 'paper' },
      {
        name: 'plastic',
        children: [{ name: 'All plastic' }],
      },
    ],
  }
  