export const Media = {
    slug: 'media',
    upload: {
      mimeTypes: ['image/*'],
      disableLocalStorage: true,
    },
    access: {
      read: () => true, // Allow public read access
    },
    fields: [
      {
        name: 'alt',
        type: 'text',
      },
    ],
  };