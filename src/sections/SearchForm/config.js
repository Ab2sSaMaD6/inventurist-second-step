export const configurer = ({ contextOptions = [] }) => ({
  fields: [
    {
      name: 'context',
      type: 'tags',
      label: 'Context(s)',
      classes: 'fullWidth',
      options: contextOptions
    },
    {
      name: 'questions',
      type: 'tags',
      label: 'Questions',
      classes: 'fullWidth',
      required: true,
      options: contextOptions
    },
    {
      name: 'companies',
      type: 'tags',
      label: 'Companies/Websites',
      classes: 'fullWidth',
      placeholder: 'Enter domain here...',
      options: contextOptions
    },
    {
      name: 'is_only',
      type: 'checkbox',
      label: 'Only search webpage titles',
      classes: 'fullWidth'
    },
    {
      name: 'market',
      type: 'select',
      label: 'Select market',
      classes: 'halfWidth',
      options: [
        { id: 'market1', title: 'market1' },
        { id: 'market2', title: 'market 2' },
        { id: 'market3', title: 'market 3' }
      ]
    }
  ]
})
