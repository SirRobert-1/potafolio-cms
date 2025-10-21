export default {
  name: 'tecnologia',
  title: 'Tecnología',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(50),
    },
    {
      name: 'icono',
      title: 'Icono',
      type: 'image',
      description: 'Preferentemente SVG o PNG con fondo transparente',
      options: {
        hotspot: false,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      title: 'Color del Badge',
      type: 'string',
      description: 'Color en hex o nombre de color Tailwind (ej: #3b82f6 o bg-blue-500)',
      initialValue: '#3b82f6',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descripcion',
      title: 'Descripción Breve',
      type: 'text',
      description: 'Se muestra en el tooltip (máximo 100 caracteres)',
      validation: (Rule) => Rule.max(100),
    },
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Database', value: 'database' },
          { title: 'DevOps', value: 'devops' },
          { title: 'CMS', value: 'cms' },
          { title: 'Herramientas', value: 'herramientas' },
          { title: 'Testing', value: 'testing' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'nombre',
      media: 'icono',
    },
  },
}