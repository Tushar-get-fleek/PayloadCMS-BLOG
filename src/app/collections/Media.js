export const Media = {
    slug: 'media',
    upload: {
      staticDir: 'media', // Ensure this directory exists
      mimeTypes: ['image/*'],
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