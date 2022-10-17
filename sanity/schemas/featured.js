export default {
    name: 'featured',
    title: 'Featured Menu Categories',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Featured Category name',
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
        name: 'restaurents',
        title: 'Restaurents',
        type: 'array',
        of:[{
            type:"reference", to:[{type: "restaurent"}]
        }],
      },
    ],
}