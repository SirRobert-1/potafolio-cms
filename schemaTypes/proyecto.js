export default {
  name: 'proyecto',
  title: 'Proyecto',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    },
    {
      name: 'descripcionCorta',
      title: 'Descripción Corta',
      type: 'text',
      description: 'Máximo 2-3 líneas (150 caracteres)',
      validation: (Rule) => Rule.required().min(20).max(150),
    },
    {
      name: 'descripcionLarga',
      title: 'Descripción Larga',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
          },
        },
      ],
      description: 'Detalles técnicos, desafíos resueltos, etc',
    },
    {
      name: 'imagenPrincipal',
      title: 'Imagen Principal (Hero)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'galeria',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
      description: 'Máximo 3 screenshots del proyecto',
    },
    {
      name: 'tecnologias',
      title: 'Tecnologías Usadas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'tecnologia',
              title: 'Tecnología',
              type: 'reference',
              to: [{type: 'tecnologia'}],
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'color',
              title: 'Color del Badge',
              type: 'string',
              description: 'Color en hex o nombre de Tailwind (ej: #3b82f6 o bg-blue-500)',
              initialValue: '#3b82f6',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'tecnologia.nombre',
              media: 'tecnologia.icono',
              color: 'color',
            },
            prepare(selection) {
              const {title, media, color} = selection
              return {
                title: title || 'Sin tecnología',
                media,
                subtitle: color,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'linkDemo',
      title: 'Link a Demo',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'linkGitHub',
      title: 'Link a GitHub',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'fechaParticipacion',
      title: 'Fecha de Participación',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'destacado',
      title: '¿Destacar este proyecto?',
      type: 'boolean',
      description: 'Si está activo, se mostrará en la sección de proyectos',
      initialValue: false,
    },
    {
      name: 'orden',
      title: 'Orden de Visualización',
      type: 'number',
      description: 'Número menor = aparece primero',
      validation: (Rule) => Rule.min(0),
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      media: 'imagenPrincipal',
    },
  },
}
