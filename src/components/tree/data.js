export default {
  name: 'Recycling',
  children: [
    {
      name: 'Construction & demolition',
      children: [
        { name: 'Asphalt' },
        { name: 'Brick rubble/ whole' },
        { name: 'Concrete' },
        { name: 'Soil/sand' },
      ],
    },
    {
      name: 'Glass',
      children: [
        { name: 'Container glass' },
        { name: 'CRT' },
        { name: 'Mixed glass waste' },
        { name: 'Sheet/ laminated glass' },
      ],
    },
    {
      name: 'Metals',
      children: [
        { name: 'Roofing iron' },
        { name: 'Incl cans' },
        { name: 'Batteries' },
        { name: 'Steel cans' },
      ],
    },
    {
      name: 'Organics',
      children: [
        { name: 'Animal bedding/ motalities' },
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
  ],
}
