
export default {
  name: 'restaurent',
  title: 'Restaurent',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurent Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of the Restaurent',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitude of the Restaurent',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Longitude of the Restaurent',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurent address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'string',
      validation: (Rule) =>
      Rule.required()
      .min(1)
      .max(5)
      .error("Please enter a value between 1 and 5"),
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to:[{type: "category"}],
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of:[{type:"reference", to:[{type:"dish"}]}]
    },
  ],
}
