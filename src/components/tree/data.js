export default {
  name: 'Recycling',
  children: [
    {
      name: 'Construction & demolition',
      children: [
        { name: 'Asphalt' },
        { name: 'Brick rubble/ whole' },
        { name: 'Soil/sand' },
      ],
    },
    {
      name: 'Glass',
      children: [
        { name: 'Container glass' },
        { name: 'Mixed glass waste' },
        { name: 'Sheet/ laminated glass' },
      ],
    },
    {
      name: 'Metals',
      children: [
        { name: 'Roofing iron' },
        { name: 'Batteries' },
        { name: 'Steel cans' },
      ],
    },
    {
      name: 'Organics',
      children: [
        { name: 'Animal bedding' },
        { name: 'Barks' },
        { name: 'Food waste' },
        { name: 'Garden organics' },
      ],
    },
    {
      name: 'Paper/cardboard',
      children: [
        { name: 'Carboard/ packaging' },
        { name: 'Newsprint/ magazines' },
        { name: 'Liquid paper board' },
        { name: 'Printing & writing paper' },
      ],
    },
    // {
    //   name: 'Rubber',
    //   children: [
    //     { name: 'Crumb rubber' },
    //     { name: 'Rubber granules' },
    //     // { name: 'Tread ends' },
    //     // { name: 'Uncured rubber scrap' },
    //   ],
    // },
    {
      name: 'Textiles',
      children: [
        { name: 'Carpet' },
        { name: 'Clothing' },
        { name: 'Industrial textiles' },
        { name: 'Mixed textile waste' },
      ],
    },
    {
      name: 'Plastics',
      children: [
        { name: 'Beverage bottles' },
        { name: 'Disposable dinnerware' },
        { name: 'All other plastics' },
      ],
    },
  ],
}
